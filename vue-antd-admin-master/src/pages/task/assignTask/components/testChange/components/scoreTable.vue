<template>
  <table class="scoreTable" border="1">
    <thead>
      <tr>
        <th width="15%" />
        <th width="15%">单选题</th>
        <th width="15%">多选题</th>
        <th width="15%">填空题</th>
        <th width="15%">简答题</th>
        <th width="15%">总和</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>题量</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>10</td>
        <td>{{ questionAmountNum }}</td>
      </tr>
      <tr>
        <td>分值</td>
        <td><a-input /></td>
        <td><a-input /></td>
        <td><a-input /></td>
        <td><a-input /></td>
        <td></td>
      </tr>
      <tr>
        <td>小计</td>
        <td>20</td>
        <td>20</td>
        <td>20</td>
        <td>20</td>
        <td />
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'ScoreTable',
  data () {
    return {
      questionAmountNum: '40'
    }
  }
}
</script>
<style lang="less">
.scoreTable {
  border-radius: 4px;
}
</style>
<style lang="less" scoped>
.scoreTable {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  margin: 30px 48px 0 0;
  width: 73%;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  text-align: center;
  line-height: 22px;
}
.scoreTable tr {
  height: 48px;
  td {
    text-align: center;
  }
}
.scoreTable th {
  background: #f9f9f9;
}
.ant-input {
  width: 40%;
  text-align: center;
}
</style>
