import router from 'next/router';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';
import { useState } from 'react';
import BackButton from '../atoms/BackButton';
import { HeadingTwo, Paragraph } from '../atoms/Text';
import PaddingContainer from '../atoms/PaddingContainer';
import Input from '../atoms/Input';
import FilledButtonContainer from '../molecules/FilledButtonContainer';
import AlertModal from '../molecules/AlertModal';

export default function AlterarSenhaCartaoTemplate() {
  const [changedPassword, setChangedPassword] = useState(false);

  return (
    <>
      <PaddingContainer padding="22px">
        <BackButton clicked={() => router.back()} />
        <HeadingTwo
          fontSize={fontSizes.xLarge20}
          fontWeight={fontWeight.bold}
          color={colors.verdeDark}
          margin="24px 0 8px 0"
        >
          Alteração de senha
        </HeadingTwo>
        <Paragraph
          fontColor={colors.cinzaLightDark}
          fontSize={fontSizes.small14}
          lineHeight="22px"
        >
          Confirme os dados e defina uma nova senha para o seu cartão.
        </Paragraph>

        <Input
          inputType="password"
          inputFormat="label"
          labelText="Senha atual"
          labelColor={colors.cinzaDark}
          maxLength={4}
          placeholder="****"
          margin="24px 0"
        />
        <Input
          inputType="password"
          inputFormat="label"
          labelText="Crie uma senha de 4 dígitos"
          labelColor={colors.cinzaDark}
          maxLength={4}
          placeholder="XXXX"
          margin="0 0 24px 0"
        />
        <Input
          inputType="password"
          inputFormat="label"
          labelText="Repita a senha"
          labelColor={colors.cinzaDark}
          maxLength={4}
          placeholder="XXXX"
          margin="0 0 49px 0"
        />

        <FilledButtonContainer
          btnTextColor={colors.branco}
          btnText="Confirmar"
          height="46px"
          btnRoundedSize="50px"
          btnBgColor1={colors.verdeLight}
          btnAction={() => setChangedPassword(true)}
        />
      </PaddingContainer>

      {changedPassword && (
        <AlertModal
          text="Senha alterada com sucesso!"
          iconName="icon-circle-check"
          iconColor={colors.verdeLight}
          btnText="Voltar"
          btnAction={() => router.push(`/cartoes/configuracao`)}
        />
      )}
    </>
  );
}
