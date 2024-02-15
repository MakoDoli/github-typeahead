import { useEffect, useState } from "react";
import List from "./components/List";
import { Toaster } from "./components/ui/toaster";
import SearchInput from "./components/SearchInput";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  const currentMode =
    sessionStorage.theme === "dark" ||
    (!("theme" in sessionStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";
  const [user, setUser] = useState("");
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
    <LoaderProvider>
      <div className="py-8 px-6 lg:px-48  min-h-screen dark:bg-slate-800">
        <SearchInput
          setUser={setUser}
          setAmount={setAmount}
          setTheme={setTheme}
          mode={theme}
        />
        <List searchValue={user} amount={amount} />
        <Toaster />
      </div>
    </LoaderProvider>
  );
}

export default App;
