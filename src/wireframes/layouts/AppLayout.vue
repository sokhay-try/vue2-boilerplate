<template>
  <v-app>
    <!-- SIDE BAR -->
    <sidebar />

    <!-- TOP HEADER BAR-->
    <headerbar :toolBarTitle="toolBarTitle" />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from "@/components/sidebar";
import Headerbar from "@/components/headerbar";

export default {
  name: "DashboardLayout",
  components: {
    Sidebar,
    Headerbar,
  },
  props: {},
  data() {
    return {
      toolBarTitle: "ផ្ទាំងគ្រប់គ្រង",
    };
  },
  computed: {},
  methods: {},
};
</script>
