export const HomeRouteDef = {
  HOME: {
    path: "home",
    name: "home",
    meta: {
      title: "Home Page",
    },
    component: () => import("@/views/home/index.vue"),
  },
};

export const HomeRoute = [HomeRouteDef.HOME];
