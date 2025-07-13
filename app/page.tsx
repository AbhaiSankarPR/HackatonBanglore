import { Button } from "@/components/ui/button"
import Layout from "../components/layout"


export default function HomePage() {
  return (
    <Layout>
      {/* <div className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-300 -mt-20 pt-20"> */}
      <div className="hero-bg">

        {/* Main Content */}
        <div className="px-10 pt-32 pb-8">
          <div className="max-w-2xl">
            {/* Hero Text */}
          <div className="space-y-2 mb-1">
  <h1 className="koulen-regular text-5xl md:text-7xl text-black leading-tight">NO BANK</h1>
  <h1 className="koulen-regular text-5xl md:text-7xl text-black leading-tight">NO BORDERS</h1>
<h1 className="koulen-regular text-5xl md:text-7xl text-black tracking-tighter whitespace-nowrap">
  JUST SMART SECURE MONEY
</h1>
</div>



            {/* Description */}
<p className="text-black text-lg  mb-6 max-w-3xl leading-relaxed">
              RUMI is a decentralized platform that makes sending, lending, and investing money effortless , all without
              banks. Powered by blockchain and smart contracts, RUMI brings financial access and trust to everyone,
              everywhere.
            </p>

            {/* CTA Button */}
            <Button className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-8 rounded-full text-lg font-medium">
             <a href="/login" > GET STARTED </a>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
