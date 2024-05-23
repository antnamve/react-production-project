import { classNames } from "shared/lib/classnames/classnames";
import cls from "./Applink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ApplinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const Applink: FC<ApplinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.Applink, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
