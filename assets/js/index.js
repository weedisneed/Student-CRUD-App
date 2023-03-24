//custom javascript file

$("#add_student").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_student").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray(); //OR var unindexed_array=$("#update_student").seralizeArray();
    var data={}
    $.map(unindexed_array,function(n,i){
        data[n['name']]=n['value']
    })
    console.log(data);  
    var request ={
        "url":`http://localhost:3000/api/students/${data.id}`,
        "method":"PUT",
        "data":data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully! ");
    })
    console.log(unindexed_array); 
}) 

if(window.location.pathname=="/"){
    $ondelete=$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id=$(this).attr("data-id")

        var request = {
            "url":`http://localhost:3000/api/students/${id}`,
            "method":"DELETE",

        }
        if(confirm("Do you really want to delete this student record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}