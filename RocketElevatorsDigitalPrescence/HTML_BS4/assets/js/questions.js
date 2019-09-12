//question and answer
var selected_range;
var category;

$(document).ready(function () {


    $("#building_type").change(function () {
        var type = $(this).val();
        if (type == "residential") {
            $("#residential").show();
            $("#commercial,#corporate,#hybrid").hide();
        } else if (type == "commercial") {
            $("#commercial").show();
            $("#residential,#corporate,#hybrid").hide();
        } else if (type == "corporate") {
            $("#corporate").show();
            $("#residential,#commercial,#hybrid").hide();
        } else if (type == "hybrid") {
            $("#hybrid").show();
            $("#residential,#corporate,#commercial").hide();
        } else if (type == "0") {
            $("#residential,#commercial,#corporate,#hybrid").hide();
        }
    });
});


function QuantityResidential() {

    //$("#calculate_residential").click


    var Appartments = $("#residential_appartments").val();
    var Floors = $("#residential_floors").val();
    var category = parseFloat($("input[name='setup']:checked").val());

    var average_units = (Appartments / Floors);
    console.log("average_units", average_units);

    var shaftrequired = Math.ceil(average_units / 6);
    console.log("shaftrequired", shaftrequired);

    var multiplicator = Math.floor(Floors / 20);
    console.log("multiplicator", multiplicator)

    var price = null;
    var base_price = (shaftrequired * category);

    if (Floors < 20) {
        price = base_price;
    } else {
        price = (multiplicator * 2) * base_price
    }
}

function QuantityCommercial() {

    var shaftrequired = $("#commercial_shaft").val();
    var category = parseFloat($("input[name='setup']:checked").val());

    var price = null
    var base_price = (shaftrequired * category)

}

function QuantityCorporate() {

    var corp_max_occupants = parseInt($("#corporate_occupants").val());
    var corp_floors = parseInt($("#corporate_floors").val());
    var corp_parkings = parseInt($("#corporate_parkings").val());
    // var category = parseFloat($("input[name='setup']:checked").val());

    var corp_floors_total = Math.ceil(corp_floors + corp_parkings)
    console.log("corp_floors_total", corp_floors_total)

    var corp_total_occupants = Math.ceil(corp_max_occupants * corp_floors_total);
    console.log("corp_total_occupant", corp_total_occupants)

    var corp_cage_total = Math.ceil(corp_total_occupants / 1000);
    console.log("corp_cage_total", corp_cage_total)

    var corp_shaft_total = Math.floor(corp_floors_total / 20);
    console.log("corp_shaft_total", corp_shaft_total)

    var corp_total_elevators = Math.ceil(corp_cage_total / corp_shaft_total);
    console.log("corp_total_elevators", corp_total_elevators);

}

function QuantityHybrid() {



    var hyb_max_occupants = parseInt($("#hybrid_max_occupants").val());
    var hyb_floors = parseInt($("#hybrid_floors").val());
    var hyb_parkings = parseInt($("#hybrid_parkings").val());
    // var category = parseFloat($("input[name='setup']:checked").val());

    var hyb_floors_total = Math.ceil(hyb_floors + hyb_parkings)
    console.log("hyb_floors_total", hyb_floors_total)

    var hyb_total_occupants = Math.ceil(hyb_max_occupants * hyb_floors_total);
    console.log("hyb_total_occupant", hyb_total_occupants)

    var hyb_cage_total = Math.ceil(hyb_total_occupants / 1000);
    console.log("hyb_cage_total", hyb_cage_total)

    var hyb_shaft_total = Math.floor(hyb_floors_total / 20);
    console.log("hyb_shaft_total", hyb_shaft_total)

    var hyb_total_elevators = Math.ceil(hyb_cage_total / hyb_shaft_total);
    console.log("hyb_total_elevators", hyb_total_elevators);
}

function PriceRange() {
    selected_range = document.querySelector('input[name="setup"]:checked').value;
    console.log("selected_range", selected_range);
}

function Installation() {

    category = document.querySelector('input[name="setup"]:checked').value;




        //    if(document.querySelector('input[name="setup"]:checked')) {
        //            var installation_price = null;
        //            var installation_price_float = null;
        //            var selected_installation = document.querySelector('input[name="setup"]:checked').value
        //            //console.log("selected_installation", selected_installation);


                   if( selected_range == "standard") {
                           installation_price_float = 1.10;
                   }else if( selected_range == "premium") {
                            installation_price_float = 1.13;
                   }else if( selected_range == "excelium") {
                            installation_price_float = 1.16;
                   }
                }
