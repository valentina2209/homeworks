import { useState } from 'react'
import PostsList from './/PostsList'
import PostDetails from './/PostDetails'
import css from './PostsPage.module.css'
import Modal from '@/components/Modal/Modal'

const PostsPage = () => {
  const [selectedPostId, setSelectedPostId] = useState(null)

  return (
    <div className={css.pageWrapper}>

      {selectedPostId && (
        <Modal onClose={() => setSelectedPostId(null)}>
          <PostDetails
            postId={selectedPostId}
            onClose={() => setSelectedPostId(null)}
          />
        </Modal>
      )}

      <div className={css.content}>
        <PostsList onSelect={setSelectedPostId} />
      </div>
    </div>
  )
}

export default PostsPage
