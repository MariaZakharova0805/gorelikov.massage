import { FC } from "react";
import { menuItems } from "shared/constants";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Button, Dropdown, MenuProps, Typography } from "antd";
import { Menu } from "entities/Menu/Menu";
import { MenuModes } from "shared/types";
import styles from "./BurgerMenu.module.scss";
import { PhoneButton } from "entities/PhoneButton/PhoneButton";

const { Text } = Typography;
export const BurgerMenu = () => {
  const items: MenuProps["items"] = [
    {
      key: "main",
      label: <Text className={styles.menuItemText}>Главная</Text>,
    },
    {
      key: menuItems[0].id,
      label: <Text className={styles.menuItemText}>{menuItems[0].name}</Text>,
    },
    {
      key: menuItems[1].id,
      label: <Text className={styles.menuItemText}>{menuItems[1].name}</Text>,
    },
    {
      key: menuItems[2].id,
      label: <Text className={styles.menuItemText}>{menuItems[2].name}</Text>,
    },
    {
      key: menuItems[3].id,
      label: <Text className={styles.menuItemText}>{menuItems[3].name}</Text>,
    },
    {
      key: "phone",
      label: <PhoneButton />,
    },
    {
      key: "socialLinks",
      label: <div>socialLinks</div>,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom">
      <Button type="text">
        <BurgerMenuButton />
      </Button>
    </Dropdown>
  );
};
