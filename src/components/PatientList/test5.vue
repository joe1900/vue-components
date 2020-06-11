<!--
 * @Description: 过渡动画
 * @Date: 2020-03-31 11:26:28
 * @LastEditors: Astronautics across the sea of stars
 * @LastEditTime: 2020-04-11 18:56:34
 -->
<template>
  <div class="tab5">
    <transition name="joe" mode="out-in">
      <h1 @click="h1 = !h1" v-if="!!h1" :key="0"> ******* </h1>
      <h1 @click="h1 = !h1" v-if="!h1" :key="1"> ####### </h1>
    </transition>
    <div id="demo">
      <button v-on:click="show0 = !show0">Toggle</button>
      <transition name="ji">
        <p v-if="show0">
            Astronautics across the sea of stars ++
        </p>
      </transition>
    </div>
    <hr>

    <div id="example-1">
    <button @click="show = !show">
        Toggle render
    </button>
    <transition name="slide-fade">
        <p v-if="show">hello</p>
    </transition>
    </div>
    <hr>

    <div id="example-3">
        <button @click="show = !show">
            Toggle render
        </button>
        <transition
            enter-active-class="animated bounce"
            leave-active-class="animated bounceOutRight"
        >
            <p v-if="show">hello</p>
        </transition>
    </div>
    <hr>

    <div id="example-2">
        <button @click="show = !show">Toggle show</button>
        <transition name="bounce">
            <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
        </transition>
    </div>

    <button @click="flag=!flag">点我</button>
    <transition name="fade"
    @before-enter="beforeEnter" 
    @enter="enter" 
    @after-enter="afterEnter"
    @before-leave="beforeLeave" 
    @leave="leave" 
    @after-leave="afterLeave">
        <p v-show="flag">hello! jiyinghao...</p>
    </transition>
    
    <transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutRight">
    <p v-show="flag">hello</p>
    </transition>
    <transition 
        leave-active-class="animated slideOutLeft hidde" 
        v-for="(item, index) in list" 
        :key="index">
        <div v-if="item.s" >
            <span>{{ item.t }}</span>
            <i class="el-icon-close" @click="item.s = false"></i>
        </div>
    </transition>
    
  </div> 
</template>
   
<script>
export default {
  name: "tab5",
  components: {},
  data() {
    return {
        show0: true,
        show: false,
        flag: false,
        list:[],
        h1: true
    };
  },
  computed: {},
  mounted: function() {
      this.flag = true;
      this.show = true;
      for (let index = 0; index < 100; index++) {
          this.list.push( { t: `***${index}***`, s:true } );
      }
      console.log( this.$root )
      setInterval(() => {
        this.h1 = !this.h1;
      }, 3000);
  },
  methods: {
    beforeEnter(el) {
        console.log('动画即将进入');
    },
    enter() {
        console.log('动画进入中...');
    },
    afterEnter(el) {
        console.log('动画进入之后');
    },
    beforeLeave() {
        console.log('动画即将离开');
    },
    leave() {
        console.log('动画离开中...');
    },
    afterLeave(el) {
        console.log('动画离开之后');
    }
  },
  /* 离开当前组件时 */
  destroyed: function() {}
};
</script>
 
<style scoped lang="scss">
#demo{
    p{
        margin: 0;
        line-height: 50px;
        overflow: hidden;
    }
}

.tab5 {
    overflow: hidden;
    >h1{
      display: inline-block;
      background-color: rosybrown;
      width: 250px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #fff;
      margin: 0;
    }
    .hidde{
        transition: all 0.4s;
        margin-top: 0px;
        height: 0px;
    }
    >div{
        margin: 5px auto 0px;
        width: 300px;
        height: 50px;
        background-color: rgba($color: #000000, $alpha: 0.4);
        text-align: right;
        overflow: hidden;
        border-radius: 8px;
        >i{
            line-height: 50px;
            font-size: 22px;
            margin-right: 12px;
        }
        >span{
            float: left;
            line-height: 50px;
            color: #fff;
            margin-left: 12px;
        }
        >i:active{
            color: rgba($color: #ffffff, $alpha: 1.0);
        }
    }
    // * 出现时需要过渡的动画
    .joe-enter{ opacity: 0; height: 0px; margin: 25px; }
    // * 出现时的过渡时间
    .joe-enter-active{ transition: all 0.5s ease; }
    // * 出现终止状态属性
    .joe-enter-to{ opacity: 0.9; height: 50px; margin: 0px; }

    // * 离开时需要过渡的动画
    .joe-leave{ opacity: 1; height: 50px; margin: 0px; }
    // * 离开时的过渡时间
    .joe-leave-active{ transition: all 0.5s ease; }
    // * 离开终止状态属性
    .joe-leave-to{ opacity: 0; height: 0px; margin: 25px; }


    // * 出现时需要过渡的动画
    .ji-enter{ opacity: 0; height: 0px; }
    // * 出现时的过渡时间
    .ji-enter-active{ transition: all 0.2s ease; }
    // * 出现终止状态属性
    .ji-enter-to{ opacity: 0.9; height: 50px; }

    // * 离开时需要过渡的动画
    .ji-leave{ opacity: 0.9; height: 50px; }
    // * 离开时的过渡时间
    .ji-leave-active{ transition: all 0.2s ease; }
    // * 离开终止状态属性
    .ji-leave-to{ opacity: 0; height: 0px; }

  

  /* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


.fade-enter-active,.fade-leave-active {
    transition: all 3s ease;
}

.fade-enter-active {
    opacity: 1;
    width: 300px;
    height: 300px;
}

.fade-leave-active {
    opacity: 0;
    width: 50px;
    height: 50px;
}
        /* .fade-enter需要放在.fade-enter-active的后面 */
.fade-enter {
    opacity: 0;
    width: 100px;
    height: 100px;
}
}
</style>