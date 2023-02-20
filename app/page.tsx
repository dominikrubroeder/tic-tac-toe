import Logo from "@/components/svg/Logo";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="max-w-lg grid gap-5">
      <header className="flex items-center justify-between">
        <Logo className="flex-1" />
        <Button>Turn</Button>
        <button className="uppercase flex-1 text-center">o</button>
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
    </div>
  );
}
