import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Col, Row } from "antd";
import logo from "./logo.svg";
import { Menu } from "entities/Menu/Menu";
import { MenuModes } from "shared/types";
import { SocialLinks } from "entities/SocialLinks/SocialLinks";
import { BurgerMenu } from "entities/BurgerMenu/BurgerMenu";
import { PhoneButton } from "entities/PhoneButton/PhoneButton";

export const Header = () => {
  return (
    <Row align="middle" className={styles.header} justify="space-between">
      <Col>
        <img src={logo} alt="logo" className={styles.logo} />
      </Col>

      {window.innerWidth > 786 && (
        <Col>
          <Menu mode={MenuModes.Horizontal} />
        </Col>
      )}

      <Col>
        <PhoneButton />
      </Col>

      {window.innerWidth > 1000 && <SocialLinks />}

      {window.innerWidth < 768 && (
        <Col>
          <BurgerMenu />
        </Col>
      )}
    </Row>
  );
};
