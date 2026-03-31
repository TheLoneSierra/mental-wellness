import { useState } from "react";

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <div className="py-4">
            <div className="flex items-center bg-[#efeee7] rounded-full px-4 py-2 shadow">
                <input
                    className="flex-1 bg-transparent outline-none px-2"
                    placeholder="Type your thoughts here..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                />

                <button
                    onClick={handleSend}
                    className="bg-[#246965] text-white px-4 py-2 rounded-full"
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInput;