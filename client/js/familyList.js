function recreateFamilyTable(familyMember) {
    const tableStructure =
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th>FullName</th>' +
        '<th>Email</th>' +
        '<th>BudgetLimit</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>';
    $('#family').append(tableStructure);
    familyMember.forEach(family => {
        console.log(family.IdFamily)
        $("table tbody").append('<tr>' +
            '<th scope="row">' + family.FullName + '</th>' +
            '<td>' + family.Email + '</td>' +
            '<td>' + family.BudgetLimit + '</td>' +
            '<td><button class="btn"><i class="fa fa-edit"></i></button></td>'+
            '<td><button class="btn"><i class="fa fa-trash"></i></button></td>'+
            '</tr>'
            
        );
    });
}
$(() => {
    $.ajax({
        method: "GET",
        url: `http://localhost:3000/api/Users/family/19`,
        success: (familyMember) => {
            recreateFamilyTable(familyMember);
        },
        error: function () {
            alert('error happened');
        }
    });
});