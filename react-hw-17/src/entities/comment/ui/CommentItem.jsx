
export function CommentItem({ comment, actions }) {
    return (
        <div style={{
            borderBottom: '1px solid #444',
            padding: '10px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <span>
                <b style={{ color: '#fff' }}>{comment.authorName}</b>: {comment.text}
            </span>

            {/* Місце для кнопок, які ми передамо зовні */}
            {actions && <div>{actions}</div>}
        </div>
    )
}