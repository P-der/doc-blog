<template>
    <div ref="dom" class="canvas"></div>
</template>

<script>
import echarts from 'echarts'
import EventUtil from '../../public/tool'
const on = EventUtil.addHandler,
     off = EventUtil.removeHandler; 
export default {
  data () {
    return {
      dom: null,
    }
  },
  props: {
    'graphData':{
      type: Object,
      required: true,
      default: function() {
        return {
          title: '',
          xData: [],
          yData: [],
          xname: '',
          yname: '',
          type: ''
        }
      }
    }
  },
  watch: {
    graphData: {
      handler(newName, oldName) {
        this.draw()
      },
      deep: true
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    draw () {
      let vm = this
      const option = {
        legend: {
          type: 'scroll',
          right: 20,
          top: 10,
          icon: 'none',
          formatter: function (name) {
            return vm.graphData.title ? vm.graphData.title :''
          }
        },
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
            start: 0,
            end: 100
          },
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100
          }
        ],
        xAxis: {
          type: 'category',
          name: this.graphData.xname?this.graphData.xname:'时间',
          data: this.graphData.xData
        },
        yAxis: {
            type: 'value',
            name: this.graphData.yname?this.graphData.yname:'人次'
        },
        series: [{
          data: this.graphData.yData,
          large: true,
          type:  this.graphData.type?this.graphData.type:'bar',
          name: this.graphData.yname?this.graphData.yname:'人次'
        }],
      }
      this.$nextTick(() => {
        this.dom = echarts.init(this.$refs.dom)
        this.dom.setOption(option)
        on(window, 'resize', this.resize)
      })
    }
  },
  mounted () {
    this.draw()
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
