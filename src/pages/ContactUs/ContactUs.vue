<template>
  <div id="index"> 
    <idc-header></idc-header>   
     <single-banner :bgImgType="2" :icon="'./icons/lx.png'" :title="'联系我们'" :content="'我们为您提供最强大的技术，最优质的服务，最适合的解决方案。<br>详情欢迎您与我们联系洽谈！'"></single-banner>
    <idc-block :title="'联系我们'" :innerStyle="{padding: '40px 0 10px 0'}">
        <div class="us_body">
                <div class="us_concent" v-for="(item,index) in items" :key="index">
                  <span :class="`label_${index}`" >{{item.tip}}</span>
                  <span class="msg">{{item.content}}</span>
                </div>         
        </div>
        <div class="us_block">
          <span class="line"></span>
          <h3>了解更多业务详情与解决方案<br>请与我司联系</h3>
          <span class="line"></span>
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
      items:[
        {
          tip:'Tel：',
          content:'+852 53000356',         
        },
        {
          tip:'Email：',
          content:'Official@racknovae.net',  
        },{
           tip:'Skype：',
           content:'RackNovae',  
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
    .us_body{    
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .us_concent{
          color: #23395E;
          font-weight: 600;
          width: 50%;
          margin-bottom: 20px;
          .msg{
            width: 150px;
            text-align: left;
            display: inline-block;
          }
          span:first-child{
             padding-left:20px; 
             display: inline-block;
             height: 34px;
             line-height: 34px;
             padding-left: 45px;
             text-align: left;
              width: 70px;
            &.label_0{
              background: url('../../../public/icons/us_1.png') no-repeat; 
            }
             &.label_1{
              background: url('../../../public/icons/us_2.png') no-repeat; 
            }
             &.label_2{
              background: url('../../../public/icons/us_3.png') no-repeat; 
            }
          }
          
      }     
    }
    .us_block{
      display: flex;
      justify-content: center;
      width: 100%;
      margin-top: 50px;
      margin-bottom: 100px;
      color: #23395E;
      .line{
          width: 370px;
          height: 1px;
          display: inline-block;
          margin-top: 17px;
          background: #23395e;
      }
      h3{
        padding: 0 15px;
        line-height: 36px;
      }
    }
  }
  #index .single-banner-inner .pic {
  display: flex;
  align-items: center;
}

</style>
