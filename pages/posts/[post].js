import {getSinglePost} from '../../api/ghost'
import Post from '../../components/full-post/post'
import DefaultContainer from '../../components/misc/default-container'
import DefaultHead from '../../components/misc/default-head'
import NavigationBar from '../../components/navigation/navigation-bar.js'

const ViewPost = ({post}) => {
  console.log(post)
  return (
    <DefaultContainer>
      <DefaultHead/>
      <NavigationBar/>
      <Post post={post}/>
    </DefaultContainer>
  )
}

ViewPost.getInitialProps = async ({query}) => {
  const post = await getSinglePost(query.post)
  console.log(post)
  return { post }
}

export default ViewPost