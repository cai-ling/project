<template>
  <a-modal
    class="addModal-wrapper"
    title="新增题目"
    centered
    width="966px"
    :visible="addModalVisible"
    @cancel="onClose"
    @ok="onClose"
    :footer="null"
  >
    <div class="addModal-top pad24 pad-bt0">
      <p>
        <a-icon type="info-circle" class="addModalIcon" /><span
          class="addModal-tishi"
          >{{ tishi }}</span
        >
      </p>
      <a-form class="form-one">
        <a-form-item label="出题点:">
          <a-row>
            <a-col :span="24"
              ><a-checkbox>{{ jieName }}</a-checkbox></a-col
            >
            <a-col :span="24"><a-checkbox>B</a-checkbox></a-col>
            <a-col :span="24"><a-checkbox>C</a-checkbox></a-col>
          </a-row>
        </a-form-item>
        <a-form-item label="题型:">
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
      </a-form>
    </div>
    <i class="hengxian"></i>
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
        <a-form-item class="selfAdd">
          <a-button>自定义新增</a-button>
        </a-form-item>
      </a-form>
    </div>
    <questionBody-select />
  </a-modal>
</template>
<script>
import QuestionBodySelect from './questionBody-select'
export default {
  name: 'AddModal',
  components: {
    QuestionBodySelect
  },
  props: {
    addModalVisible: {
      default: false
    }
  },
  data () {
    return {
      jieName: '1.1 相对运动',
      tishi: '新增题目后默认本题在所有生成的作业中都出现',
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
.addModal-wrapper {
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
.addModal-top {
  .ant-form-item-label {
    width: 56px;
  }
}
</style>

<style lang="less" scoped>
.addModalIcon {
  color: #0fb1b5;
}
.addModal-tishi {
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
  .ant-form-item {
    margin-bottom: 0;
    .ant-form-item-label label {
      color: white;
    }
  }
}
.form-one {
  margin-left: 85px;
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
.selfAdd {
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
.addModal-top {
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
