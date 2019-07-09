<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'高防IP'" :content="'针对分布在全球的游戏、电商、互金、政府等多个行业客户，提供DDoS攻击监控、告警、防护服务。该服务具有隐藏源站IP、BGP多线'"></single-banner>
    <idc-block :title="'服务资费'" :innerStyle="{paddingBottom: '68px'}">
      <hdip-table></hdip-table>
    </idc-block>
    <idc-block :title="'产品优势'" :bgColor="'dark'" :innerStyle="{paddingBottom: '10px', paddingTop: '30px'}">
      <idc-block-item2 v-for="(item, index) in items1" :key="index" :item="item"></idc-block-item2>
    </idc-block>
    <idc-block :title="'产品优势'">
      <idc-block-item v-for="(item, index) in items2" :key="index" :item="item" :fontColor="'dark'"></idc-block-item>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import SingleBanner from '@/components/common/SingleBanner.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcBlockItem from '@/components/common/IdcBlockItem.vue'

import IdcBlockItem2 from '@/components/common/IdcBlockItem2.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 
import HdipTable from '@/components/HdipTable.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem,
    IdcBlockItem2,
    IdcFooter,
    HdipTable
  },
  data () {
    return {
      items1: [
        {
          icon: './icons/sever_icon_1.png',
          title: '超强防御',
          content: '全网6T+，单点2T，超强DDoS流量防御千万级QPS防护性能，无视CC攻击。'
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '多节点多线路覆盖',
          content: '全国超10+个高防节点，覆盖电信、联通、移动、BGP线路，西南地区独家高防节点。'
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '自适应安全策略',
          content: '智能学习客户业务流量模型，适配最优安全策略。'
        },
        {
          icon: './icons/sever_icon_4.png',
          title: '丰富的可视化报表',
          content: '按固定周期，手动或自动预定详细安全报告，周期结束后自动生成报告并可下载。'
        },
      ],
      items2: [
        {
          icon: './icons/youxi.png',
          title: '海量清洗能力',
          content: '横跨全球的分布式数据中心拥有超过6Tbps的防御带宽，单数据中心最大1Tbps的防护清洗能力，全面支持SYN Flood、ACK Flood、ICMP Flood、UDP Flood、NTP Flood、DNS Flood、HTTP Flood、 CC等常见攻击类型的防护。'
        },
        {
          icon: './icons/zhibo.png',
          title: 'CC安全防护',
          content: '针对连接数和特别目标进行限制，并结合CC防护系统的自动分析功能和实时交互规则，迅速识别CC攻击并进行拦截，在大规模CC攻击时可避免源站资源耗尽，并确保有效的HTTP正常连接传输。'
        },
        {
          icon: './icons/ddos.png',
          title: '全业务支持',
          content: '支持TCP、UDP、HTTP/HTTPS、Websocket等协议，适合金融、电商、 游戏、门户、媒体等各类业务场景；支持云内/云外客户。'
        },
        {
          icon: './icons/jiankong.png',
          title: '隐藏源站',
          content: '采用替身防护模式，接入防护后，解析您网站将返回防护节点IP，您的源站IP将被隐藏，彻底阻断所有攻击，确保源站安全。'
        },
        {
          icon: './icons/ddos.png',
          title: '弹性防护',
          content: '高防IP支持弹性调整，可在管理控制台进行自助升级，升级秒级生效，且无需新增任何物理设备，也无需做任何业务调整，整个过程服务无中断。'
        },
        {
          icon: './icons/jiankong.png',
          title: '高可用性',
          content: '自动检测和匹配攻击策略，实现实时防护，清洗服务可用性高达99.9%；业务流量采用集群分发，性能高，时延低，稳定性佳。'
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
