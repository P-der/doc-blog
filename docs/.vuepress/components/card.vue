<template>
  <div class="card">
     <div class="card-content">
       <slot></slot>
       <div>
        <div v-if="codeVisible">
          <div v-for='(value, name, index) in code' :key='index'>
            {{name}}:
            <highlight-code :lang="dict[name]">{{value}}</highlight-code>
          </div>
        </div>
      </div>
    </div>
    <div class="card-operation" @click="toggle">
         {{msg}}
    </div>
 </div>
</template>
<script>
export default {
  data(){
    return{
      codeVisible: false,
      msg:'展开代码',
      dict: {
        template: 'vue',
        script: 'javascript',
        style: 'css'
      }
    }
  },
  props: {
    'code':{
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  methods:{
    toggle(){
      this.codeVisible = !this.codeVisible
      this.msg = this.codeVisible?'收起代码':'展开代码'
    }
  }
}
</script>

<style scoped lang="scss">
  .card{
    border:1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 3px 0 #ccc;
    .card-content{
      padding:14px;
      border-bottom:1px solid #ccc;
    }
    .card-operation{
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
</style>