import PostHeader from './post-header'
import PostHtml from './post-html'
import MainContainer from '../containers/main-container'
import PostContainer from '../containers/post-container'

const Post = ({post}) => {
  return (
    <MainContainer>
      <PostHeader post={post}/>
      <PostContainer>
        <PostHtml html={post.html}/>
      </PostContainer>
    </MainContainer>
  )
}

export default Post