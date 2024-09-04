<template>
  <div ref="chartContainer"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  props: {
    content: { type: Object, required: true },
  },

  data() {
    return {
      chartInstance: null, // Store chart instance here
    };
  },

  computed: {

    chartOptions() {
      
      return {
        chart: {
          type: 'bar',
          backgroundColor:'transparent'
        },
        title: {
          text: null
        },
        xAxis: {
          categories: this.content.categories,
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: null,
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.y:.1f}%</b>' // Format du tooltip avec un chiffre après la virgule
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          floating: false,
          y: 10
        },
        plotOptions: {
          series: {
            groupPadding: 0.1,
            animation: {
              duration: 1500, // Durée de l'animation en millisecondes
              easing: 'easeOutBounce', // Type d'animation (par exemple, easing pour un effet "rebond")
            },
            dataLabels: {
              enabled: true, // Active les étiquettes de données
              format: '{point.y:.1f}%' // Format d'affichage des valeurs
            }
          }
        },
        exporting: {
          enabled: false,
        },
        series: this.content.series
      };
    },
  },

  watch: {
    chartOptions: {
      handler() {
        this.createChart();
      },
      deep: true, // Ensure it watches nested objects
    },
  },

  mounted() {
    this.createChart();
  },

  methods: {
    createChart() {
      if (this.chartInstance) {
        this.chartInstance.destroy(); // Destroy the existing chart before re-creating it
      }
      this.chartInstance = Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
    },
  },
};
</script>

<style>
/* Add styles if necessary */
</style>
