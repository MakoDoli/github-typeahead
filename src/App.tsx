import { useState } from "react";
import List from "./components/List";
import { Toaster } from "./components/ui/toaster";
import SearchInput from "./components/SearchInput";
import { LoaderProvider } from "./context/LoaderContext";

function App() {
  const [user, setUser] = useState("");

  return (
    <LoaderProvider>
      <div className="py-8 px-12">
        <SearchInput setUser={setUser} />
        <List searchValue={user} />
        <Toaster />
      </div>
    </LoaderProvider>
  );
}

export default App;
