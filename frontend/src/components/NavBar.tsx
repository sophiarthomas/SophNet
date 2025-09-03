

function NavBar() {

    return (
        <nav className="sticky top-0 bg-[#4b2e2e] text-[#fff9f1] flex justify-between px-6 py-4 shadow-md">
            <div className="space-x-6 hidden md:flex">
                <a href="#about" className="hover:text-black">My Story</a>
                <a href="#projects" className="hover:text-[#a8c686]">Projects</a>
                <a href="#experience" className="hover:text-[#a8c686]">Experiences</a>
                <a href="#contact" className="hover:text-[#a8c686]">Contact</a>
            </div>
        </nav>
    )
}

export default NavBar