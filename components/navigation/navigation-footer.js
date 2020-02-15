import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'
import {NewReleasesTwoTone, GroupTwoTone, LocalFloristTwoTone, SentimentDissatisfiedTwoTone} from '@material-ui/icons'

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
      onChange={(event, newValue) => {
        setState.setArticles([
          // dummy data... this should come from posts
          {
            title: `Article Title ${newValue}`, 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
          {
            title: `Article Title ${newValue}`, 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
          {
            title: `Article Title ${newValue}`, 
            summary: "Article summary blah blah blah blah blah", 
            imgUrl: "/images/logo.png",
            date: new Date().toDateString()
          },
        ])
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