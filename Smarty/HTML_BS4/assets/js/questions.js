//question and answer

$(document).ready(function(){
    $('#building_type').change(function(){
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