$(".login_fields__password").on("click", ".fa-eye-slash", function () {
    $(this).removeClass("fa-eye-slash").addClass("fa-eye");
    $(this).prev().attr("type", "text");
});
 
$(".login_fields__password").on("click", ".fa-eye", function () {
    $(this).removeClass("fa-eye").addClass("fa-eye-slash");
    $(this).prev().attr("type", "password");
});