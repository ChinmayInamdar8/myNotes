import { Spinner } from "@/components/ui/spinner"

interface FullPageLoader{
    loading : boolean
}

export default function FullPageLoader({loading}:FullPageLoader){
    return (
        loading && <div className="w-screen h-screen absolute top-0 left-0 bg-white/40 flex justify-center items-center">
            <Spinner className="text-sky-600 w-10 h-auto"/>
        </div>
    )
}