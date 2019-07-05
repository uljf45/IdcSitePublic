<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'跨境专线'" :content="'连接多个国家地区，<br>专线直通网络，延迟低，安全可靠。'"></single-banner>
    <idc-block :title="'网络常见问题'" :innerStyle="{width: '92%', padding: '68px'}">
      <div class="question-item" v-for="(item, index) in items1" :class="{mt70: index > 3}" :key="index">
        <img src="../../../public/icons/zhupiaopiao.png" alt="">
        <p class="" v-text="item.title"></p>
      </div>
    </idc-block>
    <idc-block :title="'为什么选择我们'" :bgColor="'dark'" :innerStyle="{width: '100%', margin: '0', padding: '0'}">
      <div class="why-blocks">
        <div class="why-block why-block--large justify-end">
          <div class="why-block-inner">
            <span class="why-number">1</span>
            <p class="why-content why-content--pl">与东南亚各大运营商互联合作，进行不断试验，在东南亚各个国家地区建立节点直接与运营商连接不走公网</p>
          </div>
        </div>
        <div class="why-block"></div>
      </div>
      <div class="why-blocks">
        <div class="why-block bg-dark"></div>
        <div class="why-block bg-light why-block--large">
          <p class="why-content why-content-pr">各个重要地区分佈节点，网络覆盖面积广，为您一次性提供Internet,Intranet等方面的问题， 客户可以根据自己的需求情况採用主次网络建设，实行双网并行的方案，实现主次网络互相备份，避免数据被破坏丢失的隐患，造成损失</p>
          <span class="why-number why-number-mr">2</span>
        </div>
      </div>
      <div class="why-blocks">
        <div class="why-block why-block--large justify-end">
          <div class="why-block-inner">
            <span class="why-number">3</span>
            <p class="why-content why-content--pl">帮客户实现误码率低，延迟小以及可以实现语音、数据、视频、会议等信息透明的传输</p>
          </div>
        </div>
        <div class="why-block"></div>
      </div>
      <div class="why-blocks">
        <div class="why-block bg-dark"></div>
        <div class="why-block bg-light why-block--large">
          <p class="why-content why-content-pr">提供国际通信业务，整条电路资源仅为一个客户服务，整个访问全程带宽完全独享， 消除我们常见的跨地区访问会出现的那些问题</p>
          <span class="why-number why-number-mr">4</span>
        </div>
      </div>
      <div class="why-blocks" style="height: 86px;">
        <div class="why-block why-block--large justify-end">
        </div>
        <div class="why-block"></div>
      </div>
    </idc-block>
    <idc-block :title="'产品优势'" >
      <idc-block-item2 style="flex-basis: 33.33%; padding-bottom: 78px;" :contentStyle="{padding: '0 20px'}" v-for="(item, index) in items2" :key="index" :item="item" :fontColor="'dark'"></idc-block-item2>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import SingleBanner from '@/components/common/SingleBanner.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'

import IdcBlockItem2 from '@/components/common/IdcBlockItem2.vue'
import IdcBlockItem3 from '@/components/common/IdcBlockItem3.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem2,
    IdcBlockItem3,
    IdcFooter,
  },
  data () {
    return {
      items1: [
        {
          icon: './icons/zhupiaopiao.png',
          title: '网络延迟过高',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '跨国传输慢',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '网络出口拥堵',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '公网成本高昂',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '数据通讯不安全',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '硬件配置低',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '丢包率高',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '同一时间访问多，不稳定',
        },
      ],
      items2: [
        {
          icon: './icons/sever_icon_1.png',
          title: '实时恢复',
          content: '高度治愈的网络性能，确保故障的情况下业务的实施恢复',
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '独享带宽',
          content: '客户网络的相互隔离，且保证全天没有“拥堵”延迟丢包等问题',
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '专线连接',
          content: '保证网络稳定，高速，数据实时同步，提升用户体验',
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
  .question-item {
    &.mt70 {
      margin-top: 70px;
    }
    flex-basis: 25%;
    p {
      margin-top: 30px;
      font-size: 28px;
      font-weight: bold;
      @media screen and (max-width: 1400px) {
        font-size: 26px;
      }

      @media screen and (max-width: 1260px) {
        font-size: 22px;
      }
    }
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

  .why-blocks {
    flex: 0 0 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .why-block {
    flex: 0 0 21%;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #1d487b;
  }
  .why-block-inner {
    flex: 0 0 87%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .why-block--large {
    flex: 0 0 79%;
    background: #23395e;
  }
  .why-number {
    font-size: 200px;
    font-weight: bold;
    font-family: initial;
    color: #008AFF;
  }
  .why-number-mr {
    margin-right: 9%;
  }
  .why-content {
    line-height: 34px;
    padding: 0 30px;
    text-align: left;
    font-size: 24px;
    color: #fff;
  }
  .bg-light {
    background: #1d487b;
  }
  .bg-dark {
    background: #23395e;
  }
  .why-content--pl {
    padding-left: 60px;
  }
  .why-content-pr {
    padding-left: 9%;
    padding-right: 20px;
  }
  .justify-end {
    justify-content: flex-end;
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
