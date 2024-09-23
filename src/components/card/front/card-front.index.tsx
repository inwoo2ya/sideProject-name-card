import { StyledCardFront } from "./card-front.styles";
import { companyInfo } from "./card-front.constant";

const CardFront = () => {
  return (
    <StyledCardFront.Root>
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
            <h6>서비스 개발팀</h6>
            <p>Front-End 개발</p>
          </div>
          <h2>이인우</h2>
        </div>
      </StyledCardFront.Body>
      <StyledCardFront.Info>
        <div className="title">
          {companyInfo.map(({ title }) => (
            <p key={title}>{title}</p>
          ))}
        </div>
        <div className="contents">
          {companyInfo.map(({ detail }) => (
            <p key={detail}>{detail}</p>
          ))}
        </div>
      </StyledCardFront.Info>
    </StyledCardFront.Root>
  );
};

export default CardFront;
