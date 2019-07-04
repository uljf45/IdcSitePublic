<template>
    <div class="idc-block" :class="bgColor === 'light' ? 'block-light' : 'block-dark'">
        <div class="idc-block-inner">
            <slot></slot>

        </div>
    </div>
</template>

<script>
export default {
    name: 'IdcBlock',
    props: {
        bgColor: {
            type: String,
            default: 'light'
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style lang="scss">
    .idc-block {

    }
    .idc-block-inner {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 87%;
        min-width: 1024px;
        margin: 0 auto;
        padding: 58px 0;
    }
    .block-light {
        background: #e1e5e8;
    }
    .block-dark {
        background: #233953;
    }
</style>


