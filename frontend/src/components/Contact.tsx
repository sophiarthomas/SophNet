export default function Contact() {
    return (
        <section id="contact" className="py-16 px-8">
            <h2 className="text-2xl text-[#a8c686] font-[Almendra_SC] mb-6">Order Here</h2>
            <form className="max-w-md mx-auto flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="input input-bordered" />
                <input type="email" placeholder="Your Email" className="input input-bordered" />
                <textarea placeholder="Your Message" className="textarea textarea-bordered" />
                <button className="bg-[#a8c686] text-[#4b2e2e] px-4 py-2 rounded-full hover:bg-[#f6caca] transition">
                    Send Order
                </button>
            </form>
        </section>
    );
}