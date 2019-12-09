<template>
  <div class="search">
    <a-input-search
      class="ant-input"
      defaultValue="搜索"
      :maxLength="25"
      @search="enterSearchMode"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      // value: ''
    }
  },
  methods: {
    enterSearchMode () {
      this.searchMode = true
      setTimeout(() => this.$refs.input.focus(), 300)
    }
  }
}
</script>

<style lang="less">
.search {
  .ant-input {
    width: 300px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    &.leave {
      input {
        display: none;
      }
    }
    input:focus {
      box-shadow: 0 0 0 0;
    }
  }
}
</style>
