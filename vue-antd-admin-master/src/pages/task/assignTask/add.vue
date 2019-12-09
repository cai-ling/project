<template>
  <div class="add-container">
    <a-button class="exit" @click="() => (backModalVisible = true)"
      ><a-icon type="left"
    /></a-button>
    <!-- <a-modal
      centered
      okText="保存"
      cancelText="不保存"
      :backModalVisible="backModalVisible"
    >
      <p>是否保存当前数据?</p>
    </a-modal> -->

    <a-tabs :activeKey="key" @change="callback" class="add-task-set">
      <a-tab-pane tab="基本设置" key="1"><setting /></a-tab-pane>
      <a-tab-pane tab="题目选择" key="2"><questionType /></a-tab-pane>
      <a-tab-pane tab="样题调整" key="3"><testChange /></a-tab-pane>
      <a-tab-pane tab="生成作业" key="4"><taskEnd /></a-tab-pane>
    </a-tabs>
    <a-button class="preview" v-if="taskSuccess" @click="showPreview"
      >预览</a-button
    >
    <previewModal
      @success="closePreview"
      :previewModalVisible="previewModalVisible"
    ></previewModal>
    <a-button class="next" v-if="questionSelect" @click="handleNext"
      >下一步:题目选择</a-button
    >
    <a-button class="next" v-if="testChange" @click="handleNext"
      >下一步:样题调整</a-button
    >
    <a-popover placement="bottomRight">
      <template slot="title">
        <span @click="taskEnd">千人千卷</span>
        <p>每个学生获得不一样的作业题</p>
      </template>
      <template slot="content">
        <span @click="taskEnd">使用样题</span>
        <p>所有学生使用该样题作为作业</p>
      </template>
      <a-button class="next" v-if="taskSuccess">下一步:生成作业</a-button>
    </a-popover>
    <a-button class="before" v-if="pre" @click="showPre">上一步</a-button>
    <preModal @success="closePre" :preModalVisible="preModalVisible"></preModal>
    <a-button class="issue" v-if="issue">立即发布</a-button>
  </div>
</template>
<script>
import Setting from '@/pages/task/assignTask/components/setting/setting'
import QuestionType from '@/pages/task/assignTask/components/questionType/questionType'
import TestChange from '@/pages/task/assignTask/components/testChange/testChange'
import TaskEnd from '@/pages/task/assignTask/components/taskEnd/taskEnd'
import previewModal from '@/pages/task/assignTask/components/testChange/components/previewModal'
import PreModal from '@/pages/task/assignTask/components/testChange/components/preModal'
export default {
  name: 'Add',
  components: { Setting, QuestionType, TaskEnd, TestChange, previewModal, PreModal },
  data () {
    return {
      alive: true,
      key: '1',
      backModalVisible: false,
      previewModalVisible: false,
      preModalVisible: false,
      questionSelect: true,
      testChange: false,
      taskSuccess: false,
      pre: false,
      issue: false
    }
  },
  methods: {
    callback (key) {
      if (key === '1' || key === 1) {
        this.key = '1'
        this.questionSelect = true
        this.testChange = false
        this.taskSuccess = false
        this.pre = false
        this.issue = false
      } else if (key === '2' || key === 2) {
        this.key = '2'
        this.questionSelect = false
        this.testChange = true
        this.taskSuccess = false
        this.pre = false
        this.issue = false
      } else if (key === '3' || key === 3) {
        this.key = '3'
        this.questionSelect = false
        this.testChange = false
        this.taskSuccess = true
        this.pre = false
        this.issue = false
      } else if (key === '4' || key === 4) {
        this.key = '4'
        this.questionSelect = false
        this.testChange = false
        this.taskSuccess = false
        this.pre = true
        this.issue = true
      }
    },
    handleNext () {
      this.key++
      this.callback(this.key)
    },
    taskEnd () {
      this.key = '4'
      this.pre = true
      this.issue = true
      this.taskSuccess = false
    },
    showPreview () {
      this.previewModalVisible = true
    },
    closePreview () {
      this.previewModalVisible = false
    },
    showPre () {
      this.preModalVisible = true
    },
    closePre () {
      this.preModalVisible = false
    }
  }
}
</script>
<style lang="less">
.exit {
  position: fixed;
  margin: 12px 8px;
  background: #ffffff;
  border: none;
  width: 24px;
  height: 24px;
  padding: 0;
}
.preview {
  position: fixed;
  top: 115px;
  right: 210px;
}
.before {
  position: fixed;
  top: 115px;
  right: 160px;
}
.next {
  background-color: rgba(15, 177, 181, 0.7);
  color: white;
  position: fixed;
  top: 115px;
  right: 50px;
}
.issue {
  background-color: rgba(15, 177, 181, 0.7);
  color: white;
  position: fixed;
  top: 115px;
  right: 50px;
}
.add-container {
  height: 100%;
  width: 100%;
  padding: 20px 0 0 0;
}
.add-task-set > .a-tab-pane {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px 4px 0 0;
}
.ant-tabs .ant-tabs-nav-wrap {
  margin-left: 24px;
}
.ant-tabs-bar ant-tabs-top-bar {
  margin-top: -15px;
}
</style>
