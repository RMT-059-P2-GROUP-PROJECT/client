import Navbar from "../Navbar";

function AboutPage() {
    return (
        <section>
            <Navbar />
            <div className="container mx-auto px-4 py-12">
                {/* Page Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h1>
                    <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
                </div>

                {/* About Chatsum Section */}
                <section className="mb-16">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-gray-700 mb-4">
                            Chatsum adalah aplikasi inovatif yang menyediakan layanan ringkasan pesan secara otomatis.
                            Kami membantu pengguna menghemat waktu dengan merangkum percakapan panjang menjadi poin-poin
                            penting yang mudah dipahami.
                        </p>
                        <p className="text-gray-700 mb-4">
                            Aplikasi kami dirancang untuk membantu profesional, mahasiswa, dan siapa saja yang ingin
                            mengekstrak informasi penting dari percakapan dengan cepat dan efisien. Dengan menggunakan
                            teknologi AI terkini, Chatsum mampu mengidentifikasi informasi kunci dalam berbagai jenis
                            percakapan dan menyajikannya dalam format yang ringkas.
                        </p>
                        <p className="text-gray-700">
                            Misi kami adalah membuat komunikasi lebih efektif dan mengurangi waktu yang dihabiskan
                            untuk membaca pesan yang panjang, sehingga memungkinkan pengguna untuk fokus pada
                            hal-hal yang benar-benar penting.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Fitur Utama</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Ringkasan Otomatis</h3>
                            <p className="text-gray-700">
                                Mengubah percakapan panjang menjadi ringkasan singkat dan mudah dipahami dengan satu klik.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Analisis Cepat</h3>
                            <p className="text-gray-700">
                                Mengidentifikasi dan mengekstrak poin-poin kunci dari percakapan dengan cepat dan akurat.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Dapat Disesuaikan</h3>
                            <p className="text-gray-700">
                                Menyesuaikan tingkat detail ringkasan sesuai dengan kebutuhan pengguna.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tim Pengembang</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mr-6">
                                {/* Profile image placeholder */}
                                <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Brendon Wiranata</h3>
                                <p className="text-blue-500 mb-2">Backend Developer</p>
                                <p className="text-gray-700">
                                    Beliau mampu mengembangkan aplikasi fullstack dari awal hingga akhir dengan baik.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mr-6">
                                {/* Profile image placeholder */}
                                <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dicky Pratama</h3>
                                <p className="text-blue-500 mb-2">Frontend Developer</p>
                                <p className="text-gray-700">
                                    Beliau mampu mengembangkan aplikasi fullstack dari awal hingga akhir dengan baik.
                                </p>
                            </div>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 flex items-center">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mr-6">
                                {/* Profile image placeholder */}
                                <div className="w-full h-full rounded-full flex items-center justify-center text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Resya Hasan</h3>
                                <p className="text-blue-500 mb-2">Backend Developer</p>
                                <p className="text-gray-700">
                                    Beliau mampu mengembangkan aplikasi fullstack dari awal hingga akhir dengan baik.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>

    );
}

export default AboutPage;