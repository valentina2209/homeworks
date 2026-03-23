import { useNavigate } from 'react-router'
import PostCard from './PostCard'
import css from "./PostsList.module.css"

function PostsList({ posts }) {
  const goTo = useNavigate()

  return (
    <div className={css.container}>
      {posts.length === 0 ? (
        <div className={css.emptyMessage}>Список порожній</div>
      ) : (
        <>
          <button className={css.addBtn} onClick={() => goTo('/form')}>
            Додати новий пост
          </button>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}

    </div>
  )
}

export default PostsList
