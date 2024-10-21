import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./articleHolder";
import logo from "@/public/logo.png";

export function MainSite(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col gap-28">
            <Nav />
            <ArticleHolder>
                <Article title={"O nas"} image={logo} imageAlt={"Logo"}>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"O nas"} image={logo} imageAlt={"Logo"} reverse>
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