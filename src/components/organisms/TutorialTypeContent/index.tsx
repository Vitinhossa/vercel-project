import ProgressBar from '@/components/atoms/ProgressBar';
import { tutoriaisTypes } from '@/utils/tutoriais';
import { useState } from 'react';
import {
  Container,
  Image,
  Steps,
  Text,
  Button,
  Content,
  Icon
} from './style';

export default function TutorialTypeContent({ type = "retirada" }) {
  const { steps } = tutoriaisTypes[type];
  const stepPercent = 100 / steps.length;

  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(stepPercent);
  const isFirstStep = step === 0;
  const isLastStep = step === steps.length - 1;

  const handleNextStep = () => {
    if(!isLastStep) {
      setStep(prevStep => prevStep + 1);
      setProgress(prevProgress => prevProgress + stepPercent);
    }
  };

  const handlePrevStep = () => {
    if(!isFirstStep) {
      setStep(prevStep => prevStep - 1);
      setProgress(prevProgress => prevProgress - stepPercent);
    }
  }

  return (
    <Container>
      <Image src={steps[step].image} width={`100%`} />
      <Content>
        <Text>{steps[step].text}</Text>
        <Steps>
          <Button isDisabled={isFirstStep} onClick={handlePrevStep}>
            <Icon src='../tutorial/left.svg' />
          </Button>
          <ProgressBar width={`${progress}%`} widthBar='70%' marginTop='0' />
          <Button isDisabled={isLastStep} onClick={handleNextStep}>
            <Icon src='../tutorial/right.svg' />
          </Button>
        </Steps>
      </Content>
    </Container>
  );
}
