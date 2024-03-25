import { phoneNumber, phoneNumberLink } from "shared/constants";
import styles from "./PhoneButton.module.scss";
import { PhoneOutlined } from "@ant-design/icons";
import { MenuModes } from "shared/types";
import { FC } from "react";

type PhoneButtonProps = {
  mode: MenuModes;
};

export const PhoneButton: FC<PhoneButtonProps> = ({ mode }) => {
  return (
    <a href={phoneNumberLink}>
      <button
        className={
          mode === MenuModes.Horizontal ? styles.button : styles.buttonBurger
        }
      >
        <PhoneOutlined />
        {phoneNumber}
      </button>
    </a>
  );
};
