export interface PricingBox{
    title:string,
    amount:string,
    features:string[],
    isDefault:boolean
}
export default function PricingBox({pricingValue}:{pricingValue:PricingBox}){
    return(
        <div className={`w-xs h-80 ${pricingValue.isDefault ? "border-2 border-sky-700":"border border-slate-400"} rounded-xl flex flex-col justify-between items-center py-5 shadow-xl`}>
            <h3 className="text-xl font-medium">{pricingValue.title}</h3>
            <p className="text-2xl font-semibold">{pricingValue.amount}</p>
            <div className="flex flex-col justify-center items-center gap-2">
                {pricingValue.features.map((feature)=>(<p>{feature}</p>))}
            </div>
            <button className={`py-1 px-3 rounded-lg shadow border ${pricingValue.isDefault ? "border-sky-600 bg-sky-600 text-white":"border-slate-300"} hover:shadow-xl cursor-pointer`}>BUY NOW</button>
        </div>
    )
}