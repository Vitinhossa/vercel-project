import { useState } from 'react';

import { footerElements } from '@/utils/footerElements';
import Footer from '@/components/atoms/Footer';
import {
  Button,
  Text
} from './style';
import { helpIcons } from './footer';
import { useRouter } from 'next/router';

export default function HelpFooter() {
  const router = useRouter();

  const elements = Object.entries(footerElements);

  const [activeElement, setActiveElement] = useState(0);

  const handlePress = ({ index, route }) => {
    setActiveElement(index);
    router.push(route);
  }

  return (
    <Footer>
      {
        elements.map(([key, item], index) => (
          <Button key={index} onClick={() => handlePress({ index, route: item.route })}>
            {
              helpIcons[key](activeElement === index)
            }
            <Text isActive={activeElement === index} >{item.text}</Text>
          </Button>
        ))
      }
    </Footer>
  );
}
