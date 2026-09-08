"use client";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-100 text-slate-900">
      
      {/* Background blobs */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl animate-pulse" />

      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl animate-pulse" />

      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />

      {/* Floating particles */}
      <div className="absolute left-[8%] top-[20%] h-3 w-3 rounded-full bg-blue-400 animate-bounce" />

      <div className="absolute right-[15%] top-[25%] h-3 w-3 rounded-full bg-purple-400 animate-ping" />

      <div className="absolute left-[15%] bottom-[25%] h-2 w-2 rounded-full bg-pink-400 animate-pulse" />

      <div className="absolute right-[8%] bottom-[30%] h-2 w-2 rounded-full bg-indigo-400 animate-bounce" />

      {/* Main content */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center animate-[fadeIn_1s_ease-out]">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-indigo-200 bg-white/70 px-6 py-3 shadow-lg shadow-indigo-100 backdrop-blur-md">
          <span className="text-sm font-medium text-slate-600">
            👋 Good to see you here!
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-black tracking-tight sm:text-7xl md:text-8xl">
          Welcome{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Vishok
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          Great things happen when curiosity meets consistency.
          <br />
          <span className="font-medium text-slate-800">
            Keep building, keep learning, keep going!
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="group rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            🚀 Let's Build Something
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button className="rounded-full border border-slate-200 bg-white/80 px-8 py-4 font-semibold text-slate-800 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white">
            View Projects
          </button>

        </div>

        {/* Ideas card */}
        <div className="pointer-events-none absolute left-[5%] top-[25%] hidden -rotate-6 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-md lg:block animate-[float_4s_ease-in-out_infinite]">
          <div className="flex items-center gap-4">
            
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              💡
            </div>

            <div className="text-left">
              <p className="font-bold">Ideas</p>
              <p className="text-sm text-slate-500">
                Turn ideas into reality
              </p>
            </div>

          </div>
        </div>

        {/* Progress card */}
        <div className="pointer-events-none absolute right-[5%] top-[28%] hidden rotate-6 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-md lg:block animate-[float_5s_ease-in-out_infinite]">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
              📈
            </div>

            <div className="text-left">
              <p className="font-bold">Progress</p>
              <p className="text-sm text-slate-500">
                A little better everyday
              </p>
            </div>

          </div>
        </div>

        {/* Learn card */}
        <div className="pointer-events-none absolute bottom-[22%] left-[8%] hidden rotate-6 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-md lg:block animate-[float_6s_ease-in-out_infinite]">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 text-2xl">
              🧠
            </div>

            <div className="text-left">
              <p className="font-bold">Learn</p>
              <p className="text-sm text-slate-500">
                Stay curious
              </p>
            </div>

          </div>
        </div>

        {/* Grow card */}
        <div className="pointer-events-none absolute bottom-[22%] right-[8%] hidden -rotate-6 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur-md lg:block animate-[float_5s_ease-in-out_infinite]">
          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-100 text-2xl">
              ❤️
            </div>

            <div className="text-left">
              <p className="font-bold">Grow</p>
              <p className="text-sm text-slate-500">
                Enjoy the journey
              </p>
            </div>

          </div>
        </div>

        {/* Bottom quote */}
        <p className="absolute bottom-8 text-sm italic text-slate-500">
          "A better version of you is already in progress."
        </p>

      </section>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>

    </main>
  );
}