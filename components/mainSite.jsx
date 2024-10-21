import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./article";
import logo from "@/public/logo.png";

export function MainSite(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col justify-between gap-24">
            <Nav />
            <ArticleHolder>
                <Article title={"O nas"} image={logo} imageAlt={"Logo"}>
                    <div>
                    Jesteśmy grupą uczniów z Technikum nr 1 w zespole Szkół "Elektryk" im. Noblistów Polskich w Słupsku. 
                    Nasz zespół tworzą osoby z różnych kierunków technicznych jak: programista, informatyk oraz automatyk.
                    Naszą największą wspólną pasją jest technologia oraz eksploracja kosmosu. 
                    Fascynuje nas rozwój inżynierii kosmicznej, systemów automatyzacji oraz programowania, które stają się kluczowe w badaniach nad poznawaniem kosmosu.
                    </div>
                </Article>

                <Article title={"O konkursie"} image={logo} imageAlt={"Logo"} reverse>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum explicabo, quasi in maxime magnam natus quaerat, fugit necessitatibus impedit adipisci quibusdam debitis corrupti provident quidem molestias laudantium ipsa commodi dolorem.
                    </div>
                </Article>

                <Article title={"O projekcie"} image={logo} imageAlt={"Logo"}>
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