// app/page.tsx

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
          <span className="text-black">Cognitext</span>{" "}
          <span className="text-primary">AI</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Revolutionize your content creation with Cognitext,
          delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/sign-in">
          <Button className="mt-6 px-6 py-3 text-lg">Get started →</Button>
        </Link>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-4xl w-full">
        {[
          {
            title: "15+ Templates",
            desc: "A wide variety of templates for any use case.",
          },
          {
            title: "Fully Extendable",
            desc: "Easily customize and extend the components.",
          },
          {
            title: "Free to Start",
            desc: "Get started for free, no credit card required.",
          },
          {
            title: "Round-the-clock Support",
            desc: "Contact us anytime, we are here to help.",
          },
        ].map((item) => (
          <div key={item.title} className="text-center p-6 border rounded-lg shadow-lg">
            <div className="text-primary font-semibold text-xl mb-2">
              {item.title}
            </div>
            <p className="text-gray-500">{item.desc}</p>
            <Link
              href="/sign-in"
              className="text-sm text-blue-500 underline mt-2 block"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}