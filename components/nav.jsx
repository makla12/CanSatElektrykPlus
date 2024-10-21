import Image from "next/image";
import logo from "@/public/logo.png";

export function Nav(){
    
    return(
        <header className="w-full sticky top-0">
            <div className="container mx-auto flex p-3">
                <a className="w-16" href="/CanSatElektrykPlus">
                    <Image src={logo} alt="Logo" className="w-auto h-auto invert"/>
                </a>
                <div className="flex flex-1 gap-5 items-center justify-center
                    text-gray-300">
                    <a href="/CanSatElektrykPlus/" className="hover:text-gray-50">Strona główna</a>
                    <a href="/CanSatElektrykPlus/aboutTeam" className="hover:text-gray-50">O zespole</a>
                    <a href="/CanSatElektrykPlus/news" className="hover:text-gray-50">Aktualności</a>
                </div>
                <div className="w-16"></div>
            </div>
        </header>
    );
}