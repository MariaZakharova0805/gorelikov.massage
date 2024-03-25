import { FC } from "react";

import styles from "../Services.module.scss";

type DescritionsType = {
  massageDetailed: any;
};

export const Descriptions: FC<DescritionsType> = ({ massageDetailed }) => {
  return <div className={styles.descriptions}>{massageDetailed.name}</div>;
};
