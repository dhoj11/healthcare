import Slider from "react-slick";
import styles from "./index.module.css";
import "./index.css";
import { getImgNotice } from "../data";
import ImgNoticeModal from "../Modal/ImgNoticeModal";
import { useState } from "react";
function ImgNotice(props) {
  const [showImgNoticeModal,setShowImgNoticeModal] = useState(false);
  const [imgNoticeItem,setImgNoticeItem] = useState(false);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  const openImgNoticeModal = (data) => {
    setImgNoticeItem(data);
    setShowImgNoticeModal(true);
  }
  const closeImgNoticeModal = () => {
    setShowImgNoticeModal(false);
  }
  const imgNotice = getImgNotice();
  return(
    <>
      <div className={styles.ImgNotice_contain}>
      <Slider {...settings}>
          {imgNotice.map((data,index) => {
            return(
              <div key={index} className={styles.imgItem}>
                <div className={styles.Item} onClick={() =>openImgNoticeModal(data)}>
                  <div className={styles.img_contain}>
                    <img src={data.img_notice_img} width="300px" height="160px" ></img>
                  </div>
                  <div className={styles.ImgNoticeItem}>
                    <div className={styles.ImgNotice_title}>
                      {data.img_notice_title}
                    </div>
                    <div className={styles.ImgNotice_content}>
                      {data.img_notice_content}
                    </div>
                    
                    <div className={`d-flex justify-content-between ${styles.hit_date_contain}`}>
                      <i class="fas fa-search">
                        <span className={styles.hitCount}>{data.img_notice_hitcount}</span>
                      </i> 
                      <span className={styles.ImgNotice_date}>{data.img_notice_date}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </Slider>
      </div>
      <ImgNoticeModal showImgNoticeModal={showImgNoticeModal} closeImgNoticeModal={closeImgNoticeModal} imgNoticeItem={imgNoticeItem}></ImgNoticeModal>
    </>
      
  );
}
export default ImgNotice;