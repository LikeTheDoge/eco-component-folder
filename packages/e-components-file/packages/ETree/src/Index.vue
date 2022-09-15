<template>
    <div :class="{
            'e-tree':true,
        }">

        <template v-for="v in treeData">

            <div
                v-if="isLeaf(v)"
                :key="nodeId(v)"
                class="e-tree-leaf"
            >

                <slot
                    name="title"
                    :node="v"
                ></slot>
            </div>
            <ETreeItem
                v-else
                :key="nodeId(v)"
                :onload="()=>onload(v)"
                :loaded="loaded(v)"
                :togglePoint="togglePoint"
            >
                <template #title>
                    <slot
                        name="title"
                        :node="v"
                    ></slot>
                </template>

                <template #content>

                    <div class="e-tree-content">
                        <ETreeList
                            v-if="children(v).length>0"
                            :treeData="children(v)"
                            :isLeaf="isLeaf"
                            :loaded="loaded"
                            :onload="onload"
                            :children="children"
                            :nodeId="nodeId"
                            :togglePoint="togglePoint"
                            :defaultOpenDeep="defaultOpenDeep-1"
                        >
                            <template #title="{node}">
                                <slot
                                    name="title"
                                    :node="node"
                                ></slot>
                            </template>
                        </ETreeList>

                        <slot
                            v-else
                            name="blank"
                        >
                            (空白)
                        </slot>

                    </div>
                </template>
            </ETreeItem>

        </template>

    </div>
</template>

<script>
export default {
    name: "ETreeList",
    props: {
        treeData: {
            default: () => [], // 需要包含 nodeId , loaded , children 参数
        },
        nodeId: {
            default: () => (node) => node.nodeId,
        },
        isLeaf: {
            default: () => (node) => !node.children,
        },
        children: {
            default: () => (node) => node.children,
        },
        onload: {
            default: () => () => {},
        },
        loaded: {
            default: () => (node) => true,
        },
        togglePoint: {
            default: "title", // 'title' 'icon'
        },
        defaultOpenDeep: {
            default: Infinity,
        },
    },
};
</script>
<style lang="scss" scoped>
.e-tree-leaf {
    padding-left: 20px;
}
.e-tree-content {
    padding-left: 12px;
}
</style>
