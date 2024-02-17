import { ConfigProvider } from "antd";
import React, { FC, ReactNode } from "react";

type ConfigProviderAppProps = {
  children: ReactNode;
};
export const ConfigProviderApp: FC<ConfigProviderAppProps> = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          /* here is your global tokens */
        },
        // components: {
        //   Button: {
        //     colorBgContainer: "red",
        //     colorBorder: "red",
        //     colorText: "white",
        //     colorPrimaryHover: "green"
        //   },
        // },
      }}
    >
      {children}
    </ConfigProvider>
  );
};
