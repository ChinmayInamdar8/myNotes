export default function Footer(){
    return (
        <div className="w-screen h-20 bg-slate-900 flex flex-col lg:flex-row justify-between items-center text-slate-400 px-12">
            <div>
                <p className="text-center">© 2025 MyNotes. All rights reserved.</p>
            </div>
            <div>
                <nav className="flex justify-center gap-7">
                    <a href="/">Privacy</a><a href="/">Terms</a><a href="/">Contact</a>
                </nav>
            </div>
        </div>
    )
}