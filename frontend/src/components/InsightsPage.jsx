import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { TiHome } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { GiMeditation } from "react-icons/gi";
import { IoWater, IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { BiSolidMoon } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const InsightsPage = () => {
    const data = [
        { day: "Mon", value: 60 },
        { day: "Tue", value: 45 },
        { day: "Wed", value: 85 },
        { day: "Thu", value: 70 },
        { day: "Fri", value: 95 },
        { day: "Sat", value: 40 },
        { day: "Sun", value: 55 },
    ];

    return (
        <div className="bg-[#fbf9f4] text-[#31332e] font-[Manrope] min-h-screen flex">

            <Sidebar activeRoute="/insights" isFixed={false} />

            {/* MAIN */}
            <main className="flex-1 overflow-y-auto">

                {/* HEADER */}
                <header className="sticky top-0 bg-[#fbf9f4]/80 backdrop-blur-md px-6 py-6 max-w-7xl mx-auto flex justify-end items-center">
                    <div className="flex items-center gap-4">
                        <Link to="/logout">
                            <IoPersonOutline size={18} className="cursor-pointer" />
                        </Link>
                        <IoSettingsOutline size={18} className="cursor-pointer" />
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-6 pt-10 pb-32 lg:pb-16">

                    {/* HERO */}
                    <section className="mb-16">
                        <div className="rounded-xl min-h-[280px] p-10 bg-gradient-to-br from-[#246965] to-[#135d59] text-white relative">

                            <span className="text-xs uppercase tracking-widest bg-white/10 px-4 py-1 rounded-full">
                                Quote of the day
                            </span>

                            <h2 className="font-[Noto_Serif] text-3xl md:text-5xl mt-6 leading-tight">
                                "Healing is not a linear process, but a journey of returning to your own heart."
                            </h2>

                            <p className="italic mt-4 opacity-80">— A.W. Janzen</p>

                        </div>
                    </section>

                    {/* GRID */}
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                        {/* LEFT */}
                        <section className="xl:col-span-7">

                            <div className="flex justify-between mb-4">
                                <h3 className="font-[Noto_Serif] text-2xl">Weekly Resonance</h3>
                                <button className="text-[#246965] font-bold text-sm flex items-center gap-1">
                                    Details <FaLongArrowAltRight size={14} />
                                </button>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow">

                                <div className="h-48 flex items-end gap-2 mb-8">
                                    {data.map((item, i) => (
                                        <div key={i} className="flex-1 flex flex-col items-center justify-end gap-2 h-full">

                                            <div
                                                className="w-full bg-[#246965] rounded-t"
                                                style={{ height: `${item.value}%` }}
                                            ></div>

                                            <span className="text-[10px] text-gray-500 font-semibold">
                                                {item.day}
                                            </span>

                                        </div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 text-center border-t pt-6">
                                    <div>
                                        <p className="text-xs uppercase">Peak Mood</p>
                                        <p className="font-[Noto_Serif] text-xl text-[#246965]">Serene</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase">Weekly Avg</p>
                                        <p className="font-[Noto_Serif] text-xl text-[#246965]">Balanced</p>
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase">Continuity</p>
                                        <p className="font-[Noto_Serif] text-xl text-[#246965]">12 Days</p>
                                    </div>
                                </div>

                            </div>

                        </section>

                        {/* RIGHT */}
                        <section className="xl:col-span-5 space-y-6">

                            <h3 className="font-[Noto_Serif] text-2xl">Echoes of Thought</h3>

                            <div className="space-y-4">

                                <div className="bg-white p-6 rounded-xl border-l-4 border-[#246965]">
                                    <h4 className="font-bold">Morning Gratitude</h4>
                                    <p className="text-sm text-gray-500">
                                        The way the light hit the kitchen table...
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl border-l-4 border-purple-400">
                                    <h4 className="font-bold">Reflections on Patience</h4>
                                    <p className="text-sm text-gray-500">
                                        Learning to sit with discomfort...
                                    </p>
                                </div>

                                <div className="border-2 border-dashed p-8 rounded-xl text-center flex flex-col items-center gap-3">
                                    <div className="bg-purple-200 rounded-full p-3">
                                        <CiCirclePlus size={32} className="text-purple-600" />
                                    </div>
                                    Capture a moment
                                </div>

                            </div>

                        </section>

                        {/* CARDS */}
                        <section className="xl:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="bg-white p-6 rounded-xl flex items-center gap-4">
                                <div className="bg-pink-200 rounded-full p-3">
                                    <GiMeditation size={24} className="text-pink-600" />
                                </div>
                                5m Meditation
                            </div>

                            <div className="bg-white p-6 rounded-xl flex items-center gap-4">
                                <div className="bg-blue-200 rounded-full p-3">
                                    <IoWater size={24} className="text-blue-600" />
                                </div>
                                Hydration Goal
                            </div>

                            <div className="bg-white p-6 rounded-xl flex items-center gap-4">
                                <div className="bg-green-200 rounded-full p-3">
                                    <BiSolidMoon size={24} className="text-green-600" />
                                </div>
                                Sleep Analysis
                            </div>

                        </section>

                    </div>

                </div>

                {/* DESKTOP FOOTER */}
                <footer className="hidden lg:block bg-[#f5f4ed] py-12 border-t">
                    <div className="max-w-7xl mx-auto flex justify-between text-sm">
                        <span className="font-[Noto_Serif] italic text-[#246965]">
                            SerenityAI
                        </span>
                        <div className="flex gap-8">
                            <a>Privacy</a>
                            <a>Terms</a>
                            <a>Support</a>
                            <a>Philosophy</a>
                        </div>
                        <span>© 2026 SerenityAI</span>
                    </div>
                </footer>

            </main>

            {/* MOBILE NAV */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 px-6 py-4 flex justify-around border-t">

                <Link to="/" className="text-[#246965] text-xs flex flex-col items-center">
                    <TiHome size={24} />
                    <span>Home</span>
                </Link>

                <Link to="/mood" className="text-gray-400 text-xs flex flex-col items-center">
                    <VscSmiley size={24} />
                    <span>Mood</span>
                </Link>

                <Link to="/journal" className="text-gray-400 text-xs flex flex-col items-center">
                    <BsJournalBookmark size={24} />
                    <span>Journal</span>
                </Link>

                <Link to="/insights" className="text-[#246965] text-xs flex flex-col items-center">
                    <AiOutlineStock size={24} />
                    <span>Insights</span>
                </Link>

            </nav>

        </div>
    );
};

export default InsightsPage;