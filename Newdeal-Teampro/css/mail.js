function previewImage(targetObj, ViewArea){
    var preView = document.getElementById(ViewArea);
    var ua = window.navigator.userAgent;
    
    if(ua.indexOf("MSIE")> -1){
        targetObj.select();
    try{
        var src=document.selection.createRange().text;
    }
    }
}