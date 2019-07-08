<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'SSL证书'" :content="'SSL证书提供了一种在互联网上身份验证的方式，是用来标识和证明双方身份的数字信息文件。使用SSL证书的网站，可以保证用户和服务器间信息交换的保密性具有不可窃听、不可更改、不可否认、不可冒充的功能。并对云上证书进行统一生命周期管理，简化证书部署，一键分发到云上产品。'"></single-banner>
    <idc-block :title="'证书品牌'" :innerStyle="{width: '92%', padding: '30px 0', justifyContent: 'space-around' }">
      <div v-for="(item, index) in items3" :key="index" class="certificate-item">
        <div class="certificate-item-pic">
          <img :src="item.icon" alt="">
        </div>
        <p class="certificate-item-content" v-text="item.content"></p>
      </div>
    </idc-block>
    <idc-block :title="'特点与优势'" :bgColor="'dark'" :innerStyle="{width: '100%', margin: '0', paddingBottom: 0 }">
      <idc-block-item2 :contentStyle="{padding: '0 20px'}" v-for="(item, index) in items2" :key="index" :item="item"></idc-block-item2>
    </idc-block>
    <idc-block :title="'推荐套餐'">
      <div class="memos">
        <ssl-memo style="width: 23%;" v-for="(item, index) in items4" :key="index" :item="item" :showButton="true"></ssl-memo>
      </div> 
    </idc-block>
    <idc-block :title="'证书类型'" :bgColor="'dark'" >
      <ssl-table></ssl-table>
    </idc-block>
    <idc-block :title="'购买流程'" :innerStyle="{width: '92%', padding: '68px 0 148px'}">
      <div class="question-item" v-for="(item, index) in items1" :class="{mt70: index > 3}" :key="index">
        <img src="../../../public/icons/zhupiaopiao.png" alt="">
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

import IdcBlockItem2 from '@/components/common/IdcBlockItem2.vue'
// import IdcBlockItem3 from '@/components/common/IdcBlockItem3.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 
import SslMemo from '@/components/SslMemo.vue' 
import SslTable from '@/components/SslTable.vue' 

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,
    IdcBlockItem2,
    // IdcBlockItem3,
    IdcFooter,
    SslMemo,
    SslTable
  }, 
  data () {
    return {
      items1: [
        {
          icon: './icons/zhupiaopiao.png',
          title: '1 选择产品',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '2 提交CSR信息',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '3 验证域名所有权',
        },
        {
          icon: './icons/zhupiaopiao.png',
          title: '4 签发证书',
        },
      ],
      items2: [
        {
          icon: './icons/sever_icon_1.png',
          title: '顶级CA机构',
          content: 'SSL证书由国际顶级CA机构授权颁发，安全有保障',
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '数据加密传输',
          content: '加密保护浏览器/APP与服务器之间的数据传输安全',
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '100%兼容性',
          content: 'Symantec根证书签发，支持所有浏览器和移动设备',
        },
        {
          icon: './icons/sever_icon_4.png',
          title: '提升搜索排名',
          content: '采用 HTTPS 有利于提升网站的搜索排名及站点可信度',
        },
      ],
      items3: [
        {
          icon: './icons/brand_01_hover.png',
          content: 'Symantec是全球最大的数字证书认证机构，为网站、电子商务及通讯提供安全保护。Symantec通过强大的加密功能和严格的身份认证，保护着全世界超过50万台服务器的安全。'
        },
        {
          icon: './icons/brand_02_hover.png',
          content: 'GeoTrust是全球第二大数字证书颁发机构，也是身份认证和信任认证领域的领导者，该公司各种先进的技术使得任何大小的机构和公司都能安全、低成本地部署SSL数字证书和实现各种身份认证。'
        },
        {
          icon: './icons/brand_03_hover.png',
          content: 'Thawte是第一个在美国以外的SSL证书颁发机构，目前全球SSL市场中占有40%的份额。迄今为止，Thawte证书发行量超过94.5万，服务于全球240多个国家。'
        },
        {
          icon: './icons/brand_04_hover.png',
          content: 'RapidSSL是GeoTrust公司的一个向提供简易版SSL证书的品牌，保护网站信息不会被非法窃取和非法篡改，为不涉及到银行卡信息的网站提供一个更低价格的服务器SSL数字证书。'
        },
      ],
      items4: [
        {
          title: '体验型DV SSL',
          enTitle: 'Symantec Basic DV',
          content: '支持域名数： 单个 <br>支持通配符：否<br> 加密强度：最高支持256位自适应加密<br> 支持苹果ATS：是<br> 包含企业信息：—<br> 绿色地址栏： —',
          priceMe: '￥49.00元/年',
          priceMarket: '市场价：1000元/年',
        },
        {
          title: '普通型DV SSL',
          enTitle: 'RapidSSL',
          content: '支持域名数： 单个 <br>支持通配符：是<br> 加密强度：最高支持256位自适应加密<br> 支持苹果ATS：是<br> 包含企业信息：—<br> 绿色地址栏： —',
          priceMe: '￥200.00元/年',
          priceMarket: '市场价：350元/年',
        },
        {
          title: '普通型DV SSL',
          enTitle: 'RapidSSL Wildcard',
          content: '支持域名数： 无限个二级子域名<br> 支持通配符：是<br> 加密强度：最高支持256位自适应加密<br> 支持苹果ATS：是<br> 包含企业信息：—<br> 绿色地址栏： —',
          priceMe: '￥1200.00元/年',
          priceMarket: '市场价：2000元/年',
        },
        {
          title: '高级版EV SSL',
          enTitle: 'GeoTrust True BusinessID with EV',
          content: '支持域名数： 单个，可选多个<br>支持通配符：否<br>加密强度：最高支持256位自适应加密<br>支持苹果ATS：是<br>包含企业信息：是<br>绿色地址栏： 是',
          priceMe: '￥3300.00元/年',
          priceMarket: '市场价：4800元/年',
        },
      ]
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

  .certificate-item {
    flex-basis: 23.4%;
    padding-bottom: 56px;
    border: 1px solid #707070;
    background: #fff;
  }

  .certificate-item-pic {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 260px;
    img {
      width: 60%;
    }
  }
  .certificate-item-content {
    line-height: 26px;
    padding: 0 16px;
    text-align: left;
    font-size: 16px;
    color: #23395E;
  }

  .memos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
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
