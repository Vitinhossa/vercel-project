import { fontFamily } from '@/utils/fonts';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { DisplayFlex } from '@/components/atoms/Alignment';
import styled from 'styled-components';
import WhatsappIcon from '@/assets/svg/whatsapp';
import { useAlert } from 'react-alert';
import * as S from './style';

const Items = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

interface IListItem {
  bgColor?: string;
  iconColor?: string;
}
const ListItem = styled.li<IListItem>`
  margin-top: 20px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  width: calc(100% / 4);
  margin-bottom: 10px;
  padding: 0 4px;
  .list-item-box {
    width: 45px;
    height: 45px;
    border-radius: 8px;
    background-color: ${(props) =>
      props.bgColor ? props.bgColor : colors.cinzaLight};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg path {
      fill: ${(props) =>
        props.iconColor ? props.iconColor : colors.azulLight};
    }
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.4);
  }

  p {
    font-size: 0.9rem;
    font-family: ${fontFamily.roboto};
    color: ${colors.black};
    text-align: center;
    word-break: break-all;
  }
`;
interface IShareDataModal {
  textShare: string;
  closeAction: any;
}
export default function ModalCompartilhar({
  textShare,
  closeAction,
}: IShareDataModal) {
  const alert = useAlert();
  const optionsToShare = [
    {
      id: 2,
      title: `WhatsApp`,
      icon: WhatsappIcon,
      url: 'whatsapp://send?text=',
      iconColor: `#cfcfd7`,

      bgColor: `#283c62`,
    },
  ];

  return (
    <S.WrapperContainer>
      <S.BlackContainer />
      <S.ModalContainer>
        <S.FlexContainer
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
        >
                        <S.Header>
     
              <S.BoxLogo>
                <img src="/logo_10xbank.svg" />
              </S.BoxLogo>
              <div>
                <p style={{color: 'black', fontSize: '16px'}}>PixLand</p>
                <p style={{color: '#818889', fontSize: '12px'}}>pixland.com.br</p>
              </div>
             

          </S.Header>
          <S.CloseBtn
            onClick={closeAction}
            style={{ position: `absolute`, right: `10px` }}
          >
            <i className="icon-close" style={{ fontSize: '12px' }} />
          </S.CloseBtn>
        </S.FlexContainer>

        <div style={{ width: `100%` }}>

          <S.Content>
          <Items>
            {optionsToShare.map((option) => (
              <ListItem
                key={option.id}
                bgColor={option.bgColor || ``}
                iconColor={option.iconColor || ``}
              >
                <div
                  className="list-item-box"
                  onClick={() => {
                    if (option.title == 'WhatsApp') {
                      closeAction();
                      window.location.href = option.url + textShare;
                      const alerta = alert.show('Copiado!', {
                        timeout: 8000,
                        type: 'success',
                      });
                    }
                    if (option.title == 'Copiar texto') {
                      navigator.clipboard.writeText(textShare);
                      const alerta = alert.show('Copiado!', {
                        timeout: 8000,
                        type: 'success',
                      });
                      closeAction();
                    }
                  }}
                >
                  {option.icon && option.icon()}
                </div>
                <Paragraph>{option.title}</Paragraph>
              </ListItem>
            ))}
          </Items>
          <S.BoxItem
            onClick={() => {
              navigator.clipboard.writeText(
                `operacao-luis.land.com.br/register/${textShare}`,
              );
              const alerta = alert.show('Copiado!', {
                timeout: 8000,
                type: 'success',
              });
              closeAction();
            }}
          >
            Copiar Link
            <i
              className="icon-copy"
              style={{
                lineHeight: `15px`,
                display: `flex`,
              }}
            />
          </S.BoxItem>
        </S.Content>
        </div>
      </S.ModalContainer>
    </S.WrapperContainer>
  );
}
