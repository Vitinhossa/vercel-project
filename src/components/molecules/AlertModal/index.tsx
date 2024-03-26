import { colors } from '@/utils/colors';
import { fontFamily, fontSizes, fontWeight } from '@/utils/fonts';
import { Modal, MainContainer, InputCode } from './style';
import FilledButtonContainer from '../FilledButtonContainer';
import { Paragraph } from '../../atoms/Text';
import FadeBg from '../../atoms/FadeBg';
import { useState } from 'react';
import Cookies from 'js-cookie'
import api from '@/services/api';
import {useAuth} from '@/contexts/auth';
import { useRouter } from 'next/router';

interface IActionModal {
  text?: string;
  iconName?: string;
  iconColor?: string;
  typeTransaction?: string;

  btnText?: string;
  btnTextColor?: string;

  btnHeight?: string;
  btnWidth?: string;
  btnRoundedSize?: string;
  modalHeight?: string;
  modalWidth?: string;
  modalBgColor?: string;
  btnAction?: () => any;
  pinAction?: (hash: any) => any;

  isOptionModal?: boolean;
  hasCloseBtn?: boolean;
  negativeBtnText?: string;
  positiveBtnText?: string;
  positiveBtnAction?: () => any;
  negativeBtnAction?: () => any;
  closeClick?: () => any;

  isPinModal?: boolean;
}

export default function AlertModal({
  btnAction,
  pinAction,
  btnText,
  iconColor,
  iconName,
  text,
  modalHeight,
  btnRoundedSize,
  modalWidth,
  btnHeight,
  typeTransaction,
  modalBgColor,
  btnWidth,
  isOptionModal,
  hasCloseBtn,
  negativeBtnText,
  positiveBtnText,
  negativeBtnAction,
  positiveBtnAction,
  closeClick,
  isPinModal,
}: IActionModal) {
  const [value, setValue] = useState(``);
  const router = useRouter();
  const { user, loading }:any = useAuth();
  if(loading) return <></>;

  if(isPinModal && user.hasPin == 0)
    router.push(`/meusdados/alterarpin`)

  return (
    <MainContainer>
      <FadeBg />
      <Modal width={modalWidth} height={modalHeight} bgColor={modalBgColor}>
        {hasCloseBtn && (
          <button
            type="button"
            style={{
              position: `absolute`,
              right: `20px`,
              top: `20px`,
              border: `none`,
              outline: `none`,
              backgroundColor: `transparent`,
            }}
            onClick={closeClick}
          >
            <i className="icon-close" />
          </button>
        )}
        {isOptionModal ? (
          <div
            style={{
              width: `42px`,
              height: `42px`,
              borderRadius: `50px`,
              backgroundColor: colors.verdeLight,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
            }}
          >
            <Paragraph
              fontSize={fontSizes.xLarge24}
              fontColor={colors.branco}
              fontWeight={fontWeight.bold}
              lineHeight="22px"
            >
              {` `}?{` `}
            </Paragraph>
          </div>
        ) : (
          <i
            className={iconName}
            style={{ fontSize: `45px`, color: iconColor, lineHeight: `35px` }}
          />
        )}
        <Paragraph
          color={colors.cinzaMediumDark}
          fontSize={fontSizes.medium16}
          fontFamily={fontFamily.roboto}
          fontWeight={
            isOptionModal || isPinModal ? fontWeight.bold : fontWeight.regular
          }
        >
          {text}
        </Paragraph>

        {isPinModal && (
          <InputCode type="password" maxLength={8} onChange={(e: any) => setValue(e.target.value)} />
        )}

        {isOptionModal ? (
          <div
            style={{
              width: `100%`,
              display: `flex`,
              justifyContent: `space-evenly`,
              alignItems: `center`,
            }}
          >
            <FilledButtonContainer
              btnIsRounded
              height={btnHeight || `42px`}
              width={btnWidth || `110px`}
              btnText={negativeBtnText || `Não`}
              btnAction={negativeBtnAction}
              btnBgColor1={colors.magentaMediumDark}
              btnBgColor2={colors.magentaLightMedium}
              btnRoundedSize={btnRoundedSize || `80px`}
              btnTextColor={colors.branco}
            />

            <FilledButtonContainer
              btnIsRounded
              height={btnHeight || `42px`}
              width={btnWidth || `110px`}
              btnText={positiveBtnText || `Sim`}
              btnAction={positiveBtnAction}
              btnBgColor1={colors.verdeMedium}
              btnBgColor2={colors.verdeLight}
              btnRoundedSize={btnRoundedSize || `80px`}
              btnTextColor={colors.branco}
            />
          </div>
        ) : (
          <>
          {isPinModal ? (
          <FilledButtonContainer
            btnIsRounded
            height={btnHeight || `42px`}
            width={btnWidth || `110px`}
            btnText={btnText}
            btnAction={() => {

              (async function() {

                const token = Cookies.get('token')
                if (token) {

                    console.log("Got a token in the cookies, let's see if it is valid")
                    api.defaults.headers.Authorization = `PixLand ${token}`
                    
                      const { data: user } = await api.post('Auth/Pin/Validate', {pin:value, type:typeTransaction})
                      if(user.success)
                      pinAction(user.hash)
                      else
                      pinAction('')
  
                    
                    
                    //setUser(user);
                }
                else{
                  pinAction('')
                }
              }());

              
            
            
            }}
            btnBgColor1={colors.verdeLight}
            btnRoundedSize={btnRoundedSize || `80px`}
            btnTextColor={colors.branco}
          />) : (
            <FilledButtonContainer
            btnIsRounded
            height={btnHeight || `42px`}
            width={btnWidth || `110px`}
            btnText={btnText}
            btnAction={btnAction}
            btnBgColor1={colors.verdeLight}
            btnRoundedSize={btnRoundedSize || `80px`}
            btnTextColor={colors.branco}
          />
          )}
          </>
        )}
      </Modal>
    </MainContainer>
  );
}
