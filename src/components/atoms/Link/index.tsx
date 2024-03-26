import LinkRouter from 'next/link';
import { CSSProperties } from 'styled-components';
import { CustomLink } from './style';

interface Ilink {
  text?: string;
  url?: string;
  fontColor?: string;
  fontWeight?: string;
  fontSize?: string;
  textAlign?: string;
  marginTop?: string;
  margin?: string;
  style?: CSSProperties;
  transform?: string;
  children?: React.ReactNode;
  clicked?: () => any;
}

export default function Link({
  url,
  text,
  fontColor,
  fontWeight,
  fontSize,
  textAlign,
  marginTop,
  margin,
  style,
  children,
  clicked,
}: Ilink) {
  return (
    <LinkRouter href={url || ``}>
      <CustomLink
        fontColor={fontColor}
        fontWeight={fontWeight}
        textAlign={textAlign}
        fontSize={fontSize}
        marginTop={marginTop}
        margin={margin}
        style={style}
        onClick={clicked}
      >
        {text}
        {children}
      </CustomLink>
    </LinkRouter>
  );
}
