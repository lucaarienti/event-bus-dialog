import Vue from 'vue';

export const bus = {
    bus: new Vue(),

    install(Vue) {
        Vue.prototype.$events = this.bus;
    }
};
