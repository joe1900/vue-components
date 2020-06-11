
// <!--
//  * @Description: 混入 (mixins)
//  * @Date: 2020-04-29 17:35:17
//  * @LastEditors: Astronautics across the sea of stars
//  * @LastEditTime: 2020-04-29 17:40:55
//  -->

export const myMixin = {
    data () {
        return {
            num: 1
        }
    },
    created() {
        this.hello()
    },
    methods: {
        hello(){
            console.log( 'hello mixins!' )
        }
    },
}