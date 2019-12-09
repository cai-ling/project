<template>
  <div class="testTemplate">
    <div class="edit">
      <a-button class="hiddenAnswer"
        ><a-icon type="hdd" /> 隐藏答案&解析
      </a-button>
      <a-button class="add-btn" @click="handleClick">
        +新增题目
      </a-button>
      <AddModal
        @success="handleClose"
        :addModalVisible="addModalVisible"
      ></AddModal>
    </div>
    <br /><br /><br /><br />
    <div class="test-container">
      <p class="title">{{ title }}</p>
      <p class="score">
        总分:<span>{{ score }}</span
        >分
      </p>
      <div class="score-set">
        <span
          >分值设置&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a-checkbox v-model="checkedScore">百分制</a-checkbox>
          &nbsp;&nbsp;&nbsp;&nbsp;(若勾选此项，要求总分100分)</span
        >
        <ScoreTable />
      </div>
      <QuestionBody />
    </div>
  </div>
</template>
<script>
import AddModal from './addModal'
import ScoreTable from './scoreTable'
import QuestionBody from './questionBody'

export default {
  name: 'TestTemplate',
  components: {
    AddModal,
    ScoreTable,
    QuestionBody
  },
  data () {
    return {
      checkedScore: true,
      addModalVisible: false,
      title: '真空中静电场作业题',
      score: 100
    }
  },
  methods: {
    handleClick () {
      this.addModalVisible = true
    },
    handleClose () {
      this.addModalVisible = false
    }
  }

}
</script>
<style lang="less" scoped>
.add-btn {
  background-color: rgba(15, 177, 181, 0.7);
  color: white;
}
.edit {
  float: right;
  width: 150px;
  .hiddenAnswer {
    padding: 0;
    border: none;
    float: right;
    color: #0fb1b5;
    font-size: 16px;
  }
}
.edit :last-child {
  float: right;
}
.testTemplate {
  .title {
    font-size: 18px;
    font-weight: 700;
    text-align: center;
  }
  .score {
    font-size: 12px;
    font-weight: 100;
    text-align: center;
    margin-top: 20px;
  }
}
</style>
