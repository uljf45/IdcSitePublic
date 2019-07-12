<template>
  <div id="index">  
 
    <idc-header></idc-header>   
     <single-banner :bgImgType="2" :icon="'./icons/fw.png'" :title="'服务流程'" :content="'基于云平台对主机进行性能监测与资源控制。降低IT成本，提高运维效率。<br>是一种可弹性的云计算服务。<br>支持流量监控，负载监控，端口监控，IO监控，PING值监测等。'"></single-banner>
    <idc-block :title="'调度自动化'" :innerStyle="{padding: '40px 0 10px 0'}">
        <div class="hourM_body">
            <serItem v-for="(item,index) in items" :key="index" :item = item></serItem>            
        </div>
    </idc-block>
    <idc-footer></idc-footer>
  </div>
</template>

<script>
import IdcHeader from '@/components/common/IdcHeader.vue'
import IdcBlock from '@/components/common/IdcBlock.vue'
import IdcFooter from '@/components/common/IdcFooter.vue' 
import SingleBanner from '@/components/common/SingleBanner.vue'
import serItem from '@/components/common/serItem.vue'


export default {
  name: 'index',
  components: {
    IdcHeader,   
    IdcBlock,     
    IdcFooter,
    SingleBanner,
    serItem
  },
  data () {
    return {
      items:[
        {
          icon:'./icons/ser_3.png',
          title:'现状痛点',
          content:'手工操作，上服务器手动操作耗时耗力<br>脚本自动化，不便复用、共享、传承<br>Web自动化，容易中断，出错率高，效率低'
        },
        {
          icon:'./icons/ser_4.png',
          title:'解决方案',
          content:'自动化执行，支持海量服务器，秒级速度<br>您只需要专注写原子脚本，易于管理、复用、分享<br>把场景可以抽象成轻应用，运维人员不在时也可一键操作'
        },{
          icon:'./icons/ser_1.png',
          title:'现状痛点',
          content:'运维同学24小时在线，任何告警问题也要查看、修复'
        },
        {
          icon:'./icons/ser_2.png',
          title:'解决方案',
          content:'系统智能分析出告警问题的原因，并自动修复。<br>只有在修复直白的情况下才会通知负责人进行处理'
        }
      ]
    
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
    .hourM_body{    
      width: 100%;
      display: flex;
      flex-wrap: wrap;
    }
  }
 #index .single-banner-inner .pic {
  display: flex;
  align-items: center;
}

</style>
