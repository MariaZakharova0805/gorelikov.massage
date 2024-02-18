import React, { FC, useState } from "react";
import styles from "./iconStyles.module.css";
import { IconProps } from "./types";

export const TelegramIcon: FC<IconProps> = ({
  iconColor = "#FFFFFF",
  iconColorHover = "#0095DA",
}) => {
  const [color, setColor] = useState(iconColor);
  return (
    <svg
      width="40.000000"
      height="40.000000"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setColor(iconColorHover)}
      onMouseLeave={() => setColor(iconColor)}
      className={styles.icon}
    >
      <defs>
        <clipPath id="clip484_1106">
          <rect
            id="ph:telegram-logo"
            width="24.000000"
            height="24.000000"
            transform="translate(8.000000 8.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="ph:telegram-logo"
        width="24.000000"
        height="24.000000"
        transform="translate(8.000000 8.000000)"
        fill={color}
        fillOpacity="0"
      />
      <g clipPath="url(#clip484_1106)">
        <path
          id="Vector"
          d="M29.7227 11.1953C29.6113 11.0996 29.4766 11.0371 29.332 11.0117C29.1875 10.9863 29.041 11.002 28.9043 11.0547L10.8086 18.1367C10.5527 18.2363 10.3359 18.416 10.1914 18.6504C10.0449 18.8848 9.98047 19.1582 10.0059 19.4336C10.0293 19.707 10.1426 19.9648 10.3262 20.1699C10.5117 20.375 10.7559 20.5137 11.0273 20.5664L15.7148 21.4863L15.7148 26.7148C15.7148 26.998 15.7988 27.2773 15.957 27.5137C16.1172 27.75 16.3438 27.9316 16.6074 28.0391C16.8711 28.1465 17.1621 28.1719 17.4414 28.1133C17.7188 28.0527 17.9746 27.9102 18.1719 27.7051L20.4316 25.3613L24.0176 28.5C24.2773 28.7285 24.6113 28.8555 24.957 28.8574C25.1074 28.8574 25.2598 28.832 25.4023 28.7871C25.6387 28.7109 25.8516 28.5762 26.0176 28.3945C26.1855 28.2129 26.3008 27.9883 26.3555 27.748L29.9805 11.9824C30.0117 11.8398 30.0059 11.6914 29.9609 11.5527C29.9141 11.4141 29.832 11.291 29.7227 11.1953ZM24.2637 14.4102L16.2637 20.1387L11.8359 19.2695L24.2637 14.4102ZM17.1426 26.7148L17.1426 22.4746L19.3574 24.416L17.1426 26.7148ZM24.959 27.4277L17.5762 20.9551L28.2012 13.3398L24.959 27.4277Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default React.memo(TelegramIcon);
