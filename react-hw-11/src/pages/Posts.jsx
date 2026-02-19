import { fetchPosts } from "@/redux/slices/posts/postsThunks";
import { useEffect } from "react";
import { deletePost } from "@/redux/slices/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./Posts.module.css"
import Loader from "@/components/Loader";
import Error from "@/components/Error";

function Posts() {
    const dispatch = useDispatch()
    const { postsList, loading, error } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    if (loading) return <Loader />
    if (error) return <Error message={error} />

    return (
        <div className={css.container}>
            <h1 className={css.mainTitle}>Список публікацій</h1>
            <ul className={css.list}>
                {postsList.map(post => (
                    <li key={post.id} className={css.card}>
                        <div className={css.cardContainer}>
                            <h2 className={css.postTitle}>{post.title}</h2>
                            {/* <p className={css.postBody}>{post.body}</p> */}
                        </div>
                        <button
                            className={css.deleteBtn}
                            onClick={() => dispatch(deletePost(post.id))}
                            title="Видалити пост"
                        >
                            🗑
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Posts;