$( ".btnRegister" ).click((event)=> {
    event.preventDefault();
    const searchParams = new URLSearchParams(window.location.search)
    const id = searchParams.get('id')
    if(!($("#FullName").val()&&$("#Password").val()&&$("#Email").val()&&$("#BudgetLimit").val()&&
        id&&$("#Income").val()&&$("#Role").val()))
        return;
    const user={FullName:$("#FullName").val(),Password:$("#Password").val(),Email:$("#Email").val(),
            BudgetLimit:$("#BudgetLimit").val(),
                Idfamily:id,Income:$("#Income").val(),Role:$("#Role").val()};     
    $.ajax({
        method: "POST",
        url: `http://localhost:3000/api/Users/family`,
        dataType: "json",
        data: user   , 
        success:  () =>{
            location.href = `http://127.0.0.1:5501/client/homepage.html?id=${id}`;
        },
        error: function () {
            alert('error happened');
        }       
   });
}); 

