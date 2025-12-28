interface FullPageLoader{
    loading : boolean
}

export default function FullPageLoader({loading}:FullPageLoader){
    return (
        loading && <div className="w-screen h-screen sticky top-0 left-0 bg-white/40 flex justify-center items-center">
            <p>Loader</p>
        </div>
    )
}