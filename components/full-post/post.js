import PostHeader from './post-header'
import PostAuthor from './post-author'
import PostHtml from './post-html'
import MainContainer from '../containers/main-container'
import PostContainer from '../containers/post-container'


const Post = ({post}) => {
  return (
    <MainContainer>
      <PostHeader post={post}/>
      <PostContainer>
        <PostHtml html={post.html}/>
        <PostAuthor post={post}/>
      </PostContainer>
    </MainContainer>
  )
}

export default Post