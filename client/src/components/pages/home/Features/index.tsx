
import styles from "./styles.module.scss";

const Features = () => {

  return (
    <div className={styles.features}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
            {/* <div className={styles.feature}>
                <img className={styles.waveImage} src="/images/waveimg.webp" alt='wave'/>

            </div> */}
            <div className={styles.feature}>
                <h2>Forecast Monitoring</h2>
                <p>Track your favorite surf break conditions</p>
                <p>Streamlined dashboard for a fast review</p>
            </div>
            <div className={styles.feature}>
                <h2>Notifications</h2>
                <p>Pin point forecast data</p>
                <p>Recieve a notification to your device</p>
            </div>
            <div className={styles.feature}>
                <h2>Minimise screen time</h2>
                <p>Limit your surf checking to key times</p>
                <p>No more scrolling</p>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Features;
