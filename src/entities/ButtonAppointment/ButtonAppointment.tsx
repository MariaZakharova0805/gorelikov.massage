import { FC } from "react";
import { Typography } from "antd";
import img from "./logo.png";
import { makeAppointment, appointmentLink } from "shared/constants";
import { ButtonMode } from "./modeType";

import styles from "./ButtonAppointment.module.scss";

const { Text } = Typography;

type ButtonAppointmentType = {
  mode?: ButtonMode;
};
export const ButtonAppointment: FC<ButtonAppointmentType> = ({
  mode = ButtonMode.Black,
}) => {
  return (
    <a href={appointmentLink} target="_blank" rel="noreferrer">
      <button
        className={
          mode === ButtonMode.Black ? styles.button : styles.buttonTopBlock
        }
      >
        <Text className={styles.text}>{makeAppointment}</Text>
        <img className={styles.img} src={img} alt="логотип" />
      </button>
    </a>
  );
};
