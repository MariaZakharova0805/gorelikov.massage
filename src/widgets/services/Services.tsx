import { YellowBlock } from "UI/shared/YellowBlock";
import { Typography } from "antd";
import styles from "./Services.module.scss";

export const Services = () => (
  <YellowBlock>
    <Typography className={styles.header}>Услуги студии</Typography>
  </YellowBlock>
);
