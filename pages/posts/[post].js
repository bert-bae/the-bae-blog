import {getSinglePost} from '../../api/ghost'
import Post from '../../components/full-post/post'
import DefaultHead from '../../components/misc/default-head'
import NavigationBar from '../../components/navigation/navigation-bar.js'

const ViewPost = ({post}) => {
  return (
    <>
      <DefaultHead/>
      <NavigationBar/>
      <Post post={post}/>
    </>
  )
}

ViewPost.getInitialProps = async ({query}) => {
  const post = await getSinglePost(query.post)
  console.log(post)
  return { post }
}

export default ViewPost