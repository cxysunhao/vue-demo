<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  data() {
      return{
        option : {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: "line",
                    },
                ],
                }
      }
  },
  mounted() {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);
    myChart.setOption(this.option);
  },
};
</script>