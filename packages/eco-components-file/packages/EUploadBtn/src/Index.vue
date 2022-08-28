<template>
    <label :style="{ width: btnWidth }"
        :class="{ 'btn-block': true, 'inline': inline !== undefined, 'e-upload-btn': true, 'disabled': loading }">
        <slot v-if="showIcon" :loading="loading" name="icon">
            <e-icon v-if="!loading" family="i_base" name="upload"></e-icon>
            <e-icon v-else class="loading-icon" family="i_base" name="cycle"></e-icon>
        </slot>

        <slot :loading="loading">
            {{ loading ? loadingText : text }}
        </slot>
        <input :disabled="loading" type="file" @change="fileChange">
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
        width: {
            default: null,
        },
        inline: {
            default: undefined,
        },
        upload: {
            default: () => () => new Promise((res) => {
                setTimeout(res, 3000);
            }),
        },
    },
    data() {
        return {
            loading: false,
        };
    },
    computed: {
        btnWidth() {
            if (this.width) return this.width;
            if (
                (this.text === "上传文件") &&
                (this.loadingText === "上传中...") &&
                this.showIcon
            )
                return "108px";

            return "auto";
        },
    },
    methods: {
        async fileChange(e) {
            console.log(e.target.files[0]);
            if (!e.target.files) return;
            if (!e.target.files[0]) return;
            const file = e.target.files[0];
            this.loading = true;
            await this.uploadFile(file);
            e.target.value = "";
            this.loading = false;
        },
        uploadFile(f) {
            return this.upload(f)
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

.btn-block {
    display: block;
    width: 100%;
    font-size: var(--font-size-normal);
    line-height: var(--line-height-normal);
    color: var(--text-color-title-light);
    background-color: var(--action-color);
    cursor: pointer;
    transition: all 0.3s ease-out;

    padding: 5px 16px;
}

.btn-block.inline {
    display: inline-block;
}

.btn-block:hover {
    background-color: var(--action-color-hover);
}

.btn-block.disabled {
    cursor: not-allowed;
    background-color: var(--action-color-disable) !important;
}

.btn-block:active {
    background-color: var(--action-color-active);
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



<style lang="scss">

:root{
    --e-btn-block-line-height :32px
    --e-btn-block-margin : 4px
}


.e-btn {


    &.link {

        &.disabled {}
    }

    &.block {

        &.disabled {}

        &.inline {}

        &.ghost {}
    }
}
</style>
