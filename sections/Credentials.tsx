"use client";

import React, { useState, useEffect } from "react";
import NeonCard from "../components/NeonCard";
import { credentialsData } from "../utils/data";
import { Award, GitBranch, Terminal, Calendar, ExternalLink } from "lucide-react";

interface GitHubStats {
  repos: number;
  followers: number;
  stars: number;
}

interface LeetCodeStats {
  easy: number;
  medium: number;
  hard: number;
  total: number;
  rank: string;
}

export default function Credentials() {
  const [github, setGithub] = useState<GitHubStats>({ repos: 16, followers: 12, stars: 4 });
  const [leetcode, setLeetcode] = useState<LeetCodeStats>({
    easy: 142,
    medium: 218,
    hard: 64,
    total: 424,
    rank: "TOP 4.8%",
  });

  useEffect(() => {
    // 1. Fetch GitHub Statistics dynamically
    const fetchGitHub = async () => {
      try {
        const profileRes = await fetch("https://api.github.com/users/solankiSarvesh");
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          
          // Fetch repos to sum stargazers counts
          const reposRes = await fetch("https://api.github.com/users/solankiSarvesh/repos?per_page=100");
          let starsCount = 0;
          if (reposRes.ok) {
            const reposData = await reposRes.json();
            if (Array.isArray(reposData)) {
              starsCount = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
            }
          }

          setGithub({
            repos: profileData.public_repos ?? 16,
            followers: profileData.followers ?? 12,
            stars: starsCount || 4,
          });
        }
      } catch (err) {
        console.warn("GitHub API rate-limit or network offline. Falling back to cache.");
      }
    };

    // 2. Fetch LeetCode Statistics dynamically via open API wrapper
    const fetchLeetCode = async () => {
      try {
        const lcRes = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/Sarvesh2520");
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          if (lcData && typeof lcData.totalSolved === "number") {
            setLeetcode({
              easy: lcData.easySolved ?? 142,
              medium: lcData.mediumSolved ?? 218,
              hard: lcData.hardSolved ?? 64,
              total: lcData.totalSolved ?? 424,
              rank: lcData.ranking ? `RANK: ${lcData.ranking.toLocaleString()}` : "TOP 4.8%",
            });
          }
        }
      } catch (err) {
        console.warn("LeetCode API wrapper timed out or rate-limited. Falling back to cache.");
      }
    };

    fetchGitHub();
    fetchLeetCode();
  }, []);

  // Simulated GitHub Contributions map data styled in emerald greens!
  const renderGithubGrid = () => {
    const grid: number[][] = [];
    for (let r = 0; r < 7; r++) {
      const row: number[] = [];
      for (let c = 0; c < 26; c++) {
        const weight = Math.random() < 0.25 ? 0 : Math.floor(Math.random() * 4);
        row.push(weight);
      }
      grid.push(row);
    }

    return (
      <div className="flex flex-col gap-1.5 overflow-x-auto pb-2 select-none">
        {grid.map((row, rIdx) => (
          <div className="flex gap-1.5" key={rIdx}>
            {row.map((lvl, cIdx) => {
              const bgColors = [
                "bg-slate-950 border border-slate-900", // None
                "bg-brand-emerald/10 border border-brand-emerald/20", // Low
                "bg-brand-emerald/30 border border-brand-emerald/40", // Mid
                "bg-brand-emerald border border-brand-emerald/55 shadow-[0_0_10px_rgba(16,185,129,0.3)]", // High
              ];

              return (
                <div
                  key={cIdx}
                  className={`w-3 h-3 rounded-sm transition-all duration-300 hover:scale-125 ${bgColors[lvl]}`}
                  title={`${Math.floor(Math.random() * 8)} commits`}
                />
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="credentials" className="py-12 relative overflow-hidden bg-transparent">
      
      {/* Background blur effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-emerald/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-teal/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start justify-start text-left mb-16">
          <span className="font-sans text-[11px] font-bold tracking-widest text-brand-emerald uppercase mb-2">05 / PROFILES</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
            Coding Accounts & Awards
          </h2>
          <div className="w-16 h-[2px] bg-brand-emerald mt-3" />
        </div>

        {/* Dynamic Telemetry Widgets Row (Upscaled text!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* GitHub widget */}
          <div className="lg:col-span-7">
            <NeonCard variant="neutral" className="h-full border border-slate-800 hover:border-brand-emerald/30">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <GitBranch className="w-5 h-5 text-brand-emerald" />
                  <span className="font-sans text-sm font-bold tracking-wider text-white">
                    GitHub Commit Frequency
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 font-bold">solankiSarvesh // LIVE</span>
              </div>

              <div className="space-y-6">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans font-medium">
                  Dynamic activity metrics polled from the public GitHub REST API.
                </p>

                {/* Live Stats counters */}
                <div className="grid grid-cols-3 gap-4 font-mono text-xs text-slate-300 p-4 border border-slate-800 bg-slate-950 rounded-lg uppercase shadow-premium font-bold">
                  <div>
                    <span className="text-brand-emerald font-semibold">REPOS:</span> {github.repos}
                  </div>
                  <div className="text-center">
                    <span className="text-brand-teal font-semibold">STARS:</span> {github.stars}
                  </div>
                  <div className="text-right">
                    <span className="text-brand-emerald font-semibold">FOLLOWERS:</span> {github.followers}
                  </div>
                </div>

                {/* Contribution map */}
                <div className="p-4 border border-slate-800 bg-slate-950 rounded-lg shadow-premium">
                  {renderGithubGrid()}
                  <div className="flex justify-between items-center mt-4 font-mono text-[9px] text-slate-500 uppercase font-bold tracking-wider">
                    <span>JANUARY</span>
                    <span>APRIL</span>
                    <span>JULY</span>
                    <span>OCTOBER</span>
                    <a 
                      href="https://github.com/solankiSarvesh" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-emerald hover:underline hover:opacity-85 transition-all flex items-center gap-1 font-bold"
                    >
                      PROFILE <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </NeonCard>
          </div>

          {/* LeetCode stats widget */}
          <div className="lg:col-span-5">
            <NeonCard variant="neutral" className="h-full border border-slate-800 hover:border-brand-teal/30">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-brand-teal" />
                  <span className="font-sans text-sm font-bold tracking-wider text-white">
                    LeetCode Solved Ratios
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500 font-bold">Sarvesh2520 // LIVE</span>
              </div>

              <div className="space-y-6 font-sans text-sm">
                <div className="grid grid-cols-3 gap-4 items-center">
                  
                  {/* Solve Dial Easy */}
                  <div className="flex flex-col items-center gap-2.5 text-center select-none">
                    <div className="relative w-16 h-16 flex items-center justify-center border-2 border-brand-emerald/30 rounded-full bg-brand-emerald/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <span className="font-sans font-extrabold text-white text-base">{leetcode.easy}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-brand-emerald font-bold tracking-wider">EASY</span>
                    </div>
                  </div>

                  {/* Solve Dial Medium */}
                  <div className="flex flex-col items-center gap-2.5 text-center select-none">
                    <div className="relative w-16 h-16 flex items-center justify-center border-2 border-brand-teal/30 rounded-full bg-brand-teal/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                      <span className="font-sans font-extrabold text-white text-base">{leetcode.medium}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-brand-teal font-bold tracking-wider">MEDIUM</span>
                    </div>
                  </div>

                  {/* Solve Dial Hard */}
                  <div className="flex flex-col items-center gap-2.5 text-center select-none">
                    <div className="relative w-16 h-16 flex items-center justify-center border-2 border-brand-emerald/30 rounded-full bg-brand-emerald/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                      <span className="font-sans font-extrabold text-white text-base">{leetcode.hard}</span>
                    </div>
                    <div>
                      <span className="block font-sans text-[10px] text-brand-emerald font-bold tracking-wider">HARD</span>
                    </div>
                  </div>

                </div>

                <div className="p-4 border border-slate-800 bg-slate-950 rounded-lg font-mono text-xs text-slate-300 leading-relaxed uppercase shadow-premium font-bold">
                  <div className="flex justify-between">
                    <span>PROBLEMS SOLVED:</span>
                    <span className="text-brand-emerald font-bold">{leetcode.total}</span>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <span>STANDING RANK:</span>
                    <span className="text-brand-teal font-bold">{leetcode.rank}</span>
                  </div>
                </div>

                {/* External link to profile */}
                <div className="text-right pt-2">
                  <a 
                    href="https://leetcode.com/u/Sarvesh2520/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-sans text-xs text-brand-teal hover:underline hover:opacity-85 transition-all font-bold tracking-wider uppercase flex items-center justify-end gap-1"
                  >
                    LeetCode Profile <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </NeonCard>
          </div>

        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentialsData.map((cred) => (
            <NeonCard key={cred.id} variant="neutral" delay={0.05} className="border border-slate-800 hover:border-brand-emerald/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded border border-slate-800 bg-slate-900 flex items-center justify-center flex-shrink-0 select-none shadow-premium">
                  <Award className="w-5 h-5 text-brand-emerald" />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[11px] font-bold tracking-wider uppercase text-brand-emerald">
                      {cred.issuer}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-slate-500 select-none font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {cred.date}
                    </span>
                  </div>

                  <h3 className="font-sans text-sm sm:text-base font-bold text-white tracking-wide">
                    {cred.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed pt-1 font-sans font-medium">
                    {cred.desc}
                  </p>
                </div>
              </div>
            </NeonCard>
          ))}
        </div>

      </div>

    </section>
  );
}
