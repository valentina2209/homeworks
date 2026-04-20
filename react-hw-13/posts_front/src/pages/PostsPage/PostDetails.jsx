import React, { useEffect } from 'react'
import { useGetPostByIdQuery } from '../../api/postsApi'
import css from './PostDetails.module.css'
import Loader from '@/components/Loader/Loader'

const PostDetails = ({ postId, onClose }) => {
  const {
    data: post,
    isLoading,
    isError,
  } = useGetPostByIdQuery(postId, {
    skip: !postId,
  })

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!postId) return null;
  if (isLoading) return <Loader />
  if (isError) return <div className={css.error}>Помилка завантаження деталей.</div>;

  return (
    <div className={css.detailsCard}>
      <button className={css.closeBtn} onClick={onClose} title="Закрити (Esc)">
        &times;
      </button>

      <div className={css.header}>
        <span className={css.badge}>ID: {post.id}</span>
        <h3 className={css.title}>{post.title}</h3>
      </div>

      <div className={css.meta}>
        <div className={css.metaItem}>
          <span>📅 Дата:</span>
          <strong>{new Date(post.publicationDate).toLocaleDateString()}</strong>
        </div>
        <div className={css.metaItem}>
          <span>👍 Лайки:</span>
          <strong className={css.likes}>{post.likesNumber}</strong>
        </div>
        <div className={css.metaItem}>
          <span>👎 Дислайки:</span>
          <strong className={css.dislikes}>{post.dislikesNumber}</strong>
        </div>
      </div>

      <div className={css.contentSection}>
        <h4 className={css.contentLabel}>Опис публікації:</h4>
        <p className={css.contentText}>
          {post.content || 'Автор не залишив додаткового опису до цього поста.'}
        </p>
      </div>
    </div>
  )
}

export default PostDetails
