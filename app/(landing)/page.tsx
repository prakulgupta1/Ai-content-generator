// app/(landing)/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <header className="text-center">
        <div className="mb-6 flex justify-center">
          <Image src="/logo.svg" alt="logo" width={120} height={80} />
        </div>
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="text-black">AI Content</span>{" "}
          <span className="text-primary">Generator</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Revolutionize your content creation with our AI-powered app,
          delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/sign-in">
          <Button className="mt-6 px-6 py-3 text-lg">Get started →</Button>
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 max-w-6xl w-full">
        {[
          {
            title: "25+ templates",
            desc: "Responsive, and mobile-first project on the web",
          },
          {
            title: "Customizable",
            desc: "Components are easily customized and extendable",
          },
          {
            title: "Free to Use",
            desc: "Every component and plugin is well documented",
          },
          {
            title: "24/7 Support",
            desc: "Contact us 24 hours a day, 7 days a week",
          },
        ].map((item) => (
          <div key={item.title} className="text-center">
            <div className="text-primary font-semibold text-lg mb-2">
              {item.title}
            </div>
            <p className="text-gray-500">{item.desc}</p>
            <Link href="/sign-in" className="text-sm text-blue-500 underline mt-1 block">
              Learn more →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
