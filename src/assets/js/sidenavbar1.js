$(document).ready(function(){
    console.log("check check");
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
    });
});