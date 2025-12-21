export default function Header(){
    return (
        <div className="bg-neutral-50 py-4 shadow sticky top-0">
            <header className="w-full flex flex-col lg:flex-row justify-between">
                <div className="text-xl font-sans font-semibold ml-10">
                    MyNotes
                </div>
                <div className="flex flex-col lg:flex-row justify-between gap-6 mx-10 text-slate-800 align-middle">
                    <nav><a href="/" className="hover:text-black">Features</a></nav>
                    <nav><a href="/" className="hover:text-black">Pricing</a></nav>
                    <nav><a href="/" className="hover:text-black">Testimonials</a></nav>
                    <nav><a href="/" className="hover:text-black">Login</a></nav>
                    <nav><a href="/" className="hover:bg-sky-700 bg-sky-600 text-slate-100 text-shadow-2xs py-2 px-2 rounded font-medium shadow-xl">Get Started</a></nav>
                </div>
            </header>
        </div>
    )
}