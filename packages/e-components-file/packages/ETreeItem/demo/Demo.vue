<template>
    <div>

        <ul>
            <li>通过点击 title 基础展开，收起 </li>
        </ul>

        <ETreeItem>
            <template #title>
                标题
            </template>

            <template #content>
                <div style="background:#66ccff;height:320px"></div>
            </template>
        </ETreeItem>
        
        <br/>

        <ul>
            <li>通过点击 icon 控制展开，收起</li>
        </ul>


        <ETreeItem toggle-point="icon">
            <template #title>
                标题
            </template>

            <template #content>
                <div style="background:#66ccff;height:320px"></div>
            </template>
        </ETreeItem>

        
        <br/>

        <ul>
            <li>添加 loading 效果</li>
        </ul>

        <ETreeItem
            :loaded="false"
            :onload="onload"
        >
            <template #title>
                标题
            </template>

            <template #content>
                <div style="background:#66ccff;height:320px"></div>
            </template>
        </ETreeItem>

    </div>
</template>

<script>
import { ETreeItem } from "../index";

export default {
    components: { ETreeItem },
    data() {
        return {
            chosen: false,
            hidden: false,
        };
    },
    mounted() {
        import("./i_base");
    },
    methods: {
        upload(file) {
            console.log(file);
            return new Promise((res) => {
                setTimeout(res, 3000);
            });
        },
        onload() {
            return new window.Promise((res) => setTimeout(res, 3000));
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