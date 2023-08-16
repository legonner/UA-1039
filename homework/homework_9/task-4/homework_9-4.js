$(document).ready(function() {
    const $checkboxes = $(".myCheckbox");

    $checkboxes.on("change", function() {
        const checkedCount = $checkboxes.filter(":checked").length;
        
        if (checkedCount >= 3) {
            $checkboxes.not(":checked").attr("disabled", true);
        } else {
            $checkboxes.attr("disabled", false);
        }
    });
});