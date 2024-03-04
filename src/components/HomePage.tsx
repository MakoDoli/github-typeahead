import { useEffect, useState } from "react";
import List from "./List";
import { Toaster } from "./ui/toaster";
import SearchInput from "./SearchInput";

function HomePage() {
  const currentMode =
    sessionStorage.theme === "dark" ||
    (!("theme" in sessionStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";

  const [amount, setAmount] = useState("5");
  const [theme, setTheme] = useState(currentMode);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="py-8 px-6 lg:px-48  min-h-screen dark:bg-slate-800">
      <SearchInput setAmount={setAmount} setTheme={setTheme} mode={theme} />
      <List amount={amount} />
      <Toaster />
    </div>
  );
}

export default HomePage;
