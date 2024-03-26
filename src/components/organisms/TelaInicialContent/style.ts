import { colors } from "@/utils/colors";
import styled from "styled-components";

interface TitleProps {
  white?: boolean;
}

interface SlideProps {
  url: string;
}

export const Container = styled.div`
  margin: 40px 0 80px;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    margin-bottom: 130px;
  }
`;

export const Logo = styled.img`
  margin: 0 auto;
  width: 160px;
`;

export const Slide = styled.div<SlideProps>`
  width: 100% - 40px;
  margin: 20px 20px 30px;
  padding: 32px 0;
  height: 166px;
  background-color: #000;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});
  background-size: cover;
  border-radius: 5px;
`;

export const Title = styled.h3<TitleProps>`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-left: 20px;
  max-width: 60%;
  color: ${({ white }) => white ? colors.branco : colors.cinzaDark};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 140%;
  color: ${colors.cinzaLight};
  margin-top: 8px;
  max-width: 80%;
  margin-left: 20px;
`;

export const VideoContainer = styled.div``;

export const VideoContent = styled.div`
  margin: 24px 20px;
`;

export const Video = styled.iframe`
  border-radius: 5px;
  aspect-ratio: 16 / 9;
  width: 100%;
`;

export const ListContainer = styled.div``;

export const Nav = styled.nav``;

export const List = styled.ul``;

export const Item = styled.li`
  list-style: none;

  &:not(:last-of-type) {
    border-bottom: 1px solid rgba(173, 181, 189, 1);
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;

export const Icon = styled.img``;

export const LabelArea = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelText = styled.h4`
  margin-left: 8px;
`;

export const RightIcon = styled.i``;

export const Bar = styled.div`
  height: 5px;
  background-color: ${colors.fundoProgressBar};
  border-radius: 15px;
  margin-top: 30px;
  position: relative;
  margin: 30px 20px 0;
`;



export const Progress = styled.span`
  @keyframes changewidth {
    from {
      width: 1%;
    }

    to {
      width: 100%;
    }
  }

  display: block;
  position: relative;

  width: 1%;
  height: 100%;
  background-color: ${colors.verdeMedium};
  border-radius: 15px;
  overflow: hidden;
  padding: 3px;

  color: white;
  text-align: right;
  animation-duration: 5s;
  animation-name: changewidth;
  animation-iteration-count: infinite;
`;
