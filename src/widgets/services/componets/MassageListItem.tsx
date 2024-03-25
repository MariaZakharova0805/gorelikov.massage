import { Col, Row, Space, Typography } from "antd";

import styles from "../Services.module.scss";
import { FC } from "react";
import { useServicesContextContext } from "../ServicesCotext";
import img from "./Logo.svg";
type MassageListItemTypes = {
  item: any;
};
export const MassageListItem: FC<MassageListItemTypes> = ({ item }) => {
  const { massageDetailed, setMassageDetailed } = useServicesContextContext();

  return (
    <Row
      key={item.id}
      justify="space-between"
      className={
        massageDetailed.id === item.id
          ? styles.massageList_item_selected
          : styles.massageList_item
      }
      onClick={() => setMassageDetailed(item)}
    >
      <Col span={18}>
        <Space>
          {massageDetailed.id === item.id && (
            <img className={styles.logo} src={img} alt="логотип" />
          )}
          <Typography className={styles.massageList_name}>
            {item.name}
          </Typography>
        </Space>
      </Col>
      <Col span={6}>
        <Typography className={styles.massageList_item_time}>
          {item.time}
        </Typography>
      </Col>
    </Row>
  );
};
