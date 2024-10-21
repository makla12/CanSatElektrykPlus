import { Nav } from "./nav";
import { Footer } from "./footer";
import { ArticleHolder, Article } from "./article";
import logo from "@/public/logo.png";
import canSatLogo from "@/public/canSatLogo.png";

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

                <Article title={"O konkursie"} image={canSatLogo} imageAlt={"Logo"} reverse>
                    <div>
                        CanSat to międzynarodowe wyzwanie Europejskiej Agencji Kosmicznej, oferujące uczniom wyjątkową możliwość zdobycia praktycznego doświadczenia i uczestnictwa w prawdziwym projekcie kosmicznym! 
                        Tak zwany cansat to sonda badawcza mieszcząca się w pojemniku wielkości puszki po napoju. 
                        Jego zadaniem jest przeprowadzenie badań i eksperymentów podczas lotu rakietą i w trakcie opadania na spadochronie.

                    </div>
                </Article>

                <Article title={"O projekcie"} image={logo} imageAlt={"Logo"}>
                    <div>
                    Obecnym tematem projektu jest ocena możliwości przeżycia człowieka na danym obszarze na podstawie wartości promieniowania UV oraz składu powietrza.
                    W ramach naszego projektu chcemy skupić się na ocenie, czy warunki panujące w określonym obszarze są bezpieczne dla człowieka. 
                    Celem naszego zespołu będzie przeprowadzenie pomiarów poziomu promieniowania UV, kluczowych składników atmosferycznych (takich jak stężenie tlenu, dwutlenku węgla i innych gazów) oraz ocena terenu i stopień jego zazielenienia, co pozwoli na określenie, czy dany teren jest zdatny do zamieszkania lub czy jest bezpieczny do krótkotrwałego pobytu.  

                    </div>
                </Article>
                
            </ArticleHolder>
            <Footer />
        </div>
        </>
    );
}