<template>
  <a-modal
    class="previewModal-wrapper"
    title="预览"
    centered
    width="1300px"
    :bodyStyle="{ height: '1000px' }"
    :visible="previewModalVisible"
    @cancel="onClose"
    @ok="onClose"
  >
    <!-- :visible="$store.state.previewModalVisible" -->

    <div class="fl">
      <TestIdList />
    </div>
    <div class="fr">
      <a-button class="show-answer"> 隐藏答案&解析 </a-button>
      <div class="fl-wrapper">
        <p class="title">
          {{ title }}
        </p>

        <p class="score">
          总分:<span>{{ score }}</span
          >分
        </p>
        <p>分值设置</p>
        <ScoreTable />
        <QuestionBody />
      </div>
    </div>
  </a-modal>
</template>
<script>
import ScoreTable from './scoreTable'
import TestIdList from './testIdList'
import QuestionBody from './questionBody'
export default {
  name: 'PreviewModal',
  components: {
    ScoreTable,
    TestIdList,
    QuestionBody
  },
  props: {
    previewModalVisible: {
      default: false
    }
  },
  data () {
    return {
      score: 100,
      title: '真空中静电场作业题'
    }
  },
  methods: {
    onClose () {
      this.$emit('success')
    }
  }
}
</script>
<style lang="less">
.previewModal-wrapper {
  .ant-modal-body {
    padding: 0;
  }
  .ant-modal-header {
    height: 40px;
    padding: 9px 14px;
    background: rgba(15, 177, 181, 0.7);
    .ant-modal-title {
      color: #fff;
    }
  }
  .ant-modal-close-x {
    line-height: 40px;
    color: #fff;
  }
}
</style>
<style lang="less" scoped>
.ant-modal {
  display: flex;
}
.ant-modal-header {
  padding: 9px 14px;
  background: rgba(15, 177, 181, 0.7);
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #ffffff;
}

.title {
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #000000;
  text-align: center;
}
.score {
  text-align: center;
  opacity: 0.85;
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #000000;
}
.show-answer {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #0fb1b5;
  border: none;
  float: right;
}
.fr {
  margin: 20px 29px 0 29px;
  float: left;
  width: 73%;
  .fl-wrapper {
    margin: 8px 30px 30px 20px;
  }
}
.fl {
  margin: -70px 20px 0;
  float: left;
  .testIdList {
    margin-top: 100px !important;
  }
}
</style>
