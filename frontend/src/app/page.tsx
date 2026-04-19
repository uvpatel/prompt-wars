import Antigravity from "@/components/Antigravity"

export default function Home() {
  return (
    <div className="relative w-full h-screen">

      {/* Background animation */}
      <div className="absolute inset-0">
        <Antigravity autoAnimate />
      </div>

      {/* Text content */}
      <div className="relative z-10 flex items-center justify-center h-full text-black">
        <h1 className="text-6xl font-bold">
          Prompt Wars
        </h1>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-black">
        <h1 className="text-6xl font-bold">Prompt Wars</h1>
        <p className="mt-4 text-lg">AI Powered Disaster Management</p>

        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          Start Analysis
        </button>
      </div>

    </div>
  )
}