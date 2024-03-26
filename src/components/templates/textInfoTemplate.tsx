import { ReactNode } from 'react';
import PaddingContainer from '../atoms/PaddingContainer';
import Header from '../molecules/Header';

interface ITextInfoTemplate {
  headTitle: string;
  textContent?: string;
  textCode?: ReactNode;
}
export default function TextInfoTemplate({
  headTitle,
  textContent,
  textCode,
}: ITextInfoTemplate) {
  return (
    <>
      <Header title={headTitle} />
      <PaddingContainer padding="30px 30px">
        {textContent}
        {textCode}
      </PaddingContainer>
    </>
  );
}
