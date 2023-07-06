import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  display: flex;
  top: 0;
  left: 0;
  z-index: 5;

  @media (max-width: 550px) {
    height: 13rem;
  }

  .containerHeader {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      margin-left: 10px;
      widht: 166px;
      height: 100px;

      @media (max-width: 550px) {
        margin-left: auto;
      }
    }

    @media (max-width: 550px) {
      flex-direction: column;
    }
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .separatorButton {
    display: flex;
    flex-direction: row;

    @media (max-width: 550px) {
      width: 100%;
      padding: 0rem 1rem 0rem 2.6rem;
      justify-content: space-around;
    }
  }

  @media (max-width: 550px) {
    flex-direction: column-reverse;
  }
`;

export const ButtonDarkLight = styled.button`
  width: 38px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.borderButtonHeader};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ButtonNotification = styled.button`
  width: 38px;
  height: 40px;
  border-radius: 10px;
  margin-left: 40px;
  margin-right: 40px;
  border: 1px solid ${({ theme }) => theme.colors.borderButtonHeader};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .photoProfile {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 999px;
    width: 45px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }

  .userdata {
    width: 100%;
    display: flex;
    padding: 0rem 0rem 0rem 0.5rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: row;
      h1 {
        color: ${({ theme }) => theme.colors.text};
        font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
        font-family: ${({ theme }) => theme.fonts.regular};
      }
    }
  }
`;

export const ButtonProfile = styled.button`
  width: 38px;
  height: 40px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.background};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
