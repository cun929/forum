<template>
    <div class="popup">
        <div class="body">
            <div class="hd">
                <div>登录</div>
                <div>x</div>
            </div>
            <div class="inp">
                <slot name="inp"></slot>
            </div>
            <div class="btn">
                <slot name="btn"></slot>
            </div>
        </div>
    </div>
</template>
<style lang="less">
@import "./index.less";
</style>