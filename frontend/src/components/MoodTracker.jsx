
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { TiHome } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const MoodTracker = () => {

    const [selectedMood, setSelectedMood] = useState("");
    const [note, setNote] = useState("");
    const [moods, setMoods] = useState([]);
    const [quote, setQuote] = useState("");
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    // SAVE MOOD
    const handleSave = async () => {
        if (!selectedMood || !note) {
            alert("Select mood and write something");
            return;
        }

        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/moods`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    moodType: selectedMood,
                    note,
                }),
            });

            const text = await res.text();
            if (!res.ok) return;

            const data = JSON.parse(text);

            setMoods([data, ...moods]);
            setSelectedMood("");
            setNote("");

        } catch (err) {
            console.error(err);
        }
    };

    // DELETE MOOD
    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/moods/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) return;

            setMoods(moods.filter((item) => item._id !== id));

        } catch (err) {
            console.error(err);
        }
    };

    // FETCH QUOTE
    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/affirmations`);
                const data = await res.json();
                setQuote(data.quote);
            } catch {
                setQuote("Stay grounded and keep moving forward.");
            }
        };

        fetchQuote();
    }, []);

    // FETCH MOODS
    useEffect(() => {
        const fetchMoods = async () => {
            const token = localStorage.getItem("token");

            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/moods`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const text = await res.text();
                if (!res.ok) return;

                const data = JSON.parse(text);
                setMoods(data);

            } catch (err) {
                console.error(err);
            }
        };

        fetchMoods();
    }, []);

    return (
        <div className="bg-[#fbf9f4] text-[#31332e] min-h-screen flex overflow-hidden font-[Manrope]">

            <Sidebar activeRoute="/mood" isFixed={false} />

            <main className="flex-1 overflow-y-auto h-screen">

                <header className="sticky top-0 bg-[#fbf9f4]/80 backdrop-blur-md px-6 py-6 max-w-7xl mx-auto flex justify-between items-center">
                    <div>
                        <h2 className="font-[Noto_Serif] font-bold text-2xl text-[#246965]">
                            Mood Tracker
                        </h2>
                        <span className="text-sm opacity-70">{today}</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <IoPersonOutline size={18} onClick={() => setShowLogoutModal(true)} />
                        <IoSettingsOutline size={18} />
                    </div>
                </header>

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

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* LEFT */}
                        <div className="lg:col-span-7 space-y-8">

                            <div className="bg-white rounded-xl p-8 shadow-sm">
                                <h4 className="font-[Noto_Serif] text-xl mb-8">
                                    How are you feeling right now?
                                </h4>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                                    {["😊 Happy", "😌 Relaxed", "😰 Stressed", "😔 Sad"].map((mood, i) => {
                                        const emoji = mood.split(" ")[0];
                                        const label = mood.split(" ")[1];

                                        return (
                                            <button
                                                key={i}
                                                onClick={() => setSelectedMood(label)}
                                                className={`flex flex-col items-center p-6 rounded-lg 
                                                ${selectedMood === label ? "bg-[#acefe9]" : "bg-[#f5f4ed] hover:bg-[#acefe9]/30"}`}
                                            >
                                                <span className="text-4xl mb-3">{emoji}</span>
                                                <span className="text-sm font-semibold">{label}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <textarea
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="What's on your mind today?"
                                    className="w-full min-h-[160px] bg-[#e9e8e1] rounded-lg p-6 resize-none"
                                />

                                <div className="mt-8 flex justify-end">
                                    <button
                                        onClick={handleSave}
                                        className="px-10 py-4 bg-[#246965] text-white rounded-full font-bold flex items-center gap-2"
                                    >
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
                        </div>
                    </div>

                    {/* RECENT */}
                    <section className="space-y-6">
                        <h4 className="font-[Noto_Serif] text-2xl">Recent Reflections</h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {moods.map((item) => (
                                <div key={item._id} className="bg-[#f5f4ed] p-8 rounded-xl flex justify-between items-start">

                                    <div className="flex gap-6">
                                        <div className="text-3xl">
                                            {item.moodType === "Happy" && "😊"}
                                            {item.moodType === "Relaxed" && "😌"}
                                            {item.moodType === "Stressed" && "😰"}
                                            {item.moodType === "Sad" && "😔"}
                                        </div>

                                        <div>
                                            <h5 className="font-bold">{item.moodType}</h5>
                                            <p className="text-sm italic opacity-70">
                                                {item.note}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="text-[#246965] hover:text-red-500"
                                    >
                                        <MdDeleteOutline size={22} />
                                    </button>

                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* MODAL */}
                {showLogoutModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

                        {/* BACKDROP */}
                        <div className="absolute inset-0 bg-[#dadad2]/40 backdrop-blur-md"></div>

                        {/* MODAL */}
                        <div className="relative bg-white w-full max-w-sm rounded-xl p-10 shadow-[0_-4px_40px_rgba(93,70,131,0.06)] border border-gray-200 text-center">

                            <div className="mb-6">

                                <div className="w-16 h-16 bg-[#f5f4ed] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <IoIosLogOut className="text-[#246965] text-3xl" />
                                </div>

                                <h2 className="font-[Noto_Serif] text-2xl font-bold text-[#31332e]">
                                    Too soon to logout?
                                </h2>

                                <p className="mt-3 text-[#5e6059] text-sm leading-relaxed">
                                    Your session progress is being saved, but your journey is just beginning.
                                </p>

                            </div>

                            <div className="flex flex-col gap-3">

                                {/* STAY BUTTON */}
                                <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="w-full py-4 bg-[#246965] text-white rounded-full font-bold hover:opacity-90 transition-all active:scale-95"
                                >
                                    No, Stay
                                </button>

                                {/* LOGOUT BUTTON */}
                                <button
                                    onClick={() => window.location.href = "/"}
                                    className="w-full py-4 text-[#246965] font-bold border border-[#246965]/20 rounded-full hover:bg-[#acefe9]/20 transition-all active:scale-95"
                                >
                                    Yes, Logout
                                </button>

                            </div>

                        </div>
                    </div>
                )}


            </main>

            {/* MOBILE NAV */}
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
