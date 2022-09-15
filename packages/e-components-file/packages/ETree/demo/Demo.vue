<template>
    <div>
        <DemoArea title="通过点击 title 基础展开，收起">
            <ETree :tree-data="treeData">
                <template #title="{node}">
                    节点：{{node.nodeId}}
                </template>
            </ETree>
        </DemoArea>

        <DemoArea title="实现懒加载">
            <ETree
                :tree-data="treeData"
                :loaded="(item)=>item.loaded"
                :onload="(item)=>load(item)"
            >
                <template #title="{node}">
                    节点：{{node.nodeId}}
                </template>
            </ETree>
        </DemoArea>

        <DemoArea title="实现 Checkbox 选择效果">
            <ETree
                :tree-data="treeData"
                :togglePoint="'icon'"
            >
                <template #title="{node}">

                    <ECheckLabel
                        :checked="checkState[node.nodeId]"
                        @change="val => check(val,node)"
                    >节点：{{node.nodeId}}</ECheckLabel>

                </template>
            </ETree>
        </DemoArea>
    </div>
</template>

<script>
import { ETree } from "../index";
import { ECheckLabel } from "../../ECheckLabel/index";

const create = (length) => {
    let children;
    let gchildren;
    if (typeof length === "number") {
        gchildren = length - 8;
        children = new Array(length % 8)
            .fill(0)
            .map(() => create(gchildren > 0 ? gchildren : undefined));
    }

    return {
        nodeId: Math.random(),
        children: children,
        loaded: false,
    };
};
export default {
    components: { ETree, ECheckLabel },
    data() {
        return {
            treeData: [create(10), create(20), create()],
            checked: [],
        };
    },
    beforeMount() {
        import("./i_base");
    },

    computed: {
        checkState() {
            const result = {};

            const check = (item) => {
                let res = null;
                if (!item.children) {
                    res = !!this.checked.find((v) => v === item.nodeId);
                } else {
                    const children = item.children.map((v) => check(v));

                    if (children.findIndex((v) => v !== false) < 0) res = false;
                    else if (children.findIndex((v) => v !== true) < 0)
                        res = true;
                    else res = "part";
                }
                result[item.nodeId] = res;
                return res;
            };

            this.treeData.forEach((v) => check(v));
            return result;
        },
    },
    methods: {
        load(item) {
            return new window.Promise((res) => {
                setTimeout(() => {
                    item.loaded = true;
                    res();
                }, 3000);
            });
        },
        ischecked(item) {
            //叶子节点
            if (!item.children) {
                return !!this.checked.find((v) => v === item.nodeId);
            } else {
                const children = item.children;
                if (children.findIndex((v) => this.ischecked(v) !== false) < 0)
                    return false;
                if (children.findIndex((v) => this.ischecked(v) !== true) < 0)
                    return true;
                return "part";
            }
        },
        check(val, item) {
            if (!item.children) {
                if (val)
                    this.checked = this.checked
                        .filter((v) => v !== item.nodeId)
                        .concat([item.nodeId]);
                else
                    this.checked = this.checked.filter(
                        (v) => v !== item.nodeId
                    );
            } else {
                item.children.forEach((item) => this.check(val, item));
            }
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