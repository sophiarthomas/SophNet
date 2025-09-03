export default function Projects() {
    const projects = [
        { title: "Matcha Mapper", desc: "Interactive map app built with React & Firebase." },
        { title: "Latte Links", desc: "Social app for sharing cafes and experiences." },
        { title: "Espresso Express", desc: "Fast backend API built with Express & MongoDB." },
    ];

    return (
        <section id="projects" className="py-16 px-8 bg-[#fff9f1]">
            <h2 className="text-2xl text-[#a8c686] font-[Almendra_SC] mb-8">Chef’s Specials</h2>
            <div className="grid gap-6 md:grid-cols-3">
                {projects.map((p, i) => (
                    <div key={i} className="bg-[#fff9f1] border-2 border-[#f6caca] rounded-2xl shadow-lg p-6">
                        <h3 className="text-xl text-[#4b2e2e] font-[Almendra_SC] mb-2">{p.title}</h3>
                        <p className="text-[#4b2e2e]/80">{p.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
