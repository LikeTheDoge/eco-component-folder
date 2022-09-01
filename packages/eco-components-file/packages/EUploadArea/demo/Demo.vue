<template>
    <div style="width:600px;paddingd:32px">
        <EUploadArea></EUploadArea>
        <div style="height:32px"></div>
        <EUploadArea>
            <div
                class="e-flex-center"
                style="height:320px;border:4px solid #ccc;border-radius:16px"
            >
                <span style="font-size:32px;font-weight:bolder">自定义内容</span>
            </div>
        </EUploadArea>
        <div style="height:32px"></div>
        <span>嵌套上传</span>
        <EUploadArea
            disable-tip
            class="new-tip"
        >
            <template #default="{showTip}">
                <div :style="{height:'320px',background:showTip?'darkorange':'#ccc',padding:'32px'}">
                    <EUploadArea
                        :key="v"
                        v-for="v in [1,2,3]"
                        disable-tip
                        class="inner new-tip"
                        style="float:left;margin-right:32px"
                    >

                        <template #default="{showTip}">
                            <div
                                class="e-flex-center"
                                :style="{height:'96px',background:showTip?'darkorange':'#66ccff',width:'96px'}"
                            >
                            </div>
                        </template>
                    </EUploadArea>
                </div>
            </template>
        </EUploadArea>
    </div>
</template>

<script>
import { EUploadArea } from "../index";

export default {
    components: { EUploadArea },

    beforeCreate() {
        import("./i_base");
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


<style scoped>
.inner {
    --e_upload_area-icon_size: 32px !important;
}
.new-tip {
    --e_upload_area-border: 2px solid transparent !important;
    --e_upload_area-border-show_tip: 2px solid darkorange !important;
}
</style>

<style scoped>
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