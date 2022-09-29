<template>
    <div
        ref="cntr"
        :class="{
            'e-upload-area':true,
            'show-tip':showTip && (!isLoading),
            'show-loading':isLoading
        }"
        @dragenter="openTip"
        @dragover="openTip"
        @drop="commitFile"
    >
        <div class="e-upload-area-place-holder">

            <slot
                :loading="isLoading"
                :showTip="showTip"
            >
                <div class="place-holder-default e-flex-center">
                    <div>
                        <div class="default-icon">
                            <e-icon
                                family="i_base"
                                name="cloud_upload"
                            ></e-icon>
                        </div>
                        <div class="default-title">
                            将文件拖拽到区域
                        </div>
                        <div class="default-desc">
                            或者 <e-upload-btn
                                link
                                :loading.sync="loading"
                                :show-icon="false"
                                :uploadFile="uploadFile"
                                :text="'点击进行上传'"
                                :loading-text="'点击进行上传'"
                            ></e-upload-btn>
                        </div>
                    </div>
                </div>

            </slot>
        </div>

        <div
            v-if="disableTip === undefined"
            class="hover-tip"
            :class="{
                'hover-tip':true,
                'show-tip':showTip && (!isLoading)
            }"
        >
            <slot
                name="hover-tip"
                :loading="isLoading"
                :showTip="showTip"
            >
                <div class="hover-tip-default e-flex-center">
                    <div>
                        <div class="default-icon">
                            <e-icon
                                family="i_base"
                                name="upload"
                            ></e-icon>
                        </div>
                        <div class="default-title">
                            释放文件进行上传
                        </div>
                    </div>
                </div>
            </slot>
        </div>
        <div
            class=""
            :class="{
                'loading-mask':true,
                'show-tip':showTip && (!isLoading),
                'show-loading':isLoading
            }"
        >
            <slot
                name="loading-mask"
                :loading="isLoading"
                :showTip="showTip"
            >
                <div class="loading-mask-default e-flex-center">
                    <div>
                        <div class="default-icon ">
                            <e-icon
                                class="loading-icon"
                                family="i_base"
                                name="cycle"
                            ></e-icon>
                        </div>
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
import { EUploadBtn } from "../../EUploadBtn/index";

export default {
    name: "EUploadArea",
    components: { EUploadBtn },
    props: {
        disableTip: {
            default: undefined,
        },
        uploadFile: {
            default: () => () =>
                new Promise((res) => {
                    setTimeout(res, 3000);
                }),
        },
        isUploading:{
            default: false
        }
    },

    beforeMount() {
        document.addEventListener("dragleave", (e) => e.preventDefault());
        document.addEventListener("dragover", (e) => e.preventDefault());
        document.addEventListener("dragenter", (e) => e.preventDefault());
        document.addEventListener("drop", (e) => e.preventDefault());
    },

    data() {
        return {
            loading: false,
            showTip: false,
        };
    },

    computed:{
        isLoading(){
            return this.loading || this.isUploading
        }
    },

    methods: {
        openTip(e) {
            e.preventDefault();
            e.stopPropagation();
            clearTimeout(this.$closeTip);
            this.showTip = true;
            this.$closeTip = setTimeout(() => {
                this.showTip = false;
            }, 100);
        },
        commitFile(e) {
            e.preventDefault();
            e.stopPropagation();
            const files = e.dataTransfer.files || [];
            const file = files[0];
            if (this.loading) return;
            if (!file) return;

            this.loading = true;
            console.log(1);
            Promise.resolve(this.uploadFile(file)).finally(() => {
                console.log(2);
                this.loading = false;
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.e-upload-area {
    --e_upload_area-border_radius: 14px;
    --e_upload_area_place_holder-border: 3px dashed #ccc;
    --e_upload_area_place_holder-border_radius: 15px;
    --e_upload_area_place_holder-height: 320px;
    --e_upload_area_mask-bg_color: #fff;
    --e_upload_area-icon_size: 64px;
    --e_upload_area-icon_color: #cccccc;

    // 自定义 show-tip 样式
    --e_upload_area-bg_color: none;
    --e_upload_area-border: none;
    --e_upload_area-bg_color-show_tip: none;
    --e_upload_area-border-show_tip: none;
}

.e-flex-center {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.e-upload-area {
    position: relative;
    overflow: hidden;
    border-radius: var(--e_upload_area-border_radius);

    background-color: var(--e_upload_area-bg_color);
    border: var(--e_upload_area-bg_color);

    &.show-tip {
        background-color: var(--e_upload_area-bg_color-show_tip);
        border: var(--e_upload_area-bg_color-show_tip);
    }

    .show-tip.hover-tip {
        opacity: 1;
    }

    .hover-tip {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 8;
        pointer-events: none;
        opacity: 0;
        transition: var(--ease-out-common);
    }

    .show-loading.loading-mask {
        opacity: 1;
    }

    .loading-mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: darksalmon;
        pointer-events: none;
        opacity: 0;
        transition: var(--ease-out-common);
    }
    .place-holder-default {
        min-height: var(--e_upload_area_place_holder-height);
        border: var(--e_upload_area_place_holder-border);
        text-align: center;
        border-radius: var(--e_upload_area_place_holder-border_radius);
    }
    .hover-tip-default {
        background-color: var(--e_upload_area_mask-bg_color);
        height: 100%;
        text-align: center;
    }
    .loading-mask-default {
        background-color: var(--e_upload_area_mask-bg_color);
        height: 100%;
        text-align: center;
    }
    .default-icon {
        line-height: 1;
        font-size: var(--e_upload_area-icon_size);
        color: var(--e_upload_area-icon_color);
    }
    .default-title {
        font-size: 18px;
        font-weight: bolder;
        color: var(--e_upload_area-icon_color);
        margin-bottom: 4px;
    }
    .default-desc {
        font-size: 14px;
        color: var(--e_upload_area-icon_color);
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
}
</style>

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
