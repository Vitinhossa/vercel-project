import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { fontSizes } from '@/utils/fonts';
import { Paragraph } from '../../atoms/Text';

interface IGestorList {
  title?: string;
  subtitle?: string;
  color?: string;
  fontColor?: string;
}

export default function FluxoList({
  title,
  subtitle,
  color,
  fontColor,
}: IGestorList) {
  return (
    <div
      style={{
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `center`,
        alignItems: `center`,
        padding: `24px`,
      }}
    >
      <div style={{ display: `flex`, flexDirection: `row`, width: `100%` }}>
        <div
          style={{
            width: `42px`,
            height: `42px`,
            borderRadius: `50%`,
            backgroundColor: `${color}`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <i
            className="icon-book"
            style={{
              color: `white`,
              fontSize: fontSizes.medium16,
              marginTop: `2px`,
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
          <Paragraph
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            fontColor="#6E747A"
          >
            {title}
          </Paragraph>
          <Paragraph
            fontWeight="700"
            fontSize="16px"
            lineHeight="22px"
            fontColor={fontColor}
          >
            {subtitle}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
