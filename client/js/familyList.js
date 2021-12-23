let id = new URLSearchParams(window.location.search).get('id');
function recreateFamilyTable(familyMember) {
    const tableStructure =
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th>FullName</th>' +
        '<th>Email</th>' +
        '<th>BudgetLimit</th>' +
        '<th>Income</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>';
    $('#family').append(tableStructure);
    familyMember.forEach(family => {
        console.log(family.IdFamily)
        $("table tbody").append('<tr>' +
        `<th  scope="row">`+ family.FullName + '</th>' +
            '<td>' + family.Email + '</td>' +
            '<td>' + family.BudgetLimit + '</td>' +
            '<td>' + family.Income + '</td>' +
            '<td><button class="btn"><i class="fa fa-edit"></i></button></td>'+
            `<td><button class="btn"><i data-id=${family.Id} class="fa fa-trash"></i></button></td>`+
            '</tr>'
        );
    });
}


$(() => {
    $.ajax({
        method: "GET",
        url:`https://first-ex1-2.herokuapp.com/api/Users/family/${id}`,
        success: (familyMember) => {
            recreateFamilyTable(familyMember);
        },
        error: function () {
            alert('error happened');
        }
    });
});
$(document).on('click', '#currentWeb', ()=> {
    location.href = `http://127.0.0.1:5501/client/homepage.html?id=${id}`;
});
$(document).on('click', '.fa-trash', ()=> {
    const idremove=$(".fa-trash").attr('data-id');
    $.ajax({
        method: "delete",
        url:`https://first-ex1-2.herokuapp.com/api/Users/${idremove}`,
        success: (msg) => {
            location.href = `http://127.0.0.1:5501/client/familyUpdate.html?id=${id}`;
        },
        error: function () {
            alert('error happened');
        }
    });
});
