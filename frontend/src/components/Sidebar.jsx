import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { VscSmiley } from "react-icons/vsc";
import { BsJournalBookmark } from "react-icons/bs";
import { AiOutlineStock } from "react-icons/ai";

const Sidebar = ({ activeRoute, isFixed }) => {
    return (
        <aside className={`hidden md:flex flex-col h-screen w-64 rounded-r-[3rem] bg-[#f5f4ed] py-8 space-y-2 shadow-[40px_0_40px_rgba(93,70,131,0.06)] ${isFixed ? "fixed left-0 top-0 z-40" : ""
            }`}>

            <div className="px-8 mb-10">
                <h1 className="font-[Noto_Serif] italic text-xl text-[#246965]">
                    SerenityAI
                </h1>
            </div>

            <div className="px-6 mb-8 flex items-center gap-3">
                <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBHseuh_R2T6uXwOTHUzhnUuMaFIVQu3znQM0vLqV6RPgtdsiekTWKthUFaXLVo15RyOo7kSaazhWSNf0TJcuq40JpSx_f5LTfV-3Ti8zG9R2PTC9y9Av0UqpLb-MWsV00_CZzDScQVszOQ2lQjUh7sY8QVg4Xs9Yv2bRBKYepAz2eAS4_qhdFCSpxBlkZ7hR6ob5mEpoeF9aHfJaRk1v979-kBsCiVUxSkTZCPE5Zr8sUzNyTOzNdGK0tZeVIsitlifpvv6Fea8qX"
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <p className="text-sm font-medium text-[#246965]">
                        Welcome back
                    </p>
                    <p className="text-[10px] uppercase opacity-70">
                        Your sanctuary awaits
                    </p>
                </div>
            </div>

            <nav className="flex-1 space-y-1">

                <Link
                    to="/"
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-full transition-all ${activeRoute === "/" ? "bg-white text-[#246965] shadow-sm" : "hover:bg-white/50"
                        }`}
                >
                    <TiHome size={20} /> Home
                </Link>

                <Link
                    to="/mood"
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-full transition-all ${activeRoute === "/mood" ? "bg-white text-[#246965] shadow-sm" : "hover:bg-white/50"
                        }`}
                >
                    <VscSmiley size={20} /> Mood
                </Link>

                <Link
                    to="/journal"
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-full transition-all ${activeRoute === "/journal" ? "bg-white text-[#246965] shadow-sm" : "hover:bg-white/50"
                        }`}
                >
                    <BsJournalBookmark size={20} /> Journal
                </Link>

                <Link
                    to="/insights"
                    className={`flex items-center gap-3 w-full px-4 py-3 rounded-full transition-all ${activeRoute === "/insights" ? "bg-white text-[#246965] shadow-sm" : "hover:bg-white/50"
                        }`}
                >
                    <AiOutlineStock size={20} /> Insights
                </Link>

            </nav>
        </aside>
    );
};

export default Sidebar;
