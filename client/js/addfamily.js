
const id = new URLSearchParams(window.location.search).get('id')
$(() => {
    if (id) {
        $(".register .mb-3").append("Add Family");
    }
    else {
        $(".register .mb-3").append("Welcome to Smart Budget");
    }
});
$(".btnRegister").click((event) => {
    event.preventDefault();
    if (!($("#FullName").val() && $("#Password").val() && $("#Email").val() && $("#BudgetLimit").val() &&
        $("#Income").val() && $("#Role").val()))
        return;
    if (!id) {
        const user = {
            FullName: $("#FullName").val(), Password: $("#Password").val(), Email: $("#Email").val(),
            BudgetLimit: $("#BudgetLimit").val(),
            Income: $("#Income").val(), Role: $("#Role").val()
        };
        $.ajax({
            method: "POST",
            url: `https://first-ex1-2.herokuapp.com/api/Users`,
            dataType: "json",
            data: user,
            success: (idUser) => {
                location.href = `http://127.0.0.1:5501/client/homepage.html?id=${idUser}`;
            },
            error: function () {
                alert('error happened');
            }
        });
    }
    else {
        const user = {
            FullName: $("#FullName").val(), Password: $("#Password").val(), Email: $("#Email").val(),
            BudgetLimit: $("#BudgetLimit").val(),
            Idfamily: id, Income: $("#Income").val(), Role: $("#Role").val()
        };
        $.ajax({
            method: "POST",
            url: `https://first-ex1-2.herokuapp.com/api/Users/family`,
            dataType: "json",
            data: user,
            success: () => {
                location.href = `http://127.0.0.1:5501/client/homepage.html?id=${id}`;
            },
            error: function () {
                alert('error happened');
            }
        });
    }
});
$(document).on('click', '#currentWeb', ()=> {
    console.log("hi")
    location.href = `http://127.0.0.1:5501/client/homepage.html?id=${id}`;
});

