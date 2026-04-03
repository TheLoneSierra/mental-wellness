import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { TiHome } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { IoCameraOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const JournalPage = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [journals, setJournals] = useState([]);

    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    // SAVE
    const handleSave = async () => {
        if (!title || !content) return;

        const token = localStorage.getItem("token");

        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/journal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title, content }),
        });

        const data = await res.json();

        setJournals([data, ...journals]);
        setTitle("");
        setContent("");
    };

    // FETCH
    useEffect(() => {
        const fetchJournals = async () => {
            const token = localStorage.getItem("token");

            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/journal`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await res.json();
            setJournals(data);
        };

        fetchJournals();
    }, []);

    // DELETE
    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");

        await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/journal/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        setJournals(journals.filter(j => j._id !== id));
    };

    return (
        <div className="bg-[#fbf9f4] text-[#31332e] font-[Manrope] min-h-screen flex">

            <Sidebar activeRoute="/journal" isFixed={true} />

            <main className="flex-1 md:ml-64">

                <header className="pt-12 pb-8 px-8 md:px-16 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <span className="text-[#246965] text-[10px] uppercase tracking-[0.2em]">
                            Private Space
                        </span>

                        <h1 className="font-[Noto_Serif] text-4xl md:text-5xl font-bold">
                            Daily Journal
                        </h1>

                        <p className="text-gray-500 max-w-md">
                            Find clarity in your thoughts. Your words are safe here.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-[#f5f4ed] px-6 py-3 rounded-full">
                        <SlCalender size={18} /> {today}
                    </div>
                </header>

                <div className="px-8 md:px-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pb-32 lg:pb-24">

                    {/* EDITOR */}
                    <section className="lg:col-span-8 space-y-8">

                        <div className="bg-white rounded-xl p-8 md:p-12 shadow">

                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Title your reflection..."
                                className="w-full text-3xl font-bold font-[Noto_Serif] mb-6 bg-transparent outline-none"
                            />

                            <textarea
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="How are you feeling today?"
                                className="w-full min-h-[400px] bg-transparent outline-none text-lg"
                            />

                            <div className="mt-8 flex justify-between">


                                <button
                                    onClick={handleSave}
                                    className="bg-[#246965] text-white px-8 py-1 rounded-full font-bold"
                                >
                                    Save Entry
                                </button>
                            </div>

                        </div>

                        <div className="bg-[#ecdcff]/40 rounded-xl p-8 text-center">
                            <p className="italic text-lg font-[Noto_Serif]">
                                "The journal is a sanctuary where the heart speaks its truth without fear of judgment."
                            </p>
                        </div>

                    </section>

                    {/* RIGHT SIDE */}
                    <section className="lg:col-span-4 space-y-6">

                        <h2 className="font-[Noto_Serif] text-xl font-bold">
                            Past Reflections
                        </h2>

                        <div className="space-y-4">
                            {journals.map((item) => (
                                <div key={item._id} className="bg-[#f5f4ed] p-6 rounded-xl hover:bg-white transition flex justify-between">

                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p className="text-sm text-gray-500">
                                            {item.content}
                                        </p>
                                    </div>

                                    <button className="cursor-pointer" onClick={() => handleDelete(item._id)} >
                                        <MdDeleteOutline />
                                    </button>

                                </div>
                            ))}
                        </div>

                        <div className="bg-[#acefe9] p-8 rounded-xl">
                            <h4 className="font-bold mb-2">Journal Insights</h4>
                            <p className="text-sm">
                                You've written for 5 days straight!
                            </p>
                        </div>

                    </section>

                </div>

                {/* MOBILE NAV (SAME AS MOOD PAGE) */} <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl z-50 px-6 py-4 flex justify-around items-center border-t rounded-t-3xl shadow-2xl"> <Link to="/" className="flex flex-col items-center text-gray-400 text-xs"> <TiHome size={24} /> <span>Home</span> </Link> <Link to="/mood" className="flex flex-col items-center text-gray-400 text-xs"> <VscSmiley size={24} /> <span>Mood</span> </Link> <Link to="/journal" className="flex flex-col items-center text-[#246965] text-xs font-bold"> <BsJournalBookmark size={24} /> <span>Journal</span> </Link> <Link to="/insights" className="flex flex-col items-center text-gray-400 text-xs"> <AiOutlineStock size={24} /> <span>Insights</span> </Link> </nav>            </main>
        </div>
    );
};

export default JournalPage;