import { HeadingTwo, Paragraph } from '@/components/atoms/Text';
import Input from '@/components/atoms/Input';
import FilledButton from '@/components/atoms/FilledButton';
import { colors } from '@/utils/colors';
import { useState } from 'react';
import {
  BottomSection,
  Container,
  TopSection,
  Icon,
  SecurityData,
  List
} from './style';

export default function MailContent() {
  const [email, setEmail] = useState(``);

  return (
    <Container>
      <TopSection>
        <HeadingTwo>Digite seu e-mail para fazer login ou abrir uma conta</HeadingTwo>
        <Input
          inputType="email"
          inputFormat="label"
          labelText="Email"
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="contato@email.com"
          inputPadding='0'
        />
      </TopSection>
      <BottomSection>
        <SecurityData>
          <Icon src='./mailscreen/lock.svg' />
          <Paragraph>Seus dados estão <span>100% seguros.</span></Paragraph>
        </SecurityData>
        <List>
          <Icon src='./mailscreen/sectigo.png' />
          <Icon src='./mailscreen/trustedsite.png' />
          <Icon src='./mailscreen/secure.png' />
          <Icon src='./mailscreen/norton.png' />
        </List>
        <FilledButton
            text="CONTINUAR"
            textColor="white"
            height="50px"
            width='91%'
            roundedSize="8px"
            bgColor1={email !== `` ? colors.verdeDark : colors.cinzaLightDark}
            action={() => email !== `` && console.log('validação se email existe ou não')}
          />
      </BottomSection>
    </Container>
  );
}
