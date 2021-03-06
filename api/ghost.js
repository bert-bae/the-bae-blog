import GhostContentAPI from '@tryghost/content-api'

const api = new GhostContentAPI({
  url: process.env.GHOST_URL,
  key: process.env.GHOST_KEY,
  version: process.env.GHOST_VERSION
})

const getTags = async () => {
  return api.tags.browse()
}

const getFeaturePosts = async (limit) => {
  return await api.posts.browse({
    limit: limit || 'all',
    include: 'tags,authors',
    order: 'published_at DESC',
    filter: 'featured:true'
  })
}

const getPosts = async (options = {}) => {
  let result = {}
  const defaultOptions = {
    limit: options.limit || 'all',
    include: options.include ? `${options.include},tags,authors'` : 'tags,authors',
    order: options.order || 'published_at DESC'
  }

  const tags = await getTags()
  
  for (const tag of tags) {
    result[tag.name] = await api.posts.browse({
      ...defaultOptions,
      filter: `tag:${tag.slug}`
    })
  }
  
  result.featured = await getFeaturePosts()
  
  return result
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
  getFeaturePosts,
  getSinglePost
}