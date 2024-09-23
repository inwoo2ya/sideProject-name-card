import { contents } from "./card-back.constant";
import { StyledCardBack } from "./card-back.styles";

const CardBack = () => {
  return (
    <StyledCardBack.Root>
      <p>Follow Me</p>
      <div>
        {contents.map(({ title, detail, img }) => (
          <StyledCardBack.Content key={title}>
            <a
              href={detail}
              target="_blank"
              rel="noreferrer"
              onClick={e => e.stopPropagation()}
            >
              <img src={img} alt={title} />
            </a>
          </StyledCardBack.Content>
        ))}
      </div>
    </StyledCardBack.Root>
  );
};
export default CardBack;
