import { classNames } from "shared/lib/classnames/classnames";
import cls from "./loginModal.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../loginForm/loginForm";

interface loginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: loginModalProps) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.loginModal, {}, [className])}>
      <LoginForm />
    </Modal>
  );
};
