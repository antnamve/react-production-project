import "./styles/index.scss";
import { Link } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classnames/classnames";
import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};
