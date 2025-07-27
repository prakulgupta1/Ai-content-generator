// app/page.tsx

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-white">
      <header className="text-center">
<<<<<<< HEAD
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="text-black">Cognitext</span>{" "}
          <span className="text-primary">AI</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Revolutionize your content creation with Cognitext,
=======
        <div className="mb-6 flex justify-center">
          <Image src="/logo.svg" alt="logo" width={120} height={80} />
        </div>
        <h1 className="text-5xl font-bold text-gray-800">
          <span className="text-black">AI Content</span>{" "}
          <span className="text-primary">Generator</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Revolutionize your content creation with our AI-powered app,
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
          delivering engaging and high-quality text in seconds.
        </p>
        <Link href="/sign-in">
          <Button className="mt-6 px-6 py-3 text-lg">Get started →</Button>
        </Link>
      </header>

<<<<<<< HEAD
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
=======
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
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
              {item.title}
            </div>
            <p className="text-gray-500">{item.desc}</p>
            <Link
              href="/sign-in"
<<<<<<< HEAD
              className="text-sm text-blue-500 underline mt-2 block"
=======
              className="text-sm text-blue-500 underline mt-1 block"
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
            >
              Learn more →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a057209f753173cf410c2aca9f171723b5a2a5e4
