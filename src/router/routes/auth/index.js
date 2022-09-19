import PageWireframe from "@/wireframes/AuthWireframe.vue";

export const AuthRouteDef = {
  LOGIN: {
    path: "login",
    name: "auth.login",
    meta: {
      title: "Login",
    },
    component: () => import("@/views/auth/Login.vue"),
  },
};

/**
 * Routes
 * @type {import('vue-router').RouteConfig[]}
 */
export const AuthRoutes = [
  {
    path: "/login",
    redirect: {
      name: "auth.login",
    },
  },
  {
    path: "/auth",
    component: PageWireframe,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        redirect: {
          name: "auth.login",
        },
      },
      AuthRouteDef.LOGIN,
    ],
  },
];
