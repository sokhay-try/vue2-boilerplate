<template>
  <v-app-bar color="primary" class="flex-grow-0" app dark>
    <v-toolbar-title>{{ toolBarTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>
    <div style="padding: 10px"><display-date /></div>
    <div
      class="question"
      style="
        border: none;
        border-right: 1px solid white;
        border-left: 1px solid white;
      "
    >
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </div>
    <user-setting
      :currentRole="'HR Administrator'"
      :dropDownList="dropDownList"
    />
  </v-app-bar>
</template>

<script>
import DisplayDate from "./DisplayDate.vue";
import UserSetting from "./UserSetting.vue";

export default {
  name: "Headerbar",
  components: {
    UserSetting,
    DisplayDate,
  },
  props: {
    toolBarTitle: String,
  },
  data() {
    return {
      dropDownList: [
        {
          title: "My Profile",
          icon: "mdi-account-multiple-outline",
          route: { name: "home" },
        },
        {
          title: "Change Password",
          icon: "mdi-account-multiple-outline",
          route: { name: "about" },
        },
      ],
    };
  },
  computed: {},
  methods: {},
};
</script>
