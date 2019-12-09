<template>
  <a-form :form="form" class="form">
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="作业名称:"
    >
      <a-input
        v-decorator="[
          'chaper',
          { rules: [{ required: true, message: '请输入作业名称' }] }
        ]"
        placeholder="第一章 质点运动学"
        :maxLength="25"
      />
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="答题班级:"
    >
      <a-radio :value="1">全选</a-radio><br />
      <a-button>南大物理一班</a-button><a-button>南大物理二班</a-button>
      <a-button>南大物理三班</a-button>
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="答题时间:"
    >
      <a-range-picker showTime>
        <template slot="renderExtraFooter">
          extra footer
        </template>
      </a-range-picker>
      <a-radio class="mg-lf32">限制答题时长</a-radio>
      <a-input class="testTime" />分钟
    </a-form-item>
    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
      label="答题难度:"
    >
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
    <a-form-item
      :label-col="formItemLayoutfw.labelCol"
      :wrapper-col="formItemLayoutfw.wrapperCol"
      label="答题范围:"
    >
      <div class="chapters">
        <a-popover
          title="标题"
          width="200"
          trigger="click"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <div class="chapter-left">
            <div
              v-for="item in list1"
              :key="item"
              slot="reference"
              class="chapter-div1"
              trigger="click"
            >
              1
            </div>
          </div>
        </a-popover>
      </div>

      <div class="chapters">
        <div class="chapter-right">
          <div
            v-for="item in list1"
            :key="item"
            slot="reference"
            class="chapter-div1"
            trigger="click"
          >
            2
          </div>
        </div>
        <!-- <div class="chapter-right">
          <a-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
          >
            <div
              v-for="item in list1"
              :key="item"
              slot="reference"
              class="chapter-div1"
            >
              {{ list1 }}
            </div>
          </a-popover>
        </div>-->
      </div>
    </a-form-item>
  </a-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
}
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
}
const formItemLayoutfw = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}
export default {
  data () {
    return {
      value: '',
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
      }],
      list1: [1, 2, 3, 4, 5],
      formItemLayout,
      formTailLayout,
      formItemLayoutfw,
      form: this.$form.createForm(this, { name: 'dynamic_rule' })
    }
  },
  // mounted: {

  // },
  methods: {
    // check () {
    //   this.form.validateFields(err => {
    //     if (!err) {
    //       console.info('success')
    //     }
    //   })
    // }
  }
}
</script>
<style lang="less" scoped>
.mg-lf32 {
  margin-left: 32px;
}
.ant-form-item {
  display: flex;
  .ant-btn {
    margin: 0 10px;
  }
  .testTime {
    width: 50px;
  }
  .ant-select {
    width: 120px;
  }
}
.chapters {
  display: inline-block;
  width: 48%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.chapters:first-child {
  margin-right: 3%;
}
.chapter-div1 {
  border: 1px solid #e8e8e8;
  padding: 12px 24px 11px 24px;
  line-height: 22px;
}
.chapter-div1:hover {
  background: #f6fffc;
  border: 1px solid #0fb1b5;
}
</style>
