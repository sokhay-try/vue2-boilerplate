<template>
  <page-layout>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" sm="6" lg="5" xl="4">
        <router-view></router-view>
      </v-col>
    </v-row>
  </page-layout>
</template>

<script>
import PageLayout from "./layouts/PageLayout.vue";

export default {
  name: "AuthWireframe",
  components: {
    PageLayout,
  },
};
</script>
