<template>
    <div class="single-banner">
        <div class="single-banner-inner">
            <section class="txt">
                <h1 v-text="title"></h1>
                <p v-text="content"></p>
                <div class="ask">立即咨询</div>
            </section>
            <section class="pic">
                <img src="../../../public/imgs/fangyu-large.png" alt="">
            </section> 
        </div>
    </div>
</template>
<script>
export default {
    name: 'SingleBanner',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss">
    .single-banner {
        min-width: 1024px;
        height: 698px;
        background: url('../../../public/imgs/single-banner.png') no-repeat center top;
        color: #e1e1e2;
    }

    .single-banner-inner {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 64%;
        min-width: 1024px;
        margin: 0 auto;
        padding-top: 140px;  
        .txt {
            flex: 0 1 660px;
        }
        .pic {
            flex: 0 1 280px;
        }
        h1 {
            text-align: left;
            font-size: 76px;
        }
        p {
            line-height: 42px;
            margin-top: 10px;
            text-align: left;
            font-size: 22px;
        }
        .ask {
            width: 160px;
            height: 48px;
            line-height: 48px;
            margin-top: 68px;
            background: #008aff;
            border-radius: 4px;
            text-align: center;
            font-size: 24px;
        }

    }

</style>