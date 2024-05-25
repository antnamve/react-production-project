import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";
import { useState } from "react";

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames("app", {}, [])}>
      <Navbar />
      <button onClick={() => setIsOpen(true)}>toggle</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci asperiores eaque, minus beatae nobis quidem molestias, harum tempore eveniet quo sed placeat, labore quis voluptates excepturi tempora illum praesentium exercitationem.
      </Modal>
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
