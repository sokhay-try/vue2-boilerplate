import { AppWireframe } from "@/wireframes";

// Routes
import { HomeRoute } from "./home";
import { AboutRoute } from "./about";

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const ApplicationRoutes = [
  {
    path: "/",
    component: AppWireframe,
    props: {},
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        name: "root",
        redirect: {
          name: "home",
        },
      },
      ...HomeRoute,
      ...AboutRoute,
    ],
  },
];
