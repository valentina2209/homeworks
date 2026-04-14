import { useDispatch } from 'react-redux'
import styles from './PostCard.module.css'
import { deletePostThunk } from '@/store/slices/postsThunk';
import toast from 'react-hot-toast';

function PostCard({ post }) {
  const dispatch = useDispatch();

  const handleDelete = async (postId) => {
    try {
      await dispatch(deletePostThunk(postId)).unwrap();
      toast.success('Пост успішно видалено!');
    } catch (error) {
      console.error(error)
      toast.error('Не вдалося видалити пост');
    }
  };

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
      <button onClick={() => handleDelete(post.id)}>Delete</button>
    </div>
  )
}

export default PostCard
