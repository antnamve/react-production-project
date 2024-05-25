import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";

const MainPage = () => {
  return (
    <div>
      <BugButton />
      <Counter/>
    </div>
  );
};

export default MainPage;
