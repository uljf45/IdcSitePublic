<template>
    <div class="idc-block-item">
        <div class="icon">
            <img :src="item.icon" alt="">
        </div>
        <div class="icon-right">
            <p class="icon-title" :style="{color: fontColor === 'light' ? '#E1E5E8' : '#23395E'}" v-text="item.title"></p>
            <p class="icon-content" :style="{color: fontColor === 'light' ? '#E1E1E2' : '#23395E'}" v-html="item.content"></p>
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
    .idc-block-item {
            display: flex;
            flex-direction: row;
            flex-basis: 50%;
            padding: 36px 0;
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
            margin-top: 12px;
            font-size: 20px;
        }
    }
</style>


