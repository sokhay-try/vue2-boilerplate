<template>
  <vue-apex-charts
    type="pie"
    width="380"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "HrmPieChart",
  components: { VueApexCharts },
  data() {
    return {
      series: [44, 55, 13, 43, 22],
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        legend: {
          position: "bottom",
        },
      },
    };
  },
};
</script>
