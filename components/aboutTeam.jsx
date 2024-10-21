import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./article";
import logo from "@/public/logo.png";
import michal from "@/public/michal.jpg";
import robert from "@/public/robert.jpg";
import bartek from "@/public/bartek.jpg";
import antoni from "@/public/antoni.jpg";
import tymur from "@/public/tymur.jpg";

export function AboutTeam(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col justify-between gap-24">
            <Nav />
            <ArticleHolder>
                <Article title={"Robert Osiewicz"} image={robert} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>

                <Article title={"Tymur Lukowych"} image={tymur} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>

                <Article title={"Michał Jasiński"} image={michal} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>

                <Article title={"Bartosz Bartuch"} image={bartek} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>

                <Article title={"Antoni Mordal"} image={antoni} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>

                <Article title={"Paweł Cybul"} image={logo} imageAlt={"Logo"}>
                    <div className="list-disc list-inside">
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className=" list-item">Lorem ipsum dolor sit amet consectetur.</div>
                    </div>
                </Article>
                
            </ArticleHolder>
            <Footer />
        </div>
        </>
    );
}