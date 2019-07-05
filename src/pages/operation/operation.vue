<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'运维服务'" :content="'我们的支持与服务可根据你当前或计划的使用案例，为您提供一套独特的工具和专业知识，一帮助你创造奇迹'"></single-banner>
    <idc-block :title="'服务特权'">
      <idc-block-item v-for="(item, index) in items2" :key="index" :item="item" :fontColor="'dark'"></idc-block-item>
    </idc-block>
    <idc-block :title="'业务范围'" :bgColor="'dark'" >
      <div class="question-item" v-for="(item, index) in items1" :class="{mt70: index > 2}" :key="index">
        <img src="../../../public/icons/zhupiaopiao-white.png" alt="">
        <p class="" v-text="item.title"></p>
      </div>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import SingleBanner from '@/components/common/SingleBanner.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcBlockItem from '@/components/common/IdcBlockItem.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem,
    IdcFooter, 
  },
  data () {
    return {
      items1: [ 
        {
          icon: './icons/zhupiaopiao-white.png', 
          title: '服务器系统维护',
        },
        {
          icon: './icons/zhupiaopiao-white.png',
          title: '服务器故障处理',
        },
        {
          icon: './icons/zhupiaopiao-white.png',
          title: '数据库调优',
        },
        {
          icon: './icons/zhupiaopiao-white.png',
          title: '服务器代维护',
        },
        {
          icon: './icons/zhupiaopiao-white.png',
          title: '安全扫面评估',
        },
        {
          icon: './icons/zhupiaopiao-white.png',
          title: '网络与系统安全策略',
        },
      ],
      items2: [
        {
          icon: './icons/youxi.png',
          title: '最快10分钟响应',
          content: '生产系统停机 < 10分钟    &nbsp;&nbsp;业务不可用 < 30分钟    &nbsp;&nbsp;业务受损 < 3小时    &nbsp;&nbsp;系统异常 < 8小时    &nbsp;&nbsp;一般性指导 < 16小时。'
        },
        {
          icon: './icons/zhibo.png',
          title: '资深技术专家支持',
          content: '案例处理人员：资深技术专家。'
        },
        {
          icon: './icons/ddos.png',
          title: '企业电话专线',
          content: '服务时间：7*24小时<br> 支持专属400电话专线快速接入，享受更专业贴心的售后工程师电话服务，同时享有接入优先级最高特权'
        },
        {
          icon: './icons/jiankong.png',
          title: 'IM企业群支持',
          content: '服务时间：7*24小时<br> 我们为客户提供7*24小时的专属企业IM群，实时快速响应客户的故障处理，业务咨询等问题'
        },
        {
          icon: './icons/ddos.png',
          title: '专属技术服务经理',
          content: '资深技术专家担任，作为我们售后技术服务统一接口，熟悉客户架构，提前预知技术风险并提供优化建议，指导或配合客户制定最佳解决方案，提供更全面，更贴身，更主动的技术服务。'
        },
        {
          icon: './icons/jiankong.png',
          title: '第三方软件支持',
          content: '帮助客户了解产品特性，指导客户更好的使用产品，结合客户需求提供适应其特点的产品架构方案咨询，提供最佳实践案例，通过架构设计优化满足弹性，高可用，高性能等客户需求。'
        },
        {
          icon: './icons/ddos.png',
          title: '重大活动保障',
          content: '在企业重大营销或技术活动期间，提供专家7*24小时全程保驾护航，提前规避风险，快速响应问题，保障企业客户活动平稳进行。'
        },
        {
          icon: './icons/jiankong.png',
          title: '产品架构咨询',
          content: '帮助客户了解产品特性，指导客户更好的使用产品，结合客户需求提供适应其特点的产品架构方案咨询，提供最佳实践案例，通过架构设计优化满足弹性，高可用，高性能等客户需求。。'
        },
      ],
    }
  }
}
</script>

<style lang='scss'>
#index {
  min-width: 1024px;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .memos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  .more-wrap {
    width: 100%;
    margin-top: 94px;
    text-align: center;
  }
  .more {
    font-size: 26px;
    color: #4FABFC;
  }
  .question-item {
    &.mt70 {
      margin-top: 70px;
    }
    flex-basis: 33.33%;
    p {
      margin-top: 30px;
      font-size: 28px;
      font-weight: bold;
      color: #e1e5e8;
      @media screen and (max-width: 1400px) {
        font-size: 26px;
      }

      @media screen and (max-width: 1260px) {
        font-size: 22px;
      }
    }
  }
}
.owl-carousel {
  min-width: 1024px;
  height: 698px;
}
.owl-dots {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
}
.owl-dot:focus {
  outline: none;
}
.banner {
  width: 100%;
  height: 698px;
  background: url('~@/assets/imgs/banner1.png') no-repeat center top;
  background-size: cover;
}
.banner1 {
  background-image: url('~@/assets/imgs/banner1.png');
}
</style>
