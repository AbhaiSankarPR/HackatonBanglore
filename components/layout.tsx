import type React from "react"
import { Button } from "@/components/ui/button"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
<div className="min-h-screen hero-bg">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6 relative z-10">
        {/* Logo */}
        <div className="text-3xl font-black text-black"> <a href="/" >RUMI</a></div>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-black font-medium hover:text-gray-700 transition-colors">
            HOME
          </a>
          <a href="/exchange" className="text-black font-medium hover:text-gray-700 transition-colors">
           SEND
          </a>
          <a href="/recieve" className="text-black font-medium hover:text-gray-700 transition-colors">
            RECEIVE
          </a>
    
          <a href="/wallet" className="text-black font-medium hover:text-gray-700 transition-colors">
    WALLET          </a>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full font-medium"><a href="/login" >JOIN</a></Button>
        </div>
      </nav>

      {/* Page Content */}
      {children}
    </div>
  )
}
