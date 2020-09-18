/* SmtpJS.com - v3.0.0 */
var Email = {
    send: function(a) {
        return new Promise(function(n, e) {
            a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
            var t = JSON.stringify(a);
            Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
        })
    },
    ajaxPost: function(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
            var e = a.responseText;
            null != t && t(e)
        }, a.send(n)
    },
    ajax: function(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function() {
            var e = t.responseText;
            null != n && n(e)
        }, t.send()
    },
    createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
};

function myFunction() {
    var x = document.getElementById("frm1");
    var text = [];
    var i;
    for (i = 0; i < x.length; i++) {
        text[i] = x.elements[i].value;
    }
    // document.getElementById("message").innerHTML = text;
    var name = text[0];
    var email = text[1];
    var subject = text[2];
    var note = text[3];
    console.log(email);


    var response = Email.send({
        // Host: "smtp.mail.com",
        // Username: "lepointpc@mail.com",
        // Password: "Gelorsel1",
        SecureToken: "3b91f1e2-e97f-4f34-a644-99bd78837aa5",
        To: email,
        From: "lepointpc@mail.com",
        Subject: subject,
        Body: "You wrote: \n" + note,
    }).then(
        message => alert("mail sent successfully")
    );
    console.log(response)
        // Email.send({
        //     Host: "smtp.mail.com",
        //     Username: "lepointpc@mail.com",
        //     Password: "Gelorsel1",
        //     To: "serignemortoure1@gmail.com",
        //     From: "lepointpc@mail.com",
        //     Subject: "Got a message from " + name + " via lepointpc.com ",
        //     Body: "subject is: " + subject + " His email is: " + email + "message is: \n" + note,
        // }).then(
        //     // message => alert("mail sent successfully")
        // );

    // Email.send({
    //     Host: "smtp.mail.com",
    //     Username: "lepointpc@mail.com",
    //     Password: "Gelorsel1",
    //     To: "lepointpc@gmail.com",
    //     From: "lepointpc@mail.com",
    //     Subject: "Got a message from " + name + " via tourefamily",
    //     Body: "His email is: " + email + "message is: \n" + note,
    // }).then(
    //     // message => alert("mail sent successfully")
    // );
    // // document.getElementById("frm1").reset();
}