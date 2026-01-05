import { Spinner } from "@/components/ui/spinner";

interface ComponentLoader{
    loading : boolean
}

export default function ComponentLoader({loading}:ComponentLoader){
    return (
        loading && <div className="h-full flex justify-center items-center">
            <Spinner className="text-sky-600 w-6 h-auto"/>
        </div>
    )
}