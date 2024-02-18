import { Space, Typography } from "antd";
import { menuItems } from "shared/constants";
import style from "./styles.module.scss";
import { FC } from "react";
import { MenuModes } from "../../shared/types";
type MenuProps = {
  mode: MenuModes;
};
const { Text } = Typography;

export const Menu: FC<MenuProps> = ({ mode }) => {
  const menu = menuItems.map((item) => (
    <Text
      className={
        mode === MenuModes.Horizontal
          ? style.menuItemsHorizontal
          : style.menuItemsVertical
      }
      key={item.id}
    >
      {item.name}
    </Text>
  ));
  return (
    <>
      {mode === MenuModes.Horizontal ? (
        <Space size={11}>{menu}</Space>
      ) : (
        <Space size={1} direction="vertical">
          {menu}
        </Space>
      )}
    </>
  );
};
