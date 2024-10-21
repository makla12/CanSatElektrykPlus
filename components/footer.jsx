import Image from "next/image";
import logo from "@/public/logo.png";

export function Footer(){
    
    return(
        <>
            <div className="
                w-screen min-w-fit h-24 px-40 
                bg-[#252a54] 
                text-white text-2xl 
                flex items-center justify-center gap-36 shrink-0"
            >
                <a href="https://github.com/makla12/CanSatElektrykPlus">Github</a>
            </div>
        </>
    );
}