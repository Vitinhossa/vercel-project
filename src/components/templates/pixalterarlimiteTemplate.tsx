import { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Header from '../molecules/Header';
import { HeadingThree, HeadingTwo, Paragraph } from '../atoms/Text';
import FilledButton from '../atoms/FilledButton';
import Input from '../atoms/Input';
import PaddingContainer from '../atoms/PaddingContainer';
import AlertModal from '../molecules/AlertModal';
import PixLimitBox from '../molecules/PixLimitBox';
import DataModal from '../molecules/DataModal';
import CustomModal from '../molecules/CustomModal';
import { DisplayFlex } from '../atoms/Alignment';
import Cookies from 'js-cookie'
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import { useAlert } from 'react-alert';
import Skeleton from 'react-loading-skeleton'

// const

export default function PixAlterarLimiteTemplate() {
  const [value, setValue] = useState(`0`);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const alert = useAlert();
  const [option, setOption] = useState(``);
  const [tt, setTT] = useState(``);
  const [hour, setHour] = useState(``);
  // const [success, setSu]

  // const [confirmPin, setConfirmPin] = useState('');
  const router = useRouter();

  const { user, loading }:any = useAuth();
  if(loading) return <Skeleton height={300} count={1} />;
  return (
    <>
      {pinOpen && (
        <AlertModal
          btnText="Confirmar"
          text="Digite seu PIN"
          typeTransaction="PIX - Alterar limite"
          pinAction={(valuex) => {

            if(valuex.length > 10)
            {
              (async function() {

                const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`
                    
                      const { data: user } = await api.post('pix/limite/'+option, {amount:value, tt: tt, hash: valuex})
                      if(user.success){
                        setSuccess(true);
                        setError(false);
                        setPinOpen(false);
                      }
                      else{
                        setSuccess(false);
                        setError(true);
                        setPinOpen(false);
                      }
                      
  
                    
                    
                    //setUser(user);
                }
                
              }());

              
            }
            else{
              const alerta = alert.show('Erro ao validar o PIN', {
                timeout: 8000, // custom timeout just for this one alert
                type: 'error',
              });
              setPinOpen(false);

            }

          }}
          closeClick={() => {
            setPinOpen(false);
          }}
          isPinModal
          hasCloseBtn
          btnWidth="80%"
        />
      )}
      <Header
        title="PIX - Alterar limite"
        arrowClicked={() => {
          if (isUpdate) {
            setIsUpdate(false);
          } else {
            router.back();
          }
        }}
      />

      {!isUpdate && (
        <PaddingContainer padding="20px">
          <HeadingTwo
            fontSize="20px"
            fontWeight="bold"
            fontFamily={fontFamily.roboto}
            color={colors.black}
            margin="0 0 4px 0"
          >
            Meus limites Pix
          </HeadingTwo>
          <Paragraph
            fontSize="17px"
            fontColor={colors.cinzaLightMedium}
            lineHeight="24px"
            margin="0 0 46px 0"
          >
            Para transações mais seguras, ajuste os valores máximos permitidos
            para cada período do dia.
          </Paragraph>

          <HeadingThree
            fontSize="14px"
            fontFamily={fontFamily.roboto}
            color={colors.cinzaLightDark}
            margin="0 0 8px 0"
          >
            Período diurno (06h-20h)
          </HeadingThree>
          <div style={{ marginBottom: `32px` }}>
            <PixLimitBox
              title="Limite total para o período"
              value={new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(user.meus_dados.limite_pix_dia_total)}
              action={() => {
                setIsUpdate(true);
                setOption(`diurno`);
                setHour(`06h e 20h`);
                setTT('total');
              }}
            />
            <PixLimitBox
              title="Limite por transação"
              value={new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(user.meus_dados.limite_pix_dia_transacao)}
              action={() => {
                setIsUpdate(true);
                setOption(`diurno`);
                setTT('por transação');
                setHour(`06h e 20h`);
              }}
            />
          </div>

          <HeadingThree
            fontSize="14px"
            fontFamily={fontFamily.roboto}
            color={colors.cinzaLightDark}
            margin="0 0 8px 0"
          >
            Período noturno (20h-06h)
          </HeadingThree>
          <div>
            <PixLimitBox
              title="Limite total para o período"
              value={new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(user.meus_dados.limite_pix_noite_total)}
              action={() => {
                setIsUpdate(true);
                setOption(`noturno`);
                setTT('total');
                setHour(`20h e 06h`);
              }}
            />
            <PixLimitBox
              title="Limite por transação"
              value={new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(user.meus_dados.limite_pix_noite_transacao)}
              action={() => {
                setIsUpdate(true);
                setOption(`noturno`);
                setTT('por transação');
                setHour(`20h e 06h`);
              }}
            />
          </div>
        </PaddingContainer>
      )}

      {isUpdate && (
        <PaddingContainer padding="20px">
          <HeadingTwo
            fontSize="20px"
            fontWeight="bold"
            fontFamily={fontFamily.roboto}
            color={colors.black}
            margin="0 0 4px 0"
          >
            Limite {tt} para o período {option}
          </HeadingTwo>
          <Paragraph
            fontSize="17px"
            fontColor={colors.cinzaLightMedium}
            lineHeight="24px"
            margin="0 0 24px 0"
          >
            Somando todas as transações Pix, esse será o valor máximo que você
            poderá usar entre {hour}.
          </Paragraph>
          <div
            style={{
              width: `100%`,
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
            }}
          >
            <div style={{ position: `absolute` }}>
              <span style={{ fontSize: `17px` }}>R$</span>
            </div>
            <Input
              inputType="text"
              value={value}
              inputFormat="normal"
              onChange={(e: any) => setValue(e.target.value)}
              inputPadding="3px 0 0 28px"
            />
          </div>
          <FilledButton
            text="Definir limite"
            bgColor1={
              value !== `` && value !== `0`
                ? colors.verdeMedium
                : colors.cinzaLight
            }
            textColor={
              value !== `` && value !== `0`
                ? colors.branco
                : colors.cinzaLightDark
            }
            height="46px"
            margin="32px 0 0 0"
            action={() => {
              if (value !== `` && value !== `0`) setPinOpen(true);
            }}
          />
        </PaddingContainer>
      )}

      {success && (
        <DataModal padding="40px 25px">
          <DisplayFlex direction="column">
            <HeadingTwo
              color="#495057"
              fontSize="20px"
              fontFamily={fontFamily.roboto}
              fontWeight="bold"
              margin="0 0 4px 0"
            >
              Limite ajustado
            </HeadingTwo>
            <Paragraph
              fontColor={colors.cinzaLightMedium}
              fontFamily={fontFamily.roboto}
              fontSize="17px"
              margin="0 0 40px"
              lineHeight="24px"
            >
              Por segurança, transações consideradas suspeitas podem ser
              bloqueadas, mesmo dentro do limite estabelecido por você.
              O novo limite leva de 24h a 48h para ser estabelecido.
            </Paragraph>
            <FilledButton
              text="Entendi"
              bgColor1={colors.verdeMedium}
              textColor={colors.branco}
              height="46px"
              action={() => {
                setSuccess(false);
                setIsUpdate(false);
              }}
            />
          </DisplayFlex>
        </DataModal>
        // <DataModal padding="40px 25px">
        //   <DisplayFlex direction="column">
        //     <HeadingTwo
        //       color="#495057"
        //       fontSize="20px"
        //       fontFamily={fontFamily.roboto}
        //       fontWeight="bold"
        //       margin="0 0 4px 0"
        //     >
        //       Solicitação de ajuste enviada
        //     </HeadingTwo>
        //     <Paragraph
        //       fontColor={colors.cinzaLightMedium}
        //       fontFamily={fontFamily.roboto}
        //       fontSize="17px"
        //       margin="0 0 40px"
        //       lineHeight="24px"
        //     >
        //       Por segurança, o novo limite leva de 24h a 48h para ser
        //       estabelecido.
        //     </Paragraph>
        //     <FilledButton
        //       text="Entendi"
        //       bgColor1={colors.verdeMedium}
        //       textColor={colors.branco}
        //       height="46px"
        //     />
        //   </DisplayFlex>
        // </DataModal>
      )}
      {error && (
        <DataModal padding="40px 25px">
          <DisplayFlex direction="column">
            <HeadingTwo
              color="#495057"
              fontSize="20px"
              fontFamily={fontFamily.roboto}
              fontWeight="bold"
              margin="0 0 4px 0"
            >
              Erro ao solicitar ajuste
            </HeadingTwo>
            <Paragraph
              fontColor={colors.cinzaLightMedium}
              fontFamily={fontFamily.roboto}
              fontSize="17px"
              margin="0 0 40px"
              lineHeight="24px"
            >
              É preciso aguardar de 24 a 48hrs para realizar a alteração do limite. Caso já possua alguma solicitação pendente, não será possivel realizar uma nova solicitação.
            </Paragraph>
            <FilledButton
              text="Entendi"
              bgColor1={colors.vermelho}
              textColor={colors.branco}
              height="46px"
              action={() => {
                setError(false);
                setIsUpdate(false);
              }}
            />
          </DisplayFlex>
        </DataModal>
        
      )}
    </>
  );
}
