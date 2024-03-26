import { Paragraph } from '@/components/atoms/Text';
import { ReactNode } from 'react';
import {
  ModalContainer,
  FlexContainer,
  BlackContainer,
  WrapperContainer,
  CloseBtn,
} from './style';

interface IDataModal {
  children?: ReactNode;
  title?: string;
  padding?: string;
  closeAction?: () => void;
}

export default function DataModal({
  children,
  title,
  padding,
  closeAction,
}: IDataModal) {
  return (
    <WrapperContainer>
      <BlackContainer />
      <ModalContainer padding={padding}>
        <FlexContainer
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <div
            style={{
              width: `70px`,
              height: `4px`,
              backgroundColor: `#575656`,
              borderRadius: `5px`,
            }}
          />

          <CloseBtn
            onClick={closeAction}
            style={{ position: `absolute`, right: `10px` }}
          >
            <i className="icon-close" />
          </CloseBtn>
        </FlexContainer>
        <Paragraph
          fontSize="18px"
          lineHeight="24px"
          fontWeight="bold"
          margin="24px 0 0 0"
        >
          {title}
        </Paragraph>

        {children}
      </ModalContainer>
    </WrapperContainer>
  );
}
