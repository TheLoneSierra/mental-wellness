import { Link, useNavigate } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";
import { FaLongArrowAltRight } from "react-icons/fa";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/login');
    };

    return (
        <div className="bg-[#fbf9f4] text-[#31332e] font-[Manrope]">

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full z-50 bg-[#fbf9f4]/80 backdrop-blur-md">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">

                    <div className="font-[Noto_Serif] text-2xl font-bold text-[#246965]">
                        SerenityAI
                    </div>

                    <div className="hidden md:flex items-center space-x-8 font-[Noto_Serif] font-semibold text-lg">
                        <a className="text-[#246965] border-b-2 border-[#246965] pb-1">
                            Dashboard
                        </a>
                        <Link
                            to="/mood"
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            Mood Tracker
                        </Link>
                        <Link
                            to="/journal"
                            className="opacity-70 hover:opacity-100 transition"
                        >
                            Journal
                        </Link>
                    </div>

                    <button
                        onClick={handleStartClick}
                        className="bg-[#246965] text-white px-6 py-2.5 rounded-full font-semibold shadow-sm hover:opacity-90 active:scale-95 transition cursor-pointer"
                    >
                        Get Started
                    </button>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300/20 to-transparent"></div>
            </nav>

            <main className="pt-24">

                {/* HERO */}
                <section className="relative min-h-[870px] flex items-center px-8 max-w-7xl mx-auto overflow-hidden">
                    <div className="grid lg:grid-cols-12 gap-12 items-center w-full">

                        {/* LEFT */}
                        <div className="lg:col-span-7">
                            <h1 className="font-[Noto_Serif] text-[3.5rem] leading-[1.1] font-bold mb-6">
                                Find your center in a <br />
                                <span className="text-[#246965] italic">
                                    digital sanctuary.
                                </span>
                            </h1>

                            <p className="text-xl text-[#5e6059] mb-10 max-w-xl leading-relaxed">
                                SerenityAI combines thoughtful design with artificial intelligence
                                to guide you through mindful reflections and emotional clarity.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={handleStartClick}
                                    className="bg-[#246965] text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-95 transition cursor-pointer"
                                >
                                    Start Your Wellness Journey
                                </button>

                                <button className="backdrop-blur-md bg-white/40 border border-gray-300 px-8 py-4 rounded-full font-bold text-lg text-[#246965] cursor-pointer">
                                    Learn Our Philosophy
                                </button>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="lg:col-span-5 relative">

                            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGe-MgnUGUc0M4j1KIDVZt11OejB6zavaeG4fKesN7Fctha1j5VbgLN6xifuATE1B6iHJhtw-BZnGikU6cKFAzDZxplUCyQrpLEFlPNlred2AKjnW446a0KbUfCUQcWSxiwdIt_KXGFKDoTeLQaq5N7QSdErXQOhkqD4nDiWjs96wPv81Q8YlUzkcttkjuuNEyTqVfWmRoiyHFGz7XLR8xqq9F3Fmm31FZyoVOcxQJsiNvSZp8_eybtI_3CkKbmR4EcJWM32OKeLMe"
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#246965]/20 to-transparent"></div>
                            </div>

                            {/* FLOATING CARD */}
                            <div className="absolute -bottom-6 -left-12 backdrop-blur-md bg-white/40 p-6 rounded-lg shadow-xl max-w-[240px] hidden md:block border border-white/40">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-purple-500 bg-purple-100 p-2 rounded-full">
                                        💜
                                    </span>
                                    <span className="font-bold">Daily Pulse</span>
                                </div>
                                <p className="text-sm text-gray-600 italic">
                                    "You've maintained a peaceful state for 5 consecutive days."
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="py-24 px-8 max-w-7xl mx-auto">

                    <div className="mb-16 text-center max-w-2xl mx-auto">
                        <h2 className="font-[Noto_Serif] text-[2.5rem] font-bold mb-4">
                            Cultivate Inner Balance
                        </h2>
                        <p className="text-gray-600">
                            Our tools are designed to be soft, unobtrusive, and deeply personal.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        {/* MOOD */}
                        <div className="md:col-span-2 bg-[#f5f4ed] p-10 rounded-xl">
                            <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-sm text-[#246965]">
                                <VscSmiley size={32} />
                            </div>

                            <Link to="/mood">
                                <h3 className="font-[Noto_Serif] text-3xl font-bold mb-4 cursor-pointer">
                                    Mood Tracker
                                </h3>
                            </Link>

                            <p className="text-gray-600 text-lg max-w-md">
                                Identify patterns in your emotional landscape with our tracker.
                            </p>
                        </div>

                        {/* JOURNAL */}
                        <div className="bg-[#246965] text-white p-10 rounded-xl flex flex-col justify-between">
                            <div>
                                <h3 className="font-[Noto_Serif] text-2xl font-bold mb-4">
                                    Journal
                                </h3>
                                <p className="text-white/80 mb-8">
                                    A private, encrypted space for your thoughts.
                                </p>
                            </div>

                            <button className="font-bold flex items-center gap-2">
                                New Entry <FaLongArrowAltRight size={16} />
                            </button>
                        </div>

                        {/* AI SECTION (FIXED NAVIGATION) */}
                        <div className="bg-white p-10 rounded-xl flex flex-col md:flex-row items-center gap-8 md:col-span-3">

                            <div className="md:w-1/2">
                                <span className="w-2 h-2 rounded-full bg-green-900 inline-block mx-1.5 my-0.5"></span>
                                Always Available
                                <h3 className="font-[Noto_Serif] text-3xl font-bold mb-4">
                                    Mindful Companion
                                </h3>
                                <p className="text-gray-600 text-lg mb-6">
                                    AI that listens and helps you reflect better.
                                </p>

                                <button
                                    onClick={() => {
                                        const token = localStorage.getItem("token");

                                        if (!token) {
                                            localStorage.setItem("redirectAfterLogin", "/chat");
                                            navigate("/login");
                                        } else {
                                            navigate("/chat");
                                        }
                                    }}
                                    className="text-[#246965] font-bold border-[#246965] cursor-pointer"
                                >
                                    Chat with Serenity
                                </button>
                            </div>

                            <div className="md:w-1/2 w-full h-64 rounded-lg overflow-hidden">
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm9ZEMIdhYmzj-g7VCvWsmVai9ac4RwjIgJnuyO1feuJP9oVdhrhQAWFa1DUcSyha767fJUInN3dPyBY2tMmaWr4aE8GuPM71kTNj7CUrxUFyPoM4vEWkosGhrwo3qPgQp-x8Kkdnw4TI5HRrgPSx9GHItb1Yl8z8mDMJix9XKbDjGy_ETtc7W1QSIIo-AQRGYAAILpyJxgBM1WHSQ5S0_0dtsJgcS-Q11J7-W4zM6kVlbSsMTEFn9EJ3HxC4ra5B-iKW9pcQ3CgED"
                                    alt="AI Companion"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* QUOTE */}
                <section className="bg-[#f5f4ed] py-32 px-8 text-center">
                    <p className="font-[Noto_Serif] text-3xl italic max-w-3xl mx-auto">
                        "Healing is not a linear process, but a series of quiet returns to oneself."
                    </p>
                </section>

            </main>

            {/* FOOTER */}
            <footer className="bg-[#f5f4ed] w-full py-12 px-8 border-t">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">

                    <div className="font-[Noto_Serif] italic text-[#246965] text-xl font-bold">
                        SerenityAI
                    </div>

                    <div className="flex gap-8 text-xs uppercase tracking-widest">
                        <a>Privacy</a>
                        <a>Terms</a>
                        <a>Support</a>
                        <a>Philosophy</a>
                    </div>

                    <div className="text-xs uppercase">
                        © 2026 SerenityAI
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default LandingPage;