import moment from 'moment'

const PostHeader = ({post}) => {
  return (
    <div>
      <img src={post.feature_image}/>
      <h1>{post.title}</h1>
      <p>
        <i><span>{moment(post.published_at).format('LL')}</span></i> | Reading time: {post.reading_time}min
      </p>
    </div>
  )
}

export default PostHeader

// { id: '5e48f4ed94b82122d97fe3eb',
//     uuid: 'c0bf2e52-3940-42f0-9ec1-c6fab9fc00db',
//     title: 'Blog Post',
//     slug: 'blog-post',
//     html: '<p>This is a test post.</p>',
//     comment_id: '5e48f4ed94b82122d97fe3eb',
//     feature_image:
//      'http://localhost:2368/content/images/2020/02/simone-dalmeri-48KNCEZVaE0-unsplash.jpg',
//     featured: false,
//     visibility: 'public',
//     send_email_when_published: false,
//     created_at: '2020-02-16T07:53:17.000+00:00',
//     updated_at: '2020-02-16T07:53:50.000+00:00',
//     published_at: '2020-02-16T07:53:50.000+00:00',
//     custom_excerpt: null,
//     codeinjection_head: null,
//     codeinjection_foot: null,
//     custom_template: null,
//     canonical_url: null,
//     url: 'http://localhost:2368/blog-post/',
//     excerpt: 'This is a test post.',
//     reading_time: 0,
//     og_image: null,
//     og_title: null,
//     og_description: null,
//     twitter_image: null,
//     twitter_title: null,
//     twitter_description: null,
//     meta_title: null,
//     meta_description: null,
//     email_subject: null }