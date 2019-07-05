<template>
  <div id="index">
    <idc-header></idc-header>
    <single-banner :title="'私有云'" :content="'专属于你的云；10多年云技术团队全心打造，具有多地高速通道联通，99.999%的网络可用性+100%的基础架构可用性，让你的核心组件永不停步'"></single-banner>
    <idc-block :title="'推荐防护配置'" :innerStyle="{paddingBottom: '28px'}">
      <div class="memos">
        <idc-memo style="width: 23%;" v-for="(item, index) in items1" :key="index" :item="item" :showButton="true"></idc-memo>
      </div>
      <div class="more-wrap">
        <a class="more" href="javascript:void(0)">点击查看更多</a>
      </div>
    </idc-block>
    <idc-block :title="'产品优势'" :bgColor="'dark'" :innerStyle="{paddingBottom: '10px'}">
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
          title: '自主选择',
          content: '性能、容量自助规划'
        },
        {
          icon: './icons/sever_icon_2.png',
          title: '按需扩展',
          content: '具有国内外多条高速通道，与阿里云、AWS无缝对接'
        },
        {
          icon: './icons/sever_icon_3.png',
          title: '可信赖',
          content: '高可用、优秀的SLA服务、标准化处理流程、365天不间断支持团队'
        },
        {
          icon: './icons/sever_icon_4.png',
          title: '增强安全性及隐私',
          content: ''
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
