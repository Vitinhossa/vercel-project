import TelaInicialContent from "../organisms/TelaInicialContent";
import HelpFooter from "../molecules/HelpFooter";
import ContentContainer from "../atoms/ContentContainer";

export default function TelaInicialTemplate({ onClick }) {
  return (
    <>
      <ContentContainer>
        <TelaInicialContent onClick={onClick} />
      </ContentContainer>
      <HelpFooter />
    </>
  )
}
