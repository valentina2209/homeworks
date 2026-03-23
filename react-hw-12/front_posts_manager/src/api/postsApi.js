import axios from 'axios'

const baseUrl = 'http://localhost:3000'

export const loadPosts = async ({ page = 1, limit = 10 }) => {
  const res = await axios.get(`${baseUrl}/posts`, {
    params: {
      page,
      limit,
    },
  })
  return res?.data
}
