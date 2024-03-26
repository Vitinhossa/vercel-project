import React from 'react';
import Header from '../molecules/Header';
import { Paragraph } from '../atoms/Text';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';
import SideMenuListItems, { IMenuList } from '../molecules/SideMenuListItems';
import PaddingContainer from '../atoms/PaddingContainer';

interface IAcordosPoliticasTermosTemplate {
    menuItems: Array<IMenuList>;
}

export default function AcordosPoliticasTermosTemplate ({menuItems}:IAcordosPoliticasTermosTemplate) {
  return (
        <>
          <Header title='Acordos e Termos' bgColor={colors.branco} />
          <PaddingContainer padding="50px 16px 10px 16px">
              <Paragraph
                  color={colors.cinza800}
                  fontSize={fontSizes.xLarge20}
                  fontWeight={fontWeight.bold}
                  lineHeight="24.2px"
              >
                Acesse os documentos de Acordos, Políticas e Termos legais.
              </Paragraph>
          </PaddingContainer>
          {menuItems ? <SideMenuListItems menuItems={menuItems} />:<></>}
        </>
  );
}