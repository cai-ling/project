<template>
  <div class="success">
    <!-- <a-button @change="huoqu">获取</a-button>
    <a-button>提交</a-button>
    <p>{{ dx }}</p> -->

    <div class="taskEndIcon"><i class="assignTask-success"></i></div>
    <h1>提交成功</h1>
    <p class="successed">
      已生成120份作业（千人千卷）
      <router-link :to="'/task/assignTask/taskList'" class="taskAllList"
        >查看所有作业</router-link
      >
      <a-icon type="right" />
    </p>
    <div class="helping">
      <p>说明：</p>
      <p>1.系统根据所选班级人数,生成有差异的个性化作业</p>
      <p>2.具体说明，请查看<a href="">帮助中心</a></p>
    </div>
  </div>
</template>
<script>
// export default {
//   computed: {
//     dxNum () {
//       return this.$store.state.dxNum
//     }
//   },
//   methods: {
//     huoqu () {
//       return this.$store.state.dxNum
//     }
//   }
// }
</script>
<style lang="less">
// body {

// }
.success {
  text-align: center;
  .successed {
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    line-height: 12px;
    font-size: 8px;
    .ant-icon {
      color: #0fb1b5;
    }
  }
  .taskAllList {
    margin: 0 5px 0 10px;
    font-weight: 400;
    color: rgba(15, 177, 181, 1);
    font-size: 7px;
  }
  .helping {
    height: 113px;
    width: 560px;
    background: #fafafa;
    border-radius: 2px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.8);
    line-height: 22px;
    padding: 10.5px 0 13px 10.5px;
    margin: 0 auto;
    text-align: left;
    margin-top: 32px;
  }
}
.taskEndIcon {
  font-size: 128px;
  color: #0fb1b5;
}
.assignTask-success {
  display: inline-block;
  width: 63px;
  height: 70px;
  background: url(../../../../../../static/icon/assignTaskSuccess.svg) no-repeat
    center;
  background-size: 70px;
  vertical-align: middle;
}
h1 {
  margin-top: -35px;
}
</style>
