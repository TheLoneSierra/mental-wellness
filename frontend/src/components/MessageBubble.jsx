const MessageBubble = ({ message }) => {
    const isUser = message.sender === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={`max-w-[70%] p-4 rounded-2xl shadow ${isUser
                        ? "bg-[#acefe9] text-[#115b58]"
                        : "bg-[#f5f4ed] text-[#31332e]"
                    }`}
            >
                {message.text}
            </div>
        </div>
    );
};

export default MessageBubble;