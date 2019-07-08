<template>
  <div id="index">   
    <idc-header></idc-header>
    <single-banner :bgImgType="2" :title="'金融安全解决方案'" :content="'专业提供基金、证券、保险、银行等金融业务的互联网金融安全解决方案，防DDOS攻击，多种CC攻击，抵御APP仿冒等。'"></single-banner>
    <idc-block :title="'产品优势'" :innerStyle="{paddingBottom: '28px'}">
      <div class="memos">
        <idc-memo style="width: 23%;heigth:500px" v-for="(item, index) in items1" :key="index" :item="item" :showButton="false"></idc-memo>
      </div>
      <div class="more-wrap"></div>
    </idc-block>
    <template v-for="(item, index) in items2">
      <idc-block :title="item.title" :bgColor="item.bgColor" :innerStyle="{paddingBottom: '10px'}" :key="index">      
        <idc-block-item5 :item="item" mIconWidth = 'mIconWidth'></idc-block-item5>        
      </idc-block>
    </template>
     <idc-block :title="'方案优势'" :bgColor="'light'" :innerStyle="{paddingBottom: '10px'}">
      <idc-block-item4 v-for="(item, index) in items3" :key="index" :item="item" :fontColor="'dark'"></idc-block-item4>
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
          title: '攻击防护',
          content: '金融行业是除游戏行业外受攻击最多的行业。<br> 香港公司提供高达500G  DDOS流量清洗防御及完善的CC攻击防御。',
        },
        {
          title: '防冒',
          content: '金融行来 APP仿冒，窃取信息，欺诈用户，造成混乱，跟直接经济损失。'
        },
        {
          title: '信息泄漏',
          content: '系统遭受入分，用户信息被公开，交易被泄漏等。'
        },
        {
          title: '漏洞',
          content: '系统漏洞，网络安全漏洞可能被利用。'
        },
      ],
      items2: [
        {
          icon: './icons/solution-icon2.png',
          title:'技术方案',
          bgColor:'dark',
          obj:[
            {
              title: '互联网金融安全解决方案',
              content: '香港公司 为客户构建从网络层，应用层，数据层，主机层一整套完整的完全体系统，提供一站式安全管理综合服务。<br>方案适用<br>1.独立服务器<br>2.数据云服务器<br>3.所有IDC业务'
            },
            {
              title: '方案的特性功能',
              content: '1.硬防DDOS 高达500G,多策略高效CC防护，无惧CC攻击。网络大带宽高品质线路接入，稳定快速。<br>2.应用安全，主机安全全面防护，修复各种常规漏洞，及时响应，安全无忧。<br>3.远程密钥绑定IP，限制白名单登录，把恶意入侵者挡在门外。<br>4.香港BIGNET 为客户提供一站式服务，快速高效免备案'
            },
          ]
        }        
      ],
      items3: [       
                {
                  icon: './icons/sever_icon_1.png',
                  title: '多年网络防御经验',
                  content: '我们的运维团队，是拥有8年以上CC，DDOS防御经验的工程师组成，技术成熟，应急能力强，打造最安全可靠的，攻击防御系统。'
                },
                {
                  icon: './icons/sever_icon_2.png',
                  title: '最先进设备，最牢固的框架',
                  content:'我们采用最选进的安全防火墙结合全球三大清洗中心，经两年努力不断改进，拥有最高效的金融行业解决方案系统。'
                },
                {
                  icon: './icons/sever_icon_3.png',
                  title: '多年实践验证，更有说服力',
                  content: '为国内50家以上金融行业公司提供解决方案，实践验证方案可行性及有效性。'
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
