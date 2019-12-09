<template>
  <a-modal
    class="problems-wrapper"
    title="问题反馈"
    centered
    width="966px"
    @cancel="onClose"
    @ok="onClose"
    :visible="problemsModalVisible"
  >
    <a-form class="problems-form">
      <a-form-item label="问题类型:">
        <a-row style="display:flex">
          <a-col :span="12"><a-checkbox>题干有误</a-checkbox></a-col>
          <a-col :span="12"><a-checkbox>答案有误</a-checkbox></a-col>
          <a-col :span="12"><a-checkbox>解析有误</a-checkbox></a-col>
        </a-row>
      </a-form-item>
      <a-form-item class="adviceIpt" label="问题描述:">
        <a-textarea
          class="Ipt"
          placeholder="（必填）欢迎提出您在使用过程中遇到的问题或建议，感谢您的支持"
        />
        <span class="num">0/500</span>
      </a-form-item>
      <a-form-item class="picture" label="图片:">
        <!-- <img src="@/assets/image/1.png" alt="" />
        <img src="@/assets/image/1.png" alt="" /><br /> -->
        <div class="clearfix">
          <a-upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            :fileList="fileList"
            @preview="handlePreview"
            @change="handleChange"
          >
            <div v-if="fileList.length < 3">
              <a-icon type="plus" />
              <div class="ant-upload-text">上传照片</div>
            </div>
          </a-upload>
          <a-modal
            :visible="previewVisible"
            :footer="null"
            @cancel="handleCancel"
          >
            <img alt="example" style="width: 100%" :src="previewImage" />
          </a-modal>
        </div>
        <span class="limitPicture">最多6张</span>
      </a-form-item>
      <a-form-item label="联系方式:">
        <a-input class="tel" placeholder="请输入手机/电话/邮箱" />
      </a-form-item>
      <a-form-item>
        <a-button class="sub">提交</a-button>
        <a-button>取消</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
export default {
  name: 'problemsModal',
  props: {
    problemsModalVisible: false
  },
  data () {
    return {
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }
      ]
    }
  },
  methods: {
    onClose () {
      this.$emit('success')
    },
    handleCancel () {
      this.previewVisible = false
    },
    handlePreview (file) {
      this.previewImage = file.url || file.thumbUrl
      this.previewVisible = true
    },
    handleChange ({ fileList }) {
      this.fileList = fileList
    }
  }
}
</script>
<style lang="less">
.problems-wrapper {
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
  .ant-form-item-label {
    overflow: visible;
  }
  .adviceIpt .ant-form-item-children {
    display: flex;
  }
}
.problems-form .ant-form-item-label {
  width: 70px;
}
</style>
<style lang="less" scoped>
.problems-form {
  margin: 24px 214px;
}
.ant-form-item {
  display: flex;
  .tel {
    width: 254px;
  }
  .sub {
    margin: 32px 8px 32px 65px;
    background: #0fb1b5;
    font-size: 14px;
    color: #ffffff;
  }
}
.Ipt {
  width: 468px;
  height: 114px;
}
img {
  width: 104px;
  height: 104px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px;
  margin-right: 24px;
}
.limitPicture {
  margin: 8px 30px 16px 155px;
  color: rgba(0, 0, 0, 0.45);
}
.ant-form-item-children {
  // display: flex;
}
.num {
  margin: 85px 0 0 10px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
