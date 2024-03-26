/* eslint-disable no-nested-ternary */
import Link from 'next/link';
import homeIcon from '@/assets/svg/bottomMenu/navbar-home';
import FluxIcon from '@/assets/svg/bottomMenu/bar-graph';
import listIcon from '@/assets/svg/bottomMenu/navbar-list';
import dotsIcon from '@/assets/svg/bottomMenu/navbar-dots';
import { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontFamily } from '@/utils/fonts';
import { MenuContainer, MenuItems, ItemTitle, ItemIcon } from './style';
import IconButton from '../../atoms/IconButton';
import { Paragraph } from '../../atoms/Text';

interface IBottomMenu {
  plusBtnAction?: () => void;
  actionMore?: () => void;
}

export default function BottomMenu({ plusBtnAction, actionMore }: IBottomMenu) {
  const plusButton = () => (
    <IconButton
      action={plusBtnAction}
      bgColor={colors.verdeLight}
      iconName="icon-add"
      iconColor={colors.branco}
      circle
      height="46px"
      width="46px"
    />
  );

  const [menuItems] = useState([
    {
      id: 0,
      title: `Principal`,
      icon: homeIcon,
      href: `/home`,
    },
    {
      id: 1,
      title: `Fluxo de caixa`,
      icon: FluxIcon,
      href: `/flux`,
    },
    {
      id: 2,
      title: ``,
      mainButton: true,
      icon: plusButton,
    },
    {
      id: 3,
      title: `Transações`,
      icon: listIcon,
      href: `/transacoes`,
    },
    {
      id: 4,
      title: `Mais`,
      icon: dotsIcon,
      action: true,
      href: `/gestorfinanceiro`,
    },
  ]);
  const renderItem = (item: {
    mainButton?: undefined | boolean;
    icon: () => any;
    action?: boolean;
    title: string;
    href?: string;
    id: number;
  }) => (
    <MenuItems
      isMainBtn={item.mainButton || false}
      key={item.id}
      onClick={() => (item.action && actionMore ? actionMore() : undefined)}
    >
      <ItemIcon isMainBtn={item.mainButton || false}>{item.icon()}</ItemIcon>
      {item.title && (
        <ItemTitle>
          <Paragraph fontSize="10px" fontFamily={fontFamily.roboto}>
            {item.title}
          </Paragraph>
        </ItemTitle>
      )}
    </MenuItems>
  );
  return (
    <MenuContainer>
      {menuItems.map((item) =>
        // eslint-disable-next-line @next/next/link-passhref
        item.href && !item.action ? (
          <Link href={item.href} key={item.id}>
            {renderItem(item)}
          </Link>
        ) : item.action ? (
          renderItem(item)
        ) : (
          renderItem(item)
        ),
      )}
    </MenuContainer>
  );
}
