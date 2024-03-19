// Created by: Yoochan Han
// Created on:Mar 2024
// This file contains the JS functions for index.html
function enterClicked() {

  // input

  const firstName = document.getElementById("first-name").value

  const userAge = parseInt(document.getElementById("age-entered").value)



  // output

  document.getElementById("user-info").innerHTML =

    "Your info is: " + firstName + ", age " + userAge + "."

}