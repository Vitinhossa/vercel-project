/* eslint-disable no-console */
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
// import Qr from 'react-qr-scanner';
import QrReader from 'react-qr-scanner';
import { FlexContainer } from './style';

interface IQrCode {
  onScan: any;
}

export default function QrCode({ onScan }: IQrCode) {
  const previewStyle = {
    height: 270,
    width: 270,
  };

  const handleError = (err: any) => {
    console.log({ err });
  };

  const shouldRenderQRCode = () =>
    process.browser && (
      <QrReader
        delay={10000}
        style={previewStyle}
        onError={handleError}
        onScan={onScan}
        facingMode="rear"
      />
    );
  return (
    <FlexContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Paragraph
        fontWeight="400"
        fontSize="15px"
        lineHeight="20px"
        fontColor={colors.cinzaLightDark}
        margin="0 20px 20px 20px"
      >
        Posicione o quadrado verde sobre o QR Code e aguarde. A Leitura é
        automática.
      </Paragraph>
      <FlexContainer
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        bgColor="rgba(32, 32, 32, 0.9)"
        height="calc(100vh - 144px)"
      >
        {shouldRenderQRCode()}
      </FlexContainer>
    </FlexContainer>
  );
}
