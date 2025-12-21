export default function Hero() {
  return (
    <section className="w-full py-14 text-slate-700 bg-linear-to-b from-sky-100 to-white">
      <div>
        <h1 className="text-center text-4xl font-bold font-mono">Notes that think together.</h1>

        <div className="flex justify-center">
            <p className="text-center my-4 w-xl font-serif">Create beautiful notes and documentation, collaborate in real-time, and share with anyone using a simple link.</p>
        </div>
        <div className="flex justify-center gap-10">
            <button className="py-1 px-2 rounded bg-sky-600 text-white cursor-pointer shadow hover:shadow-xl">Start for Free</button>
            <button className="py-1 px-2 rounded border border-slate-300 cursor-pointer shadow hover:shadow-xl">View Demo</button>
        </div>
      </div>
    </section>
  );
}
