<template>
  <v-list>
    <v-list-item
      v-for="noChildItem in noChildMenu"
      :key="noChildItem.title"
      link
      :to="noChildItem.route"
    >
      <v-list-item-icon>
        <v-icon>{{ noChildItem.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-title>{{ noChildItem.title }}</v-list-item-title>
    </v-list-item>

    <div v-for="haveChildItem in haveChildMenu" :key="haveChildItem.title">
      <v-list-group :value="true" :prepend-icon="haveChildItem.icon">
        <template v-slot:activator>
          <v-list-item-title>{{ haveChildItem.title }}</v-list-item-title>
        </template>

        <v-list-item
          v-for="haveChild in haveChildItem.childs"
          :key="haveChild.title"
          :to="haveChild.route"
        >
          <v-list-item-icon>
            <v-icon v-text="haveChild.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="haveChild.title"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </div>
  </v-list>
</template>

<script>
/***
 * No Child = [{title: 'abc', icon: 'ddd'}]
 * Have Childs = [{title: 'parent',icon: 'parenticon', childs: [{title: 'child1', icon: 'childIcon'}]}]
 *
 */
export default {
  name: "Navigation",
  props: {
    noChildMenu: {
      type: Array,
      default: () => [],
    },
    haveChildMenu: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data: () => ({}),
};
</script>

<style scoped></style>
