<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
      <span v-bind="attrs" v-on="on" style="padding: 10px">{{
        currentRole
      }}</span>
    </template>

    <v-list>
      <v-list-item
        v-for="item in dropDownList"
        :key="item.title"
        @click="() => {}"
        link
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  name: "UserSetting",
  components: {},
  props: {
    dropDownList: Array,
    currentRole: String,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
