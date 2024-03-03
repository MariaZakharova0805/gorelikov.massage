import { FC } from "react";

import styles from "../Services.module.scss";
import { MassageListTypes } from "../types";
import { Typography, Row, Col } from "antd";

type DescritionsType = {
  massageDetailed: any;
};

export const Descriptions: FC<DescritionsType> = ({ massageDetailed }) => {
  console.log({ massageDetailed });
  return <div className={styles.descriptions}>123</div>;
};
