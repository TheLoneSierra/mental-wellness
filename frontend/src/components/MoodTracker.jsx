import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { TiHome } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { BsEmojiTear } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const MoodTracker = () => {

    const [quote, setQuote] = useState("");

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/affirmations`);
                const data = await res.json();

                setQuote(data.quote);
            } catch (err) {
                console.error(err);
                setQuote("Stay grounded and keep moving forward.");
            }
        };

        fetchQuote();
    }, []);

    return (
        <div className="bg-[#fbf9f4] text-[#31332e] min-h-screen flex overflow-hidden font-[Manrope]">

            <Sidebar activeRoute="/mood" isFixed={false} />

            {/* MAIN */}
            <main className="flex-1 overflow-y-auto h-screen">

                {/* HEADER */}
                <header className="sticky top-0 bg-[#fbf9f4]/80 backdrop-blur-md px-6 py-6 max-w-7xl mx-auto">
                    <h2 className="font-[Noto_Serif] font-bold text-2xl text-[#246965]">
                        Mood Tracker
                    </h2>
                    <span className="text-sm opacity-70">
                        Monday, May 20th
                    </span>
                </header>

                {/* CONTENT */}
                <div className="max-w-7xl mx-auto px-6 pb-32 lg:pb-20 space-y-12">

                    {/* AFFIRMATION */}
                    <section className="rounded-xl bg-gradient-to-br from-[#246965] to-[#135d59] p-10 text-white shadow-xl">
                        <span className="uppercase text-xs opacity-80 mb-4 block">
                            Daily Affirmation
                        </span>

                        <h3 className="font-[Noto_Serif] text-3xl italic mb-6">
                            {quote ? `"${quote}"` : "Loading..."}
                        </h3>

                        <p className="text-sm opacity-80">
                            Take a deep breath. You are doing enough.
                        </p>
                    </section>

                    {/* GRID */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT */}
                        <div className="lg:col-span-7 space-y-8">

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h4 className="font-[Noto_Serif] text-xl mb-8">
                                    How are you feeling right now?
                                </h4>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                                    {["😊 Happy", "😌 Calm", "😰 Anxious", "😔 Sad"].map((mood, i) => (
                                        <button key={i} className="flex flex-col items-center p-6 rounded-lg bg-[#f5f4ed] hover:bg-[#acefe9]/30">
                                            <span className="text-4xl mb-3">{mood.split(" ")[0]}</span>
                                            <span className="text-sm font-semibold">{mood.split(" ")[1]}</span>
                                        </button>
                                    ))}
                                </div>

                                <textarea
                                    placeholder="What's on your mind today?"
                                    className="w-full min-h-[160px] bg-[#e9e8e1] rounded-lg p-6 resize-none"
                                />

                                <div className="mt-8 flex justify-end">
                                    <button className="px-10 py-4 bg-[#246965] text-white rounded-full font-bold flex items-center gap-2">
                                        Save Reflection <FaLongArrowAltRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="lg:col-span-5 space-y-8">

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h4 className="font-[Noto_Serif] text-xl mb-6">Weekly Trends</h4>
                                <div className="h-40 flex items-end gap-2">
                                    {[60, 85, 40, 30, 90, 75, 10].map((h, i) => (
                                        <div key={i} className="flex-1 bg-[#acefe9] rounded-t" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative rounded-xl overflow-hidden h-48">

                                {/* IMAGE */}
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBinHdMcJcKzmoZsqOimZlcaIH62-jFxafdK8jSEHd2LdjBZGqrcGfXZ3624XgFlzPxQNFCNL4ICTs6rqNB-Nf8opUMYHOnGHVUfP3qfPXVsosjt-b2nM1hHdmhuTOqJxnFDMD3MZSnRiO3Q615uYXrmxWYI_-22Xamu5C2zHqr9_6Cq_Po40mm98Y61LaJlP-HSmhn-V1omicNwGMXdXorg8Cg6RWzFkLJYECMRnz-QeTF6ddPgDplw-XszmqERYb_ZlrrqxRc5S1b"
                                    className="w-full h-full object-cover"
                                    alt="Nature"
                                />

                                {/* DARK OVERLAY (for readability) */}
                                <div className="absolute inset-0 bg-black/30"></div>

                                {/* TEXT */}
                                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">

                                    <p className="text-white italic text-lg leading-relaxed">
                                        "Nature does not hurry, yet everything is accomplished."
                                    </p>

                                    <span className="text-white/80 text-xs mt-3 uppercase tracking-widest">
                                        LAO TZU
                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RECENT REFLECTIONS */}
                    <section className="space-y-6">
                        <h4 className="font-[Noto_Serif] text-2xl">Recent Reflections</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#f5f4ed] p-8 rounded-xl flex gap-6">
                                <div className="text-3xl"><VscSmiley size={32} /></div>
                                <div>
                                    <h5 className="font-bold">Feeling accomplished</h5>
                                    <p className="text-sm italic opacity-70">
                                        Finished the big project today...
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#f5f4ed] p-8 rounded-xl flex gap-6">
                                <div className="text-3xl"><BsEmojiTear size={32} /></div>
                                <div>
                                    <h5 className="font-bold">Morning jitters</h5>
                                    <p className="text-sm italic opacity-70">
                                        A bit overwhelmed...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                {/* DESKTOP FOOTER */}
                <footer className="hidden lg:block w-full py-12 px-6 md:px-8 bg-[#f5f4ed] border-t">
                    <div className="flex justify-between items-center max-w-7xl mx-auto">
                        <span className="font-[Noto_Serif] italic text-[#246965]">
                            SerenityAI
                        </span>

                        <div className="flex gap-8 text-xs uppercase">
                            <a>Privacy</a>
                            <a>Terms</a>
                            <a>Support</a>
                            <a>Philosophy</a>
                        </div>

                        <p className="text-xs">© 2026 SerenityAI</p>
                    </div>
                </footer>

            </main>

            {/* MOBILE + TABLET BOTTOM NAV */}
            <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 px-6 py-4 flex justify-around items-center border-t rounded-t-3xl shadow-2xl">

                <Link to="/" className="flex flex-col items-center text-gray-400 text-xs">
                    <TiHome size={24} />
                    <span>Home</span>
                </Link>

                <Link to="/mood" className="flex flex-col items-center text-[#246965] text-xs font-bold">
                    <VscSmiley size={24} />
                    <span>Mood</span>
                </Link>

                <Link to="/journal" className="flex flex-col items-center text-gray-400 text-xs">
                    <BsJournalBookmark size={24} />
                    <span>Journal</span>
                </Link>

                <Link to="/insights" className="flex flex-col items-center text-gray-400 text-xs">
                    <AiOutlineStock size={24} />
                    <span>Insights</span>
                </Link>

            </nav>

        </div>
    );
};

export default MoodTracker;