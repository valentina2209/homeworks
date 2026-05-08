import { useSelector } from 'react-redux'
import { selectIsAuth } from '@/features/auth'
import { CommentItem } from './CommentItem'
import { DeleteCommentButton } from '@/features/delete-comment'

export function CommentList({ comments }) {
    const isAuth = useSelector(selectIsAuth)

    return (
        <div>
            {comments.map(comment => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    actions={isAuth ? <DeleteCommentButton commentId={comment.id} /> : null}
                />
            ))}
        </div>
    )
}