import { Nav } from "./nav";
import { Footer } from "./footer";

export function MainSite(){
    
    return(
        <>
            <div className="min-h-screen grid">
                <Nav />
                <Footer />
            </div>
        </>
    );
}