import JsBarcode from 'jsbarcode'
import { Modal } from "react-bootstrap";
import { useEffect, useState } from 'react'
import style from "./Barcode.module.css";

function Barcode(props){

  const {isOpen, close} = props;

  const [imageUrl, setImageUrl] = useState();

  let testList = props.testList;

  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(canvas, testList, { height: 100, displayValue: true })
    setImageUrl(canvas.toDataURL('image/png'))
  }, [testList])

  const handleClose = () => {
    close();
  }

  return (
    <>
    {isOpen? (
      <Modal
        show={isOpen}
        onHide={close}
        centered="true"
        keyboard={false}
      >
        <Modal.Body>
        <div className={style.barcode}>
          <span>{imageUrl && <img src={imageUrl} />}</span>
          <span className={style.confirm} onClick={handleClose}>확인</span>
        </div>
       </Modal.Body>
      </Modal>
    ):null}
    </>
  )}

export default Barcode