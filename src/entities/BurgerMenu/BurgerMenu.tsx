import { menuItems } from "shared/constants";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Button, Dropdown, MenuProps, Typography } from "antd";
import { MenuModes } from "../../shared/types";
import styles from "./BurgerMenu.module.scss";
import { PhoneButton } from "entities/PhoneButton/PhoneButton";
import { SocialLinks } from "entities/SocialLinks/SocialLinks";

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
      label: <PhoneButton mode={MenuModes.Vertical} />,
    },
    {
      key: "socialLinks",
      label: <SocialLinks mode={MenuModes.Vertical} />,
    },
  ];

  return (
    <Dropdown menu={{ items }} placement="bottom" destroyPopupOnHide>
      <Button type="text">
        <BurgerMenuButton />
      </Button>
    </Dropdown>
  );
};
