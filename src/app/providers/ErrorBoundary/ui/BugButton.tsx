import { classNames } from "shared/lib/classnames/classnames";
import { useEffect, useState } from "react";

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);

  return <button onClick={onThrow}>throw error</button>;
};
