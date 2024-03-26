import { fontFamily } from '@/utils/fonts';
import { HeadingThree, Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import FilledButton from '@/components/atoms/FilledButton';
import { DisplayFlex } from '@/components/atoms/Alignment';
import styled from 'styled-components';
import WhatsappIcon from '@/assets/svg/whatsapp';
import InstagramIcon from '@/assets/svg/instagram';
import DataModal from '../DataModal';
import { useAlert } from 'react-alert';

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
  title?: string;
  textShare?: string;
  closeAction?: () => any;
}
export default function ShareDataModal({
  title,
  textShare,
  closeAction,
}: IShareDataModal) {
  const alert = useAlert();
  const optionsToShare = [
    /*{
      id: 0,
      title: `Compartilhar por`,
      bgColor: colors.branco,
    },
    {
      id: 1,
      title: `ShareMe`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },*/
    {
      id: 2,
      title: `WhatsApp`,
      icon: WhatsappIcon,
      url: 'whatsapp://send?text=',
      iconColor: `#cfcfd7`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },
   /*{
      id: 3,
      title: `Chats`,
      icon: InstagramIcon,
      iconColor: `#cfcfd7`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },
    {
      id: 4,
      title: `Salvar no drive`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },*/
    /*{
      id: 5,
      title: `Telegram`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },
    {
      id: 6,
      title: `Compartilhar em uma`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },*/
    {
      id: 7,
      title: `Copiar texto`,
      // bgColor: colors.azulMediumDark,
      bgColor: `#283c62`,
    },
  ];
  return (
    <DataModal closeAction={closeAction}>
      <div style={{ width: `100%` }}>
        <DisplayFlex align="center" justify="center">
          <HeadingThree
            color={colors.black}
            fontSize="1.2rem"
            lineHeight="22px"
            fontFamily={fontFamily.roboto}
            fontWeight="bold"
          >
            {title}
          </HeadingThree>
        </DisplayFlex>
      </div>
      <div style={{ width: `100%` }}>
        <Items>
          {optionsToShare.map((option) => (
            <ListItem
              key={option.id}
              bgColor={option.bgColor || ``}
              iconColor={option.iconColor || ``}
            >
              <div className="list-item-box" onClick={() => {
                if(option.title == 'WhatsApp'){
                  closeAction()
                  window.location.href = option.url+textShare;
                  const alerta = alert.show('Copiado!', {
                    timeout: 8000,
                    type: 'success'
                  })
                }
                if(option.title == 'Copiar texto'){
                  navigator.clipboard.writeText(textShare)
                  const alerta = alert.show('Copiado!', {
                    timeout: 8000,
                    type: 'success'
                  })
                  closeAction()
                }
              }}>
                {option.icon && option.icon()}
              </div>
              <Paragraph>{option.title}</Paragraph>
            </ListItem>
          ))}
        </Items>
      </div>
      <div style={{ width: `100%`, marginTop: `40px` }}>
        <FilledButton
          text="Voltar"
          bgColor1={colors.cinzaLightMedium}
          textColor={colors.branco}
          height="46px"
          action={closeAction}
        />
      </div>
    </DataModal>
  );
}
