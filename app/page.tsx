import Logo from "@/components/svg/Logo";
import ArrowCircle from "@/components/svg/ArrowCircle";
import X from "@/components/svg/X";

export default function Home() {
  return (
    <div className="max-w-lg grid gap-5">
      <header className="flex gap-2 justify-between items-center">
        <Logo />

        <button className="uppercase flex gap-2 items-center text-xs bg-app-navy-700 rounded-xl text-app-gray-400 font-bold px-4 py-2">
            <X />
            Turn
        </button>

        <button className="uppercase text-center bg-app-gray-400 p-4 rounded-xl">
            <ArrowCircle />
        </button>
      </header>

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

        <div className="grid grid-cols-3 gap-4">
            <div className="rounded-[15px] text-center bg-app-teal-300 px-4 py-2 text-app-navy-900">
                <p className="text-xs uppercase">X (You)</p>
                <p className="font-bold">14</p>
            </div>
            <div className="rounded-[15px] text-center bg-app-gray-400 px-4 py-2 text-app-navy-900">
                <p className="text-xs uppercase">Ties</p>
                <p className="font-bold">32</p>
            </div>
            <div className="rounded-[15px] text-center bg-app-orange-300 px-4 py-2 text-app-navy-900">
                <p className="text-xs uppercase">O (CPU)</p>
                <p className="font-bold">11</p>
            </div>
        </div>
    </div>
  );
}
