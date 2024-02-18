import { FC } from "react";
import styles from "./BurgerMenu.module.scss";

export const BurgerMenuButton = () => {
  return (
    <svg
      width="40.000000"
      height="40.000000"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.burger}
    >
      <defs>
        <clipPath id="clip3_677">
          <rect
            id="menu"
            width="24.000000"
            height="24.000000"
            transform="translate(8.000000 8.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
        <clipPath id="clip608_2586">
          <rect
            id="Menu"
            rx="10.000000"
            width="38.000000"
            height="38.000000"
            transform="translate(1.000000 1.000000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <g clipPath="url(#clip608_2586)">
        <rect
          id="menu"
          width="24.000000"
          height="24.000000"
          transform="translate(8.000000 8.000000)"
          fill="#FFFFFF"
          fillOpacity="0"
        />
        <g clipPath="url(#clip3_677)">
          <path
            id="Vector"
            d="M11 20L29 20"
            stroke="#FFFFFF"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M11 14L29 14"
            stroke="#FFFFFF"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <path
            id="Vector"
            d="M11 26L29 26"
            stroke="#FFFFFF"
            strokeOpacity="1.000000"
            strokeWidth="2.000000"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </g>
      <rect
        id="Menu"
        rx="10.000000"
        width="38.000000"
        height="38.000000"
        transform="translate(1.000000 1.000000)"
        stroke="#FFFFFF"
        strokeOpacity="1.000000"
        strokeWidth="2.000000"
      />
    </svg>
  );
};
