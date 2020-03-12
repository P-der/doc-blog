<template>
    <div>
        <card :code="code1">
            <p-line :graphData="graphData" style='border: 1px solid black;height:400px'/>
        </card>
    </div>
</template>
<script>
    import {line} from './index'
    export default {
        data() {
            return {
                code1:{
                    template:`
                    <p-line 
                        :graphData="graphData" 
                        style='border: 1px solid black;height:400px'
                    />`,
                    script:`
                    export default {
                        data() {
                            return {
                                graphData: {
                                    title: 'demo',
                                    xData: [1,2,3,4,5,6],
                                    yData: [100,334,2343,233,555,333],
                                    xname: 'x轴',
                                    yname: 'y轴',
                                    type: 'bar'
                                }
                            }
                        }
                    }`
                },
                graphData: {
                    title: 'demo',
                    xData: [1,2,3,4,5,6],
                    yData: [100,334,2343,233,555,333],
                    xname: 'x轴',
                    yname: 'y轴',
                    type: 'bar'
                }
            }
        },
        components: {
            'p-line': line
        }
    }
</script>