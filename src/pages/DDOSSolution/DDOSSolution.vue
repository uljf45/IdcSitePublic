<template>
  <div id="index">     
    <idc-header></idc-header>
    <single-banner :icon="'./icons/d.png'" :bgImgType="2" :title="'DDOS解决方案'" :content="'DDOS 高防解决方案针对DDOS攻击,香港公司提供香港高防服务器租用。客户可以把网站域名解析到服务高防IP，有攻击时，高防线路会对攻击的流量进行清洗过滤，把真正的有效流量导到服务器。让攻击不影响服务器正常使用。'"></single-banner>
    <idc-block :title="'产品优势'" :innerStyle="{paddingBottom: '28px'}">
      <div class="memos">
        <idc-memo style="width: 23%;heigth:500px" v-for="(item, index) in items1" :key="index" :item="item" :showButton="false"></idc-memo>
      </div>
      <div class="more-wrap"></div>
    </idc-block>
    <template v-for="(item, index) in items2">
      <idc-block :title="item.title" :bgColor="item.bgColor" :innerStyle="{paddingBottom: '10px'}" :key="index">      
        <idc-block-item5 :item="item" v-if="index == 0"></idc-block-item5>  
        <ddos-block-item :item="item" v-if="index == 1"></ddos-block-item>       
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
// import IdcBlockItem4 from '@/components/common/IdcBlockItem4.vue'
import DdosBlockItem from '@/components/common/DdosBlockItem.vue'

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock, 
    IdcBlockItem5,
    IdcFooter,
    IdcMemo,
    // IdcBlockItem4,
    DdosBlockItem
  },
  data () {
    return {
      items1: [
        {
          title: '防御弹性扩展',
          content: '客户可根据自己的业务需要，随时增减防护值，按需求付费。帮助客户降低成本。',
        },
        {
          title: '秒封秒解',
          content: '当攻击超出防御时，IP被封，可以增加防御值后，解除封停状态，当攻击停了，也会解封。'
        },
        {
          title: '攻击流量统计',
          content: '提供攻击流量统计图，客户可以清楚知道被攻击的流量有多大，防御是否有效。'
        },
        {
          title: '免费超量硬防',
          content: '香港高防为客户提供三次免费超流量硬扛，流量攻击大于预期值有三次免费加防防护，给客户升级准备时间。'
        },
      ],
      items2: [
        {
          icon: './icons/solution-icon.png',
          title:'应用场景',
          bgColor:'dark',
          obj:[
            {
              title: 'DDOS高防应用',
              content: 'DDOS攻击是最常见的网络攻击之一，是一种无法通过策略，软件解决的攻击类型。防DDOS，我们需要实打实的大宽带对攻击流量进行清洗。'
            },
            {
              title: 'T级大流量防御，秒级切换，智能清洗',
              content: '香港高防数中心，最高防护可达T级以上，攻击时智能切换到高防线路，硬扛黑客DDOS攻击。保证客户业务正常运作。并同时智能识别，过滤攻击流量，把清洗完的干净流量回香港本地服务器。'
            },
          ]
        },
         {          
          title:'香港本地高防服务器常用配置',
          bgColor:'light',
          subTitle:'高达1000G硬防',
          subTitle1:'DDOS防护',
          des:['全球三大清洗中心打造T级防护','香港本土流洗高达100G，延迟低至15MS'],
          obj:[
            {
              icon: './icons/d1.png',            
              content: '智能清洗，稳定高效'
            },
            {
              icon: './icons/d2.png',             
              content: '支持弹性扩容，防御可先低后高'
            },{
              icon: './icons/d3.png',             
              content: '支持秒解，快速扩容'
            },
            {
              icon: './icons/sever_icon_1.png',             
              content: '配合全局CC防护，安全无忧'
            },
          ]
        }              
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

<style lang='scss' >
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
