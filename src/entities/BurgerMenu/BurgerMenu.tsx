import { menuItems } from "shared/constants";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Button, Dropdown, Typography, ConfigProvider } from "antd";
import { MenuModes } from "../../shared/types";
import css from "./BurgerMenu.module.scss";
import { PhoneButton } from "entities/PhoneButton/PhoneButton";
import { SocialLinks } from "entities/SocialLinks/SocialLinks";

const { Text } = Typography;

const items = [
  {
    key: "main",
    label: <Text className={css.menuItemText}>Главная</Text>,
  },
];

menuItems.forEach((item) => {
  items.push({
    key: item.id,
    label: <Text className={css.menuItemText}>{item.name}</Text>,
  });
});

items.push(
  { key: "phone", label: <PhoneButton mode={MenuModes.Vertical} /> },
  { key: "socialLinks", label: <SocialLinks mode={MenuModes.Vertical} /> }
);

export const BurgerMenu = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: "#F4EFE8",
          controlItemBgHover: "#F4EFE8",
        },
      }}
    >
      <Dropdown menu={{ items }} placement="bottom" destroyPopupOnHide>
        <Button type="text">
          <BurgerMenuButton />
        </Button>
      </Dropdown>
    </ConfigProvider>
  );
};
