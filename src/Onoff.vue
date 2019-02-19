<template>
    <div>
        <button
                class="on"
                :class="{'active': value}"
                @click="onChange(true)"
        >On
        </button>
        <button
                class="off"
                :class="{'active': !value}"
                @click="onChange(false)"
        >Off
        </button>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            onChange(newValue) {
                this.$emit('input', newValue)
            }
        }

    }

</script>

<style scoped>
    button {
        border: none;
        padding: 5px 15px;
        cursor: pointer;
        margin-right: 20px;
        outline: none;
    }

    .on.active {
        background: green;
    }

    .off.active {
        background: red;
    }

</style>