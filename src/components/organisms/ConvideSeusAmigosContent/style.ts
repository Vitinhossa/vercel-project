import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  margin: 24px 20px 40px;

  h1 {
    font-size: 20px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 16px;
  }

  p {
    &:first-of-type {
      font-size: 14px;
      line-height: 140%;
    }
  }
`;

export const Section = styled.div`
  margin-top: 24px;

  h3 {
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 8px;
  }
`;

export const CommissionSection = styled.div`
  margin-top: 24px;

  h2 {
    font-size: 16px;
    line-height: 140%;
    margin-bottom: 20px;
    font-weight: bold;
  }

  h3 {
    font-size: 16px;
    line-height: 140%;
  }

  &:last-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.cinzaLight};
    padding: 40px 20px;
    margin-top: 40px;
  }
`;

export const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const InvitationLink = styled.p`
  font-size: 16px;
  line-height: 140%;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cinzaLightMedium};
  color: ${({ theme }) => theme.colors.cinzaLightDark};
  margin-bottom: 32px;
`;

export const ShareButtonList = styled.div`
  display: flex;
  width: 100%;
`;

export const ShareButton = styled.a`
  width: 48px;
  height: 48px;
  border: 1px solid ${({ theme }) => theme.colors.verdeMedium};
  border-radius: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 16px;
  }
`;

export const CommissionList = styled.div``;

export const CommissionItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.cinzaLight};
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
`;

export const CommissionItemSection = styled.div`
  p {
    color: ${({ theme }) => theme.colors.cinzaLightDark};
  }
`;

export const CommissionItemImage = styled.img`
  margin-left: -20px;
`;

export const CommissionType = styled.div`
  text-align: end;
  margin-bottom: 8px;

  p {
    font-size: 14px !important;
    line-height: 140%;
    color: ${({ theme }) => theme.colors.cinzaLightDark};

    span {
      display: block;
      color: ${({ theme }) => theme.colors.black};
      font-weight: bold;
    }
  }
`;

export const CommissionDistributedList = styled.div`
  margin-top: 4px;

  p {
    text-transform: capitalize;
    margin-bottom: 4px;

    span {
      display: inline;
      margin-left: 4px;
    }
  }
`;

export const AffiliateProgram = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cinzaLight};
  cursor: pointer;
`;

export const Icon = styled.i``;

