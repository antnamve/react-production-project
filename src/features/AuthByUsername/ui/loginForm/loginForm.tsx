import { classNames } from "shared/lib/classnames/classnames";
import cls from "./loginForm.module.scss";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/input";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions } from "features/AuthByUsername/model/slice/loginSlice";
import { getLoginState } from "features/AuthByUsername/model/selectors/getloginState/getloginState";
import { loginByUsername } from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";

interface loginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: loginFormProps) => {
  const dispatch = useDispatch()
  const {username, password, error, isLoading} = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({username, password}))
  }, [dispatch, password, username])

  return (
    <div className={classNames(cls.loginForm, {}, [className])}>
      {error && <Text text={error} theme={TextTheme.ERROR}/>}
      <Input value={username} onChange={onChangeUsername} autofocus type="text" />
      <Input value={password} onChange={onChangePassword} type="text" />
      <Button disabled={isLoading} onClick={onLoginClick}>Войти</Button>
    </div>
  );
});
