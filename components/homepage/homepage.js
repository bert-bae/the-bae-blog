import HomeImage from './home-image'
import CallToAction from './call-to-action'
import Jumbotron from '../jumbotron/jumbotron'
import HomeMainHighlights from './home-main-highlights'

const HomePage = () => {
  return (
    <>
      <Jumbotron isHome={true}>
        <HomeImage/>
      </Jumbotron>
      <CallToAction/>
      <HomeMainHighlights/>
    </>
  )
}

export default HomePage