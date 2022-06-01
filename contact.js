function contact() {
    var script_url = "https://script.google.com/macros/s/AKfycbyew_Ff4KsGXMMnrmf32adr97beMYM_7CV0RtjZb-iDJoy0J2RYKrB-GqViE5oIa_s9/exec";

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var url = script_url + "?callback=thanks" 
    + "&name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email) + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message);
    jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
});
}

function thanks(e) {
    alert("Thanks, I'll reply as soon as I can.");
}