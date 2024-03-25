import { MassageListItem } from "./MassageListItem";
import { Collapse } from "antd";
import styles from "../Services.module.scss";
import {
  cellulitechildren,
  honeyChildren,
  jarsChildren,
  massageChildren,
} from "../constants";

export const MassageList = () => {
  const massageTypes = [
    {
      key: "massage",
      label: "Общий массаж",
      showArrow: false,
      children: massageChildren.map((child) => (
        <MassageListItem item={child} key={child.id} />
      )),
    },
    {
      key: "cellulite",
      label: "Антицеллюлитный массаж",
      showArrow: false,
      children: cellulitechildren.map((child) => (
        <MassageListItem item={child} key={child.id} />
      )),
    },
    {
      key: "honey",
      label: "Медовый массаж",
      showArrow: false,
      children: honeyChildren.map((child) => (
        <MassageListItem item={child} key={child.id} />
      )),
    },
    {
      key: "jars",
      label: "Баночный массаж",
      showArrow: false,
      children: jarsChildren.map((child) => (
        <MassageListItem item={child} key={child.id} />
      )),
    },
  ];

  return (
    <div className={styles.massageList}>
      <Collapse
        defaultActiveKey={"massage"}
        accordion
        ghost
        items={massageTypes}
      />
    </div>
  );
};
