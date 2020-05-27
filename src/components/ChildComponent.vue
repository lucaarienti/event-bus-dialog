<template>
    <div>
        <button @click="showFirstDialog">show dialog 1</button>
        <button @click="showSecondDialog">show dialog 2</button>
    </div>
</template>
<script>
    export default {
        name: 'ChildComponent',
        methods: {
            showFirstDialog() {
                this.$events.$emit('show_dialog', {
                    callback: () => alert('hello from first callback'),
                    component: () => import('./SampleContent.vue')
                })
            },
            showSecondDialog() {
                this.$events.$emit('show_dialog', {
                    callback: () => alert('hello from second callback'),
                    component: () => import('./SampleContent.vue')
                })
            },
        }
    }
</script>
