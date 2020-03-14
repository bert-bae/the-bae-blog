import MainContainer from '../containers/main-container'
import styles from './home.styles.scss'

const CallToAction = () => {
  return (
    <MainContainer>
      <div className={styles.callToAction}>
        <h1>Your personal growth begins with a curiosity to see just how far you can go.</h1>
        <div className={styles.ctaVisual}>
          <img src="/images/hit-the-road.png"/>
          <p>There's a beauty in acknowledging that human growth never stops. Your relationship is an everchanging entity that needs to be nurtured. For relationships to thrive, you need to learn to accept it to grow.</p>
        </div>
        <div className={styles.ctaVisual}>
          <p>Life is always a fork in the road. Your choices all add up to where you are now and where you will be in the future. But in the end, it is still your story to write</p>
          <img src="/images/your-story.png"/>
        </div>
      </div>
    </MainContainer>
  )
}

export default CallToAction