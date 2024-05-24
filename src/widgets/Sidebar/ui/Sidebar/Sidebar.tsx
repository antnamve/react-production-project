import { classNames } from "shared/lib/classnames/classnames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Button } from "shared/ui/Button";
import { ButtonSize, ButtonTheme } from "shared/ui/Button/ui/Button";
import { AppLinkTheme, Applink } from "shared/ui/Applink/Applink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <div className={cls.items}>
        <div className={cls.item}>
          <Applink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.main}
            className={cls.link}
          >
            Главная
          </Applink>
        </div>
        <div className={cls.items}>
          <Applink
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
            className={cls.link}
          >
            О нас
          </Applink>
        </div>
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
