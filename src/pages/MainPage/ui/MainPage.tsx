import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { useState } from "react";
import { Input } from "shared/ui/Input/input";

const MainPage = () => {
  const [value, setValue] = useState('')

  const onChange = (val: string) => {
    setValue(val)
  }

  return (
    <div>
      <BugButton />
      <Counter/>
      <Input value={value} onChange={onChange} />
    </div>
  );
};

export default MainPage;
