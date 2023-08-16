$(document).ready(function() {
    $("h3 + div").each(function() {
        const $div = $(this);
        const $h3 = $div.prev("h3");
        
        $div.insertBefore($h3);
    });
});