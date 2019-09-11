
$("input").keyup(function(){
    var collected_data = collect_data();
    console.log("Collected Data:", collected_data);
    compute_data(collected_data);
});
    function collect_data(){
        var appartements = $("#residential_appartments").val();
        var floors = $("#residential_floors").val();
        var basements = $("#residential_basements").val();
        
      return{"residential_appartments":appartements,"residential_floors":floors,"residential_basements":basements}
}
    function compute_data(collected_data){
        console.log(collected_data['#residential_appartments']);
        console.log(collected_data['#residential_floors']);
        console.log(collected_data['#residential_basements']);
    } 
    