function recreateFamilyTable(restaurants) {
    const tableStructure =
        '<table class="table">' +
        '<thead>' +
        '<tr>' +
        '<th>FullName</th>' +
        '<th>BudgetLimit</th>' +
        '<th>Email</th>' +
        '</tr>' +
        '</thead>' +
        '<tbody>' +
        '</tbody>' +
        '</table>';
    $('#family').append(tableStructure);
    restaurants.forEach(restaurant => {
        $("table tbody").append('<tr>' +
            '<th scope="row">' + restaurant.id + '</th>' +
            '<td>' + restaurant.name + '</td>' +
            '<td>' + restaurant.location[0].lng + '</td>' +
            '<td>' + restaurant.location[0].lat + '</td>' +
            '<td>' + restaurant.stars + '</td>' +
            '</tr>'
        );
    });
}
