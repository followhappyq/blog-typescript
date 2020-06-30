import React from "react"
import { Link } from "react-router-dom"
import { Icon, Image } from "semantic-ui-react"

import "./header.scss"

interface HeaderProps {
  onMailClick(): void
}

const Header: React.FC<HeaderProps> = ({ onMailClick }) => {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__left" onClick={onMailClick}>
          <div className="header__mail">
            <Icon name="mail outline" />
            <span className="header__title">HappyQ</span>
          </div>
        </div>
        <div className="header__middle">
          <a href="https://www.facebook.com/ihappyq" target="_blank" rel="noopener noreferrer">
            <Icon name="facebook f" className="header__social" />
          </a>
          <a href="https://vk.com/followhappyq" target="_blank" rel="noopener noreferrer">
            <Icon name="vk" className="header__social" />
          </a>
          <a href="https://www.instagram.com/followhappyq/" target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" className="header__social" />
          </a>
        </div>
      </div>
      <div className="header__logo">
        <div className="header__logo-center">
          <Image src="./img/logo-1.png" alt="HappyQ" />
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__menu">
          <ul className="header__list">
            <li className="header__list-item">
              <Link to="/" className="header__link">
                HOME
              </Link>
            </li>
            <li className="header__list-item">
              <Link to="/" className="header__link">
                PORTFOLIO
              </Link>
            </li>
            <li className="header__list-item">
              <Link to="/" className="header__link">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
