import { useContext } from "react";
import { Sun, Moon, Bell, User, CaretDown } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  ButtonDarkLight,
  ButtonNotification,
  ButtonProfile,
  ProfileContainer,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import Logo from "/assets/Logo.png";
import LogoDark from "/assets/LogoDark.png";

import { ThemeContext } from "../../App";

export function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);

  function handleToogleTheme() {
    toogleTheme();
  }

  return (
    <HeaderContainer>
      <div className="containerHeader">
        <HeaderButtonsContainer>
          {theme === "light" ? (
            <img src={Logo} alt="Logo" width={1000} />
          ) : (
            <img src={LogoDark} alt="Logo" />
          )}

          <div className="separatorButton">
            <ButtonDarkLight onClick={handleToogleTheme}>
              {theme === "light" ? <Sun size={24} /> : <Moon size={24} />}
            </ButtonDarkLight>
          </div>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
