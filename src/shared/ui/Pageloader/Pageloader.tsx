import { classNames } from "shared/lib/classnames/classnames";
import cls from "./Pageloader.module.scss";

interface PageloaderProps {
  className?: string;
}

export const Pageloader = ({ className }: PageloaderProps) => {
  return <div className={classNames(cls.Pageloader, {}, [className])}>...</div>;
};
