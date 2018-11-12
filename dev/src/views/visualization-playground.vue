<template lang="pug">
  div
    h1 Visualization Playground
    v-card
      responsive-area-chart.area-chart(
        @select="onSelect"
        :data="data"
        :ceil="max"
        )
      v-card.content
        h3 Selected Value: {{currentValue}}
        div
          label Record Count:
          input(v-model:value="itemCount")
        div
          label Min Value:
          input(v-model:value="min")
        div
          label Max Value:
          input(v-model:value="max")
        div.my-5
          h3 Thank you to Tyrone Tudehope for helping us understand how to get this going.
          a(href="https://medium.com/tyrone-tudehope/composing-d3-visualizations-with-vue-js-c65084ccb686" target="_blank" rel="noopener") Check out the Tutorial
</template>


<script>
import ResponsiveAreaChart from '../components/responsive-area-chart.vue';
import generateData from '../randomData';
export default {
  name: 'app',
  data() {
    return {
      data: [],
      chartWidth: 0,
      currentValue: null,
      itemCount: 25,
      min: 10,
      max: 100,
    };
  },
  mounted() {
    setInterval(() => {
      this.data = generateData(this.itemCount,
        parseInt(this.min, 10),
        parseInt(this.max, 10));
    }, 2000);
  },
  methods: {
    onSelect(value) {
      this.currentValue = value;
    },
  },
  components: {
    ResponsiveAreaChart,
  },
};
</script>

<style scoped>
h1, .content {
  margin-left: 20px;
  }
label{
  display: inline-block;
  width: 150px;
  }
.area-chart {
    height: 300px;
  }
</style>