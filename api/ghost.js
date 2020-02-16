import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VERSION
})

const getPosts = async () => {
  return await api.posts.browse({limit: "all"})
}

const getSinglePost = async (postSlug) => {
  return await api.posts.read({slug: postSlug})
}

export {
  getPosts,
  getSinglePost
}