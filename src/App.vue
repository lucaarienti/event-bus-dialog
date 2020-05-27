<template>
    <div id="app">
        <child-component />
        <confirmation-dialog />
    </div>
</template>

<script>
    import ChildComponent from "./components/ChildComponent";
    import ConfirmationDialog from './components/ConfirmationDialog.vue'

    export default {
        name: 'App',
        components: {
            ChildComponent,
            ConfirmationDialog
        },
    }
</script>
