import { FC, ReactNode } from "react";
import styles from "./Section.module.scss";

type SectionTypes = {
  children: ReactNode;
};
export const Section: FC<SectionTypes> = ({ children }) => {
  return <div className={styles.block}>{children}</div>;
};
