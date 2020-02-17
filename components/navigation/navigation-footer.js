import {useState} from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {
  NewReleasesTwoTone, 
  GroupTwoTone, 
  LocalFloristTwoTone, 
  SentimentDissatisfiedTwoTone,
  ArrowDropUp
} from '@material-ui/icons'
import {getPosts} from '../../api/ghost'
import styles from './navigation-bar.modules.scss'

const StyledAction = withStyles(theme => ({
  root: {
    "&$selected": {
      color: "red"
    }
  },
  selected: {}
}))(BottomNavigationAction);

const NavigationFooter = ({page, setState}) => {
  const [toggle, setToggle] = useState(false)
  const onClick = () => {
    setToggle(!toggle)
  }

  return (
    <div className={styles.navigationFooter} data-toggle={toggle}>
      <div className={styles.toggler} onClick={onClick}>
        <ArrowDropUp className={styles.toggleArrow}/>
      </div>
      <BottomNavigation
        value={page}
        onChange={async (event, newValue) => {
          const filter = newValue !== 'latest' ? `tags:${newValue}` : null
          const posts = await getPosts({ filter })
          setState.setPosts(posts)
          setState.setPage(newValue)
        }}
        showLabels
      >
        <StyledAction label="Latest" value="latest"
          icon={<NewReleasesTwoTone/>}
        />
        <StyledAction label="Appreciation" value="appreciation"
          icon={<LocalFloristTwoTone/>}
        />
        <StyledAction label="Communication" value="communication"
          icon={<GroupTwoTone/>}
        />
        <StyledAction label="Handling conflicts" value="handling conflicts"
          icon={<SentimentDissatisfiedTwoTone/>}
        />
      </BottomNavigation>
    </div>
  )
}

export default NavigationFooter