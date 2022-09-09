<template>
    <label class="e-check-label">
        <div :class="{'checkbox':true,'hidden':(!!hidden)||(hidden === '')}">
            <a-checkbox
                :checked="isChecked"
                :indeterminate="indeterminate"
                @change="change"
            ></a-checkbox>
        </div>
        <div class="text">
            <slot :checked="value"></slot>
        </div>
    </label>
</template>

<script>
export default {
    name: "ECheckLabel",
    props: {
        checked: {
            default: false,
        },
        hidden: {
            default: false,
        },
    },
    computed: {
        value() {
            if (typeof this.checked === "function") {
                return this.checked();
            } else {
                return this.checked;
            }
        },
        isChecked() {
            return this.value === true ? true : false;
        },
        indeterminate() {
            return this.value === "part";
        },
    },
    methods: {
        change(e) {
            const value = e.target.checked;
            this.$emit("update:checked", value);
            this.$emit("change", value);
        },
    },
};
</script>

<style lang="scss" scope>
.e-check-label {
    --check-text-color: var(--action-color);
    cursor: pointer;

    display: flex;
    flex-direction: row;

    > .checkbox {
        flex: none;
        width: 16px;
        overflow: hidden;

        &.hidden {
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
