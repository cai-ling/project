<template>
  <div class="app_wapper">
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside class="slider_container">
        <el-menu
          class="sub_meuns_wapper"
          mode="vertical"
          unique-opened
          :default-active="$route.path"
          background-color="#304156"
          text-color="#fff"
          active-text-color="#409EFF"
        >
          <!-- 菜单组件 -->
          <side-Meuns :routes="getRoutes" class="side-menu"></side-Meuns>
        </el-menu>
      </el-aside>
      <!-- 右侧内容区域 -->
      <el-container class="app_content">
        <el-header>
          <breadcrumb class="breadcrumb-container fl" />
          <div class="right-menu fr">
            <el-dropdown class="avatar-container" trigger="click">
              <div class="avatar-wrapper">
                张三
                <i class="el-icon-caret-bottom" />
              </div>
              <el-dropdown-menu slot="dropdown" class="user-dropdown">
                <router-link to="/">
                  <el-dropdown-item>
                    Home
                  </el-dropdown-item>
                </router-link>
                <el-dropdown-item divided>
                  <span style="display:block;" @click="logout">Log Out</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-header>
        <!-- 内容区域 -->
        <el-main>
          <!-- 二级路由跳转 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
// 左侧菜单组件
import sideMeuns from '@/components/sideMeuns'
import Breadcrumb from '@/components/breadCrumb'
export default {
  computed: {
    getRoutes () {
      return global.antRouter
    }
  },
  components: {
    sideMeuns,
    Breadcrumb
  },
  data () {
    return {
      userRole: '',
    }
  },
  methods: {
    logout () { //退出系统
      localStorage.removeItem("userRole")
      // 跳转到登录页的时候顺便刷新
      //this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      window.location.href = window.location.origin + window.location.pathname
    },
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.app_wapper {
  .app_content {
    min-height: 100%;
    -webkit-transition: margin-left 0.28s;
    transition: margin-left 0.28s;
    margin-left: 180px;
    position: relative;
  }

  .el-header {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  }

  .el-aside,
  .slider_container .el-menu {
    color: #333;
    transition: width 0.28s;
    width: 180px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: rgb(48, 65, 86);
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
