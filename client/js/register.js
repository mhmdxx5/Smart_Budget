const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

function addfamilybyid() {
    $.ajax({
        url: `http://localhost:3000/api/family`,
        type: 'post',
        dataType: 'text',
        headers: {
            "idfamily":{},
        },
        success:  function(deletedResult) {
           showDeleteParkingMessage("Deleted successfully");
           getAllParkings();
       },
       error: function(XMLHttpRequest, textStatus, errorThrown) { 
           $("#parking-result").empty();
           $("#parking-result-faild").css("display", "block");
       }      
   });
}
