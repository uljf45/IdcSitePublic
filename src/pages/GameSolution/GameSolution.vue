<template>
  <div id="index">    
    <idc-header></idc-header>
    <single-banner :bgImgType="2" :title="'游戏解决方案'" :content="'结合我们网络运维多年企业安全实战经验，深度分析游戏行业典型安全问题，为游戏行业客户打造专业，可靠的游戏安全解决方案。'"></single-banner>
    <idc-block :title="'游戏业务痛点'" :innerStyle="{paddingBottom: '28px'}">
      <div class="memos">
        <idc-memo style="width: 23%;heigth:500px" v-for="(item, index) in items1" :key="index" :item="item" :showButton="false"></idc-memo>
      </div>
      <div class="more-wrap"></div>
    </idc-block>
    <template v-for="(item, index) in items2">
      <idc-block :title="item.title" :bgColor="item.bgColor" :innerStyle="{paddingBottom: '10px'}" :key="index">      
        <idc-block-item5 :item="item" mIconWidth = '30%'></idc-block-item5>        
      </idc-block>
    </template>
     <idc-block :title="'服务优势'" :bgColor="'dark'" :innerStyle="{paddingBottom: '10px'}">
      <idc-block-item4 v-for="(item, index) in items3" :key="index" :item="item"></idc-block-item4>
    </idc-block>
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
import IdcBlockItem4 from '@/components/common/IdcBlockItem4.vue'

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,   
    IdcBlockItem5,
    IdcFooter,
    IdcMemo,
    IdcBlockItem4
  },
  data () {
    return {
      items1: [
        {
          title: 'DDOS & CC 攻击',
          content: '恶意竞争者或黑客利用大量“肉鸡”对服务器进行大规模攻击，造成游戏平以的瘫痪，让玩家无法正常登号，平台不稳定导致玩家大量流失。',
        },
        {
          title: '破解外挂严重',
          content: '个别玩家恶使用APP针对游戏平台漏洞，破解游戏客户端，利用外获取非正常游戏奖励，严得影响游戏的公平与平台运作的平衡。'
        },
        {
          title: '盗号欺诈',
          content: '黑客或恶意玩家通过自动化工具扫描，盗取游戏帐户，并通于售卖或篡改数据，严得影响正常游客的游戏体验。'
        },
        {
          title: '游戏漏洞作弊',
          content: '大量注册小号，获取新号奖励，利于模拟器，进行流量作弊，多号恶意挂机，骗取奖励，影响游戏平衡。'
        },
      ],
      items2: [
        {
          icon: './icons/solution-icon.png',
          title:'解决方案',
          bgColor:'dark',
          obj:[
            {
              title: '游戏安全防护',
              content: '公司多年企业安全实战经验，深度分析游戏行业安全漏洞，打造专业，可靠的游戏安全解决方案。'
            },
            {
              title: '分层解决方案',
              content: '针对游戏，深度分析，修补游戏漏洞。越强liOS，CC防护，24小时快速响应。实时数据监控，精准告警。'
            },
          ]
        },
        {
           icon: './icons/solution-icon1.png',
           title:'场景实例',
           bgColor:'light',
          obj:[
            {
              title: '',
              content: '多级WEB防火墙，多层防护CC，结合高防机房大流量清洗DDOS，打造高级别系统的防御体系。'
            }           
          ]
        },       
      ],
      items3: [
        {
          icon: './icons/sever_icon_1.png',
          title: '顶级防护设备',
          content: '针对游戏行业布署专业的防火墙设备，打造专业的防护策略，有效防护CC，DDOS攻击。'
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '弹性升级云',
          content:'可弹性扩展 ，灵活选择硬件需求，按需付费，降低游戏开发成本。'
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '数据安全策略',
          content: '安全云打造数据安全灾备及存储，高效读写，灵活监控，安全放心。'
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
