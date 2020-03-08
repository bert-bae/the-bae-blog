import MainContainer from '../containers/main-container'
import styles from './home.styles.scss'

const CallToAction = () => {
  return (
    <MainContainer>
      <div className={styles.callToAction}>
        {/* <h1>Your own personalizable gardens that encourage you to get creative.</h1> */}
        <h1>Your relationship is a journey that never stops, for you and your partner.</h1>
        <div className={styles.ctaVisual}>
          <img src="/images/cta-together.png"/>
          <img src="/images/cta-together.png"/>
        </div>
        <p className={styles.catchPhraseOne}>There's a beauty in acknowledging that human growth never stops. Your relationship is an everchanging entity that needs to be nurtured. For relationships to thrive, you need to learn to accept it to grow.</p>
      </div>
    </MainContainer>
  )
}

export default CallToAction