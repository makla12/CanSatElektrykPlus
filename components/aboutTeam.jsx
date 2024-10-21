import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./article";
import logo from "@/public/logo.png";
import michal from "@/public/michal.jpg";
import robert from "@/public/robert.jpg";
import bartek from "@/public/bartek.jpg";
import antoni from "@/public/antoni.jpg";
import tymur from "@/public/tymur.jpg";
import cybul from "@/public/cybul.jpg";

export function AboutTeam(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col justify-between gap-24">
            <Nav />
            <ArticleHolder>
                <Article title={"Robert Osiewicz"} image={robert} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 4 o kierunku programista</div>
                        <div className=" list-item">Stanowisko: Technik programista</div>
                        <div className=" list-item">Zainteresowania: programowanie, szachy, gry strategiczne</div>
                    </div>
                </Article>

                <Article title={"Tymur Lukovych"} image={tymur} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 3 o kierunku programista</div>
                        <div className=" list-item">Stanowisko: Technik programista</div>
                        <div className=" list-item">Zainteresowania: programowanie, gra na gitarze, humor</div>
                    </div>
                </Article>

                <Article title={"Michał Jasiński"} image={michal} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 3 o kierunku programista</div>
                        <div className=" list-item">Stanowisko: Technik programista</div>
                        <div className=" list-item">Zainteresowania: szachy, gry komputerowe, programowanie</div>
                    </div>
                </Article>

                <Article title={"Bartosz Bartuch"} image={bartek} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 4 o kierunku informatyk</div>
                        <div className=" list-item">Stanowisko: Fizyk elektronik</div>
                        <div className=" list-item">Zainteresowania: gry strategiczne, militaria, szachy</div>
                    </div>
                </Article>

                <Article title={"Antoni Mordal"} image={antoni} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 3 o kierunku programista</div>
                        <div className=" list-item">Stanowisko: Inżynier prototypów</div>
                        <div className=" list-item">Zainteresowania: grafika komputerowa, muzyka</div>
                    </div>
                </Article>

                <Article title={"Paweł Cybul"} image={cybul} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Uczeń klasy 4 o kierunku automatyk</div>
                        <div className=" list-item">Stanowisko: Fizyk elektronik</div>
                        <div className=" list-item">Zainteresowania: not found</div>
                    </div>
                </Article>
                
            </ArticleHolder>
            <Footer />
        </div>
        </>
    );
}