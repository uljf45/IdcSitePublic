<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'云主机租用'" :icon="'./imgs/yun1.png'" :content="'服务器配备纯SSD架构打造的高性能存储，旨在为用户提供优质、高效、弹性伸缩的云计算服务。云服务器采用由数据切片技术构建的三层存储 功能，切实保护客户数据的安全。同时可弹性扩展的资源用量，为客户业务在高峰期的顺畅保驾护航；灵活多样的计费方式，为客户最大程度的节省IT运营成本，提高资源的有效利用率。'"></single-banner>
    <idc-block :title="'适用场景'" :innerStyle="{paddingBottom: '68px'}">
      <cloud-table></cloud-table>
    </idc-block>
    <idc-block :title="'产品优势'" :bgColor="'dark'" :innerStyle="{paddingBottom: '10px'}">
      <idc-block-item2 v-for="(item, index) in items1" :key="index" :item="item"></idc-block-item2>
    </idc-block>
    <idc-block :title="'产品功能'" :innerStyle="{paddingTop: '10px'}">
      <idc-block-item3 v-for="(item, index) in items2" :key="index" :item="item" :fontColor="'dark'"></idc-block-item3>
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
import CloudTable from '@/components/CloudTable.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem2,
    IdcBlockItem3,
    IdcFooter,
    CloudTable
  },
  data () {
    return {
      items1: [
        {
          icon: './icons/iconc1.png',
          title: '跨机房热迁移服务',
          content: '打破地域限制，轻松应对时间空间带来的运营困扰，最快仅需5分钟，即可将数据从一机房迁移至另一机房。'
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '服务器在线push功能',
          content: '畅行云鼓励支持用户将手中闲置服务器随时转让，提高闲置资源使用率，减少资源浪费并帮用户有效降低成本。'
        },
        {
          icon: './icons/icon-store.png',
          title: '三层存储技术',
          content: '缓存、沉淀、备份层，三层分别对数据进行处理、缓存与灾备，三层间实时同步，数据安全性达到99.999%，高可用性达到99.99%。'
        },
        {
          icon: './icons/icon-20g.png',
          title: '免费20G防御',
          content: '畅行云采用自带硬防节点，最高可享免费20G防御，最高实现300G防御峰值，有效防御DDoS、CC等恶意攻击，保障用户网络安全。'
        },
        {
          icon: './icons/sever_icon_6.png',
          title: '性能可靠，确保业务稳定',
          content: '畅行云服务器在硬件级别上实现云主机之间的完全隔离；采用高端服务器进行部署，同时采用集中的管理与监控，确保业务稳定可靠。'
        },
        {
          icon: './icons/sever_icon_4.png',
          title: '灵活部署，助您一键上云',
          content: '针对不同行业、领域的企业级用户，以专业成熟的一站式行业云解决方案，帮助用户快速应用云计算。'
        },
        {
          icon: './icons/icon-hard.png',
          title: '纯SSD架构配备顶级硬件',
          content: '搭建纯SSD架构的高性能企业级云服务器，同时采用高端Intel Haswell CPU、高频DDR4内存、高速Sas3 SSD闪存作为底层硬件配置，打造快速访问体验。'
        },
        {
          icon: './icons/icon-bgp.png',
          title: '全网BGP带宽',
          content: '畅行云使用BGP线路，彻底解决南北互联互通的问题。同时自身具有容灾性，保障线路安全稳定让用户体验到最佳的访问速度。'
        },
      ],
      items2: [
        {
          icon: './icons/icon-computor.png',
          title: '计算',
          content: '北京、辽宁、江苏、香港、广东五大节点，满足用户多样化需求',
          content2: '云服务器提供丰富的实例规格(CPU、内存）和带宽、云盘选择，支持随时升级，满足各种业务需求。99.99%的高可用性，为业务的稳定运行提供保障。'
        },
        {
          icon: './icons/icon-save.png',
          title: '存储',
          content: '三层存储技术，支撑用户数据自动生成备份，切实保障用户数据安全，满足不同的I/O性能要求',
          content2: '采用畅行云三层存储革新技术，自动分层缓存、沉淀、备份数据 保障用户数据完整性、可用性，数据安全性高达99.999%'
        },
        {
          icon: './icons/icon-fangyu.png',
          title: '安全',
          content: '网络安全、服务器安全等基础防护云监控监测，实时预警',
          content2: '提供DDoS防护、DNS劫持检测、入侵检测、漏洞扫描、网页木马检测、登录防护 等安全服务。对服务器的监控报警服务，提供实时监控，性能高低一目了然'
        },
        {
          icon: './icons/icon-setting.png',
          title: '管理',
          content: '提供控制台、远程终端和 API 等多种管理方式，给您完全管理权限',
          content2: '提供web控制台、API两种方式，能够轻松的开通、关闭、重启、升级云服务器；提供CPU、内存、硬盘IO的实时监控和报表，随时了解云服务器运行情况'
        },
        {
          icon: './icons/icon-wifi.png',
          title: '网络',
          content: '全网BGP带宽，承诺独享，多运营商覆盖',
          content2: 'BGP网络支持国内所有主流运营商接入；覆盖全国的快速公网体验 提供灵活的网络规划选择'
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
#index .single-banner-inner .pic {
  display: flex;
  align-items: center;
}
</style>
