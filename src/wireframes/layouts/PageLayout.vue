<template>
  <v-app>
    <v-main key="content">
      <v-container class="py-8 px-6" fluid>
        <!-- Default slot -->
        <slot>
          <!-- Provides the application the proper gutter -->
          <!-- If using vue-router -->
          <router-view></router-view>
        </slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "PageLayout",
  props: {},
  computed: {},
};
</script>
