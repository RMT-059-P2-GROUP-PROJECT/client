import MobileNav from "./MobileNav"

function Navbar() {
    return (
        <header>
            <div className="py-4 xl:py-4 bg-blue-500">
                <div className="container mx-auto flex justify-between items-center">
                    {/* logo */}
                    <a href="/">
                        <h1 className="text-4xl font-semibold text-white">
                            Chatsum
                        </h1>
                    </a>

                    <div className="hidden xl:flex item-center gap-8">
                        <nav className="flex gap-8 text-white">
                            <a className={`text-accent border-accent capitalize font-medium hover:text-accent transition-all`}>
                                Login
                            </a>

                            <a className={`text-accent border-accent capitalize font-medium hover:text-accent transition-all`}>
                                Tentang Kami
                            </a>
                        </nav>

                    </div>
                    <div className='xl:hidden'>
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar