import { MenuOpenContainer, MenuOverlay } from './style';
import ProfileCard from '../../molecules/ProfileCard';
import SideMenuListItems from '../../molecules/SideMenuListItems';

interface IMenuList {
  id: number;
  title: string;
  route: string;
}

interface ISideMenu {
  fadeClick?: () => void;
  copyClick?: () => void;
  userImage?: string;
  userName?: string;
  userBank?: string;
  userAccount?: string;
  userAgency?: string;
  userPix?: string;
  menuItems?: Array<IMenuList>;
  isVisible?: boolean;
}

export default function SideMenu({
  fadeClick,
  copyClick,
  userImage,
  userName,
  userAccount,
  userPix,
  userAgency,
  userBank,
  menuItems,
  isVisible,
}: ISideMenu) {
  return (
    <MenuOpenContainer isVisible={isVisible} >
      <MenuOverlay isVisible={isVisible}>
        <ProfileCard
          imageProfile={`${userImage}` || ``}
          userName={userName}
          bank={userBank}
          agency={userAgency}
          account={userAccount}
          chavepix={userPix}
          fadeClick={fadeClick}
          copyClick={copyClick}
          padding='14px 19px 0px 19px;'
        />
        <SideMenuListItems menuItems={menuItems} />
      </MenuOverlay>
    </MenuOpenContainer>
  );
}
