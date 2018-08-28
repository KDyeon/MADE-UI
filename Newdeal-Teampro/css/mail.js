'use strict'
var count = 0;

function addForm() {
    var addedFormDiv = document.getElementById("addedFormDiv");
    var str = "";
    str += `<div id="card">\
        <form>\
        <label for="image">상품정보 : </label>\
        <input type="file" id="image" />\
        </form>\
        <div id="image_preview">\
        <img src="#"/>\
        <a href="#">[상품사진 삭제하기]</a>\
        <input type="text" class="title" accept="image/*">\
        <textarea class="explain" rows="5"cols="30" placeholder="추가 설명을 입력해주세요..">\</textarea>\
        </div>\
        <center>\
        </div>`

    var addedDiv = document.createElement("div");
    addedDiv.id = "added_" + count;
    addedDiv.innerHTML = str;
    addedFormDiv.appendChild(addedDiv);
    count++;
    document.baseForm.count.value = count;
}

function delForm() {
    var addedFormDiv = document.getElementById("addedFormDiv");
    if (count > 1) {
        var addedDiv = document.getElementById("added_" + (--count));
        addedFormDiv.removeChild(addedDiv);
    } else {
        document.baseForm.reset();
    }
}

$(document).ready(function(){
    function readURL(input){
        if (input.files && input.files[0]){
            var reader = new FileReader();
            reader.onload = function(e){
                $('#imgprev').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $('#image').change(function(){
        alert(this.value);
    });
});