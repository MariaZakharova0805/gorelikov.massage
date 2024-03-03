import { FC, ReactNode } from "react";
import styles from "./YellowBlock.module.scss";

type YellowBlockTypes = {
  children: ReactNode;
};
export const YellowBlock: FC<YellowBlockTypes> = ({ children }) => {
  return <div className={styles.block}>{children}</div>;
};
