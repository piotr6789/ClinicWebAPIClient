﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="PatientPage.aspx.cs" Inherits="ClinicClient.PacientPage" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <script src="Scripts/vue.min.js"></script>
    <script src="Scripts/jquery-3.3.1.min.js"></script>
    <script src="Scripts/bootstrap.js"></script>
    <link href="Content/bootstrap.min.css" rel="stylesheet" />
    <link href="Content/style.css" rel="stylesheet" />

    <title>ClientClinic</title>
</head>
<body>
    <div id="app" style="padding: 50px;">
        <a>Aktualna strona: {{ currentPage + 1 }}, liczba rekordów: {{ fullData.length }} </a>
        <table class="table table-bordered">
            <tr>
                <th v-for="item in ['ID', 'Name', 'DoctorID']">{{ item }}</th>
            </tr>
            <tr v-for="item in pageData" @click="rowClick(item)">
                <td id="rowID">{{ item.id }} </td>
                <td id="rowName">{{ item.name }} </td>
                <td id="DoctorID">{{ item.doctorId }} </td>
            </tr>
        </table>

        <input type="text" class="form-control form-group col-lg-2" placeholder="Name" v-model="selectedName" />
        <input type="text" class="form-control form-group col-lg-2" placeholder="DoctorID" v-model="selectedDoctorID" />

        <button type="btn" class="btn btn-success" @click="addClick">Add</button>
        <button type="btn" class="btn btn-danger" @click="deleteClick">Delete</button>
        <button type="btn" class="btn btn-warning" @click="changeClick">Change</button>
        <button type="btn" class="btn btn-primary" @click="previewPage" :disabled="previewButtonDisabled == 1">Prev</button>
        <button type="btn" class="btn btn-info" @click="nextPage" :disabled="nextButtonDisabled == 1">Next</button>
    </div>
    <form runat="server">
        <asp:Button ID="doctorPage" runat="server" Text="Doctor table" class="form-control" OnClick="doctorPage_Click" />
    </form>
</body>

<script src="Scripts/patientScript.js"></script>

</html>