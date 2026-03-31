import MessageBubble from "./MessageBubble";

const ChatWindow = ({ messages, loading }) => {
    return (
        <div className="flex-1 overflow-y-auto py-6 space-y-6">
            {messages.map((msg, i) => (
                <MessageBubble key={i} message={msg} />
            ))}

            {loading && (
                <div className="text-sm text-gray-500 italic">
                    Serenity AI is reflecting...
                </div>
            )}
        </div>
    );
};

export default ChatWindow;