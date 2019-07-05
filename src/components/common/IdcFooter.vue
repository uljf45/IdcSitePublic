<template>
    <footer id="footer">
        <div class="footer-inner">
            <section class="footer-top">
                <div class="footer-kefu">
                    <p class="footer-kefu-title">客服热线</p>
                    <p class="footer-kefu-phone">400-008-0908</p>
                    <div class="footer-kefu-type">
                        <div class="footer-yellowbox">企业微信</div>
                        <div class="footer-time">09:00～18:00</div>
                    </div>
                    <div class="footer-kefu-type">
                        <div class="footer-yellowbox">企业Skype</div>
                        <div class="footer-time">09:00～21:00</div>
                    </div>
                </div>
                <nav class="footer-nav">
                    <div class="nav-item nav-item--first">
                        <span>产品</span>
                        <ul class="subnav">
                            <li><a href="./index.html">私有云</a><a href="./cloud.html">云主机租用</a></li>
                            <li><a href="./highDefense.html">高防服务器</a><a href="./specialLine.html">跨境专线</a></li>
                            <li><a href="./highDefenseIP.html">高防IP</a><a href="./ssl.html">SSL证书</a></li>
                            <li><a href="./index.html">CDN高防</a><a href="./operation.html">运维服务</a></li>
                        </ul>
                    </div>
                    <div class="nav-item nav-item--second">
                        <span>解决方案</span>
                        <ul class="subnav">
                            <li><a href="./index.html">游戏解决方案</a></li>
                            <li><a href="./index.html">直播解决方案</a></li>
                            <li><a href="./index.html">DDOS解决方案</a></li>
                            <li><a href="./index.html">监控解决方案</a></li>
                            <li><a href="./index.html">金融安全解决方案</a></li>
                        </ul>
                    </div>
                    <div class="nav-item">
                        <span>支持与服务</span>
                        <ul class="subnav">
                            <li><a href="./index.html">服务流程</a></li>
                            <li><a href="./index.html">7X24小时运维</a></li>
                        </ul>
                    </div>
                    <div class="nav-item">
                        <span>合作与共赢</span>
                    </div>
                    <div class="nav-item">
                        <span>关于我们</span>
                        <ul class="subnav">
                            <li><a href="./index.html">公司简介</a></li>
                            <li><a href="./index.html">联系我们</a></li>
                        </ul>
                    </div>

                </nav>
            </section>
            <section class="footer-links">
                <span>友情链接：</span>
                <ul>
                    <li>唯一网络 易名科技 Linux面板 香港高防服务器 爱名网 美橙互联 DDOS防护 云服务器 3D模型 A5交易 爱站网 域名购买 域名城 时代互联 网站测速 疯猫网络 玉米网 中介网 3DM单机游戏 域名抢注 安全宝 聚名网 百度安全指数 安全狗 云指 国内200+城市线路VPN 更多</li>
                </ul>
            </section>
            <section class="footer-copyright">
                <p>Copyright©2012-2018 版权归属 香港亚特网络科技有限公司 闽ICP备11028257号</p>
            </section>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'IdcFooter',
}
</script>

<style lang="scss">
#footer {
    background: #000;
    color: #7C7C7C;
    a {
        color: #7C7C7C;
    }
    .footer-inner {
        width: 84%;
        min-width: 1024px;
        max-width: 1620px;
        margin: 0 auto;
        padding-left: 10px;
        background: #000;
    }
    .footer-top {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 62px 0 30px;
    }
    .footer-kefu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 340px;
        @media screen and (max-width: 1400px) {
            width: 260px
        }
        height: 218px;
        border-right: 1px solid #707070;
    }
    .footer-kefu-title {
        text-align: left;
        font-size: 30px;
        color: #937722;
    }
    .footer-kefu-type {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
    }
    .footer-kefu-phone {
        line-height: 52px;
        text-align: left;
        font-size: 38px;
        color: #F3D660;
    }
    .footer-yellowbox {
        width: 128px;
        height: 32px;
        line-height: 32px;
        margin-right: 14px;
        border-radius: 16px;
        font-size: 18px;
        background: #F3D660;
        color: #000;
    }
    .footer-time {
        font-size: 18px;

    }
    .footer-nav {
        display: flex;
        flex-direction: row;
        flex: 1;
        justify-content: space-around;
        padding-left: 10px;
        @media screen and (min-width: 1400px) {
            padding-left: 60px;
        }
    }
    .nav-item {
        flex: 1  1  120px;
        text-align: left;
        &--first {
            flex: 1 1 240px;
        }
        &--second {
            flex: 1 1 170px;
        }
        span {
            font-size: 22px;
            color: #EAEAEA;
        }
        .subnav {
            margin-top: 10px;
            li {
                display: flex;
                justify-content: space-between;
                height: 44px;
                line-height: 44px;
            }
            a {
                flex: 1;
                font-size: 18px;
            }
        }
    }
    .footer-links {
        display: flex;
        flex-direction: row;
        padding: 30px 40px;
        border-top: 1px solid #707070;
        border-bottom: 1px solid #707070;
        span {
            display: block;
            width: 160px;
            line-height: 34px;
            font-size: 18px;
        }
        ul {
        }
        li {
            line-height: 34px;
            text-align: left;
            font-size: 18px;
        }
    }
    .footer-copyright {
        height: 78px;
        line-height: 78px;
    }
}
</style>


