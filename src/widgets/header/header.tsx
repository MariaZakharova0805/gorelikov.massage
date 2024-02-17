import React from "react";
import styles from "./styles.module.scss";
import { menuItems } from "shared/constants";
import { Col, Row } from "antd";
import LogoWhite from "UI/icons/LogoWhite";
import { PhoneLink } from "./components/phone-link";

export const Header = () => {
  return (
    <Row justify="space-between" className={styles.header}>
      <Col>
        {/* <LogoWhite /> */}
      </Col>
      <Col>
        {/* <PhoneLink /> */}
      </Col>
      <Col>
        {/* <Row justify="space-between">
          {menuItems.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </Row> */}
      </Col>
    </Row>
  );
};
