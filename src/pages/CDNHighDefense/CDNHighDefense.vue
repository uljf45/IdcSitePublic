<template>
  <div id="index">   
    <idc-header></idc-header>
    <single-banner :icon="'./icons/cdnhf.png'" :bgImgType="2" :title="'CDN高防'" :content="'旨在为网站做加速的同时，防护DDoS，CC，Web应用攻击，恶意刷流量，恶意爬虫等危害网站的行为。它构建于CDN平台之上，在CDN边缘节点中注入了我们多年的的安全经验积累，形成一张分布式的安全加速网络。适用于所有同时要兼顾内容加速和安全的网站。'"></single-banner>    
     <idc-block :title="'网络常见问题'" :bgColor="'light'" :innerStyle="{paddingBottom: '10px'}">
      <idc-block-item2 v-for="(item, index) in items3" :key="index" :item="item" :fontColor="'dark'"></idc-block-item2>
    </idc-block>
    <template v-for="(item, index) in items2">
      <idc-block :title="item.title" :bgColor="item.bgColor" :innerStyle="{paddingBottom: '10px'}" :key="index">      
        <idc-block-item5 :item="item" mIconWidth = 'mIconWidth'></idc-block-item5>        
      </idc-block>
    </template>    
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import SingleBanner from '@/components/common/SingleBanner.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcBlockItem5 from '@/components/common/IdcBlockItem5.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 
import IdcMemo from '@/components/common/IdcMemo.vue' 
import IdcBlockItem2 from '@/components/common/IdcBlockItem2.vue'

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,   
    IdcBlockItem5,
    IdcFooter,
    IdcMemo,
    IdcBlockItem2
  },
  data () {
    return {     
      items2: [
        {
          icon: './icons/cdnHD.png',
          title:'领军客户实战场景',
          bgColor:'dark',
          obj:[
            {
              title: '兼具内容稳定加速与全方位安全防护',
              content: '在线游戏整个游戏过程依赖内容加速CDN服务，保证下载以及性能稳定；同事游戏行业频繁受到流量攻击干扰。SCDN安全加速，坚固内容加载速度提升，保证跨网、多终端流畅运营的同时，可以避免手频繁攻击导致的站点故障、玩家体验下滑、用户流失以及企业损失。'
            },
            {
              title: '高性能',
              content: '提升加载速度，解决源站和玩家的跨网、多终端访问瓶颈。'
            },
            {
              title: '弹性带宽',
              content: '基于智能调度网络，平滑解决突发情况稳定性受限问题。'
            },
            {
              title: '安全防护',
              content: '日常加速受攻击时自动防护，有效抵抗web攻击，保障源站安全。'
            },
          ]
        }        
      ],
      items3: [       
                {
                  icon: './icons/cdn1.png',
                  title: '急速',
                  content: '国内外2000+节点，主干网络专线'
                },
                {
                  icon: './icons/cdn2.png',
                  title: '智能调度',
                  content:'庞大的IP大数据库，优化访问节点；智能分析防御攻击流量'
                },
                {
                  icon: './icons/cdn3.png',
                  title: '易用',
                  content: '简化安全加速架构，一站式自助配置，接入即可享受日常加速受攻击时自动防护'
                },
                {
                  icon: './icons/cdn4.png',
                  title: '安全',
                  content: '独立的IP，全链路加密，海量DDoS清洗、抗CC攻击防护能力，全方位7*24自动化精准安全保障'
                }                
      ],
    }
  }
}
</script>

<style lang='scss' scoped>
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
