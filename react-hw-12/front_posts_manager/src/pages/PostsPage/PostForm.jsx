import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import useForm from "@/hooks/useForm";
import { getPostById, setPostId } from "@/store/slices/postsSlice";
import { updatePostThunk, createNewPostThunk } from "@/store/slices/postsThunk";
import styles from "./PostForm.module.css";

function PostForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const goTo = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(setPostId(id));
        }
        return () => dispatch(setPostId(null));
    }, [id, dispatch]);

    const postValue = useSelector(getPostById);

    const titleId = useId();
    const bodyId = useId();
    const authorId = useId();

    const buttonText = id ? "Редагувати" : "Додати";

    const initFormValue = id && postValue && Object.keys(postValue).length > 0
        ? postValue
        : {
            authorId: "",
            title: "",
            body: ""
        };

    const form = useForm(initFormValue);

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            if (id) {
                await dispatch(updatePostThunk(form.values)).unwrap();
            } else {
                await dispatch(
                    createNewPostThunk({
                        ...form.values,
                        likesNumber: 0,
                        dislikesNumber: 0,
                        createAt: new Date().toISOString()
                    })
                ).unwrap();
            }
            goTo('/posts');
        } catch (error) {
            console.error("Помилка:", error);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={submitForm}>
                <div className={styles.formGroup}>
                    <label htmlFor={titleId} className={styles.label}>Заголовок</label>
                    <input
                        type="text"
                        id={titleId}
                        name="title"
                        className={styles.input}
                        placeholder="Введіть заголовок поста"
                        value={form.values.title}
                        onChange={form.handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor={bodyId} className={styles.label}>Опис</label>
                    <textarea
                        name="body"
                        id={bodyId}
                        className={styles.textarea}
                        placeholder="Введіть текст поста"
                        value={form.values.body}
                        onChange={form.handleChange}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor={authorId} className={styles.label}>Автор</label>
                    <input
                        type="text"
                        id={authorId}
                        name="authorId"
                        className={styles.input}
                        placeholder="Введіть ім'я автора"
                        value={form.values.authorId}
                        onChange={form.handleChange}
                        required
                    />
                </div>

                <button type="submit" className={styles.submitBtn}>
                    {buttonText}
                </button>
            </form>
        </div>
    );
}

export default PostForm;