<template>
    <div>
        <e-icon
            family="i_file"
            name="database"
            size="24"
            color=""
        />
        <e-icon
            family="i_file"
            name="image"
            size="24"
            color="#3363ff"
        />
        <e-icon
            family="i_file"
            name="folder"
            size="24"
            color="#3363ff"
        />
        <e-icon
            family="i_file"
            name="exe"
            size="24"
            color="#3363ff"
        />
    </div>
</template>

<script>
import { EIcon } from "../index";

export default {
    components: { EIcon },
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
