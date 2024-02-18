import React, { FC, useState } from "react";
import styles from "./iconStyles.module.css";
import { IconProps } from "./types";

export const InstagramIcon: FC<IconProps> = ({
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
        <clipPath id="clip484_1091">
          <rect
            id="iconoir:instagram"
            width="24.000000"
            height="24.000000"
            transform="translate(8.000000 8.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="iconoir:instagram"
        width="24.000000"
        height="24.000000"
        transform="translate(8.000000 8.000000)"
        fill={color}
        fillOpacity="0"
      />
      <g clipPath="url(#clip484_1091)">
        <path
          id="Vector"
          d="M22.8281 22.8281C23.5781 22.0781 24 21.0605 24 20C24 18.9395 23.5781 17.9219 22.8281 17.1719C22.0781 16.4219 21.0605 16 20 16C18.9395 16 17.9219 16.4219 17.1719 17.1719C16.4219 17.9219 16 18.9395 16 20C16 21.0605 16.4219 22.0781 17.1719 22.8281C17.9219 23.5781 18.9395 24 20 24C21.0605 24 22.0781 23.5781 22.8281 22.8281Z"
          stroke={color}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <path
          id="Vector"
          d="M11 16C11 14.6738 11.5273 13.4023 12.4648 12.4648C13.4023 11.5273 14.6738 11 16 11L24 11C25.3262 11 26.5977 11.5273 27.5352 12.4648C28.4727 13.4023 29 14.6738 29 16L29 24C29 25.3262 28.4727 26.5977 27.5352 27.5352C26.5977 28.4727 25.3262 29 24 29L16 29C14.6738 29 13.4023 28.4727 12.4648 27.5352C11.5273 26.5977 11 25.3262 11 24L11 16Z"
          stroke={color}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="Vector"
          d="M25.5 14.5098L25.5098 14.498"
          stroke={color}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

export default React.memo(InstagramIcon);
