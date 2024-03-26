import { useState } from 'react';
import { Paragraph } from '@/components/atoms/Text';
import * as S from './style';
import Header from '@/components/molecules/Header';
import { useRouter } from 'next/router';
import { offers } from './utils';
import FilledButton from '@/components/atoms/FilledButton';

export default function OffersContent() {
  const router = useRouter();
  const { id } = router.query;

  const data = offers.find((obj) => obj.id.toString() === id);

  return (
    <S.Container>
      <Header title={data && data.title} />
      {data && (
        <>
          <S.OfferImage src={data.image} />
          <S.Content>
            <S.BoxButtons>
              <FilledButton
                text="CÓDIGO"
                bgColor1="white"
                border="1px solid #35A936 "
                hasBorder={true}
                textColor="#35A936"
                height="40px"
                action={() => {
                  router.push(`/convideseusamigos`);
                }}
              />
              <FilledButton
                text="COMPARTILHAR"
                bgColor1="#35A936"
                textColor="white"
                height="40px"
                action={() => {
                  router.push(`/convideseusamigos`);
                }}
              />
            </S.BoxButtons>
            <S.TitleInfo>Informações da promoção</S.TitleInfo>
            <S.TextInfo>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </S.TextInfo>
            <S.Titulo>{data.headding1}</S.Titulo>
            <S.Description
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            <S.Titulo>{data.headding2}</S.Titulo>
            <S.BoxTermos>
              <S.TitleTermos>Termos e condições</S.TitleTermos>
              <S.TextTermos>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</S.TextTermos>
              <S.TextTermos>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.TextTermos>
              <S.TextTermos>publishing software like Aldus PageMaker including versions of Lorem Ipsum.</S.TextTermos>
              <FilledButton
                text="LER MAIS"
                textColor="#35A936"
                height="40px"
                margin='15px 0 0 0 '
              />
            </S.BoxTermos>
            <S.BoxBlack>
              <S.TitleBoxBlack>What is Lorem Ipsum</S.TitleBoxBlack>
              <S.BoxBlackItem>
                <S.Circle>
                  <S.Number>1</S.Number>
                </S.Circle>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </S.BoxBlackItem>
              <S.BoxBlackItem>
                <S.Circle>
                  <S.Number>2</S.Number>
                </S.Circle>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </S.BoxBlackItem>
              <S.BoxBlackItem>
                <S.Circle>
                  <S.Number>3</S.Number>
                </S.Circle>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </S.BoxBlackItem>
            </S.BoxBlack>
            <FilledButton
                text="PEGAR AGORA"
                bgColor1="#35A936"
                textColor="white"
                height="40px"
                margin='30px 0'
                action={() => {
                  router.push('/mail')
                }}
              />
          </S.Content>
        </>
      )}
    </S.Container>
  );
}
