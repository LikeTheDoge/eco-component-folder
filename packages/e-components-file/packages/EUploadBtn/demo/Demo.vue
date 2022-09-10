<template>
    <div>
        <DemoArea title="通过参数修改文本">
            <EUploadBtn style="margin-right:8px" text="上传用户头像" :uploadFile="upload" loading-text="上传图片中...">
            </EUploadBtn>
        </DemoArea>

        <DemoArea title="通过插槽修改文本">
            <EUploadBtn :upload="upload">
                <template #text="{ loading }">
                    {{
                            loading ? '上传图片中...' : '上传用户头像'
                    }}
                </template>
            </EUploadBtn>
        </DemoArea>

        <DemoArea title="隐藏 icon">
            <EUploadBtn inline :uploadFile="upload" :show-icon="false"></EUploadBtn>
        </DemoArea>

        <DemoArea title="自定义icon">
            <EUploadBtn :uploadFile="upload">
                <template #icon="{ loading }">
                    <e-icon v-if="!loading" family="i_base" name="cycle"></e-icon>
                    <e-icon v-else class="loading-icon" family="i_base" name="upload"></e-icon>
                </template>
            </EUploadBtn>
        </DemoArea>

        <DemoArea title="禁用">
            <EUploadBtn disabled :uploadFile="upload">
                <template #icon="{ loading }">
                    <e-icon v-if="!loading" family="i_base" name="cycle"></e-icon>
                    <e-icon v-else class="loading-icon" family="i_base" name="upload"></e-icon>
                </template>
            </EUploadBtn>
        </DemoArea>
    </div>
</template>

<script>
import { EUploadBtn } from "../index";

export default {
    components: { EUploadBtn },

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