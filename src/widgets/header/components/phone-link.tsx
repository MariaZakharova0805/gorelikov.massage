import PhoneIconWhite from "UI/icons/PhoneIconWhite";
import { Button, Typography, Space } from "antd";
import styles from "../styles.module.scss";

import { phoneNumber } from "shared/constants";
import PhoneIconBlue from "UI/icons/PhoneIconBlue";
const { Text } = Typography;

export const PhoneLink = () => {
  return (
    <div className={styles.phone}>
      <Space align="center">
        <div className={styles.icon}></div>
        <Text className={styles.buttontext}>{phoneNumber}</Text>
      </Space>
    </div>
  );
};
