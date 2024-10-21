import Image from "next/image";
import logo from "@/public/logo.png";

export function Nav(){
    
    return(
        <div className="
            w-screen min-w-fit h-24 px-40 
            bg-[#252a54] text-white text-2xl 
            flex items-center justify-between shrink-0 gap-10"
        >
            <a className="w-24 h-full flex items-center" href="/CanSatElektrykPlus">
                <Image src={logo} alt="Logo"/>
            </a>
            <div className="flex gap-20">
                <a href="/CanSatElektrykPlus/">Strona główna</a>
                <a href="/CanSatElektrykPlus/aboutTeam">O zespole</a>
                <a href="/CanSatElektrykPlus/news">Aktualności</a>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}