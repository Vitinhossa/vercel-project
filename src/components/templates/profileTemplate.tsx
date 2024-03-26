import Header from '../molecules/Header';
import PaddingContainer from '../atoms/PaddingContainer';
import ProfileCard from '../molecules/ProfileCard';
import SideMenuListItems from '../molecules/SideMenuListItems';

interface IMenuList {
  id: number;
  title: string;
  subtitle?: string;
  hasIcon?: boolean;
  route: string;
  inCenter?: boolean;
  hasBorder?: boolean;
}

interface IProfile {
  userImage?: string;
  userName?: string;
  userBank?: string;
  userAccount?: string;
  userAgency?: string;

  menuItems?: Array<IMenuList>;
}
export default function ProfileTemplate({
  userAccount,
  userAgency,
  userBank,
  userImage,
  userName,
  menuItems,
}: IProfile) {
  // console.log(menuItems);
  return (
    <>
      <Header hasMenuIcon={false} isMainHeader mainHasBackBtn />

      <PaddingContainer padding="20px">
        <ProfileCard
          imageProfile={`/${userImage}` || ``}
          userName={userName}
          bank={userBank}
          agency={userAgency}
          account={userAccount}
          padding="0 20px"
        />
        <SideMenuListItems menuItems={menuItems} height="calc(100% - 210px)" />
      </PaddingContainer>
    </>
  );
}
