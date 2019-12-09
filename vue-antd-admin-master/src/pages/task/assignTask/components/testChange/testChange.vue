<template>
  <!-- <div class="test-container"> -->
  <a-layout>
    <div class="content-box">
      <div class="rt-dtk"><TestIdList /></div>
      <TestTemplate class="testTemplate" />
    </div>
  </a-layout>
  <!-- </div> -->
</template>
<script>
import TestTemplate from './components/testTemplate.vue'
import TestIdList from './components/testIdList.vue'
export default {
  name: 'Test',
  components: { TestIdList, TestTemplate }
}
</script>
<style lang="less">
.ant-layout {
  background-color: white;
}
.testTemplate {
  margin: 0px 48px 0 -55px;
}
.content-box {
  padding-left: 359px;
}
.rt-dtk {
  margin: 130px 48px 0 0;
  position: fixed;
  top: 100px;
  left: 280px;
}
</style>
