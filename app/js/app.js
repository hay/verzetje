import Vue from 'vue';

new Vue({
    el : "main",

    mounted() {
        window.addEventListener('hashchange', this.go.bind(this));
        this.go();
    },

    data : {
        hasRecording : false,
        screen : 'home'
    },

    methods : {
        go() {
            const hash = window.location.hash.slice(1);
            this.screen = !!hash ? hash : 'home';
        },

        record() {
            this.hasRecording = true;
        }
    }
})