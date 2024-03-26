import React from 'react';
import { fontSizes } from '@/utils/fonts';
import { Paragraph } from '../../atoms/Text';

interface IGestorList {
  title?: string;
  subtitle?: string;
  price?: string;
  percentage?: string;
  color?: string;
}

export default function GestorList({
  title,
  subtitle,
  price,
  percentage,
  color,
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
      <div style={{ display: `flex`, flexDirection: `row`, width: `50%` }}>
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
          <Paragraph fontWeight="700" fontSize="14px" lineHeight="20px">
            {title}
          </Paragraph>
          <Paragraph fontWeight="400" fontSize="12px" lineHeight="16px">
            {subtitle}
          </Paragraph>
        </div>
      </div>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          width: `50%`,
          alignItems: `flex-end`,
        }}
      >
        <Paragraph
          fontWeight="700"
          fontSize="14px"
          lineHeight="20px"
          fontColor="#0f3b93"
        >
          {price}
        </Paragraph>
        <Paragraph
          fontWeight="400"
          fontSize="12px"
          lineHeight="16px"
          fontColor="#6E747A"
        >
          {percentage}
        </Paragraph>
      </div>
    </div>
  );
}
