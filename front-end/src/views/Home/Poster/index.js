import styles from "./Poster.module.css";
import {Carousel} from "react-bootstrap";

function Poster(props) {
  return (
    <div className={styles.Poster} >
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../resources/img/main_poster3.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../resources/img/main_poster1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../resources/img/main_poster2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default Poster;