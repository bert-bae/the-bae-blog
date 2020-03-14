import PreviewAuthor from './preview-author'
import styles from './preview.modules.scss'

const PreviewFooter = ({post}) => {
  return (
    <>
      <h2>{post.title}</h2>
      <PreviewAuthor author={post.authors[0]}/>
    </>
  )
}

export default PreviewFooter