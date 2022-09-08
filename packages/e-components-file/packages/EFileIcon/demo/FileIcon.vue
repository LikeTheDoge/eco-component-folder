<template>
    <div>
        <e-file-icon
            :type="file.type"
            size="48"
        />
        
        <e-file-icon
            :type="'image'"
            size="48"
        />
        
        <e-file-icon
            :type="'ppt'"
            size="48"
        />

        <e-file-icon
            :type="'folder'"
            size="48"
        />

        <e-file-icon
            :type="'video'"
            size="48"
        />

        <e-file-icon
            :type="'word'"
            size="48"
        />
    </div>
</template>

<script>
import { EFileIcon } from "../index";
import { EFile } from "../../models";

console.log(new EFile())

export default {
    components: { EFileIcon },
    data() {
        return { file: new EFile() };
    },
    beforeMount() {
        import("./i_file");
    },
};
</script>

<style lang="scss" scoped>
.eco-icon {
    display: inline-block;
    width: 48px;
    vertical-align: middle;
}
</style>
