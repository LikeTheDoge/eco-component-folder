<template>
    <label :class="{ 'e-btn': true,'block':link === undefined , 'link':link !== undefined, 'e-upload-btn': true, 'disabled': (loading)||(disabled !== undefined) }">
        <slot
            v-if="showIcon"
            :loading="calcuLoading"
            name="icon"
        >
            <e-icon
                v-if="!calcuLoading"
                family="i_base"
                name="upload"
            ></e-icon>
            <e-icon
                v-else
                class="loading-icon"
                family="i_base"
                name="cycle"
            ></e-icon>
        </slot>

        <slot
            name="text"
            :loading="calcuLoading"
        >
            {{ calcuLoading ? loadingText : text }}
        </slot>
        <input
            :disabled="(loading)||(disabled !== undefined)"
            type="file"
            @change="fileChange"
        >
    </label>
</template>

<script>
export default {
    name: "EUploadBtn",
    props: {
        text: {
            default: "上传文件",
        },
        loadingText: {
            default: "上传中...",
        },
        showIcon: {
            default: true,
        },
        disabled: {
            default: undefined,
        },
        block: {
            default: true,
        },
        link: {
            default: undefined,
        },
        loading: {
            default: undefined,
        },
        uploadFile: {
            default: () => () =>
                new Promise((res) => {
                    setTimeout(res, 3000);
                }),
        },
    },
    data() {
        return { localLoading: false };
    },
    computed: {
        calcuLoading: {
            set(c) {
                this.localLoading = c;
                this.$emit("update:loading", c);
            },
            get() {
                return this.loading === undefined
                    ? this.localLoading
                    : this.loading;
            },
        },
    },
    methods: {
        locakloading() {},
        fileChange(e) {
            console.log(e.target.files[0]);
            if (!e.target.files) return;
            if (!e.target.files[0]) return;
            const file = e.target.files[0];
            this.calcuLoading = true;
            Promise.resolve(this.commitFile(file)).finally(() => {
                this.calcuLoading = false;
            });
        },
        commitFile(f) {
            return this.uploadFile(f);
        },
    },
};
</script>

<style lang="scss" scope>
.e-upload-btn input {
    display: block;
    height: 0;
    width: 0;
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
