// import { ArrowRight } from "lucide-react"
// import Layout from "../../components/layout"

// export default function ExchangePage() {
//   return (
//     <Layout>
//       <div className="min-h-screen hero-bg -mt-20 pt-20">
//         <div className="container mx-auto px-8 py-16">
//           {/* Page Title */}
// <h1 className="absolute top-20 left-6 text-2xl md:text-4xl font-black  drop-shadow-lg">SEND</h1>

//           {/* Exchange Flow */}
//           <div className="flex items-center justify-center space-x-8 md:space-x-16">
//             {/* Currency Circle */}
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 md:w-40 md:h-40 bg-pink-500 rounded-full flex items-center justify-center">
//                 <span className="text-black font-black text-lg md:text-xl">CURRENCY</span>
//               </div>
//             </div>

//             {/* Arrow */}
//             <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />

//             {/* Crypto Circle */}
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 md:w-40 md:h-40 bg-pink-500 rounded-full flex items-center justify-center">
//                 <span className="text-black font-black text-lg md:text-xl">CRYPTO</span>
//               </div>
//             </div>

//             {/* Arrow */}
//             <ArrowRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400" />

//             {/* Currency Circle */}
//             <div className="flex flex-col items-center">
//               <div className="w-32 h-32 md:w-40 md:h-40 bg-pink-500 rounded-full flex items-center justify-center">
//                 <span className="text-black font-black text-lg md:text-xl">CURRENCY</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }
import { QrCode, User } from "lucide-react";
import Layout from "../../components/layout";

export default function SendPage() {
  return (
    <Layout>
      <div className="min-h-screen hero-bg -mt-20 pt-10">
        {/* Container Section */}
        <div className="container mx-auto px-8 py-8 relative">
          {/* Page Title */}
          <h1 className="absolute top-20 left-6 text-3xl md:text-5xl font-black drop-shadow-lg">
            SEND
          </h1>

          {/* Input Box */}
          <div className="mt-32 w-full max-w-4xl">
  <input
    type="text"
    placeholder="to: wallet address or phone number"
    className="w-full p-4 rounded-2xl bg-gray-200 text-lg focus:outline-none"
  />
</div>

          {/* Buttons aligned left */}
          <div className="mt-6 flex flex-col gap-4">
  <button className="w-fit flex items-center gap-2 bg-purple-100 hover:bg-purple-200 transition py-3 px-4 rounded-md text-lg font-medium text-black">
    <QrCode className="w-5 h-5" />
    send via a QR code
  </button>
  <button className="w-fit flex items-center gap-2 bg-purple-100 hover:bg-purple-200 transition py-3 px-4 rounded-md text-lg font-medium text-black">
    <User className="w-5 h-5" />
    send to a contact
  </button>
</div>

        </div>

        {/* Info Box */}
<div className="mt-24 w-full max-w-5xl mx-auto bg-purple-200 p-6 rounded-xl text-sm text-black px-6 md:px-8 font-semibold">
          <p className="mb-3">
            money across borders using stablecoins like USDC, making remittance fast, cheap, and borderless.
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Enter Recipient:</strong> Add the destination wallet or select from saved contacts.
            </li>
            <li>
              <strong>Send & Confirm:</strong> Choose amount, hit send, and track the transfer instantly.
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}