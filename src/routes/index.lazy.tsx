import { createLazyFileRoute } from "@tanstack/react-router";

import App from "../App";

const Index = () => {
  return <App />;
};
export const Route = createLazyFileRoute("/")({ component: Index });
