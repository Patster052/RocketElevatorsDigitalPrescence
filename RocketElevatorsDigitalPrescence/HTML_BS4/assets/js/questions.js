//question and answer

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


function QuantityResidential(gamme) {

    
    var Appartments = $("#residential_appartments").val();
    var Floors = $("#residential_floors").val();
    if( document.querySelector('input[name="setup"]:checked') ) {
        selected_price_range = document.querySelector('input[name="setup"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    }
    else {
        selected_price_range = 0;
    }
    var average_units = (Appartments / Floors);
    console.log("average_units", average_units);

    var res_elevators = Math.ceil(average_units / 6);
    console.log("res_elevators ", res_elevators );

    var res_shafts = Math.ceil(Floors / 20);
    console.log("res_shafts", res_shafts)

    var price = res_elevators * res_shafts * selected_price_range
    console.log("price", price);
    $("#totalelevators").html(res_elevators)

    printPrice (gamme, price)
}

function QuantityCommercial(gamme) {

    com_elevator = $("#commercial_shaft").val();
    console.log("com_elevator",com_elevator);
    if( document.querySelector('input[name="setup"]:checked') ) {
        selected_price_range = document.querySelector('input[name="setup"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    }   
    else {
        selected_price_range = 0;
    }
    var price = com_elevator * selected_price_range;
    console.log("price", price)

    printPrice (gamme, price)
}

function QuantityCorporate(gamme)  {

    var corp_max_occupants = parseInt($("#corporate_occupants").val());
    var corp_floors = parseInt($("#corporate_floors").val());
    var corp_parkings = parseInt($("#corporate_parkings").val());

    if( document.querySelector('input[name="setup"]:checked') ) {
        selected_price_range = document.querySelector('input[name="setup"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    }   
    else {
        selected_price_range = 0;
    }
        
    var corp_floors_total = Math.ceil(corp_floors + corp_parkings)
    console.log("corp_floors_total", corp_floors_total)

    var corp_total_occupants = Math.ceil(corp_max_occupants * corp_floors_total);
    console.log("corp_total_occupant", corp_total_occupants)

    var corp_cage_total = Math.ceil(corp_total_occupants / 1000);
    console.log("corp_cage_total", corp_cage_total)

    var corp_shaft_total = Math.floor(corp_floors_total / 20);
    console.log("corp_shaft_total", corp_shaft_total)

    var corp_total_elevators = Math.floor(corp_cage_total / corp_shaft_total);
    console.log("corp_total_elevators", corp_total_elevators);

    price = corp_shaft_total * corp_total_elevators * selected_price_range;
    console.log("price", price);

    $("#totalelevators").html(corp_total_elevators)

    printPrice (gamme, price)

}

function QuantityHybrid (gamme, elevatorstotal) {



    var hyb_max_occupants = parseInt($("#hybrid_max_occupants").val());
    var hyb_floors = parseInt($("#hybrid_floors").val());
    var hyb_parkings = parseInt($("#hybrid_parkings").val());

    if( document.querySelector('input[name="setup"]:checked') ) {
        selected_price_range = document.querySelector('input[name="setup"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    }   
    else {
        selected_price_range = 0;
    }
   
    var hyb_floors_total = Math.ceil(hyb_floors + hyb_parkings)
    console.log("hyb_floors_total", hyb_floors_total)

    var hyb_total_occupants = Math.ceil(hyb_max_occupants * hyb_floors_total);
    console.log("hyb_total_occupant", hyb_total_occupants)

    var hyb_cage_total = Math.ceil(hyb_total_occupants / 1000);
    console.log("hyb_cage_total", hyb_cage_total)

    var hyb_shaft_total = Math.floor(hyb_floors_total / 20);
    console.log("hyb_shaft_total", hyb_shaft_total)

    var hyb_total_elevators = Math.floor(hyb_cage_total / hyb_shaft_total);
    console.log("hyb_total_elevators", hyb_total_elevators);

    price = hyb_shaft_total * hyb_total_elevators * selected_price_range;
    console.log("price", price)

    $("#totalelevators").html(hyb_total_elevators)

    printPrice (gamme, price, elevatorstotal)
}

const printPrice = function (gamme, price,) {

    console.log("printPrice");
    var installation =  gamme == "standard" ? parseFloat(price * 0.10) : gamme == "premium" ? parseFloat(price *  0.13) : parseFloat(price * 0.16) ;
    var gamme_standard = parseFloat(price * 0.10);
    if (gamme == 'standard') console.log("gamme_standard", gamme_standard);
    var gamme_premium = parseFloat(price * 0.13);
    if (gamme == 'premium') console.log("gamme_premium", gamme_premium);
    var gamme_excelium = parseFloat(price * 0.15)
    if (gamme == 'excelium') console.log("gamme_excelium", gamme_excelium);

    $("#installation-price").html(installation);
    $("#subtotal").html(price);
    $("#grandtotal").html(price + installation);
    // $("#totalelevators").html(elevatorstotal);
    console.log("price");
    
       
 }
 function pricetotal(gamme) {
    console.log(gamme);
    console.log("pricetotal");
    var type = $("#building_type").val();
    console.log("type", type);
    if (type == "residential") {
        QuantityResidential(gamme);
    } else if (type == "hybrid") {
        QuantityHybrid(gamme);
    } else if (type == "commercial") {
        QuantityCommercial(gamme);
    } else if (type == "corporate") {
        QuantityCorporate(gamme);
    }
 }




// function elevatorstotals(totalelevators){

//     console.log("elevatortotals", elevatortotals);

//     var type = $("totalelevators").val();
//     if (type == "res_elevators"){

//     }
//     else if (type == "com_shaft"){

//     }
//     else if (type == " corp_total_elevators "){

//     }
//     else if (type == "hyb_total_elevators "){

//     }
    
// }


















