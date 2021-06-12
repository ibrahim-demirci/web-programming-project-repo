"use strict";


let myRequest = new Request("./data_class.json",)

fetch(myRequest)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
});