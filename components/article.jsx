import Image from "next/image";

export function ArticleHolder({ children }){
    
    return(
        <>
            <div className="w-screen flex gap-32 flex-col items-center">
                {children}
            </div>
        </>
    );
}

export function Article(props){
    
    return(
        <>
            <div className={`w-2/3 flex ${props.reverse ? "flex-row-reverse" : "flex-row"} gap-24 items-center shrink-0`}>
                <div className="w-2/3">
                    <div className="text-3xl font-bold mb-4">{props.title}</div>
                    {props.children}
                </div>
                
                {props.image ? 
                <div className="w-1/3">
                    <Image src={props.image} alt={props.imageAlt} className="w-auto h-auto"/>
                </div> 
                : ""}
            </div>
        </>
    );
}