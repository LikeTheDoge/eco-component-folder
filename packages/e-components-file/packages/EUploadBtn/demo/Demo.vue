<template>
    <div>
        两种不同的方式修改文本<br />
        <e-upload-btn
            style="margin-right:8px"
            text="上传用户头像"
            :uploadFile="upload"
            loading-text="上传图片中..."
        >
        </e-upload-btn>
        <e-upload-btn
            :upload="upload"
        >
            <template  #text="{loading}">
                {{
                    loading?'上传图片中...':'上传用户头像'
                }}
            </template>
        </e-upload-btn>

        <div></div>
        隐藏 icon<br />
        <e-upload-btn
            inline
            :uploadFile="upload"
            :show-icon="false"
        ></e-upload-btn>
        
        <div></div>

        自定义icon<br />
        <e-upload-btn
            :uploadFile="upload"
        >

        
            <template
                #icon="{loading}"
            >
                <e-icon
                    v-if="!loading"
                    family="i_base"
                    name="cycle"
                ></e-icon>
                <e-icon
                    v-else
                    class="loading-icon"
                    family="i_base"
                    name="upload"
                ></e-icon>
            </template>
        </e-upload-btn>

        <div></div>
        禁用
        <br />
        <e-upload-btn
            disabled
            :uploadFile="upload"
        >

        
            <template
                #icon="{loading}"
            >
                <e-icon
                    v-if="!loading"
                    family="i_base"
                    name="cycle"
                ></e-icon>
                <e-icon
                    v-else
                    class="loading-icon"
                    family="i_base"
                    name="upload"
                ></e-icon>
            </template>
        </e-upload-btn>
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