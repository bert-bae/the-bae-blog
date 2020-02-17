import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {NewReleasesTwoTone, GroupTwoTone, LocalFloristTwoTone, SentimentDissatisfiedTwoTone} from '@material-ui/icons'
import {getPosts} from '../../api/ghost'

const StyledAction = withStyles(theme => ({
  root: {
    "&$selected": {
      color: "red"
    }
  },
  selected: {}
}))(BottomNavigationAction);

const NavigationFooter = ({page, setState}) => {
  return (
    <BottomNavigation
      value={page}
      onChange={async (event, newValue) => {
        const posts = await getPosts({ filter: `tags:${newValue}`})
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
  )
}

export default NavigationFooter