import Image from "next/image";
import logo from "@/public/logo.png";

export function Nav(){
    
    return(
        <div className="
            w-screen min-w-fit h-24 px-40
            bg-[#252a54]
            text-white text-2xl
            flex items-center gap-36 shrink-0"
        >
            <a className="w-24 h-full flex items-center" href="/">
                <Image src={logo} alt="Logo"/>
            </a>
            <a href="">Strona główna</a>
            <a href="">O zespole</a>
            <a href="">Aktualności</a>
        </div>
    );
}