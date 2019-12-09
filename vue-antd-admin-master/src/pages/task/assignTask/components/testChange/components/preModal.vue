<template>
  <a-modal
    class="apreModal-wrapper"
    centered
    :visible="preModalVisible"
    @cancel="onClose"
    @ok="onClose"
    okText="确定"
    cancelText="取消"
  >
    <p>
      <a-icon type="info-circle" class="preModalIcon" /><span
        class="preModal-tishi"
        >确认要返回上一步吗？</span
      >
    </p>
    <p>返回上一步后已生成作业将全部删除</p>
  </a-modal>
</template>
<script>
export default {
  name: 'PreModal',
  props: {
    preModalVisible: {
      default: false
    }
  },
  methods: {
    onClose () {
      this.$emit('success')
    }
  }
}
</script>
