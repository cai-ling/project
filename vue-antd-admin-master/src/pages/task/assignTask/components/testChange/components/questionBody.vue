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
          <!-- <div><a-button>选择此题</a-button></div> -->
          <div class="questionBody-fr">
            <!-- <router-link :to="'/task/taskList/edit/' + item.questionId"> -->

            <a-button @click="showReplace">更换题目</a-button>
            <replaceModal
              @success="closeReplace"
              :replaceModalVisible="replaceModalVisible"
            ></replaceModal>
            <!-- </router-link> -->
            <!-- <router-link :to="'/task/taskList/info/' + item.questionId" > -->
            <a-button>修改题目</a-button>
            <!-- </router-link> -->
            <a-button @click="toDel(item.questionId)">删除题目</a-button>
            <a-button class="problemsBtn" @click="showProblems"
              ><a-icon type="warning" />问题反馈</a-button
            >
            <problemsModal
              @success="closeProblems"
              :problemsModalVisible="problemsModalVisible"
            ></problemsModal>
          </div>
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
      <div v-show="answerShow" class="questionBody-answer">
        <p>【答案】D</p>
        <p>
          【解析】考察xxxx知识点
        </p>
        <img src="https://imgsrc" />
        <img src="https://imgsrc" />
        <img src="https://imgsrc" />

        <p>
          【出题点】
        </p>
        <span>第一章</span>
        <span>第一章</span>
        <span>第一章</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProblemsModal from './problemsModal'
import ReplaceModal from './replaceModal'
import { taskList } from '@/api/task'
export default {
  name: 'QuestionBody',
  components: {
    ProblemsModal,
    ReplaceModal
  },
  data () {
    return {
      list: [1],
      answerShow: true,
      problemsModalVisible: false,
      replaceModalVisible: false
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
    // toDel () {
    //   this.$confirm('确定删除?', '提示', {
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     type: 'warning'
    //   }).then(() => {
    //     this.$message({
    //       type: 'success',
    //       message: '删除成功!'
    //     })
    //   })
    // },
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
    },
    showReplace () {
      this.replaceModalVisible = true
    },
    closeReplace () {
      this.replaceModalVisible = false
    }
  }
}
</script>
<style lang="less" scoped>
.timu-showMessage {
  display: flex;
  .ant-btn {
    border: none;
    padding: 2px 9px;
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
    .questionBody-fr {
      width: 262px;
      margin-top: 22px;
      .ant-btn {
        background: #ffffff;
        border: 1px solid rgba(15, 177, 181, 0.85);
        border-radius: 4px;
        margin: 11px 22px 5px 20px;
        font-size: 14px;
        color: #0fb1b5;
        text-align: left;
        line-height: 22px;
      }
      .problemsBtn {
        border: 1px solid #6d65a8;
        color: #6d65a8;
      }
    }
    .answer-box {
      display: flex;
      margin-top: -140px;
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
    .questionBody-answer {
      margin: 10px 0 10px 20px;
      img {
        padding: 10px;
      }
    }
  }
  .tip2.hov {
    border: 1px solid rgba(15, 177, 181, 0.8);
  }
}
</style>
