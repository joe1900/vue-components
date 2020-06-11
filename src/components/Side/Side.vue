<!--
 * @Description: 侧边
 * @Date: 2019-12-04 13:56:08
 * @LastEditors: Ji Yinghao
 * @LastEditTime: 2019-12-05 15:31:36
 * :default-active="activeIndex2"
 -->
 <template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>-->
    <!-- 页头 -->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <!-- <el-menu-item :collapse="isCollapse" class="el-menu-vertical-demo">
      </el-menu-item>-->
      <el-menu-item style="width: 65px;" v-if="isCollapse" @click="isCollapse=false">
        <FormatIndentIncreaseIcon class="icon-2x" />
      </el-menu-item>
      <el-menu-item style="width: 65px;" v-else @click="isCollapse=true">
        <FormatIndentDecreaseIcon class="icon-2x" />
      </el-menu-item>
      <span class="text">代理管理系统</span>
      <!-- <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
      </el-submenu>-->
      <el-menu-item style="float: right;">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <WidgetsIcon class="icon-2x" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus-outline">螺蛳粉</el-dropdown-item>
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu-item>
      <el-menu-item style="float: right;">消息中心</el-menu-item>
    </el-menu>
    <!-- 侧边 -->
    <el-menu
      default-active="2-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :unique-opened="true"
    >
      <template v-for="(item, index) in items">
        <el-submenu v-if="item.children !== undefined " :index="`${index+1}`" :key="index+50">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.text }}</span>
          </template>
          <el-menu-item-group>
            <template v-for="(em, i) in item.children">
              <el-menu-item :index="`${index+1}-${i+1}`" :key="i+100">
                <router-link :to="em.router">
                  <i class="el-icon-star-off"></i>
                  {{ em.text }}
                </router-link>
              </el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-else :index="`${index+1}`" :key="index">
          <!-- <router-link :to="item.router"> -->
          <i :class="item.icon"></i>
          <span slot="title">{{ item.text }}</span>
          <!-- </router-link> -->
        </el-menu-item>
      </template>
    </el-menu>
    <!-- box -->
    <el-container class="box_" :class="{'left__':isCollapse}">
      <router-view></router-view>
    </el-container>
  </div>
</template>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
</style>

<style lang="scss">
.el-menu-vertical-demo {
  height: 100%;
}
</style>

<script>
import MenuIcon from "vue-material-design-icons/Menu.vue";
import FormatIndentDecreaseIcon from "vue-material-design-icons/FormatIndentDecrease.vue";
import FormatIndentIncreaseIcon from "vue-material-design-icons/FormatIndentIncrease.vue";
import WidgetsIcon from "vue-material-design-icons/Widgets.vue";

export default {
  components: {
    MenuIcon,
    FormatIndentDecreaseIcon,
    FormatIndentIncreaseIcon,
    WidgetsIcon
  },
  data() {
    return {
      isCollapse: true,
      activeIndex: "1",
      activeIndex2: "1",
      items: [
        {
          icon: "el-icon-sunny",
          text: "BEHRING",
          state: false,
          router: "/home"
        },
        {
          icon: "el-icon-user",
          "icon-alt": "chevron_right",
          text: "用户管理",
          model: true,
          state: false,
          children: [
            {
              icon: "group",
              text: "患者列表",
              state: false,
              router: "/PatientList",
              url: "/api/v1/user/list"
            },
            {
              icon: "recent_actors",
              text: "医生列表",
              state: false,
              router: "/DoctorList",
              url: "/api/v1/doctor/list"
            },
            {
              icon: "person_add_disabled",
              text: "待审核列表",
              state: false,
              router: "/DoctorCollate",
              url: "/api/v1/doctor/collate"
            }
          ]
        },
        {
          icon: "el-icon-tickets",
          "icon-alt": "chevron_right",
          text: "订单管理",
          model: false,
          state: false,
          children: [
            {
              icon: "credit_card",
              text: "充值订单",
              state: false,
              router: "/order",
              url: "/api/v1/order/list"
            },
            {
              icon: "monetization_on",
              text: "提现订单",
              state: false,
              router: "/withdrawalOrder",
              url: "/api/v1/order/transfer_list"
            },
            {
              icon: "money_off",
              text: "退款订单",
              state: false,
              router: "/refundOrder",
              url: "/api/v1/order/list"
            },
            {
              icon: "report",
              text: "异常订单日志",
              state: false,
              router: "/oddOrder",
              url: "/api/v1/manager/query_fatal_log"
            }
          ]
        },
        {
          icon: "el-icon-collection-tag",
          "icon-alt": "chevron_right",
          text: "代理管理",
          model: false,
          state: false,
          children: [
            {
              icon: "contacts",
              text: "代理列表",
              state: false,
              router: "/agentList",
              url: "/api/v1/manager/query_manage"
            }
          ]
        },
        {
          icon: "el-icon-mobile",
          "icon-alt": "chevron_right",
          text: "设备管理",
          model: false,
          state: false,
          children: [
            {
              icon: "blur_on",
              text: "上盖列表",
              state: false,
              router: "/deviceList_",
              url: "/api/v1/device/query_sn"
            },
            {
              icon: "blur_circular",
              text: "底座列表",
              state: false,
              router: "/deviceList",
              url: "/api/v1/device/query_sn"
            },
            {
              icon: "cloud_upload",
              text: "批量导入",
              state: false,
              router: "/batchImport",
              url: "/api/v1/device/update_sn"
            }
          ]
        },
        {
          icon: "el-icon-set-up",
          text: "子账号管理",
          "icon-alt": "chevron_right",
          model: false,
          state: false,
          children: [
            // customerService
            {
              icon: "device_hub",
              text: "子账号列表",
              state: false,
              router: "/account",
              url: "/api/v1/manager/query_manage"
            },
            {
              icon: "transfer_within_a_station",
              text: "角色列表",
              state: false,
              router: "/roleList",
              url: "/api/v1/manager/query_role"
            }
          ]
        },
        {
          icon: "el-icon-cloudy",
          text: "热更算法",
          "icon-alt": "chevron_right",
          model: false,
          state: false,
          children: [
            {
              icon: "memory",
              text: "ED算法",
              state: false,
              router: "/algorithm",
              url: "/api/v1/user/upload_algo_file"
            }
          ]
        },
        {
          icon: "el-icon-service",
          text: "客户服务",
          "icon-alt": "chevron_right",
          model: false,
          state: false,
          children: [
            {
              icon: "headset_mic",
              text: "客服列表",
              state: false,
              router: "/customerService",
              url: "/api/v1/service/query_member"
            },
            {
              icon: "recent_actors",
              text: "客服类型",
              state: false,
              router: "/serviceClassification",
              url: "/api/v1/service/add_problem_attr" // 未分配
            },
            {
              icon: "list_alt",
              text: "用户问题列表",
              state: false,
              router: "/userProblem",
              url: "/api/v1/service/query_problem" // 未分配
            }
          ]
        },
        {
          icon: "el-icon-edit-outline",
          text: "用户反馈",
          "icon-alt": "chevron_right",
          model: false,
          state: false,
          children: [
            {
              icon: "speaker_notes",
              text: "APP用户意见",
              state: false,
              router: "/opinion",
              url: "/api/v1/website/feedback"
            },
            {
              icon: "textsms",
              text: "官网用户留言",
              state: false,
              router: "/websiteMessage",
              url: "/api/v1/website/feedback_list"
            }
          ]
        },
        {
          icon: "el-icon-document-copy",
          text: "操作日志",
          state: false,
          router: "/operationLog"
        },
        {
          icon: "el-icon-paperclip",
          text: "开发测试组件",
          state: false,
          router: "/test",
          url: "/api/v1/user/list"
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.text {
  display: inline-block;
  line-height: 60px;
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
}
.el-menu-vertical-demo {
  display: inline-block;
  ul .el-menu-item {
    padding-right: 0 !important;
    padding-left: 0 !important;
    > a {
      line-height: 50px;
      display: inline-block;
      width: 100%;
      padding-left: 40px;
      text-decoration: none;
      color: #787878;
      box-sizing: border-box;
    }
  }
}
.el-menu-item.is-active > a {
  color: #3f51b5 !important;
  font-weight: 600;
}

.box_ {
  background-color: rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: -1;
  padding-top: 60px;
  padding-left: 200px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}
.left__ {
  padding-left: 65px;
  transition: all 0.3s ease-in-out;
  box-sizing: border-box;
}

</style>