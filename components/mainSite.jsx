import { Nav } from "./nav";
import { Footer } from "./footer";
import Image from "next/image";
import { HiMiniUserGroup } from "react-icons/hi2";
import logoNapis from "@/public/logoNapis.png";
import heroImg from "@/public/hero-main-image.png";
import zselLogo from "@/public/LOGO_ZSELektryk.png";

export function MainSite(){
    
    return(
        <main className="relative">
            <Nav />
            <div className="h-screen relative">
                <div className="container mx-auto flex flex-col items-start justify-center h-full gap-8">
                    <div className="w-1/2">
                        <Image src={logoNapis} alt="Logo" className="w-full h-auto invert"/>
                    </div>
                    <div className="w-1/2 ps-24 flex">
                        <div className="w-36 relative">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 
                                h-96 w-[2px]
                                bg-gradient-to-b from-cyan-500 to-primary">
                                <div className="absolute top-1 left-1/2 transform -translate-x-1/2
                                    p-1 border-4 border-primary rounded-full bg-neutral-900
                                    shadow-xl shadow-cyan-500">
                                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                                    </div>
                            </div>
                        </div>
                        <div className="text-xl font-medium text-gray-400 space-y-10">
                            <p>Naszą największą pasją od zawsze jest technologia oraz eksploracja kosmosu 🚀</p>
                            <div className="flex items-center">
                                <button className="rounded bg-primary text-gray-50 p-3
                                    flex items-center gap-1">
                                    <Image src={zselLogo} alt="Logo" className="w-8 h-auto"/>
                                    Nasza szkoła
                                </button>
                                <div className="bg-gray-300 h-10 w-[1px] mx-6"></div>
                                <button className="rounded border border-sky-500 text-gray-50 p-3
                                    flex items-center gap-1">
                                    <HiMiniUserGroup />
                                    Zespół
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={heroImg} alt="hero image" className="absolute top-0 right-0 w-full h-auto -z-10 brightness-50"></Image>

            <Footer />
        </main>
    );
}