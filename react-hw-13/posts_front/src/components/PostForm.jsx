import { useState, useEffect } from 'react';
import { useAddPostMutation, useEditPostMutation } from '../api/postsApi';
import toast from 'react-hot-toast';
import styles from './PostForm.module.css';

const PostForm = ({ postToEdit, onClose }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const [addPost, { isLoading: isAdding }] = useAddPostMutation();
    const [editPost, { isLoading: isEditing }] = useEditPostMutation();

    useEffect(() => {
        if (postToEdit) {
            setTitle(postToEdit.title);
            setBody(postToEdit.body);
        }
    }, [postToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !body.trim()) {
            toast.error('Заповніть усі поля!');
            return;
        }

        try {
            if (postToEdit) {
                await editPost({ id: postToEdit.id, title, body }).unwrap();
                toast.success('Пост оновлено!');
            } else {
                await addPost({ title, body, userId: 1 }).unwrap();
                toast.success('Пост додано!');
            }
            if (onClose) onClose();
        } catch (err) {
            console.log(err)
            toast.error('Помилка запиту');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <h3 className={styles.title}>{postToEdit ? '📝 Редагування' : '✍️ Новий пост'}</h3>

            <input
                className={styles.input}
                type="text"
                placeholder="Заголовок поста..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
                className={styles.textarea}
                placeholder="Про що хочете розповісти?"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />

            <div className={styles.buttonGroup}>
                <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isAdding || isEditing}
                >
                    {postToEdit ? 'Зберегти' : 'Опублікувати'}
                </button>

                {onClose && (
                    <button type="button" onClick={onClose} className={styles.cancelBtn}>
                        Скасувати
                    </button>
                )}
            </div>
        </form>
    );
};

export default PostForm;