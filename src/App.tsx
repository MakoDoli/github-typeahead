import { useState } from "react";
import List from "./components/List";
import { Toaster } from "./components/ui/toaster";
import SearchInput from "./components/SearchInput";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  const [user, setUser] = useState("");
  const [amount, setAmount] = useState("5");

  return (
    <LoaderProvider>
      <div className="py-8 px-6 lg:px-48">
        <SearchInput setUser={setUser} setAmount={setAmount} />
        <List searchValue={user} amount={amount} />
        <Toaster />
      </div>
    </LoaderProvider>
  );
}

export default App;
