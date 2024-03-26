import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';
import { Paragraph } from '../../atoms/Text';

interface ITransactionList {
  title?: string;
  subtitle?: string;
  price?: string;
  percentage?: string;
  type: string;
}

export default function TransactionList({
  title,
  subtitle,
  price,
  type
}: ITransactionList) {

  const transactionColors = {
    'in': {
      background: '#98D9C0',
      icon: './money-bill.svg'
    },
    'out': {
      background: '#EEEEEE',
      icon: './credit-card.svg',

    }
  }

  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        padding: `24px`,
        borderBottom: `1px solid ${colors.cinzaLight}`
      }}
    >
      <div style={{ display: `flex`, flexDirection: `row` }}>
        <div
          style={{
            width: `42px`,
            height: `42px`,
            borderRadius: `50%`,
            backgroundColor: transactionColors[type].background,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <img
            src={ transactionColors[type].icon }
            style={{
              fontSize: fontSizes.medium16,
            }}
          />
        </div>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            marginLeft: `18px`,
          }}
        >
          <Paragraph fontWeight="700" fontSize="14px" lineHeight="20px">
            {title}
          </Paragraph>
          <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px" margin='4px 0 0 0'>
            {subtitle}
          </Paragraph>
        </div>
      </div>
      <Paragraph
        fontSize="14px"
        lineHeight="20px"
        fontColor={colors.cinzaDark}
      >
        {price}
      </Paragraph>
    </div>
  );
}
