/* eslint-disable @next/next/no-img-element */
import { Caption, HeadingTwo } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import React from 'react';
import { HeaderContainer, CenterContainer } from './style';

interface IExtractHeader {
  saldo: string;
  children?: React.ReactNode;
}

export default function ExtractHeader({ saldo, children }: IExtractHeader) {
  return (
    <HeaderContainer style={{ position: `relative` }}>
      <CenterContainer>
        <HeadingTwo
          fontWeight="700"
          fontSize="23px"
          lineHeight="32px"
          color="white"
          margin="0 0 14px 0"
        >
          {saldo}
        </HeadingTwo>
        <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <a
            style={{
              fontSize: "14px",
              fontWeight: '600',
              color: colors.branco,
              margin: "0 0 0px 0 ",
              paddingBottom: '4px',
            }}
          >
            Todas as contas
          </a>
          <i
            className='icon-chevron-right'
            style={{
              margin: "0px 0 0 8px",
              color: colors.branco,
            }}
          />
        </div>
        <img
          src="/icons/eye-off.svg"
          alt="icone olho"
          style={{ position: `absolute`, right: `22px` }}
        />
      </CenterContainer>

      {children}
    </HeaderContainer>
  );
}
