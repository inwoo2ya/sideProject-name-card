import { StyledCardFront } from "./card-front.styles";
import { companyInfo } from "./card-front.constant";
import { RefObject } from "react";

const CardFront = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <StyledCardFront.Root {...props}>
      <StyledCardFront.Header>
        <img
          src="/img/lavarwave-logo.webp"
          width={174}
          height={75}
          alt="logo"
        />
        <a
          onClick={e => e.stopPropagation()}
          href="https://lavarwave.co.kr/"
          target="_blank"
          rel="noreferrer"
        >
          www.lavarwave.co.kr
        </a>
      </StyledCardFront.Header>
      <StyledCardFront.Body>
        <h6>㈜라바웨이브</h6>
        <div>
          <div>
            <h5>서비스 개발팀</h5>
            <p>Front-End 개발</p>
          </div>
          <h2>이인우</h2>
        </div>
      </StyledCardFront.Body>
      <StyledCardFront.Info>
        {companyInfo.map(({ title, detail }) => (
          <div key={title}>
            <div className="title">
              <p>{title}</p>
            </div>
            <div className="contents">
              <p>{typeof detail === "string" ? detail : detail.join(" / ")}</p>
            </div>
          </div>
        ))}
      </StyledCardFront.Info>
    </StyledCardFront.Root>
  );
};

export default CardFront;
