import Router from '../misc/router'
import PreviewHeader from './preview-header'
import PreviewFooter from './preview-footer'
import styles from './preview.modules.scss'

const PreviewCard = ({post, hover, setHover}) => {
  return (
    <Router path='/posts/[post]' asPath={`/posts/${post.slug}`}>
      <div className={styles.previewCard} 
        data-hover={hover} 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)} 
      >
        <PreviewHeader post={post}/>
        <PreviewFooter post={post}/>
      </div>
    </Router>
  )
}

export default PreviewCard