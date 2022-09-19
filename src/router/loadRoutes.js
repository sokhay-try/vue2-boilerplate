import { ApplicationRoutes } from "./routes/app";
import { AuthRoutes } from "./routes/auth";

export function loadRoutes() {
  const routes = [...ApplicationRoutes, ...AuthRoutes];

  return { routes };
}
