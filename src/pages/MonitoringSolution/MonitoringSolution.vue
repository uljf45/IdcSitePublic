<template>
  <div id="index">   
    <idc-header></idc-header>
    <single-banner :bgImgType="2" :title="'监控解决方案'" :content="'基于云平台对主机进行性能监测与资源控制。降低IT成本，提高运维效率。是一种可弹性的云计算服务。<br>支持流量监控，负载监控，端口监控，IO监控，PING值监测等。'"></single-banner>
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
     <idc-block :title="'产品功能'" :bgColor="'light'" :innerStyle="{paddingBottom: '10px'}">
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
          title: '快捷开通',
          content: '购买我们的云服务，可在平台上快捷开通云监控服务器。实时对主机进行功能检测，性能监控。',
        },
        {
          title: '可视化',
          content: '可视化窗口，简洁设计，让客户一目了然，可以将多个主机加入同个控制窗口，资源统一管理。'
        },
        {
          title: '告警功能',
          content: '用户可根据需要自定义设置触发规则，可统计周期，告警频率，精准告警，支持邮件，短信，告警。'
        },
        {
          title: '高效一站式',
          content: '自定义一站式监控平台，业务可视化，可实例分组触发的条件与功能'
        },
      ],
      items2: [
        {
          icon: './icons/MonitoringSolution.png',
          title:'常见应用实例',
          bgColor:'dark',
          obj:[
            {
              title: '电商行业的云监控服务',
              content: '及时监控短期业务高峰时的数据，业务快速上线，保障网络数据安全。'
            },
            {
              title: '优势',
              content: '——精准告警，及时转发。<br>应用安全，主机安全全面防护，修复各种常规漏洞，及时响应，安全无忧。<br>全天候监控，自定义触发规则，秒级响应，提供多形式，快速告警服务。<br>——告警服务器弹性伸缩<br>基于云计算，电商网站在短期出现使用高峰，系统自行扩展，并及时调整扩容告警策略'
            },
          ]
        }        
      ],
      items3: [       
                {
                  icon: './icons/sever_icon_1.png',
                  title: '云服务临控',
                  content: '可查近半年各服务资源的历史监控数据，高效运维。'
                },
                {
                  icon: './icons/sever_icon_1.png',
                  title: '快速告警',
                  content:'灵活设置自定议触发规定，支持多种告警形式，精准告警。'
                },
                {
                  icon: './icons/sever_icon_1.png',
                  title: '站点监控',
                  content: '网站进行网络监测，多节点对网站进行可访问性监控。'
                },
                {
                  icon: './icons/sever_icon_1.png',
                  title: '应用分组管理',
                  content: '不同地域，不同产品集合，根据不同应用分组统一管理，提高运级效率。'
                },
                {
                  icon: './icons/sever_icon_1.png',
                  title: '秒级监控',
                  content:'多种指标，秒级采集，感知最细腻的指标变化，快速做出反映。'
                },
                {
                  icon: './icons/sever_icon_1.png',
                  title: '图表统计',
                  content: '根据监控结果，可生成数据统计图表，但提供保存到本地功能。'
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
