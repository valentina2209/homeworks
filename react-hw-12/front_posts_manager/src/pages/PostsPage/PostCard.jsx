import styles from './PostCard.module.css'

function PostCard({ post }) {
  return (
    <div className={styles.postCard}>
      <h2 className={styles.postTitle}>{post.title}</h2>
      <div className={styles.postBody}>{post.body}</div>
      <div className={styles.cardFooter}>
        <div className={styles.actions}>
          <div className={styles.likeBtn}>👍 {post.likesNumber}</div>
          <div className={styles.dislikeBtn}>👎 {post.dislikesNumber}</div>
        </div>
        <div className={styles.author}>{post.authorId}</div>
      </div>
    </div>
  )
}

export default PostCard
