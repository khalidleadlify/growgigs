import dotenv from "dotenv";
dotenv.config({ path: './.env' }); // Load env vars

console.log("🔍 Loaded SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("🔍 Loaded SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY?.slice(0, 12) + "...");


import puppeteer from "puppeteer";
import { createClient } from "@supabase/supabase-js";

// ✅ Load .env from the same directory
dotenv.config({ path: './.env' });

// ✅ Debug (optional - just to verify it's loaded)
console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
console.log("SUPABASE_ANON_KEY:", process.env.SUPABASE_ANON_KEY?.slice(0, 10) + "...");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

const keyword = "marketing"; // Updated keyword to be more general

async function scrapeUpworkJobs() {
  const browser = await puppeteer.launch({ headless: false }); // Launch Puppeteer with browser visible for debugging
  const page = await browser.newPage();

  const searchUrl = `https://www.upwork.com/ab/jobs/search/?q=${encodeURIComponent(keyword)}`;
  await page.goto(searchUrl, { waitUntil: "networkidle2" });

  const jobs = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("section.up-card-section")).map((card) => {
      return {
        title: card.querySelector("h4")?.innerText || "",
        link: card.querySelector("a")?.href || "",
        posted: card.querySelector("time")?.dateTime || "",
        description: card.querySelector(".up-line-clamp-v2")?.innerText || "",
      };
    });
  });

  console.log(jobs); // Debug log to inspect scraped jobs

  for (const job of jobs) {
    const { error } = await supabase.from("jobs").insert(job);
    if (error) console.error("Insert error:", error.message);
  }

  await browser.close();
  console.log(`✅ Scraped and saved ${jobs.length} jobs for '${keyword}'`);
}

scrapeUpworkJobs();
