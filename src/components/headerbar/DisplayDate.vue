<template>
  <span
    >{{ currentDateTime().day }} {{ currentDateTime().month }}
    {{ currentDateTime().year }} ម៉ោង {{ currentDateTime().time }}
  </span>
</template>

<script>
import moment from "moment";
moment.locale("km");
export default {
  name: "DisplayDate",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    currentDateTime() {
      const currDate = moment();
      return {
        day: currDate.format("DD"),
        month: currDate.format("MMMM"),
        year: currDate.format("YYYY"),
        time: currDate.format("hh:mm A"),
      };
    },
  },
};
</script>
