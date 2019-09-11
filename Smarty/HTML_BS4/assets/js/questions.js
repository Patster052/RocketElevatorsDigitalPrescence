//question and answer

$(document).ready(function(){

    
    $("#building_type").change(function(){
        var type = $(this).val();
        if( type == "residential") {
            $("#residential").show();
            $("#commercial,#corporate,#hybrid").hide();
        }
        else if( type == "commercial") {
            $("#commercial").show();
            $("#residential,#corporate,#hybrid").hide();
        }
        else if( type == "corporate") {
            $("#corporate").show();
            $("#residential,#commercial,#hybrid").hide();
        }
        else if( type == "hybrid") {
            $("#hybrid").show();
            $("#residential,#corporate,#commercial").hide();
        }   
        else if( type == "0") {
            $("#residential,#commercial,#corporate,#hybrid").hide();
        }
    });
});

$("input").keyup(function(){
    var collected_data = collect_data();
    console.log("Collected Data:", collected_data);
    compute_data(collected_data);
});
    function collect_data(){
        var resi_apt = $("#residential_appartments").val();
        var resi_floors = $("#residential_floors").val();
        var resi_base = $("#residential_basements").val();
        var com_busi= $('#commercial_business').val();
        var com_floors = $('#commercial_floors').val();
        var com_base = $('#commercial_basements').val();
        var com_park = $('#commercial_parking').val();
        var com_shaft = $('#commercial_shaft').val();
        var corp_busi = $('#corporate_business').val();
        var corp_floors = $('#corporate_floors').val();
        var corp_base = $('#corporate_basements').val();
        var corp_park = $('#corporate_parkings').val();
        var corp_user = $('#corporate_occupants').val();
        var hyb_busi = $('#hybrid_businesses').val();
        var hyb_floors = $('#hybrid_floors').val();
        var hyb_base = $('#hybrid_basements').val();
        var hyb_park = $('#hybrid_parkings').val();
        var hyb_user = $('#hybrid_occupants').val();
        var hyb_hours = $('#hybrid_hours').val();
        
      return{"residential_appartments":resi_apt,"residential_floors":resi_floors,"residential_basements":resi_base,'commercial_business':com_busi,
      'commercial_basements':com_base,'commercial_floors':com_floors,'commercial_parking':com_park,'commercial_shaft':com_shaft,'corporate_business':corp_busi,'corporate_floors':corp_floors,
      'corporate_basements':corp_base,'corporate_parking':corp_park,'corporate_occupants':corp_user,'hybrid_businesses':hyb_busi, 
      'hybrid_floors':hyb_floors,'hybrid_basements':hyb_base,'hybrid_parkings':hyb_park,'hybrid_occupants':hyb_user,'hybrid_hours':hyb_hours}
}
    function compute_data(collected_data){
        console.log(collected_data['#residential_appartments']);
        console.log(collected_data['#residential_floors']);
        console.log(collected_data['#residential_basements']);
        console.log(collected_data['#commercial_business']);
        console.log(collected_data['#commercial_floors']);
        console.log(collected_data['#commercial_basements']);
        console.log(collected_data['#commercial_parking']);
        console.log(collected_data['#commercial_shaft']);
        console.log(collected_data['#corporate_business']);
        console.log(collected_data['#corporate_floors']);
        console.log(collected_data['#corporate_basements']);
        console.log(collected_data['#corporate_parkings']);
        console.log(collected_data['#corporate_occupants']);
        console.log(collected_data['#hybrid_businesses']);
        console.log(collected_data['#hybrid_floors']);
        console.log(collected_data['#hybrid_basements']);
        console.log(collected_data['#hybrid_parkings']);
        console.log(collected_data['#hybrid_occupants']);
        console.log(collected_data['#hybrid_hours']);
    } 