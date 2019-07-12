<template>
    <div class="hourItem">        
        <div class="hourItem-block-1" >
           <div class="top-icon"> <img :src="item.icon" alt="" class="hourM_icon1"></div>
           <div class="hourM_content">           
                <h3 class="icon-title" v-text="item.title" ></h3>
                <p class="tips" v-html="item.content"></p>
            </div> 
        </div>
    </div>
</template> 

<script>
export default {
    name: 'serItem',
    props: ['item']   
}
</script>

<style lang="scss" scoped>
    .hourItem {                
            padding-bottom: 60px;
            color: #fff;
            width: 50%;
            .hourItem-block-1{              
                text-align: center;             
             .hourM_icon1{
                width: 407px;
                height: 304px;
             }  
             .hourM_content{
                    color: #23395E;
                    margin-top: 35px;
                    text-align: center;
                 .tips{
                        font-size: 13px;                       
                        line-height: 26px;
                        margin-top: 15px;
                 }
             }                
              
            }
        
        }
       
       
        
  
</style>


