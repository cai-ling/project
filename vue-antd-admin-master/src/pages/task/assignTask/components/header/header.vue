<template>
  <div class="header-wrapper">
    <div class="header-fl">
      <i class="back" />
      <span class="name"><i class="taskName"></i>{{ taskName }}</span>
      <span>截止：{{ endTime }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      taskName: '运动学知识点测验',
      endTime: '2019/10/1'
    }
  }
}
</script>
<style lang="less" scoped>
.header-wrapper {
  display: flex;
  // margin-left: 50px;
  border-bottom: 1px solid rgba(233, 233, 233, 1);
  padding-bottom: 7px;
  .header-fl {
    float: left;
    display: flex;
    width: 1100px;
    .back {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(../../../../../../static/icon/back.svg) no-repeat center;
      background-size: 20px;
      vertical-align: middle;
      margin: 0 27px 13px 10px;
    }
    .name {
      margin-right: 20px;
    }
    .taskName {
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url(../../../../../../static/icon/taskName.svg) no-repeat
        center;
      background-size: 20px;
      vertical-align: middle;
    }
  }
  .header-fr {
    float: right;
  }
}
</style>
