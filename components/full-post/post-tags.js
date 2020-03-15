import {upperFirstLetter} from '../../utils/text-modifiers'
import PrimaryTag from '../tags/primary-tag'
import styles from './post.modules.scss'

const PostTags = ({tags}) => {
  console.log(tags)
  const tagMap = tags.map((tag, i) => <PrimaryTag>{upperFirstLetter(tag.name)}</PrimaryTag>)
  return (
    <div className={styles.tagWrapper}>
      {tagMap}
    </div>
  )
}

export default PostTags