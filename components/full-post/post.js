import PostHtml from './post-html'
import MainContainer from '../containers/main-container'

const Post = ({post}) => {
  return (
    <MainContainer>
      <PostHtml html={post.html}/>
    </MainContainer>
  )
}

export default Post