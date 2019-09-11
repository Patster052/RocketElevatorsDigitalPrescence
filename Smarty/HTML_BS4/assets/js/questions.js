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


function QuantityResidential() {

    var Appartments = $("#residential_appartments").val();
    var Floors = $("#residential_floors").val();
    var category = parseFloat($("input[name='setup']:checked").val());

    var average_units = (Appartments/Floors);
    console.log("average_units", average_units);

    var shaftrequired = Math.ceil( average_units/6 );
    console.log("shaftrequired", shaftrequired);
    
    var multiplicator = Math.floor(Floors/20);
    console.log("multiplicator", multiplicator)

    var price = null;
    var base_price = (shaftrequired * category);

    if(Floors < 20){
        price = base_price;
    }
    else{
        price = (multiplicator * 2) * base_price
    }
}

function QuantityCommercial(){

    var shaftrequired = $("#commercial_shaft").val();
    var category = parseFloat($("input[name='setup']:checked").val());

    var price = null
    var base_price = (shaftrequired * category)

}

function QuantityCorporate(){

    var occupants = $("#corporate_occupants").val();
    var floors = $("#corporate_floors").val();
    var category = parseFloat($("input[name='setup']:checked").val());
 
    var total_occupants = (occupants * floors);
    console.log("total_occupants", total_occupants)

    var total_shafts = (total_occupants / 1000);
    console.log("total_shafts", total_shafts)

    var total_floors = (floors / 20);
    console.log("total_floors", total_floors)

    var total_elevators = (total_shafts * total_floors);

    var elevators = (total_elevators / 1000);

    var price = base_price;
    var base_price = (elevators * category);

    }    



function QuantityHybrid(){

    var occupants = $("#corporate_occupants").val();
    var floors = $("#corporate_floors").val();
    var basements = $("#corporate_basements")
    var category = parseFloat($("input[name='setup']:checked").val());
 
    var total_occupants = (occupants * floors);
    console.log("total_occupants", total_occupants)

    var total_shaft = (total_occupants / 1000);
    console.log("total_shafts", total_shafts)

    var grand_total_floors = (floors + basements)
    console.log("grand_total_floors", grand_total_floors)

    var total_floors = (grand_total_floors / 20);
    console.log("grand_total_shafts", grand_total_shaft)

    var total_elevators = (total_shaft * total_floors);

    var elevators = (total_elevators / 1000);

    var price = base_price;
    var base_price = (elevators * category);

    }    

//  $("#result1".html(price));
