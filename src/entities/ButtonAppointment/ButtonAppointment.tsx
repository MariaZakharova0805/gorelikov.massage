import React from "react";
import { appointmentLink } from "../constants";
import { Typography } from "antd";
import styles from "./ButtonAppointment.module.css";
import img from "./logo.png";
const { Text } = Typography;

export const ButtonAppointment = () => {
  return (
    <a href={appointmentLink} target="_blank" rel="noreferrer">
      <button className={styles.button}>
        <Text className={styles.text}>Записаться</Text>
        <img className={styles.img} src={img} alt="логотип" />
      </button>
    </a>
  );
};
