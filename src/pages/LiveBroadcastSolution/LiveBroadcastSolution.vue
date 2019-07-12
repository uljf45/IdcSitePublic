<template>
  <div id="index">   
    <idc-header></idc-header>
    <single-banner :icon="'./icons/zz10.png'"  :bgImgType="2" :title="'直播解决方案'" :content="'在线视频直播是目前互联网较为常见的网络应用，包括在线娱乐平台、在线电子竞技直播、在线直播课堂、视频会议、在线电视直播、体育赛事直播等应用。而如今，随着游戏行业的火爆，电子竞技直播业务需求随之而来，特别是海外直播用户群体庞大，这就要求了设备在计算能力，网络方面必须具备一些特殊的要求。'"></single-banner>
    
    <template v-for="(item, index) in items2">
      <idc-block :title="item.title" :bgColor="item.bgColor" :innerStyle="{paddingBottom: '10px'}" :key="index">      
        <idc-block-item5 :item="item" mIconWidth = 'LiveBroadcastSolution'></idc-block-item5>        
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
// import IdcMemo from '@/components/common/IdcMemo.vue' 
// import IdcBlockItem4 from '@/components/common/IdcBlockItem4.vue'

export default {
  name: 'index',
  components: {
    IdcHeader,
    SingleBanner,
    IdcBlock,   
    IdcBlockItem5,
    IdcFooter,
    // IdcMemo,
    // IdcBlockItem4
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
          icon: '',
          title:'现状分析',
          bgColor:'light',
          obj:[
            {
              title: '',
              content: '在线视频直播是目前互联网较为常见的网络应用，包括在线娱乐平台、在线电子竞技直播、在线直播课堂、视频会议、在线电视直播、体育赛事直播等应用。而如今，随着游戏行业的火爆，电子竞技直播业务需求随之而来，特别是海外直播用户群体庞大，这就要求了设备在计算能力，网络方面必须具备一些特殊的要求。'
            }           
          ]
        },
        {
          icon: '',
          title:'行业需求',
          bgColor:'dark',
          obj:[
            {
              title: '要求延时在秒级以内',
              content: '竞技直播要求上传、处理、播放、推流近乎同时完成，否则将严重影响用户观看体验。尤其是游戏直播场景由于用户互动性强， 往往需要秒级以内的系统延迟。'
            },
            {
              title: '要求视频顺畅、清晰度高',
              content: '观看清晰是视频业务的刚性需求，需要直播服务器网络覆盖力强，稳定性高，能应对一切突发流量的冲击。'
            },
            {
              title: '适用于多样的网络环境',
              content: '复杂的国内网络环境，而目前用户的观看体验受限于跨网运营商网络的互通能力、网络上传速度、不稳定的移动网络等，所以需要通过良好的互联网基础设施来改善用户的体验。'
            },
             {
              title: '互联网国际化',
              content: '互联网国际化业务需求是海外。'
            }
          ]
        },
        {
          icon: '',
          title:'解决方案',
          bgColor:'light',
          obj:[
            {
              title: '低延时',
              content: '转码服务器之间全程专线传输，不受制于大网环境的影响，保证延时最低。同时，就近部署转码服务器，将最后一公里的公网影响降到最低。'
            },
            {
              title: '高清晰度、低卡顿率',
              content: '使用覆盖率广，出口量大的BGP带宽，配合高速的SSD磁盘等优质基础设施，保证用户观看时丢帧率低，确保业务的稳定。'
            },
            {
              title: '满足各类复杂的网络用户',
              content: '云服务器的BGP带宽经过多年的资源沉淀，不仅与中国电信，中国联通，中国移动，中国铁通，hkix，NTT等国内外运营商建立了BGP链路，还与深圳天威，广州恒汇，长宽，广东有线等一些小型ISP运营商建立BGP链路，满足各类用户复杂的网络需求。'
            },
             {
              title: '国际到国内之间的直播流转化',
              content: '云服务器可以实现国际带宽业务，满足海外竞技赛事直播流推送，在国内服务上进行转码播放，实现国内用户高清流畅看国外竞技赛事直播。'
            }
          ]
        },
        {
          topIcon: './imgs/zhibo-large.jpg',
          title:'云架构部署',
          bgColor:'dark',
          obj:[
            {
              title: '云架构部署描述',
              content: '如上图所示，海外竞技直播解决方案可分为视频流、控制流两大部分。实时流媒体转发集群、HTTP在线实时流媒体服务集群属于视频流部分，负责视频内容的处理、推送，这一部分带宽、服务器资源消耗最大；web视频平台、内容存储服务器属于控制流部分，负责决定将视频推送给哪些用户，带宽、服务器资源消耗较小。'
            },
            {
              title: '',
              content: '1、 直播室的图像是通过摄像设备转化为视频流通过公网实时将流媒体推送到HK云节点服务器的海外国际线路上，实时流媒体转发服务器通过FMS将视频直播流转发到云国内节点。在此，因为HK云节点和云国内节点之间的传输是通过专线实现，这样可以绕过国家FW，满足流媒体的低延时，高转发率需求。'
            },
            {
              title: '',
              content: '2、 实时视频直播流到达云国内节点后，通过HLS切片或者FLV转码等技术将视频流进行处理，通过云各国内节点之间专线传输，将视频流推送到各个边缘节点的web视频平台。'
            },
             {
              title: '',
              content: '3、 各个web视频平台选用多线BGP线路，对国内网络提供优质的网络覆盖，改善用户观看体验。'
            },
            {
              title: '',
              content: '4、 在每个web视频平台的节点上，可以将直播视频进行存储，为用户提供点播服务。3、 各个web视频平台选用多线BGP线路，对国内网络提供优质的网络覆盖，改善用户观看体验。'
            },
            {
              title: '',
              content: '5、 在每个web视频平台的节点上，可以将直播视频进行存储，为用户提供点播服务。'
            }
          ]
        },   
        {
          icon: '',
          title:'解决方案的特点和优势',
          bgColor:'light',
          obj:[
            {
              title: '用户自身资源池',
              content: '弹性调整，按天计费，按需操作，实现真正意义上的弹性。'
            },
            {
              title: '增加的用户体验',
              content: '优质的多线BGP带宽与国际出口资源的结合，可以很好解决直播室到云HK节点的线路问题以及保证国内用户到视频平台线路的稳定性。'
            },
            {
              title: '丰富专线资源',
              content: '云服务器的BGP带宽经过多年的资源沉淀，不仅与中国电信，中国联通，中国移动，中国铁通，hkix，NTT等国内外运营商建立了BGP链路，还与深圳天威，广州恒汇，长宽，广东有线等一些小型ISP运营商建立BGP链路，满足各类用户复杂的网络需求。'
            }            
          ]
        },             
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
