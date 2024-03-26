import MenuListItem from '@/components/atoms/MenuListItem';
import { useRouter } from 'next/router';
import { fontSizes } from '@/utils/fonts';
import { ListItemsContainer } from './style';
import Collapse from '../Collapse';

export interface IMenuList {
  id?: number;
  title: string;
  route: string;

  inCenter?: boolean;
  hasBorder?: boolean;
  subtitle?: string;
  hasIcon?: boolean;
  href?: string;
  collapseItems?: Array<{ title: string, route: string, href?: string; }>
}

interface ISideMenuListItems {
  menuItems?: Array<IMenuList>;
  height?: string;
}
export default function SideMenuListItems({
  menuItems,
  height,
}: ISideMenuListItems) {
  const router = useRouter();



  return (
    <ListItemsContainer height={height}>
      {menuItems?.map((item, index) => (
        item.collapseItems ? (
          <Collapse title={item.title} key={index}>
            {item.collapseItems.map((itemCollapse, index) => {
              return (
                <MenuListItem
                  key={`${Math.floor(Math.random() * 1000)} ${index}`}
                  title={itemCollapse.title}
                  action={() => {
                    if (itemCollapse.href) {
                      window.open(
                        itemCollapse.href,
                        '_blank'
                      )
                    } else {
                      router.push(itemCollapse.route)
                    }
                  }}
                  titleSize={fontSizes.medium16}
                  titleColor='#303030'
                  itemHeight='55px'
                />
              )
            })}
          </Collapse>
        ) : (
          <MenuListItem
            key={item.id || index}
            title={item.title}
            hasBorderBottom={item.hasBorder === undefined}
            titleInCenter={item.inCenter !== undefined}
            action={() => {
              if (item.href) {
                window.open(
                  item.href,
                  '_blank'
                )
              } else {
                router.push(item.route)
              }
            }}
            titleSize={fontSizes.medium16}
            titleColor='#303030'
            subtitle={item.subtitle}
            iconName={item.hasIcon ? `icon-chevron-right` : ``}
            itemHeight='55px'
          />
        )
      ))}
    </ListItemsContainer>
  )
}
