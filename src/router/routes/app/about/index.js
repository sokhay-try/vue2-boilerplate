export const AboutRouteDef = {
  ABOUT: {
    path: "about",
    name: "about",
    meta: {
      title: "About Page",
    },
    component: () => import("@/views/about/index.vue"),
  },
};

export const AboutRoute = [AboutRouteDef.ABOUT];
