<template>
    <div>
        <DemoArea title="基础的选择">
            <EChoseLabel :chosen.sync="chosen">测试标签</EChoseLabel>
        </DemoArea>

        <DemoArea title="通过 change 事件控制">
            <EChoseLabel :chosen="chosen" @change="val => chosen = val">测试标签</EChoseLabel>
        </DemoArea>
        
        <DemoArea title="隐藏/显示 radio">
            <button class="e-btn block" @click="() => hidden = !hidden">隐藏/显示 radio</button>
            <EChoseLabel :chosen="chosen" :hidden="hidden" @change="val => chosen = val">测试标签</EChoseLabel>
        </DemoArea>

        <DemoArea title="自定义选择样式">
            <EChoseLabel :chosen="chosen" hidden @change="val => chosen = val">
                <template #default="{ chosen }">
                    <div :class="{ chosen, 'custom-style': true }">
                        自定义选择样式标签
                    </div>
                </template>
            </EChoseLabel>
        </DemoArea>
    </div>


</template>

<script>
import { EChoseLabel } from "../index";

export default {
    components: { EChoseLabel },
    data() {
        return {
            chosen: false,
            hidden: false,
        };
    },
    methods: {
        upload(file) {
            console.log(file);
            return new Promise((res) => {
                setTimeout(res, 3000);
            });
        },
    },
};
</script>

<style scoped lang="scss">
.custom-style {
    display: inline-block;
    padding: 4px 8px;
    /* margin: 0 -8px; */

    border: 1px solid var(--action-color);
    color: var(--action-color);
    transition: all 0.3s ease-out;

    &.chosen {
        background-color: var(--action-color);
        color: #fff;
    }
}

.loading-icon {
    -webkit-animation: spin 1s linear 1s 5 alternate;
    animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(-360deg);
    }
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(-360deg);
    }
}
</style>