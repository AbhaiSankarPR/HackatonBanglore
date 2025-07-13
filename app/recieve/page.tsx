"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout";

export default function ReceivePage() {
  const [selectedToken, setSelectedToken] = useState("Select Token");
  const [isOpen, setIsOpen] = useState(false);

  const tokens = ["ETH", "USDT", "DAI", "MATIC", "BNB"];

  const handleSelect = (token: string) => {
    setSelectedToken(token);
    setIsOpen(false);
  };

  return (
    <Layout>
      <div className="hero-bg min-h-screen px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-7xl mx-auto items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-10 w-full max-w-3xl">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-black mb-2">RECEIVE</h1>

            {/* Spend Funds Card */}
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold mb-1">spend funds</h2>
              <p className="text-base text-black">
                spend on gift cards or other purchase
              </p>
              <div className="mt-3 border-b border-black w-full" />
            </div>

            {/* Withdraw Funds Card */}
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h2 className="text-2xl font-bold mb-1">withdraw funds</h2>
              <p className="text-base text-black">
                get funds out of RUMI and into a bank acc, card, UPI to get mobile money
              </p>
              <div className="mt-3 border-b border-black w-full" />
            </div>
          </div>

          {/* Right Column: Balance & Dropdown */}
          <div className="w-full max-w-md bg-purple-100 p-8 rounded-3xl shadow-md relative mt-2">
            <h2 className="text-2xl font-black mb-2">TOTAL BALANCE</h2>
            <p className="text-3xl font-black mb-4">$0.00</p>

            <div className="h-[152px]" />

            {/* Dropdown Header */}
            <div
              className="flex items-center justify-between bg-white px-4 py-2 rounded-lg cursor-pointer border border-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-bold">{selectedToken}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>

            {/* Dropdown Items */}
            {isOpen && (
              <ul className="absolute bg-white border border-black mt-2 rounded-lg w-full z-10 shadow-lg">
                {tokens.map((token) => (
                  <li
                    key={token}
                    onClick={() => handleSelect(token)}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {token}
                  </li>
                ))}
              </ul>
            )}

            <div className="border-b border-black mt-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
