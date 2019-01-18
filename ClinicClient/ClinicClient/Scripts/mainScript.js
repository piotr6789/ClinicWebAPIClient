var app = new Vue({
    el: '#app',
    data: {
        data: []
    },
    methods: {
        addClick: function (event) {

        }
    },
    created: function () {
        var self = this;

        $.ajax({
            url: "https://localhost:44336/api/patients",
            xhrFields: {
                withCredentials: false
            },
            success: function (result) {
                self.data = result;
            }
        });
        
    }
})