import './casper-theme/global.css'
import './casper-theme/screen.css'

const PostHtml = ({html}) => {
  return <section dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostHtml