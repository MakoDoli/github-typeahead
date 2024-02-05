import { ChangeEvent, useState } from "react";
import { Input } from "./components/ui/input";
import List from "./ui/List";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [user, setUser] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    window.setTimeout(() => {
      setUser(e.target.value);
    }, 2000);
  }

  return (
    <div className="py-8 px-12">
      <Input onChange={handleChange} />
      <List searchValue={user} />
      <Toaster />
    </div>
  );
}

export default App;
