<template>
  <a-layout-header :class="['global-header']" style="">
    <div :class="['global-header-wide', layout]">
      <div class="logo">
        <img width="32" src="static/img/vue-antd-logo.png" />
        <span class="logo-text">中科云评测</span>
      </div>

      <div class="global-header-menu" style="margin-left: 63px;font:16px">
        <a-menu v-model="current" mode="horizontal" style="line-height:80px">
          <a-sub-menu style="width: 112px">
            <span slot="title" class="submenu-title-wrapper">
              大学物理<a-icon type="down" style="margin-left:9px;" />
            </span>
            <a-menu-item key="setting:1">大学物理</a-menu-item>
            <a-menu-item key="setting:2">概率统计</a-menu-item>
            <a-menu-item key="setting:3">高教数学</a-menu-item>
            <a-menu-item key="setting:4">Option 4</a-menu-item>
          </a-sub-menu>
          <a-menu-item key="mail">学情分析 </a-menu-item>
          <a-menu-item key="app" style="width: 112px">
            <a ref="../pages/login/login">
              帮助中心
            </a>
          </a-menu-item>
        </a-menu>
      </div>
      <div :class="['global-header-right']">
        <span>{{ currentSchoolName }}</span>
        <header-notice class="header-item notice" />
        <header-avatar class="header-item" />
      </div>
    </div>
  </a-layout-header>
</template>

<script>
import HeaderNotice from './HeaderNotice'
import HeaderAvatar from './HeaderlAvatar'

export default {
  name: 'GlobalHeader',
  components: { HeaderAvatar, HeaderNotice },
  data () {
    return {
      currentSchoolName: '南京大学',
      current: ['mail']
    }
  },
  props: ['collapsed', 'menuData'],
  computed: {
    layout () {
      return this.$store.state.setting.layout
    },
    systemName () {
      return this.$store.state.setting.systemName
    }
  },
  methods: {
    // toggleCollapse () {
    //   this.$emit('toggleCollapse')
    // },
    onSelect (obj) {
      this.$emit('menuSelect', obj)
    }
  }
}
</script>
<style lang="less" scoped>
// .ant-menu-horizontal > .ant-menu-submenu-selected {
//   color: #0fb1b5;
//   border-bottom: 2px solid #0fb1b5;
// }
.trigger {
  font-size: 20px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #0fb1b5;
  }
}
.header-item {
  padding: 0 12px;
  display: inline-block;
  height: 100%;
  cursor: pointer;
  vertical-align: middle;
  i {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
  }
}
.notice {
  margin-right: 88px;
}
.global-header {
  position: fixed;
  height: 80px;
  background: white;
  height: 98px;
  padding: 0 12px 0 0;
  // -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  // box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  z-index: 999;
  border-bottom: 16px solid #ccc;
  &.light {
    background: #fff;
  }
  .global-header-wide {
    &.head {
      max-width: 1400px;
      margin: auto;
    }
    &.side {
    }
    .logo {
      line-height: 80px;
      vertical-align: top;
      display: inline-block;
      padding: 0 12px 0 24px;
      cursor: pointer;
      font-size: 20px;
      font-weight: 500;
      .logo-text {
        font-family: FZY3K--GBK1-0;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.9);
        text-align: center;
        width: 90px;
        height: 21px;
      }
      img {
        width: 30px;
        height: 25px;
      }
    }
    .global-header-menu {
      display: inline-block;
    }
    .global-header-right {
      float: right;
      span {
        margin-right: 71px;
        font-size: 16px;
        opacity: 0.65;
        color: #000000;
        text-align: left;
      }
    }
  }
}
.ant-menu {
  font-size: 16px;
}
</style>
