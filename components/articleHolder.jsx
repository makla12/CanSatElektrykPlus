import Image from "next/image";

export function ArticleHolder({ children }){
    
    return(
        <>
            <div className="flex gap-32 flex-col items-center">
                {children}
            </div>
        </>
    );
}

export function Article(props){
    
    return(
        <>
            <div className={`w-2/3 flex ${props.reverse ? "flex-row-reverse" : "flex-row"} gap-24 items-center`}>
                <div>
                    <div className="text-3xl font-bold">{props.title}</div>
                    {props.children}
                </div>
                
                {props.image ? 
                <div>
                    <Image src={props.image} alt={props.imageAlt}/>
                </div> 
                : ""}
            </div>
        </>
    );
}