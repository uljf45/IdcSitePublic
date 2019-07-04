<template>
    <div class="idc-block-item2">
        <div>
            <div class="icon">
                <img :src="item.icon" alt="">
            </div>
            <p class="icon-title" :style="{color: fontColor === 'light' ? '#fff' : '#23395E'}" v-text="item.title"></p>
            <p class="icon-content" :style="{color: fontColor === 'light' ? '#fff' : '#23395E'}" v-text="item.content"></p>
        </div>
    </div>
</template> 

<script>
export default {
    name: 'IdcBlockItem',
    props: {
        item: {
            type: Object,
            default() {
                return {
                    icon: './icons/zhupiaopiao.png',
                    title: '',
                    content: '',
                }
            }
        },
        fontColor: {
            type: String,
            default: 'light'
        }
        
    }
}
</script>

<style lang="scss">
    .idc-block-item2 {
            display: flex;
            flex-direction: column;
            flex-basis: 50%;
            color: #fff;
        .icon {
            flex-basis: 140px;
            flex-shrink: 0;
            flex-grow: 0;
        }
        .icon-right {
            padding-right: 20px;
            text-align: left;
        }
        .icon-title {
            margin-top: 4px;
            font-size: 30px;
        }
        .icon-content {
            line-height: 48px;
            margin-top: 12px;
            padding: 0 30px;
            font-size: 20px;
        }
    }
</style>


