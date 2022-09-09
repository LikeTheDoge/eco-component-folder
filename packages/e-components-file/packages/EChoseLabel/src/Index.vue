<template>
    <div class="e-chose-label" @click="click" >
        <div :class="{'radio':true,'hidden':(!!hidden)||(hidden === '')}">
            <a-radio
                :checked="value"
            ></a-radio>
        </div>
        <div class="text">
            <slot :chosen="value"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "EChoseLabel",
    props: {
        chosen: {
            default: false,
        },
        
        hidden: {
            default: false,
        },
    },
    computed: {
        value() {
            if (typeof this.chosen === "function") {
                return this.chosen();
            } else {
                return this.chosen;
            }
        },
    },
    methods: {
        change(value) {
            console.log(value)
            this.$emit("update:chosen", value);
            this.$emit("change", value);
        },
        click(){
            this.change(!this.value)
        }
    },
};
</script>

<style lang="scss" scope>
.e-chose-label {
    --check-text-color: var(--action-color);
    cursor: pointer;

    display: flex;
    flex-direction: row;

    > .radio {
        flex: none;
        width: 16px;
        overflow: hidden;

        &.hidden{
            width: 0;
        }
    }

    > .text {
        flex: auto;
        padding: 0 8px;
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
