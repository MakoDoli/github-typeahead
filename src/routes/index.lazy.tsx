import { createLazyFileRoute } from "@tanstack/react-router";

import HomePage from "../components/HomePage";

const Index = () => {
  return <HomePage />;
};
export const Route = createLazyFileRoute("/")({ component: Index });
