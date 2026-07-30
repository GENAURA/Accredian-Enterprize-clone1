import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, workEmail, company, teamSize, message } = body || {};

    if (!name || !workEmail || !company) {
      return NextResponse.json(
        { error: "Name, work email, and company are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(workEmail)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const lead = {
      id: crypto.randomUUID(),
      name: String(name).trim(),
      workEmail: String(workEmail).trim().toLowerCase(),
      company: String(company).trim(),
      teamSize: teamSize || "1-20",
      message: message ? String(message).trim() : "",
      createdAt: new Date().toISOString(),
    };

    // NOTE: On serverless platforms like Vercel, the filesystem is
    // read-only/ephemeral in production. This file write works locally
    // and is kept intentionally simple as a "mock API" per the assignment
    // brief. For production, swap this block for a real database call
    // (Postgres, MongoDB, Supabase, etc.) — see README for notes.
    try {
      await ensureDataFile();
      const existing = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
      existing.push(lead);
      await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2));
    } catch (fsError) {
      console.warn("Lead file persistence skipped:", fsError.message);
    }

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Unable to process your request right now." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await ensureDataFile();
    const existing = JSON.parse(await fs.readFile(DATA_FILE, "utf-8"));
    return NextResponse.json({ leads: existing }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ leads: [] }, { status: 200 });
  }
}
