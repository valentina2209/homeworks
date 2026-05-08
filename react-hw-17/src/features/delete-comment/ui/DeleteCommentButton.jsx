// import { useState } from 'react'
import { useDeleteCommentMutation } from '@/entities/comment/api/commentApi'

export function DeleteCommentButton({ commentId }) {
    const [deleteComment, { isLoading }] = useDeleteCommentMutation()

    const handleDelete = async () => {
        try {
            await deleteComment(commentId).unwrap()
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <button
            onClick={handleDelete}
            disabled={isLoading}
            style={{ color: isLoading ? '#888' : '#f00', cursor: 'pointer' }}
        >
            {isLoading ? '...' : 'Видалити'}
        </button>
    )
}