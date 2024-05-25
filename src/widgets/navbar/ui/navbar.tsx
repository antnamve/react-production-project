import { classNames } from "shared/lib/classnames/classnames";
import cls from "./navbar.module.scss";
import { AppLinkTheme, Applink } from "shared/ui/Applink/Applink";
import { Modal } from "shared/ui/Modal/Modal";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [])

  if(authData){
    return (

    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onLogout}>
          Войти
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      </div>
    </div>
    )
  }

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onShowModal}>
          Войти
        </Button>
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
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
