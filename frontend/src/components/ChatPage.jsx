import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import Sidebar from "../components/Sidebar";
import axios from "axios";
// Added imports for icons
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false); // Added state

    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const today = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token, navigate]);

    const handleSend = async (text) => {
        setMessages((prev) => [...prev, { sender: "user", text }]);
        setLoading(true);

        try {
            const res = await axios.post(
                "http://localhost:5000/api/chat",
                { message: text },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setMessages((prev) => [
                ...prev,
                { sender: "ai", text: res.data.response },
            ]);
        } catch (err) {
            console.error("CHAT ERROR:", err.response?.data || err.message);
            setMessages((prev) => [
                ...prev,
                { sender: "ai", text: "Something went wrong" },
            ]);
        }
        setLoading(false);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-[#fbf9f4] font-[Manrope]">
            <Sidebar activeRoute="/chat" isFixed={true} />

            <div className="flex-1 flex flex-col min-w-0 h-full md:ml-64">

                {/* HEADER SECTION - Same as MoodTracker */}
                <header className="sticky top-0 bg-[#fbf9f4]/80 backdrop-blur-md px-6 py-6 w-full max-w-4xl mx-auto flex justify-between items-center z-10">
                    <div>
                        <h2 className="font-[Noto_Serif] font-bold text-2xl text-[#246965]">
                            Your Chat Companion
                        </h2>
                        <span className="text-sm opacity-70">
                            your chats are safe with us🍁
                        </span>
                    </div>

                    {/* RIGHT SIDE ICONS */}
                    <div className="flex items-center gap-4 text-[#31332e]">
                        <IoPersonOutline
                            size={20}
                            className="cursor-pointer hover:text-[#246965] transition-colors"
                            onClick={() => setShowLogoutModal(true)}
                        />
                        <IoSettingsOutline
                            size={20}
                            className="cursor-pointer hover:text-[#246965] transition-colors"
                        />
                    </div>
                </header>

                {/* CHAT AREA */}
                <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-4 overflow-hidden">
                    <ChatWindow messages={messages} loading={loading} />

                    <div className="pb-4 pt-2">
                        <ChatInput onSend={handleSend} />
                    </div>
                </div>
            </div>

            {/* LOGOUT MODAL - Copied from MoodTracker */}
            {showLogoutModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-[#dadad2]/40 backdrop-blur-md" onClick={() => setShowLogoutModal(false)}></div>
                    <div className="relative bg-white w-full max-w-sm rounded-xl p-10 shadow-2xl border border-gray-200 text-center">
                        <div className="mb-6">
                            <div className="w-16 h-16 bg-[#f5f4ed] rounded-full flex items-center justify-center mx-auto mb-6">
                                <IoIosLogOut className="text-[#246965] text-3xl" />
                            </div>
                            <h2 className="font-[Noto_Serif] text-2xl font-bold text-[#31332e]">
                                Too soon to logout?
                            </h2>
                            <p className="mt-3 text-[#5e6059] text-sm leading-relaxed">
                                Your session progress is saved, but your journey is just beginning.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className="w-full py-4 bg-[#246965] text-white rounded-full font-bold hover:opacity-90 transition-all active:scale-95"
                            >
                                No, Stay
                            </button>
                            <button
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    navigate("/login");
                                }}
                                className="w-full py-4 text-[#246965] font-bold border border-[#246965]/20 rounded-full hover:bg-[#acefe9]/20 transition-all active:scale-95"
                            >
                                Yes, Logout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPage;