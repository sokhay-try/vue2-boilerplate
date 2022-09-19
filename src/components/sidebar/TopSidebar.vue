<template>
  <v-list-item>
    <v-list-item-avatar>
      <v-img :src="logo"></v-img>
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h6 white--text">{{
        title
      }}</v-list-item-title>
      <v-list-item-subtitle class="white--text">{{
        subTitle
      }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "TopSidebar",
  props: {
    logo: String,
    title: String,
    subTitle: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.v-list-item {
  background: #1976d2;
  height: 64px;
}
</style>
