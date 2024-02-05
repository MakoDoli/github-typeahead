import { useState } from "react";
import List from "./ui/List";
import { Toaster } from "./components/ui/toaster";
import SearchInput from "./ui/SearchInput";

function App() {
  const [user, setUser] = useState("");

  return (
    <div className="py-8 px-12">
      <SearchInput setUser={setUser} />
      <List searchValue={user} />
      <Toaster />
    </div>
  );
}

export default App;
