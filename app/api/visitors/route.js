import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Visitor from "@/models/Visitor.model";
import fs from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "visitors.json");

// Local file fallback if MongoDB URL is unreachable or network access is blocked
async function handleFileFallback(ip) {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let fileData = { count: 0, ips: [] };
    try {
      const content = await fs.readFile(DATA_FILE, "utf-8");
      fileData = JSON.parse(content);
    } catch {
      // file doesn't exist yet
    }

    let isNew = false;
    if (!fileData.ips.includes(ip)) {
      fileData.ips.push(ip);
      fileData.count += 1;
      isNew = true;
      await fs.writeFile(DATA_FILE, JSON.stringify(fileData, null, 2));
    }

    return NextResponse.json({ count: fileData.count, isNew, source: "local" });
  } catch (err) {
    console.error("File fallback error:", err);
    return NextResponse.json({ count: 1, isNew: false, source: "fallback" });
  }
}

export async function GET(req) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const realIp = req.headers.get("x-real-ip");
  const cfIp = req.headers.get("cf-connecting-ip");

  let ip = "127.0.0.1";
  if (cfIp) {
    ip = cfIp.trim();
  } else if (forwardedFor) {
    ip = forwardedFor.split(",")[0].trim();
  } else if (realIp) {
    ip = realIp.trim();
  }

  try {
    if (process.env.MONGO_URL) {
      await connectToDatabase();

      let isNew = false;
      const existing = await Visitor.findOne({ ip });

      if (!existing) {
        await Visitor.create({ ip });
        isNew = true;
      }

      const count = await Visitor.countDocuments();
      return NextResponse.json({ count, isNew, source: "mongodb" });
    }
  } catch (error) {
    console.warn("MongoDB Visitor Warning (falling back to local storage):", error.message);
  }

  // Fallback if MONGO_URL is empty or fails to connect
  return handleFileFallback(ip);
}
