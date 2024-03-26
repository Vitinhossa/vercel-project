import React, { useState, useEffect } from 'react';
import MenuListItem from '../../atoms/MenuListItem';
import { MenuListContainer } from './style';

interface IMenuListItems {
  items: [{ id: number; title: string }];
  iconName?: string;
}

interface IItems {
  id: number;
  title: string;
}

export default function MenuListItems({ items, iconName }: IMenuListItems) {
  const [menuItems, setMenuItems] = useState<IItems[]>([]);

  useEffect(() => {
    setMenuItems(items);
  }, [items]);

  const buildList = () =>
    menuItems.map((item) => (
      <MenuListItem
        iconName={iconName}
        title={item.title}
        key={item.id}
        hasBorderBottom
      />
    ));

  return <MenuListContainer>{buildList()}</MenuListContainer>;
}
