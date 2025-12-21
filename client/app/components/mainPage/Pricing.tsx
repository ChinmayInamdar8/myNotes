import { pricing } from "@/app/constants/pricing";
import PricingBox from "./PricingBox";

export default function Pricing(){
    return(
        <section className="my-20">
            <h2 className="text-center text-2xl font-medium">Simple Pricing</h2>
            <div className="flex flex-col lg:flex-row gap-3 items-center justify-between mt-10">
                {
                pricing.map((price)=> <PricingBox pricingValue={price} key={price.title}/>)
            }
            </div>
        </section>
    )
}