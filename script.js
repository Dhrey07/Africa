function SendMail() {
    let params = {
        first_name : document.getElementById("first_name").value,
        last_name : document.getElementById("last_name").value,
        phone_number : document.getElementById("phone_number").value,
        email_id : document.getElementById("email_id").value,
        nationality : document.getElementById("nationality").value,
        answer : document.getElementById("answer").value,
        message_1 : document.getElementById("message_1").value,
        message_2 : document.getElementById("message_2").value,
        message_3 : document.getElementById("message_3").value,
        message_4 : document.getElementById("message_4").value,
    }
    
    emailjs.send("service_hmtfx5p","template_hs2savc",params).then(alert("Email Sent!!"))
}