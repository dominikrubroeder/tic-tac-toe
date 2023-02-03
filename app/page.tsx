import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
        <div className="bg-white/5 rounded-xl w-24 h-24 bg-app-navy-700 shadow-bottomed"></div>
      </div>
    </main>
  );
}
