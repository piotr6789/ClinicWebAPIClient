var app = new Vue({
    el: '#app',
    data: {
        pageData: [],
        fullData: [],
        selectedID: null,
        selectedName: null,
        currentPage: 0,
        pageRowIndex: 6,
        nextButtonDisabled: false,
        previewButtonDisabled: false
    },
    methods: {
        addClick: function (event) {
            if (!this.selectedName) {
                alert("Bad data!");
                return;
            }

            let data = {
                "name": this.selectedName
            };

            let self = this;

            $.ajax({
                url: "https://localhost:44336/api/doctors",
                type: "POST",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: false
                },
                success: function (result) {
                    self.fullData.push(result);
                    self.pageData = self.getPageRows(self.currentPage, self.fullData);
                    self.buttonDisabilityCheck();
                },
                error: function (error) {
                    if (error && error.responseText) {
                        alert(error.responseText);
                        return;
                    }

                    alert("ERROR");
                }
            });
        },
        deleteClick: function () {
            if (!this.selectedID) {
                alert("Row not selected!");
                return;
            }

            let self = this;

            $.ajax({
                url: "https://localhost:44336/api/doctors/" + this.selectedID,
                type: "DELETE",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: false
                },
                success: function () {
                    for (var i = 0; i < self.fullData.length; i++) {
                        if (self.fullData[i].id === self.selectedID) {
                            self.fullData.splice(i, 1);
                        }
                    }

                    self.selectedID = 0;
                    self.pageData = self.getPageRows(self.currentPage, self.fullData);
                    self.buttonDisabilityCheck();
                },
                error: function (error) {
                    if (error && error.responseText) {
                        alert(error.responseText);
                        return;
                    }

                    alert("ERROR");
                }
            });
        },
        changeClick: function () {
            if (!this.selectedID) {
                alert("Row not selected!");
                return;
            }

            if (!this.selectedName) {
                alert("Bad data!");
                return;
            }

            let data = {
                "id": this.selectedID,
                "name": this.selectedName
            };

            let self = this;

            $.ajax({
                url: "https://localhost:44336/api/doctors/" + this.selectedID,
                type: "PUT",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                xhrFields: {
                    withCredentials: false
                },
                success: function () {
                    for (var i = 0; i < self.fullData.length; i++) {
                        if (self.fullData[i].id === self.selectedID) {
                            self.fullData[i].name = data.name;
                        }
                    }

                    self.selectedID = 0;
                    self.pageData = self.getPageRows(self.currentPage, self.fullData);
                },
                error: function (error) {
                    if (error && error.responseText) {
                        alert(error.responseText);
                        return;
                    }

                    alert("ERROR");
                }
            });
        },
        getPageRows: function (firstRow, data) {
            return data.slice(firstRow, firstRow + this.pageRowIndex)
        },
        rowClick: function (item) {
            if (item) {
                this.selectedID = item.id;
                this.selectedName = item.name;
            }
        },
        previewPage: function () {
            this.currentPage--;
            this.pageData = this.getPageRows(this.currentPage * this.pageRowIndex, this.fullData);

            this.buttonDisabilityCheck();
        },
        nextPage: function () {
            this.currentPage++;
            this.pageData = this.getPageRows(this.currentPage * this.pageRowIndex, this.fullData);

            this.buttonDisabilityCheck();
        },
        buttonDisabilityCheck: function () {
            this.nextButtonDisabled = (2 * this.currentPage * this.pageRowIndex >= this.fullData.length) || (this.pageRowIndex >= this.fullData.length) ? true : false;
            this.previewButtonDisabled = (this.currentPage == 0) ? true : false;
        }
    },
    created: function () {
        let self = this;

        $.ajax({
            url: "https://localhost:44336/api/doctors",
            type: "GET",
            xhrFields: {
                withCredentials: false
            },
            success: function (result) {
                self.fullData = result;
                self.pageData = self.getPageRows(self.currentPage, self.fullData);
                self.buttonDisabilityCheck();
            }
        });
    }
})