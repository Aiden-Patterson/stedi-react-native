import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { View, Text, Button } from "react-native";


function savetoken(token){
    // whatever passes as token should save into local storage
        if (window.localStorage){
         localStorage.setItem("token", token);
        }
    
    }
    
    function checkexpiredtoken(){
    // read token from local storage - check with ajax call
        if(window.localStorage){
        usertoken = localStorage.getItem("token", token);
        $.ajax({
           type: 'GET',
            url: '/checkToken',
            data: '{"usertoken":"' + usertoken + '"}',
            success: function(data){savetoken(data)},
            contentType: "application/text",
            dataType: 'text' })
        }
    }
    
    function userlogin(){
        setuserpassword();
        setphonenumber();
        $.ajax({
            type: 'POST',
            url: 'https://dev.stedi.me/twofactorlogin/'+phonenumber,
            data: ' {"Phone Number":"'+ phonenumber +'", "password":"'+ password +'"}', // or JSON.stringify ({name: 'jonas'}),
            success: function(data) {
                savetoken(data);
                localStorage.removeItem("customer");
             },
            contentType: "application/text",
            dataType: 'text'
        });
    
    }
    
    function phonenumber(){
        phonenumber = $("#un").val();
    }
    
    function setuserpassword(){
        password = $("#pw").val();
    }
    
    var enterFunction = (event) =>{
        if (event.keyCode === 13){
            event.preventDefault();
            $("#loginbtn").click();
        }
    }
    
    var passwordField = document.getElementById("pw");
    
    passwordField.addEventListener("keyup", enterFunction);