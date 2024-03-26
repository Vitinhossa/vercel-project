import { ConnectIcon } from "./connect";
import { FinanceIcon } from "./finance";
import { HomeIcon } from "./home";
import { ProfileIcon } from "./profile";
import { ShopIcon } from "./shop";

export const helpIcons = {
  home: (isActive: boolean) => <HomeIcon isActive={isActive} />,
  shop: (isActive: boolean) => <ShopIcon isActive={isActive} />,
  connect: (isActive: boolean) => <ConnectIcon isActive={isActive} />,
  finance: (isActive: boolean) => <FinanceIcon isActive={isActive} />,
  profile: (isActive: boolean) => <ProfileIcon isActive={isActive} />,
};
