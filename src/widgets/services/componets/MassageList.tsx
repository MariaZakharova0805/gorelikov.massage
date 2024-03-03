import { FC } from "react";
import { massageTypes } from "../constants";
import logo from "./Logo.svg";
import styles from "../Services.module.scss";
import { Col, Collapse, CollapseProps, Row, Space, Typography } from "antd";
import { MassageListTypes } from "../types";
import { MassageListItems } from "./MassageListItems";

type MassageListType = {
  massageType: any;
  setMassageType: (type: any) => void;
};

export const MassageList: FC<MassageListType> = ({
  massageType,
  setMassageType,
}) => {
  return (
    <div className={styles.massageList}>
      <Collapse defaultActiveKey={"massage"} ghost items={massageTypes} />
    </div>
  );
};
