import { HeadingThree, HeadingTwo, Paragraph } from '@/components/atoms/Text';
import { useState } from 'react';
import FilledButton from '@/components/atoms/FilledButton';
import { colors } from '@/utils/colors';
import AlertModal from '@/components/molecules/AlertModal';
import {
  Button,
  Container,
  Image,
  Icon,
  FormContainer,
  TextArea,
  Section
} from './style';
import { useRouter } from 'next/router';
import FilledSelect from '@/components/atoms/FilledSelect';

export default function FeedbackContent() {

  const [showForm, setShowForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [feedbackType, setFeedbackType] = useState('problem');
  const [feedbackText, setFeedbackText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const router = useRouter();

  const feedbackOptions = {
    problem: {
      title: 'Descreva seu feedback'
    },
    suggestion: {
      title: 'Quando você percebeu o problema, o que estava tentando fazer?'
    }
  }

  const options = [
    {
      id: 1,
      title: 'Recuperar conta / senha'
    },
    {
      id: 2,
      title: 'PIX'
    },
    {
      id: 3,
      title: 'Pagamentos'
    },
    {
      id: 4,
      title: 'Conectar conta'
    },
    {
      id: 5,
      title: 'Convite'
    },
    {
      id: 6,
      title: 'Outros'
    }
  ];

  return (
    <Container>
      <Image src='./feedback/hero.svg' />
      <HeadingTwo>Qual feedback você gostaria de nos passar?</HeadingTwo>
      <Button onClick={() => {
        setFeedbackType('problem');
        setShowForm(true);
      }}>
        <Icon src='./feedback/close.svg' />
        <Paragraph>Informar um problema</Paragraph>
      </Button>
      <Button onClick={() => {
        setFeedbackType('suggestion');
        setShowForm(true);
      }}>
        <Icon src='./feedback/chat-text.svg' />
        <Paragraph>Fazer uma sugestão</Paragraph>
      </Button>
      {
        showForm &&
        <FormContainer>
          <Section>
            <HeadingThree>{feedbackOptions[feedbackType].title}</HeadingThree>
            {
              feedbackType === 'problem' &&
                <FilledSelect
                  options={options}
                  placeholder='Escolha uma opção'
                  width='100%'
                  height='54px'
                  getSelectedValue={(e) => setSelectedOption(e.title)}
                  style={{
                    backgroundColor: 'transparent',
                    borderBottom: `3px solid ${colors.cinzaLightMedium}`,
                    borderRadius: '0',
                    justifyContent: 'space-between',
                    margin: '40px 0 0 0',
                  }}
                />
            }
            <TextArea
              placeholder='Diga o que motivou este feedback...'
              value={feedbackText}
              onChange={(text) => setFeedbackText(text.target.value)}
            />
            <Paragraph>Não inclua informações confidenciais.</Paragraph>
          </Section>
          <FilledButton
            text='ENVIAR FEEDBACK'
            bgColor1={feedbackText !== '' ? colors.verdeDark : colors.cinzaLightMedium}
            textColor={colors.branco}
            height='56px'
            action={() => {
              if (feedbackText !== '') {
                setShowSuccessModal(true)
              }
            }}
          />
        </FormContainer>
      }
      {
        showSuccessModal &&
        <AlertModal
          btnText="ENTENDI"
          text="Feedback enviado com sucesso"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnAction={() => router.push('/home')}
        />
      }
    </Container>
  );
}
