import styles from "./styles.module.scss";
import { Col, Row, Space } from "antd";
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
      <Col className={styles.menu}>
        <Menu mode={MenuModes.Horizontal} />
      </Col>
      <Col>
        <Space>
          <Col>
            <PhoneButton mode={MenuModes.Horizontal}/>
          </Col>
          <Col className={styles.socialLinks}>
            <SocialLinks mode={MenuModes.Horizontal}/>
          </Col>
          <Col className={styles.burgerMenu}>
            <BurgerMenu />
          </Col>
        </Space>
      </Col>
    </Row>
  );
};
