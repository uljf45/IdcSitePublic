<template>
    <div class="idc-button" v-text="text"></div>
</template>

<script>
export default {
    name: 'IdcButton',
    props: {
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .idc-button {
        width: 160px;
        height: 48px;
        line-height: 48px;
        margin-top: 68px;
        background: #008aff;
        border-radius: 4px;
        text-align: center;
        font-size: 24px;
        color: #e1e1e2;
    }
</style>


