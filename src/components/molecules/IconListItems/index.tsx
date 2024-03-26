import IconListItem from '../../atoms/IconListItem';
import { ListItems } from './style';

interface IItem {
  id: number;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  action: (e: any) => void;
}

interface IIconListItems {
  items?: Array<IItem>;
}

export default function IconListItems({ items }: IIconListItems) {
  const buildListItems = () =>
    items?.map((item) => (
      <IconListItem
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        imageUrl={item.imageUrl}
        action={() => item.action(item)}
      />
    ));

  return <ListItems>{buildListItems()}</ListItems>;
}
