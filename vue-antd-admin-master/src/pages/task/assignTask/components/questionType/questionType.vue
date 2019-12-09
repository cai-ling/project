<template>
  <div>
    <table class="questionType" cellspacing="0" cellpadding="0" border="0">
      <thead>
        <tr>
          <th width="40%">出题点</th>
          <th width="15%">单选题</th>
          <th width="15%">多选题</th>
          <th width="15%">填空题</th>
          <th width="15%">简答题</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <a-checkbox
              :indeterminate="indeterminate"
              @change="handleCheckAll"
              :checked="checkAll"
            >
              全选
            </a-checkbox>
            <span>第一章 质点动力学</span>
          </td>
          <td />
          <td />
          <td />
          <td />
        </tr>
        <tr v-for="(item, index) in checkList" :key="index + '-son'">
          <td>
            <a-checkbox
              :value="item"
              :checked="item.checked"
              @change="handleCheckChange"
            >
              {{ item.title }}
            </a-checkbox>

            共({{ sum(item.checkContent.map(s => s.total)) }}题)
            <span class="selected">
              已选{{ sum(item.checkContent.map(s => parseInt(s.val) || 0)) }}个
            </span>
          </td>
          <td v-for="contentItem in item.checkContent" :key="contentItem.index">
            <template v-if="item.checked">
              <a-input v-model="contentItem.val" />
              /{{ contentItem.total }}
            </template>
          </td>
        </tr>
        <tr>
          <td>已选{{ checkList.length }}个出题点，合计10+2题，共10分</td>
          <td>
            每题 <a-input v-model="submitData.dxScore" />分<br />
            <!-- <label>
              共{{ sum("contentItem.val") }}题 共{{
                submitData.dxScore * sum("contentItem.val")
              }}分
            </label> -->
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      submitData: {
        dxScore: '',
        duoxScore: '',
        tkScore: '',
        jdScore: ''
      },
      checkList: [
        {
          id: 1,
          checked: false,
          title: '1.1质点参考系坐标系和空间的测量',
          checkContent: [
            {
              val: '',
              type: 'a',
              total: 22
            },
            {
              val: '',
              type: 'b',
              total: 93
            },
            {
              val: '',
              type: 'c',
              total: 33
            },
            {
              val: '',
              type: 'd',
              total: 34
            }
          ]
        },
        {
          id: 2,
          checked: false,
          title: '1.2 质点运动的矢量描述',
          checkContent: [
            {
              val: '',
              type: 'a',
              total: 22
            },
            {
              val: '',
              type: 'b',
              total: 33
            },
            {
              val: '',
              type: 'c',
              total: 44
            },
            {
              val: '',
              type: 'd',
              total: 66
            }
          ]
        },
        {
          id: 3,
          checked: false,
          title: '1.3相对运动',
          checkContent: [
            {
              val: '',
              type: 'a',
              total: 11
            },
            {
              val: '',
              type: 'b',
              total: 99
            },
            {
              val: '',
              type: 'c',
              total: 33
            },
            {
              val: '',
              type: 'd',
              total: 34
            }
          ]
        },
        {
          id: 4,
          checked: false,
          title: '1.4 相对运动',
          checkContent: [
            {
              val: '',
              type: 'a',
              total: 11
            },
            {
              val: '',
              type: 'b',
              total: 99
            },
            {
              val: '',
              type: 'c',
              total: 33
            },
            {
              val: '',
              type: 'd',
              total: 34
            }
          ]
        }
      ],
      indeterminate: false,
      checkAll: false

    }
  },
  methods: {
    handleCheckAll (e) {
      this.checkList.forEach(s => {
        s.checked = e.target.checked
        s.checkContent.forEach(a => {
          a.val = ''
        })
      })
      Object.assign(this, {
        indeterminate: false,
        checkAll: e.target.checked
      })
    },
    handleCheckChange (e) {
      // debugger
      const checkRecordIndex = this.checkList.indexOf(e.target.value)
      if (checkRecordIndex > -1) {
        this.checkList[checkRecordIndex].checked = e.target.checked
        this.checkList[checkRecordIndex].checkContent.forEach(s => {
          s.val = ''
        })
      }
      const checkedCount = this.checkList.filter(s => s.checked === true).length
      this.indeterminate = checkedCount < this.checkList.length // 控制显示样式
      this.checkAll = checkedCount === this.checkList.length // 判断是否全部选中
    },
    sum (arr) {
      return this.evil(arr.join('+'))
    },
    evil (fn) {
      let Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
      return new Fn('return ' + fn)()
    }
  }

}
</script>
<style lang="less" scoped>
.questionType {
  background: #fefefe;
  border: 1px solid #e8e8e8;
  border-radius: 2px;
  margin: 82px 48px 0 48px;
  thead {
    th {
      height: 60px;
    }
  }
  tbody :last-child td {
    height: 50px;
  }
  tr {
    th {
      white-space: nowrap;
      overflow: hidden;
      user-select: none;
      background: #f9f9f9;
      border-radius: 4px 4px 0px 0px;
      font-weight: normal;
      border-bottom: 1px solid #ccc;
      border-right: 1px solid #ccc;
      text-align: center;
    }
    th:last-child,
    td:last-child {
      border-right: none;
    }
    td {
      padding: 5px 20px;
      line-height: 35px;
      border-right: 1px solid #ccc;
    }
  }
  tbody {
    tr {
      .ant-input {
        width: 50px;
      }
    }
    tr:last-child {
      td {
        border-top: 1px solid #ccc;
        .selected {
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
