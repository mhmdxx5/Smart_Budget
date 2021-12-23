$( ".btnRegister" ).click((event)=> {
    event.preventDefault();
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get('id')
    const user={FullName:$("#FullName").val(),Password:$("#Password").val(),Email:$("#Email").val(),
            BudgetLimit:$("#BudgetLimit").val(),
                Idfamily:id,Income:$("#Income").val(),Role:$("#Role").val()};
     
    $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/Users/family`,
        dataType: 'jsonp',
        data: user,            
   });
});
