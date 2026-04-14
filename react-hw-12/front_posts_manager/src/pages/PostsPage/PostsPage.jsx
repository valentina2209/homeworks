import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postsThunk } from '@/store/slices/postsThunk'
import PostsList from './PostsList'
import PaginationBlock from './PaginationBlock'

function PostsPage() {
  const { posts, meta, loading, error } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(postsThunk({ ...meta }))
    //eslint-disable-next-line
  }, [])

  const onPageSelect = (page) => {
    dispatch(
      postsThunk({
        ...meta,
        page,
      })
    )
  }

  return (
    <div>
      {!!posts && <PostsList posts={posts} />}
      {!!error && <div>{error}</div>}
      {loading && <div>Loading ...</div>}
      <PaginationBlock
        page={meta.page}
        totalPagesNumber={meta.totalPagesNumber}
        onPageSelect={onPageSelect}
      />
    </div>
  )
}

export default PostsPage
