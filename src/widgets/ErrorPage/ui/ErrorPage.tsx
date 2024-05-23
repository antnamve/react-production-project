import { classNames } from "shared/lib/classnames/classnames";
import cls from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <button onClick={reloadPage}>Reload page</button>
    </div>
  );
};
