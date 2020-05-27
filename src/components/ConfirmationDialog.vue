<template>
    <div class="dialog">
        <div class="content" v-if="visible">
            <component :is="content" />
            <button @click="confirm">Save</button>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'HelloWorld',
        data() {
            return {
                visible: false,
                callback: null,
                content: null,
            };
        },
        created() {
            this.$events.$on('show_dialog', ({ callback, component }) => {
                this.visible = true;
                this.callback = callback;
                this.content = component;
            });
        },
        methods: {
            confirm() {
                this.callback();
                this.reset();
            },
            reset() {
                this.callback = this.content = null;
                this.visible = false;
            },
        },
    }
</script>
<style>
    .dialog {
        position: fixed;
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        background: white;
        width: 80%;
    }
</style>
