import { classNames } from "shared/lib/classnames/classnames";
import cls from "./ThemeSwitcher.module.scss";
import { useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      Toggle
    </button>
  );
};
