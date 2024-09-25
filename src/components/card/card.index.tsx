import { useRef, useState } from "react";
import CardBack from "./back/card-back.index";
import { Button, CardWrap, StyledCard } from "./card.styles";
import CardFront from "./front/card-front.index";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { isMobile } from "react-device-detect";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
const Card = () => {
  const [isVisible, setIsVisible] = useState(false);
  const clickHandler = () => {
    domtoimage.toBlob(document.querySelector(".front") as Node).then(blob => {
      saveAs(blob, "라바웨이브_이인우_명함.png");
    });
  };
  return (
    <>
      <CardWrap
        isMobile={isMobile}
        onClick={isMobile ? () => setIsVisible(!isVisible) : () => {}}
      >
        <StyledCard isVisible={isVisible}>
          <CardBack className="back" onClick={clickHandler} />
          <CardFront className="front" />
        </StyledCard>
      </CardWrap>
      {!isMobile && (
        <Button onClick={() => setIsVisible(!isVisible)}>
          <HiArrowUturnLeft /> 뒤집기
        </Button>
      )}
    </>
  );
};

export default Card;
