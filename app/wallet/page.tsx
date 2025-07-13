import React from "react";
import Layout from "../../components/layout";

export default function WalletPage() {
  return (
    <Layout>
      <div className="min-h-screen hero-bg -mt-20 pt-24 px-6 py-10">
        {/* Main Wallet Section */}
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          {/* Wallet Title */}
          <h1 className="text-3xl md:text-5xl font-black mb-2">WALLET</h1>

          {/* Balance */}
          <p className="text-xl font-semibold mb-10">$0.00</p>

          {/* Token Container Box */}
          <div className="bg-purple-100 rounded-3xl p-8 shadow-md">
            <h2 className="text-2xl font-black border-b border-black pb-1 mb-6">TOKENS</h2>

            <div className="grid grid-cols-2 gap-y-4">
              {/* Token Names */}
              <div className="flex flex-col gap-4 font-bold">
                <span>ETHERIUM</span>
                <span>USDC</span>
                <span>CELLO</span>
                <span>BITCOIN</span>
                <span>DOGE</span>
              </div>

              {/* Balances */}
              <div className="flex flex-col gap-4 items-end font-bold">
                <span>0.00 ETH</span>
                <span>0.00 USDC</span>
                <span>0.00 CELO</span>
                <span>0.00 BIT</span>
                <span>0.00 DOGE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
