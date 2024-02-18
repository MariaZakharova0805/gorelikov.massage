import React, { FC, useState } from "react";
import styles from "./iconStyles.module.css";
import { IconProps } from "./types";

export const FacebookIcon: FC<IconProps> = ({
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
        <clipPath id="clip484_1100">
          <rect
            id="iconoir:facebook"
            width="24.000000"
            height="24.000000"
            transform="translate(8.000000 8.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="iconoir:facebook"
        width="24.000000"
        height="24.000000"
        transform="translate(8.000000 8.000000)"
        fill={color}
        fillOpacity="0"
      />
      <g clipPath="url(#clip484_1100)">
        <path
          id="Vector"
          d="M22 10C20.6738 10 19.4023 10.5273 18.4648 11.4648C17.5273 12.4023 17 13.6738 17 15L17 18L14 18L14 22L17 22L17 30L21 30L21 22L24 22L25 18L21 18L21 15C21 14.7344 21.1055 14.4805 21.293 14.293C21.4805 14.1055 21.7344 14 22 14L25 14L25 10L22 10Z"
          stroke={color}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default React.memo(FacebookIcon);
