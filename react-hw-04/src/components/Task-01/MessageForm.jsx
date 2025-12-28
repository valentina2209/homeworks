import { useState } from "react";
import MessageList from "./MessageList";
import styles from "./MessageForm.module.css";

function MessageForm() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello", likes: 2 },
        { id: 2, text: "Hi", likes: 4 },
    ]);
    const [send, setSend] = useState("");

    const addMessage = (text) => {
        if (!text.trim()) return;

        setMessages((prev) => [
            ...prev,
            { id: Date.now(), text, likes: 0 },
        ]);
    };

    const likeMessage = (id) => {
        setMessages((prev) =>
            prev.map((msg) => (msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg))
        );
    };

    const dislikeMessage = (id) => {
        setMessages((prev) =>
            prev.map((msg) => (msg.id === id && msg.likes > 0 ? { ...msg, likes: msg.likes - 1 } : msg))
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addMessage(send);
        setSend("");
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    value={send}
                    onChange={(event) => setSend(event.target.value)}
                    placeholder="Type a new message"
                />
                <button className={styles.button} type="submit">
                    Send
                </button>
            </form>

            <MessageList messages={messages} onLike={likeMessage} onDislike={dislikeMessage} />

            <div className={styles.meta}>{messages.length} messages</div>
        </div>
    );
}

export default MessageForm;