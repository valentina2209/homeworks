import MessageItem from "./MessageItem";
import styles from "./MessageList.module.css";

function MessageList({ messages, onLike, onDislike }) {
    if (!messages || messages.length === 0) {
        return <div className={styles.empty}>No messages yet — be the first to say hi!</div>;
    }

    return (
        <ul className={styles.list}>
            {messages.map((message) => (
                <MessageItem key={message.id} {...message} onLike={onLike} onDislike={onDislike} />
            ))}
        </ul>
    );
}

export default MessageList;

