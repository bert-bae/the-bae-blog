import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VERSION
})

const getPosts = async (options = {}) => {
  const defaultOptions = {
    limit: options.limit || 'all',
    include: options.include ? `${options.include},tags,authors'` : 'tags,authors',
    order: options.order || 'published_at DESC',
    filter: options.filter ? options.filter.replace(/\s/, '-') : null
  }
  return await api.posts.browse(defaultOptions)
}

const getSinglePost = async (postSlug) => {
  return await api.posts.read({
    slug: postSlug,
  }, {
    include: 'tags,authors'
  })
}

export {
  getPosts,
  getSinglePost
}