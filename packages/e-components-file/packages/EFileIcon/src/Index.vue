<template>
    <e-icon
        v-bind="{
            family:family,
            name:name,
            ...other
        }"
    ></e-icon>
</template>

<script>
export default {
    props: {
        type: { default: "unknown" },
    },

    computed: {
        family() {
            return "i_file";
        },
        name() {
            return this.type;
        },
        other() {
            const { type, ...other } = this.$attrs || {};
            return other;
        },
    },
};
</script>