<template>
    <div>
        <div>
            基础的选择
        </div>
        <DemoArea title="基础的选择">
            <ECheckLabel :checked.sync="checked">测试标签</ECheckLabel>
        </DemoArea>
        <DemoArea title="通过 change 事件控制">
            <ECheckLabel :checked="checked" @change="val => checked = val">测试标签</ECheckLabel>
        </DemoArea>
        <DemoArea title="显示部分选择">
            <ECheckLabel :checked="'part'">测试标签</ECheckLabel>
        </DemoArea>
        <DemoArea title="通过部分选择实现子节点选择">
            <ECheckLabel :checked="
                children.filter(v => v === true).length === 0
                    ? false : children.filter(v => v === false).length === 0
                        ? true : 'part'
            " @change="val => children = children.map(() => val)">父标签</ECheckLabel>

            <div style="padding-left:12px">

                <ECheckLabel v-for="(v, i) in children" :key="i" :checked.sync="children[i]">子标签 {{ i }}</ECheckLabel>
            </div>
        </DemoArea>

        <DemoArea title="隐藏/显示按钮">
            <button class="e-btn block" @click="() => hidden = !hidden">隐藏/显示按钮</button>
            <ECheckLabel :checked="checked" :hidden="hidden" @change="val => checked = val">测试标签</ECheckLabel>
        </DemoArea>


        <DemoArea title="自定义样式标签">
            <ECheckLabel :checked="
                children.filter(v => v === true).length === 0
                    ? false : children.filter(v => v === false).length === 0
                        ? true : 'part'
            " hidden @change="val => children = children.map(() => val)">
                <template #default="{ checked }">
                    <div :class="{ checked: checked === true, part: checked === 'part', 'custom-style': true }">
                        自定义样式标签
                    </div>
                </template>

            </ECheckLabel>

            <div style="padding-left:12px">

                <ECheckLabel v-for="(v, i) in children" :key="i" :checked.sync="children[i]">子标签 {{ i }}</ECheckLabel>
            </div>
        </DemoArea>
    </div>
</template>

<script>
import { ECheckLabel } from "../index";

export default {
    components: { ECheckLabel },
    data() {
        return {
            checked: false,
            children: [false, false, false, false],
            hidden: true,
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

    &.part {
        color: #66ccff;
        border: 1px solid #66ccff;
    }

    &.checked {
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