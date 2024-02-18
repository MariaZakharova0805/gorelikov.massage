import FacebookIcon from "UI/icons/FacebookIcon";
import InstagramIcon from "UI/icons/InstagramIcon";
import TelegramIcon from "UI/icons/TelegramIcon";
import VKIcon from "UI/icons/VKIcon";
import WhatsAppIcon from "UI/icons/WhatsAppIcon";
import { Space } from "antd";
import { FC } from "react";
import { socialLinks } from "shared/constants";
import { MenuModes } from "shared/types";

type SocialLinksProps = {
  mode: MenuModes;
};
export const SocialLinks: FC<SocialLinksProps> = ({ mode }) => {
  const menu = socialLinks.map((item) => (
    <a href={item.link} target="_blank" key={item.id} rel="noreferrer">
      {item.icon}
    </a>
  ));

  return (
    <>
      {mode === MenuModes.Horizontal ? (
        <Space size={10}>{menu}</Space>
      ) : (
        <Space size={10}>
          <a href={socialLinks[0].link} target="_blank" rel="noreferrer">
            <InstagramIcon iconColor="black" />
          </a>
          <a href={socialLinks[1].link} target="_blank" rel="noreferrer">
            <VKIcon iconColor="black" />
          </a>
          <a href={socialLinks[2].link} target="_blank" rel="noreferrer">
            <FacebookIcon iconColor="black" />
          </a>
          <a href={socialLinks[3].link} target="_blank" rel="noreferrer">
            <WhatsAppIcon iconColor="black" />
          </a>
          <a href={socialLinks[4].link} target="_blank" rel="noreferrer">
            <TelegramIcon iconColor="black" />
          </a>
        </Space>
      )}
    </>
  );
};
