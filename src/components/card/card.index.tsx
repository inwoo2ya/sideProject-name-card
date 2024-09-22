import { useState } from "react";
import CardBack from "./back/card-back.index";
import { Button, CardWrap, StyledCard } from "./card.styles";
import CardFront from "./front/card-front.index";
import { HiArrowUturnLeft } from "react-icons/hi2";
import { isMobile } from "react-device-detect";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <CardWrap>
        <StyledCard isVisible={isVisible}>
          <CardBack /> <CardFront />
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
