<template>
    <div :class="{
            'e-tree-item':true,
            'open': open,
            'loading': loading,
        }">

        <div
            class="e-tree-item_title"
            @click="(e)=>togglePoint==='title'?toggle(e):'' "
        >

            <div
                class="toggle-icon"
                @click="(e)=>togglePoint==='icon'?toggle(e):'' "
            >
                <e-icon
                    family="i_base"
                    name="option-right"
                ></e-icon>
            </div>

            <div
                class="loading-icon"
            >
                <e-icon
                    family="i_base"
                    name="cycle"
                ></e-icon>
            </div>

            <div class="title-content">
                <slot name="title"></slot>
            </div>
        </div>

        <div
            class="e-tree-item_children"
            ref="children"
        >
            <div
                class="e-tree-item_children_inner"
                ref="inner"
            >
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ETreeItem",
    props: {
        loaded: {
            default: true,
        },
        onload: {
            default: () => () => {},
        },

        togglePoint: {
            default: "title", // 'title' 'icon'
        },
    },
    data() {
        return {
            status: "close", // 'open' 'loading'
        };
    },
    computed: {
        open() {
            return this.status === "open";
        },
        loading() {
            return this.status === "loading";
        },
    },
    watch: {
        async open(now, old) {
            if (now !== old && !!now) {
                const height = this.$refs.inner.getBoundingClientRect().height;
                this.$refs.children.style.height = height + "px";
                clearTimeout(this.$childrenChangeTimeout);
                this.$childrenChangeTimeout = setTimeout(() => {
                    this.$refs.children.style.height = "";
                }, 300);
            }

            if (now !== old && !now) {
                const height = this.$refs.inner.getBoundingClientRect().height;
                this.$refs.children.style.height = height + "px";
                await this.$nextTick();
                clearTimeout(this.$childrenChangeTimeout);
                this.$childrenChangeTimeout = setTimeout(() => {
                    this.$refs.children.style.height = "";
                });
            }
        },
    },
    methods: {
        change(value) {
            console.log(value);
            this.$emit("update:chosen", value);
            this.$emit("change", value);
        },
        toggle(i) {
            console.log(i)
            if (this.status === "loading") {
                return;
            }

            if (this.status === "close") {
                if (!this.loaded && this.onload) {
                    this.status = "loading";
                    Promise.resolve(this.onload()).then(() => {
                        this.status = "open";
                    });
                    return;
                }

                return (this.status = "open");
            }

            if (this.status === "open") {
                return (this.status = "close");
            }
        },
    },
};
</script>

<style>
.e-tree-item {
    --e_tree_item_icon-size: 20px;
}
</style>
<style lang="scss" scope>
.e-tree-item {
    * {
        transition: all 0.4s cubic-bezier(0.17, 0.67, 0.36, 0.99);
    }
    .e-tree-item_title {
        cursor: pointer;

        display: flex;
        align-items: center;

        .toggle-icon {
            flex: none;
            text-align: center;
            height: var(--e_tree_item_icon-size);
            line-height: var(--e_tree_item_icon-size);
            overflow: hidden;
        }
        .loading-icon {
            text-align: center;
            height: var(--e_tree_item_icon-size);
            line-height: var(--e_tree_item_icon-size);
            overflow: hidden;
            flex: none;
        }
        .title-content {
            flex: auto;
        }
    }
    .e-tree-item_children {
        transition: all 0.4s cubic-bezier(0.17, 0.67, 0.36, 0.99);
    }

    &:not(.loading) {
        >.e-tree-item_title .loading-icon {
            width: 0px;
        }
        >.e-tree-item_title .toggle-icon {
            width: var(--e_tree_item_icon-size);
        }
    }

    &.loading {
        >.e-tree-item_title .loading-icon {
            width: var(--e_tree_item_icon-size);
        }
        >.e-tree-item_title .toggle-icon {
            width: 0px;
        }
    }

    &:not(.open) {
        > .e-tree-item_children {
            height: 0;
            overflow: hidden;
        }
    }

    &.open {
       >.e-tree-item_title .toggle-icon {
            transform: rotate(90deg);
        }
       > .e-tree-item_children {
            height: auto;
            overflow: hidden;
        }
    }
}

.loading-icon {
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
