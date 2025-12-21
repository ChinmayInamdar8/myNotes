interface InfoCards{
    title:string,
    text:string,
}

export default function InfoCards({title, text}:InfoCards){
    return (
        <section className="flex flex-col justify-center gap-3 w-xs h-32 rounded-xl shadow-xl p-2 bg-stone-50">
            <h3 className="text-center text-xl font-medium ">
                {title}
            </h3>
            <p className="text-center">
                {text}
            </p>
        </section>
    )
} 