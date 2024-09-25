import { Ref } from "react";
import { contents } from "./card-back.constant";
import { StyledCardBack } from "./card-back.styles";
import { AiOutlineDownload } from "react-icons/ai";

const CardBack = ({
  onClick,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  onClick?: () => void;
}) => {
  return (
    <StyledCardBack.Root {...props}>
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
      <StyledCardBack.Download onClick={onClick}>
        <AiOutlineDownload />
      </StyledCardBack.Download>
    </StyledCardBack.Root>
  );
};
export default CardBack;
