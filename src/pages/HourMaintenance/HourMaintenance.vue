<template>
  <div id="index">  
    <idc-header></idc-header>   
     <single-banner :bgImgType="2" :icon="'./icons/724.png'" :title="'7X24小时运维'" :content="'专业的运维团队为您的业务保驾护航，我们有高标准的NOC中心及专业的技术7X24小时不间断的为您提供运维支持。'"></single-banner>
    <idc-block :title="'7X24小时运维'" :innerStyle="{padding: '40px 58px'}">
        <div class="hourM_body">
          <img src="../../../public/icons/banner_hour.png" alt="" class="hourM_icon1">
          <img src="../../../public/icons/foot_hour.png" alt="" class="hourM_icon2">
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


export default {
  name: 'index',
  components: {
    IdcHeader,   
    IdcBlock,     
    IdcFooter,
    SingleBanner
  },
  data () {
    return {
      
    
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
      width:782px;
      height:771px;
      background:rgba(225,235,242,1);
      opacity:1;
      border-radius:10px;
      padding-top: 30px;
      margin-bottom: 40px;
      img{
        width: 666px;
        height: 443px;
        border-radius: 5px;
        &.hourM_icon2{
              height: 280px;
              border-radius: 5px;
        }
      }
    }
  }
 #index .single-banner-inner .pic {
  display: flex;
  align-items: center;
}

</style>
