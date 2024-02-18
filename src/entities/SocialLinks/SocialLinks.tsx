import { Space } from "antd";
import { socialLinks } from "shared/constants";

export const SocialLinks = () => {
  const menu = socialLinks.map((item) => <div key={item.id}>{item.icon}</div>);

  return <Space size={10}>{menu}</Space>;
};
