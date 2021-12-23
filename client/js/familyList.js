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
            '<th scope="row">' + family.FullName + '</th>' +
            '<td>' + family.Email + '</td>' +
            '<td>' + family.BudgetLimit + '</td>' +
            '<td>' + family.Income + '</td>' +
            '<td><button class="btn"><i class="fa fa-edit"></i></button></td>'+
            '<td><button class="btn"><i class="fa fa-trash"></i></button></td>'+
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