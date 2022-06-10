import React, { useEffect, useState } from "react";
import { Menu, Layout } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MenuItemPath = {
  title: string;
  path: string;
};
type MenuItemAction = {
  title: string;
  action: () => void;
};
type MenuItemSubItems = {
  title: string;
  menu: Array<MenuItem>;
};

type MenuItem = MenuItemPath | MenuItemAction | MenuItemSubItems;

const Sider = () => {
  const { t } = useTranslation("common");
  const [menu, setMenu] = useState<Array<MenuItem>>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenu([
      {
        title: t("menu.dashboard"),
        path: "",
      },
      {
        title: t("menu.create"),
        path: "create",
      },
      {
        title: t("menu.account"),
        menu: [
          {
            title: t("menu.settings"),
            path: "/account/settings",
          },
          {
            title: t("menu.logout"),
            action: () => {
              console.log("logout");
            },
          },
        ],
      },
    ]);
  }, [t]);

  const getMenuItems = (
    items: Array<MenuItem>,
    title?: string
  ): JSX.Element => {
    const elements: any = items.map((item: MenuItem) => {
      if ("menu" in item) {
        return getMenuItems(item.menu, item.title);
      }

      if ("action" in item) {
        return (
          <Menu.Item key={item.title}>
            <NavLink onClick={item.action} to="">
              <span>{item.title}</span>
            </NavLink>
          </Menu.Item>
        );
      }

      return (
        <Menu.Item key={item.path}>
          <NavLink to={item.path}>
            <span>{item.title}</span>
          </NavLink>
        </Menu.Item>
      );
    });

    if (title) {
      return (
        <Menu.SubMenu key={title} title={title}>
          {elements}
        </Menu.SubMenu>
      );
    }

    return elements;
  };

  return (
    <Layout.Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu theme="light" defaultSelectedKeys={[pathname]} mode="inline">
        {getMenuItems(menu)}
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
