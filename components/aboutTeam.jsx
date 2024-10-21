import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./article";
import logo from "@/public/logo.png";

export function AboutTeam(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col justify-between gap-24">
            <Nav />
            <ArticleHolder>
                <Article title={"Robert Osiewicz"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"Tymur Lukowych"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"Michał Jasiński"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"Bartosz Bartuch"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"Antoni Mordal"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"Paweł Cybul"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>
                
            </ArticleHolder>
            <Footer />
        </div>
        </>
    );
}