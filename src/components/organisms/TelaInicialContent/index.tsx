import { useRef, useEffect, useState } from 'react';
import {
  Container,
  Description,
  Logo,
  Slide,
  Title,
  VideoContainer,
  Video,
  VideoContent,
  ListContainer,
  Nav,
  List,
  Item,
  Button,
  Icon,
  LabelArea,
  LabelText,
  RightIcon,
  Progress,
  Bar
} from './style';
import { slides } from '@/utils/slides';
import { useRouter } from 'next/router';
import Sobre10xBank from '@/components/molecules/Sobre10xBank';

export default function TelaInicialContent({ onClick }) {

  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAbout, setShowAbout] = useState(false);

  const nextSlide = () => {
    if (currentSlide < 6) {
      setCurrentSlide(prev => prev + 1);
      return;
    }

    setCurrentSlide(0);
  }

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <Container>
      <Logo src='./logo_sa.png' />
      <Bar>
        <Progress />
      </Bar>
      <Slide url={slides[currentSlide].image}>
        <Title white >{slides[currentSlide].title}</Title>
        <Description>{slides[currentSlide].description}</Description>
      </Slide>
      <VideoContainer>
        <Title>Publicidade</Title>
        <VideoContent>
          <Video src="https://www.youtube.com/embed/iaVmsp7dU1Y?controls=2&autoplay=1&mute=1" frameBorder={0} allow='autoplay;' />
        </VideoContent>
      </VideoContainer>
      <ListContainer>
        <Title>Central de gerenciamento</Title>
        <Nav>
          <List>
            <Item>
              <Button onClick={onClick}>
                <LabelArea>
                  <Icon src='./log-in.svg'/>
                  <LabelText>Entrar / Abrir Conta</LabelText>
                </LabelArea>
                <RightIcon className="icon-chevron-right" />
              </Button>
            </Item>
            <Item>
              <Button onClick={() => router.push('/tutorial')}>
                <LabelArea>
                  <Icon src='./archive.svg'/>
                  <LabelText>Tutorial</LabelText>
                </LabelArea>
                <RightIcon className="icon-chevron-right" />
              </Button>
            </Item>
            <Item>
              <Button onClick={() => setShowAbout(prev => !prev)}>
                <LabelArea>
                  <Icon src='./info.svg'/>
                  <LabelText>Sobre o PixLand</LabelText>
                </LabelArea>
                <RightIcon className={showAbout ? "icon-close" : "icon-chevron-right"} />
              </Button>
            </Item>
          </List>
        </Nav>
        { showAbout && <Sobre10xBank /> }
      </ListContainer>
    </Container>
  );
}
