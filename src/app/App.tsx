import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
