import { createLazyFileRoute } from "@tanstack/react-router";

import HomePage from "../components/Home/HomePage";

const Index = () => {
  return <HomePage />;
};
export const Route = createLazyFileRoute("/")({ component: Index });
