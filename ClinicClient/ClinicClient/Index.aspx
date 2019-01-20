﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="ClinicClient.Index" %>

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
    <div id="app" style="padding: 5px;">
        <table class="table table-bordered">
            <tr>
                <th v-for="item in ['ID', 'Name', 'DoctorID']">{{ item }}</th>
            </tr>
            <tr v-for="item in data" @click="rowClick(item)">
                <td id="rowID">{{ item.id }} </td>
                <td id="rowName">{{ item.name }} </td>
                <td id="DoctorID">{{ item.doctorId }} </td>
            </tr>
        </table>

        <input type="text" class="form-control" placeholder="Name" v-model="selectedName" />
        <input type="text" class="form-control" placeholder="DoctorID" v-model="selectedDoctorID" />


        <button type="btn" class="btn btn-success" v-on:click="addClick">Add</button>
        <button type="btn" class="btn btn-danger">Delete</button>
        <button type="btn" class="btn btn-warning">Change</button>
    </div>
</body>

<script src="Scripts/mainScript.js"></script>

</html>
