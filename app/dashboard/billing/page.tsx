"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "0 Rs",
    features: [
      "10,000 Words/Month",
      "15+ Content Templates",
      "Unlimited Download & Copy",
      "1 Month of History",
    ],
    active: true,
  },
  {
    title: "Monthly",
    price: "200 Rs",
    amount: 200,
    features: [
      "1,000,000 Words/Month",
      "15+ Template Access",
      "Unlimited Download & Copy",
      "1 Year of History",
    ],
    active: false,
  },
  {
    title: "Yearly",
    price: "2000 Rs",
    amount: 2000,
    features: [
        "Unlimited Words/Month",
        "15+ Template Access",
        "Unlimited Download & Copy",
        "Lifetime History",
    ],
    active: false,
},
];

const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

export default function BillingPage() {
  const handlePayment = async (amount: number) => {
    try {
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      console.log("Razorpay Order:", data);

      if (!data.id) {
        throw new Error("Invalid Razorpay order response");
      }

      const razorpayLoaded = await loadRazorpayScript();
      if (!razorpayLoaded) {
        alert("Failed to load Razorpay. Check your internet connection.");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID|| "rzp_test_E7NAqMp9gKolg1",
        amount: data.amount,
        currency: "INR",
        name: "Cognitext AI",
        description: "Subscription",
        order_id: data.id,
        handler: function (response: any) {
          alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
        },
        prefill: {
          name: "Your Name",
          email: "you@example.com",
        },
        theme: {
          color: "#007BFF",
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment Error:", err);
      alert("Payment failed. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Upgrade Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="rounded-2xl border shadow p-6 bg-white flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price}/month</p>
            <ul className="mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`${
                plan.active
                  ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              } px-6 py-2 rounded-full font-medium transition`}
              disabled={plan.active}
              onClick={() => !plan.active && handlePayment(plan.amount!)}
            >
              {plan.active ? "Current Plan" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}