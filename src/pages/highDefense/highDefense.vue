<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :icon="'./imgs/fangyu2.png'" :title="'高防服务器'" :content="'针对IDC机房内的互联网客户，提供全栈DDoS攻击防护服务，该服务具有网络路径最优、秒级切入切出、高达1T防护带宽和多种线路选择等优势，客户零操作即可接入服务。同时还提供定制化服务，以满足客户不同场景的业务需求。'"></single-banner>
    <idc-block :title="'推荐防护配置'" :innerStyle="{paddingBottom: '28px'}">
      <div class="memos">
        <idc-memo style="width: 23%;" v-for="(item, index) in items1" :key="index" :item="item" :showButton="true"></idc-memo>
      </div>
    </idc-block>
    <idc-block :title="'产品优势'" :bgColor="'dark'" :innerStyle="{paddingBottom: '10px', paddingTop: '30px'}">
      <idc-block-item2 v-for="(item, index) in items2" :key="index" :item="item"></idc-block-item2>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import SingleBanner from '@/components/common/SingleBanner.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcBlockItem2 from '@/components/common/IdcBlockItem2.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 
import IdcMemo from '@/components/common/IdcMemo.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem2,
    IdcFooter,
    IdcMemo
  },
  data () {
    return {
      items1: [
        {
          title: '10G防御',
          content: 'DDoS防护峰值：10Gbps <br> 线路资源：电信、联通、移动、BGP',
        },
        {
          title: '20G防御',
          content: 'DDoS防护峰值：20Gbps <br> 线路资源：电信、联通、移动、BGP'
        },
        {
          title: '50G防御',
          content: 'DDoS防护峰值：50Gbps <br> 线路资源：电信、联通、移动、BGP'
        },
        {
          title: '100G防御',
          content: 'DDoS防护峰值：100Gbps <br> 线路资源：电信、联通、移动、BGP'
        },
      ],
      items2: [
        {
          icon: './icons/sever_icon_1.png',
          title: '超强防御能力',
          content: '机房防护能力超过1T，同时配备自主研发的T级超强硬件清洗平台，从容应对超大流量攻击，确保每一台服务器安全运行。'
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '自建星级机房',
          content: 'ISO标准T3+评定的超T级机房，机房带宽储备充足，可提供G口带宽、万兆带宽资源接入，有效满足不同客户的带宽需求。'
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '自研防火墙集群',
          content: '所有机房均是采用基于通用X86平台实现，配合DPDK数据平面开发套件自主研发先进的流量清洗系统，轻松应对来自不同方向的、最大T级攻击流量，将攻击流量清洗后，正常的业务访问流量送达客户网络。下一代防火墙，从底层至页面开发都是网堤团队独立研发，可全方位按客户业务实际情况量身定制安全策略'
        },
        {
          icon: './icons/sever_icon_4.png',
          title: '数据安全性高',
          content: '提供全面的DDoS攻击防护，包括TCP Flood, UDP Flood, CC攻击等，还提供黑白名单、CC防护等策略，并可根据业务灵活定义流量报警和清洗的阈值；由机房直接接入，无需经第三方节点/软件进行异地转发，确保数据安全性、保密性。'
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
    margin-top: 58px;
    text-align: center;
  }
  .more {
    font-size: 18px;
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
