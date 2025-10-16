import Image from "next/image";
import logo from "@/public/logo.png";

export function Footer(){
    
    return(
        <footer>
            <div className="w-full bg-primary text-gray-300 
                flex items-center justify-center gap-36 p-3"
            >
                <a href="https://github.com/makla12/CanSatElektrykPlus">Github</a>
            </div>
        </footer>
    );
}