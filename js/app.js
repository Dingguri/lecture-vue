new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {

        },
        onKeyup() {
            if (!this.query.length) {
                this.onReset()
            }
        },
        onReset() {
            this.query = ''
            debugger
            // todo : 검색 결과 숨김
        }
    }
})