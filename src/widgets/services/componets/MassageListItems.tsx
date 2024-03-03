import { Col, Row, Typography } from "antd";
import { MassageListTypes } from "../types";

import styles from "../Services.module.scss";
import { FC } from "react";

type MassageListItemsTypes = {
  items: any;
};
export const MassageListItems: FC<MassageListItemsTypes> = ({ items }) => {
  return (
    <div>
      {items.map((item: MassageListTypes) => (
        <Row key={item.id} justify="space-between">
          <Col span={18}>
            <Typography className={styles.massageList_name}>
              {item.name}
            </Typography>
          </Col>
          <Col span={6}>
            <Typography className={styles.massageList_time}>
              {item.time}
            </Typography>
          </Col>
        </Row>
      ))}
    </div>
  );
};
