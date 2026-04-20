import React, { useState } from 'react'
import {
  useGetPostsPQuery,
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
} from '../../api/postsApi'
import PostForm from '@/components/PostForm'
import css from "./PostsList.module.css"
import Modal from '@/components/Modal/Modal'

const PostsList = ({ onSelect }) => {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError, isFetching } = useGetPostsPQuery({
    page,
    limit: 5,
  })

  const [deletePost] = useDeletePostMutation()
  const [likePost] = useLikePostMutation()
  const [dislikePost] = useDislikePostMutation()
  const [editingPost, setEditingPost] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingPost(null);
  };


  if (isLoading) return <p>Завантаження...</p>
  if (isError) return <p>Помилка завантаження постів</p>

  const { items, totalPages, remaining } = data

  return (
    <div className={css.container}>
      {!isFormOpen && !editingPost && (
        <button
          className={css.createBtn}
          onClick={() => setIsFormOpen(true)}
        >
          <span>+</span> Створити новий пост
        </button>
      )}

      {(isFormOpen || editingPost) && (
        <Modal onClose={handleCloseForm}>
          <PostForm
            postToEdit={editingPost}
            onClose={handleCloseForm}
          />
        </Modal>
      )}

      <ul className={css.list}>
        {items.map((post) => (
          <li
            key={post.id}
            className={css.postCard}
          >
            <div className={css.postContent}>
              <h4 className={css.postTitle}>{post.title}</h4>
              <div className={css.stats}>
                <div className={css.statGroup}>
                  <button className={css.iconBtn} onClick={() => likePost(post.id)}>👍</button>
                  <span>{post.likesNumber}</span>
                </div>
                <div className={css.statGroup}>
                  <button className={css.iconBtn} onClick={() => dislikePost(post.id)}>👎</button>
                  <span>{post.dislikesNumber}</span>
                </div>
              </div>
            </div>

            <div className={css.actions}>
              <button className={css.actionBtn} onClick={() => onSelect(post.id)}>Деталі</button>
              <button className={css.actionBtn} onClick={() => setEditingPost(post)}>Редагувати</button>
              <button
                className={`${css.actionBtn} ${css.deleteBtn}`}
                onClick={() => {
                  if (window.confirm('Видалити пост?')) deletePost(post.id)
                }}
              >
                Видалити
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isFetching && <div className={css.fetchingInfo}>Оновлення даних...</div>}

      <div className={css.pagination}>
        <button
          className={`${css.pageBtn} ${css.navBtn}`}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          «
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`${css.pageBtn} ${page === i + 1 ? css.active : ''}`}
          >
            {i + 1}
          </button>
        ))}


        <button
          className={`${css.pageBtn} ${css.navBtn}`}
          onClick={() => setPage((p) => (remaining > 0 ? p + 1 : p))}
          disabled={remaining === 0}
        >
          »
        </button>
      </div>
    </div>
  )
}

export default PostsList
