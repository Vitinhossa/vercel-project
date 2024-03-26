import { Paragraph } from '@/components/atoms/Text';
import Image from 'next/image';
import {
  ModalContainer,
  FlexContainer,
  BlackContainer,
  WrapperContainer,
} from './style';

interface IAttachmentModal {
  documentClicked?: any;
  imageClicked?: any;
  cameraClicked?: any;
  containerClicked?: any;
}

export default function AttachmentModal({
  documentClicked,
  imageClicked,
  cameraClicked,
  containerClicked,
}: IAttachmentModal) {
  return (
    <WrapperContainer>
      <BlackContainer onClick={containerClicked} />
      <ModalContainer>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <div
            style={{
              width: `70px`,
              height: `4px`,
              backgroundColor: `#575656`,
              borderRadius: `5px`,
            }}
          />
        </FlexContainer>
        <div
            style={{
              width: `100%`,
            }}
          >
        <Paragraph
          fontSize="18px"
          textAlign='center'
          lineHeight="24px"
          fontWeight="bold"
          margin="24px 0 0 0"
        >
          Anexar contrato social
        </Paragraph>
        </div>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginTop: `27px` }}
        >
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onClick={documentClicked}
          >
            <Image src="/file.svg" alt="documento" height="66px" width="52px" />
            <Paragraph fontSize="14px" fontWeight="400" lineHeight="20px">
              Documento
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onClick={imageClicked}
          >
            <Image
              src="/image.svg"
              alt="documento"
              height="66px"
              width="52px"
            />
            <Paragraph fontSize="14px" fontWeight="400" lineHeight="20px">
              Galeria
            </Paragraph>
          </FlexContainer>
          <FlexContainer
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            onClick={cameraClicked}
          >
            <Image
              src="/camera.svg"
              alt="documento"
              height="66px"
              width="52px"
            />
            <Paragraph fontSize="14px" fontWeight="400" lineHeight="20px">
              Câmera
            </Paragraph>
          </FlexContainer>
        </FlexContainer>
      </ModalContainer>
    </WrapperContainer>
  );
}
