import { useState } from "react";
import CardBack from "./back/card-back.index";
import { Button, CardWrap, StyledCard } from "./card.styles";
import CardFront from "./front/card-front.index";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <CardWrap>
        <StyledCard isVisible={isVisible}>
          <CardBack /> <CardFront />
        </StyledCard>
      </CardWrap>
      <Button onClick={() => setIsVisible(!isVisible)}>뒤집기</Button>
    </>
  );
};

export default Card;
