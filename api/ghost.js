import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VERSION
})

const getArticles = async () => {
  return await api.posts.browse({limit: "all"})
}

export {
  getArticles
}