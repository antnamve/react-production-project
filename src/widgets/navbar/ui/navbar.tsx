import { classNames } from "shared/lib/classnames/classnames";
import cls from "./navbar.module.scss";
import { AppLinkTheme, Applink } from "shared/ui/Applink/Applink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Applink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Главная
        </Applink>
        <Applink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О нас
        </Applink>
      </div>
    </div>
  );
};
