<template>
  <div>
    <hrm-pie-chart></hrm-pie-chart>
  </div>
</template>

<script>
import HrmPieChart from "@/components/charts/PieChart.vue";

export default {
  name: "Home",
  components: { HrmPieChart },
  props: {},
  data() {
    return {};
  },
};
</script>
