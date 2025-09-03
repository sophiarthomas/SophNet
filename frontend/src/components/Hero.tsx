export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-20 bg-[#fff9f1]">
            <h2 className="text-4xl text-[#4b2e2e]/80 font-[Almendra_SC]">Welcome to Soph’s Café ☕</h2>
            <p className="mt-4 text-lg text-[#4b2e2e]/80">
                Serving code brewed with passion
            </p>
            <button className="mt-6 bg-[#a8c686] text-[#4b2e2e] px-6 py-2 rounded-full shadow-md hover:bg-[#f6caca] transition">
                View Menu
            </button>
        </section>
    );
}