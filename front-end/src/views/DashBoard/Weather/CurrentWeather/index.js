import styles from "./index.module.css";


function CurrentWeather(props) {
  let {weather}=props;
  return(
    <>
    {weather!== null &&
      <div className={styles.Weather_body}>
        <div className="d-flex justify-content-center">
          <div>
              <img src={weather.weather[0].icon} width="100px"/>
          </div>
          <div className={styles.temp}>{Math.round(weather.main.temp)}</div><span className={styles.sign}>°C</span>
        </div>
        <div>
          <div className={styles.state_text}>
            { weather.weather[0].description}
            <span className={styles.clouds}>(흐림{weather.clouds.all}%)</span>
          </div>
          <div className={styles.weather_part}>
            <span className={styles.min}><span>풍속</span><span className={styles.min_value}>{Math.round(weather.wind.speed)}m/s</span></span>
            <span className={styles.max}><span>체감</span><span className={styles.max_value}>{Math.round(weather.main.feels_like)}°</span></span>
            <span className={styles.feels}><span>습도</span><span className={styles.feels_value}>{Math.round(weather.main.humidity)}%</span></span>
          </div>
        </div>
      </div>
    }
    </>
  );
}
export default CurrentWeather;