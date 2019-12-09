<template>
  <div class="testIdList">
    <div class="testIdList-container">
      <div class="testIdList-header">题号列表</div>
      <div v-for="(item, index) in list" :key="index" class="testIdList-body">
        <span>{{ item.tixing }}</span>
        <div class="btns">
          <a-button v-for="q in questionId" :key="q" class="btn">{{
            q
          }}</a-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TestIdList',
  data () {
    return {
      questionId: 10,
      list: [
        { tixing: '一、单选题', name: 'a' },
        { tixing: '二、多选题', name: 'b' },
        { tixing: '三、填空题', name: 'c' },
        { tixing: '四、简答题', name: 'd' }
      ]
    }
  }
}
</script>
<style lang="less">
.testIdList {
  width: 234px;
  background: #ffffff;
  border: 1px solid rgba(15, 177, 181, 0.8);
  border-radius: 4px;
}
.testIdList-header {
  width: 234px;
  color: white;
  height: 40px;
  background: rgba(15, 177, 181, 0.7);
  text-align: center;
  line-height: 40px;
  font-size: 12px;
}
.testIdList-body {
  padding: 10px 18px;
  span {
    display: block;
  }
}
.btns {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
}
.btn {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 0;
  padding: 13px 5px;
  margin: 0 7px 5px 0 !important;
}
</style>
