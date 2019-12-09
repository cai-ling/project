<template>
  <a-modal
    class="replaceModal-wrapper"
    title="更换题目"
    centered
    width="966px"
    :bodyStyle="{ height: '772px' }"
    :visible="replaceModalVisible"
    @cancel="onClose"
    @ok="onClose"
    :footer="null"
  >
    <div class="replaceModal-top pad24 pad-bt0">
      <p>
        <a-icon type="info-circle" class="replaceModalIcon" /><span
          class="replaceModal-tishi"
          >{{ tishi }}</span
        >
      </p>
      <a-form class="form-one">
        <a-form-item label="出题点:">
          <span class="chutidian" v-for="item in chutidians" :key="item">{{
            item
          }}</span>
        </a-form-item>
        <a-form-item label="题型:">
          <span>单选题</span>
        </a-form-item>
      </a-form>
      <i class="hengxian"></i>
      <p class="Pview">
        <a-icon type="info-circle" class="replaceModalIcon" />
        <span class="replaceModal-tishi"
          >为您找到{{ questionNum }}道相似题目</span
        >
        <a href=""><a-icon type="hdd" /><span>显示答案&解析</span></a>
      </p>
    </div>

    <div class="tg">
      <a-form class="form-two">
        <div class="form-two-lf">
          <a-form-item label="题目难度:">
            <a-select defaultValue="不限">
              <a-select-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >{{ item.label }}</a-select-option
              >
            </a-select>
          </a-form-item>
          <a-form-item label="题目来源:">
            <a-select defaultValue="不限">
              <a-select-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >{{ item.label }}</a-select-option
              >
            </a-select>
          </a-form-item>
        </div>
        <a-form-item class="selfReplace">
          <a-button @click="selfReplace">自定义更换</a-button>
          <!-- <selfReplaceModal
            :selfReplaceVisible="selfReplaceVisible"
          ></selfReplaceModal> -->
        </a-form-item> </a-form
      >l
    </div>
    <QuestionBody-select />
  </a-modal>
</template>
<script>
import QuestionBodySelect from './questionBody-select'
import SelfReplaceModal from './selfReplaceModal'
export default {
  name: 'ReplaceModal',
  components: {
    QuestionBodySelect,
    SelfReplaceModal
  },
  props: {
    replaceModalVisible: {
      default: false
    }
  },
  data () {
    return {
      selfReplaceVisible: false,
      questionNum: '10',
      chutidians: ['出题点的章节', ' 知识点', '出题点的章节', '出题点的章节', '出题点的章节'],
      tishi: '更换题目后默认本题在所有生成的作业中都出现',
      options: [{
        value: '选项1',
        label: '不限'
      }, {
        value: '选项2',
        label: '简单'
      }, {
        value: '选项3',
        label: '中等'
      }, {
        value: '选项4',
        label: '难题'
      }]
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
.replaceModal-wrapper {
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
.tg .ant-form-item-label label {
  color: #fff;
}
.replaceModal-top {
  .ant-form-item-label {
    width: 56px;
  }
  .Pview {
    a {
      float: right;
      font-size: 16px;
      color: #0fb1b5;
      span {
        padding: 0 74px 0 10px;
      }
    }
  }
}
</style>

<style lang="less" scoped>
.replaceModalIcon {
  color: #0fb1b5;
}
.replaceModal-tishi {
  margin-left: 8px;
}
.ant-icon {
  color: #0fb1b5;
  width: 14px;
  height: 14px;
  radius: 4px;
}
.hengxian {
  display: block;
  margin: auto;
  margin-bottom: 16px;
  margin-top: -8px;
  width: 950px;
  height: 1px;
  background: #e8e8e8;
}
.tg {
  width: 966px;
  height: 40px;
  padding: 0 71px;
  background: rgba(15, 177, 181, 0.7);
  // margin-left: -24px;
  .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-label label {
      color: white;
    }
  }
}
.form-one {
  margin: 36px 2px 0 85px;
  .chutidian {
    margin: 30px 18px 8px 2px;
    padding: 6px 10px 11px;
    background: #f5f5f5;
  }
}

.form-two {
  display: flex;
  justify-content: space-between;
  .form-two-lf {
    display: flex;
    .ant-form-item {
      margin-right: 52px;
      display: flex;
      .ant-select {
        width: 120px;
      }
    }
  }
}
.selfReplace {
  float: right;
  button {
    width: 102px;
    height: 32px;
    color: #0fb1b5;
    background: #ffffff;
    border: 1px solid #0fb1b5;
    border-radius: 4px;
  }
}
.replaceModal-top {
  .ant-form-item {
    display: flex;
    .ant-select {
      width: 120px;
    }
  }
}
.pad24 {
  padding: 24px;
}
.pad-bt0 {
  padding-bottom: 0;
}
</style>
