<template>
  <v-navigation-drawer app>
    <top-sidebar
      :logo="topSidebar.logo"
      :title="topSidebar.title"
      :subTitle="topSidebar.subTitle"
    />
    <v-divider></v-divider>
    <navigation :noChildMenu="noChildMenu" :haveChildMenu="haveChildMenu" />
  </v-navigation-drawer>
</template>

<script>
import { ROLE_SYSTEM_ADMINISTRATOR } from "@/router/navigations/drawer.builder";
import Navigation from "./Navigation.vue";
import TopSidebar from "./TopSidebar.vue";

export default {
  name: "Sidebar",
  props: [],
  components: {
    TopSidebar,
    Navigation,
  },
  data() {
    return {
      ...ROLE_SYSTEM_ADMINISTRATOR,
      topSidebar: {
        logo: "https://yt3.ggpht.com/esazPAO03T0f0vKdByJvkDy6MSwjyG5f-c_2S2CJapszQ3KPQyZarpoqvgv0Us0atUbILytj=s88-c-k-c0x00ffffff-no-rj",
        title: "Payroll System",
        subTitle: "NBC / HR Management",
      },
    };
  },
};
</script>

<style scoped></style>
