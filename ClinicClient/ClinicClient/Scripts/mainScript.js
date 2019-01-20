var app = new Vue({
    el: '#app',
    data: {
        data: [],
        selectedID: null,
        selectedName: null,
        selectedDoctorID: null
    },
    methods: {
        addClick: function (event) {
            if (!this.selectedName || !this.selectedDoctorID) {
                alert("Bad data!");
                return;
            }

            let data = {
                "name": this.selectedName,
                "doctorId": this.selectedDoctorID
            };

            var self = this;

            $.ajax({
                url: "https://localhost:44336/api/patients",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: false
                },
                success: function (result) {
                    self.data.push(result);
                },
                error: function (error) {
                    if (error && error.responseText) {
                        alert(error.responseText);
                    }
                }
            });
        },
        rowClick: function (item) {
            if (item) {
                this.selectedID = item.id;
                this.selectedName = item.name;
                this.selectedDoctorID = item.doctorId;
            }
        }
    },
    created: function () {
        var self = this;

        $.ajax({
            url: "https://localhost:44336/api/patients",
            type: "GET",
            xhrFields: {
                withCredentials: false
            },
            success: function (result) {
                self.data = result;
            }
        });
        
    }
})