import { Nav } from "./nav";
import { Footer } from "./footer";

export function NewsSite(){
    
    return(
        <>
        <div className="min-h-screen flex flex-col justify-between gap-24">
            <Nav />
            <div className="mx-auto text-4xl text-red-700">Brak aktualności</div>
            <Footer />
        </div>
        </>
    );
}