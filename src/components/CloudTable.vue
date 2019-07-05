<template>
    <div class="cloud-table">
        <div class="tabs">
            <div class="tab">入门型</div>
            <div class="tab">进阶型</div>
            <div class="tab">专业型</div>
            <div class="tab active">理想型</div>
        </div>
        <div class="content">
            <p class="p1">适用对象：社区SNS/论坛/ERP/OACRM、网络游戏等其他高端服务</p>
            <p class="p2">
                适合对计算性能要求较高的应用场景，如企业运营活动、批量处理、分布式分析、游戏app等。<br>
                网络游戏在近年来发展迅速，除了传统网络终端之外，网页游戏、手机游戏等发展迅速，也让整个游戏市场愈发壮大。<br>
                按需付费的方式节省了大量现金流和运营费用。
            </p>
            <div class="recommend">
                <div class="recommend-left">
                    <span class="recommend-title">推荐配置</span>
                    <div class="circles">
                        <div class="circle">
                            <p class="circle-p1">16核</p>
                            <p class="circle-p2">CPU</p>
                        </div>
                        <div class="circle">
                            <p class="circle-p1">16G</p>
                            <p class="circle-p2">内存</p>
                        </div>
                        <div class="circle">
                            <p class="circle-p1">5M</p>
                            <p class="circle-p2">宽带</p>
                        </div>
                        <div class="circle">
                            <p class="circle-p1">5/20G</p>
                            <p class="circle-p2">默认防护</p>
                        </div>
                        <div class="circle">
                            <p class="circle-p1">I/O优化<br>实例</p>
                            <p class="circle-p2">免费开启</p>
                        </div>
                    </div>
                </div>
                <div class="btn-pay">立即购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CloudTable',
}
</script>

<style lang="scss">
    .cloud-table {
        width: 100%;
        display: flex;
        flex-direction: row;
        border: 1px solid #eee;
        .tabs {
            flex: 0 0 14%;
        }
        .tab {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 108px;
            background: #f8f8f8;
            border: 1px solid #f1f1f1;
            font-size: 22px;
            color: #424242;
        }
        .content {
            position: relative;
            flex: 1;
            background: #fff;
            padding: 0 4%;
            .p1 {
                margin-top: 40px;
                text-align: left;
                font-size: 22px;
                color: #424242;
            }
            .p2 {
                line-height: 30px;
                margin-top: 30px;
                text-align: left;
                color: #424242;
                font-size: 18px;
            }
        }
        .recommend {
            position: absolute;
            bottom: 40px;
            left: 4%;
            width: 92%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-top: 40px;
            border-top: 1px dashed #707070;
        }
        .recommend-left {
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .recommend-title {
            color: #424242;
            font-size: 22px;
        }
        .circles {
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            @media screen and (min-width: 1400px) {
                flex: 0 0 766px;
            }
        }
        .circle {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 0 0 106px;
            height: 106px;
            border: 1px solid #707070;
            border-radius: 50%;
        }
        .circle-p1 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 46px;
            font-size: 20px;
            color: #008aff;
        }
        .circle-p2 {
            margin-top: 4px;
            font-size: 14px;
            color: #989898;
        }
        .btn-pay {
            width: 130px;
            height: 38px;
            line-height: 38px;
            background-color: #5189ed;
            font-size: 18px;
            color: #fff;
        }
    }
</style>


