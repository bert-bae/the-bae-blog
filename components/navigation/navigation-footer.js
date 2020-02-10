import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import {NewReleasesTwoTone, GroupTwoTone, LocalFloristTwoTone, SentimentDissatisfiedTwoTone} from '@material-ui/icons'

const NavigationFooter = ({page, setPage}) => {
  return (
    <BottomNavigation
      value={page}
      onChange={(event, newValue) => {
        setPage(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Latest" value="latest"
        icon={<NewReleasesTwoTone/>}
      />
      <BottomNavigationAction label="Appreciation" value="appreciation"
        icon={<LocalFloristTwoTone/>}
      />
      <BottomNavigationAction label="Communication" value="communication"
        icon={<GroupTwoTone/>}
      />
      <BottomNavigationAction label="Handling conflicts" value="handling conflicts"
        icon={<SentimentDissatisfiedTwoTone/>}
      />
    </BottomNavigation>
  )
}

export default NavigationFooter