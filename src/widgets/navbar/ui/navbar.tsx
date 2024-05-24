import { classNames } from "shared/lib/classnames/classnames";
import cls from "./navbar.module.scss";
import { AppLinkTheme, Applink } from "shared/ui/Applink/Applink";
import { Modal } from "shared/ui/Modal/Modal";
import { Button } from "shared/ui/Button";
import { ButtonTheme } from "shared/ui/Button/ui/Button";
import { useCallback, useState } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <Button theme={ButtonTheme.OUTLINE} className={cls.links} onClick={onToggleModal}>
          Войти
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci asperiores eaque, minus beatae nobis quidem molestias, harum tempore eveniet quo sed placeat, labore quis voluptates excepturi tempora illum praesentium exercitationem.
        </Modal>
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
