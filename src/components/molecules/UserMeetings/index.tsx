/* eslint-disable @next/next/no-img-element */
import { fontWeight, fontSizes, fontFamily } from '@/utils/fonts';
import { useRouter } from 'next/router';
import { colors } from '@/utils/colors';
import { Paragraph } from '../../atoms/Text';
import { Container, ImageContainer, InfoContainer } from './style';
import React  from 'react';
import { useAlert } from 'react-alert';
import Image from "next/image";


interface IUserMeetings {
  userName?: string;
  width?: string;
  src: string;
  alt: string;
  margin?: string;
  token?: string;
  imageRoute?: string;
  user?: any;

  hasGreetings?: boolean;
}
export default function UserMeetings({
  userName,
  width,
  src,
  alt,
  margin,
  token,
  user,
  imageRoute = `/perfil`,
  hasGreetings = true,
}: IUserMeetings) {
  const router = useRouter();
  const alert = useAlert();



  const myPlan = {
    0: {
      name: 'Start',
      image: 'start.svg'
    },
    1: {
      name: 'Special',
      image: 'special.svg'
    },
    2: {
      name: 'Start',
      image: 'start.svg'
    },
    3: {
      name: 'Middle',
      image: 'middle.svg'
    },
    4: {
      name: 'Premier',
      image: 'others.svg'
    },
    5: {
      name: 'Elite',
      image: 'others.svg'
    },
  }

  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleFile = async (event: any) => {
    const file = event;

    if (typeof window !== "undefined") {
      var form = new FormData();
      form.append("file", file);

      const res = await fetch(
        "https://api-operacao-sarmento.pixland.com.br/cdn/documentos/upload/perfil/" +
          token,
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      if(data.done)
                        {
                          const alerta = alert.show(data.message, {
                            timeout: 8000,
                            type: 'success'
                          })
                          router.reload();
                        }
                        else{
                          const alerta = alert.show(data.message, {
                            timeout: 8000,
                            type: 'error'
                          })
                        }

      console.log(data);
    }
  }
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };

  return (
    <Container width={width} margin={margin}>
      <div style={{ width: '100%' }}>
        <img src={`./home/banner/${myPlan[user.meus_dados.plano].image}`} alt="" width="100%" />
      </div>
      <img src={src} alt="" style={{ marginTop: '-27%', width: '22%', borderRadius: '50%', marginLeft: '2px' }} />
      {/* <InfoContainer>
        {hasGreetings && (
          <Paragraph
            fontColor={colors.cinzaMediumDark}
            fontSize={fontSizes.small14}
            lineHeight={fontSizes.medium16}
          >
            Olá,
          </Paragraph>
        )}
        <Paragraph
          fontColor={colors.cinzaMediumDark}
          fontSize={hasGreetings ? fontSizes.small14 : fontSizes.medium16}
          lineHeight={fontSizes.medium17}
          fontWeight={fontWeight.bold}
        >
          {userName}
        </Paragraph>

        {!hasGreetings && (
          <Paragraph
            fontColor={colors.cinzaLightMedium}
            fontSize={fontSizes.small14}
            lineHeight={fontSizes.medium17}
            fontFamily={fontFamily.roboto}
            margin="2px 0 0 0"
            onClick={() => handleClick()}
          >
            Alterar foto
          </Paragraph>




        )}
      </InfoContainer> */}
      
      <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleClick}
          style={{display: 'none'}}
          />
    </Container>
  );
}
