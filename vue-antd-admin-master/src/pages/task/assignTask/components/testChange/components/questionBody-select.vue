<template>
  <div class="questionBody">
    <div class="tip2">
      <div class="timu-box">
        <div class="timu">
          <span class="timu-index">1.</span>
          <p class="timu-text">
            如图所示，- -定量的理想气体从体积V膨胀到体积V2分别经历的过程是:
            A-→>B等压过程;A-→C等温过程; A- >D绝热过程。其中吸热最多的过程
          </p>
        </div>

        <div class="timu-rt">
          <div class="timu-showMessage">
            <a-button size="small">适中</a-button
            ><a-button size="small">我的题库</a-button>
          </div>
          <div><a-button>选择此题</a-button></div>
        </div>
      </div>
      <div class="answer-box">
        <div class="answer-lf">
          <ul>
            <li>
              (A)是A→>B.
            </li>
            <li>(B)是A- +C.</li>
            <li>(C)是A→D.</li>
            <li>(D)既是A-→B,也是A→C ,两者一样多.</li>
          </ul>
        </div>
        <div class="answer-rt">
          <img src="@/assets/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProblemsModal from './problemsModal'
import { taskList } from '@/api/task'
export default {
  name: 'QuestionBody',
  components: {
    ProblemsModal
  },
  data () {
    return {
      list: [1],
      answerShow: true,
      problemsModalVisible: false
    }
  },
  watch: {
    list () {
      this.$nextTick().then(() => {
        this.reRender()
      })
    }
  },
  created () {
    this.getList()
  },
  mounted () {
    this.reRender()
  },
  methods: {
    getList () {
      taskList('').then(res => {
        this.list = res.data
      })
    },
    reRender () {
      window.MathJax.Hub.Queue(['Typeset', window.MathJax.Hub, document.getElementById('app')], function () {

      })
    },
    showProblems () {
      this.problemsModalVisible = true
    },
    closeProblems () {
      this.problemsModalVisible = false
    }
  }
}
</script>
<style lang="less">
.timu-showMessage {
  .ant-btn {
    border: none;
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 10px;
    transform: scale(0.8);
    -ms-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -webkit-transform: scale(0.8);
    -o-transform: scale(0.8);
  }
  .ant-btn:first-child {
    background: #e5e2f9;
    color: #6d65a8;
    margin-right: 3px;
  }
  .ant-btn:last-child {
    background: #e6f7ff;
    color: #0fb1b5;
  }
}
</style>
<style lang="less" scoped>
.questionBody {
  padding: 7px 59px 7px 0;
  .tip2 {
    border-radius: 4px;
    margin-bottom: 56px;
    .timu-box {
      display: flex;
      justify-content: space-between;
      .timu {
        padding: 8px 0 0 0;
        .timu-index {
          display: inline-block;
          width: 35px;
          text-align: center;
          float: left;
        }
        .timu-text {
          margin-left: 35px;
        }
      }
      .timu-rt {
        width: 320px;
        display: flex;
        justify-content: space-between;
        padding: 11px 15px 0 0;
      }
    }
    .answer-box {
      display: flex;
      .answer-lf {
        width: 45%;
      }
      .answer-rt {
        img {
          width: 150px;
          height: 80px;
          background-color: aqua;
        }
      }
    }
  }
  .tip2.hov {
    border: 1px solid rgba(15, 177, 181, 0.8);
  }
}
</style>
