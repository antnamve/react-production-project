import { classNames } from "shared/lib/classnames/classnames";
import cls from "./loginForm.module.scss";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/input";

interface loginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: loginFormProps) => {
  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      <Input autofocus type="text" />
      <Input type="text" />
      <Button>Войти</Button>
    </div>
  );
};
