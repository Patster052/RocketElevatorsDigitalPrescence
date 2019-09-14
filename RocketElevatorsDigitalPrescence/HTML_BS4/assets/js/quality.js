// Price Range
// function PriceRange() {
//        if(document.querySelector('input[name="setup"]:checked')) {
//                var range_price = null;
//                var range_price_float = null;
//                var selected_range = document.querySelector('input[name="setup"]:checked').value
//                //console.log("selected_range", selected_range);
//                if( selected_range == "standard") {
//                        range_price =  "$7565";
//                        range_price_float = 7565;
//                }else if( selected_range == "premium") {
//                        range_price =  "$12345";
//                        range_price_float = 12345;
//                }else if( selected_range == "excelium") {
//                        range_price =  "$15400";
//                        range_price_float = 15400;
//                }
//        //console.log("range_price", range_price);
//        document.getElementById('range').innerHTML = range_price;
//        document.getElementById('range_float').innerHTML = range_price_float;
//        }
// };
// // function Installation() {
//        if(document.querySelector('input[name="setup"]:checked')) {
//                var installation_price = null;
//                var installation_price_float = null;
//                var selected_installation = document.querySelector('input[name="setup"]:checked').value
//                //console.log("selected_installation", selected_installation);
//                if( selected_installation == "standard") {
//                        installation_price = "10%";
//                        installation_price_float = 1.10;
//                }else if( selected_installation == "premium") {
//                        installation_price = "13%";
//                        installation_price_float = 1.13;
//                }else if( selected_installation == "excelium") {
//                        installation_price = "16%";
//                        installation_price_float = 1.16;
//                }
//        //console.log("installation_price", installation_price);
//        document.getElementById('installation').innerHTML = installation_price;
//        document.getElementById('installation_float').innerHTML = installation_price_float;
//        }
// };



// Calculate Quantity on residential
// $( document ).ready(function(){
// var selected_price_range, quantity_shaft;
function quantityResi() {
    var nb_apartments = parseInt($("#residential_nb_apartments").val());
    var nb_floors = parseInt($("#residential_nb_floors").val());
    if( document.querySelector('input[name="radioanswer"]:checked') ) {
        selected_price_range = document.querySelector('input[name="radioanswer"]:checked').value;
        console.log("selected_price_range", selected_price_range);
    }
    else {
        selected_price_range = 0;
    }
    //var categorie = parseFloat($("imput[name='radioanswer']:checked").val());
    //console.log("categorie", categorie);
    var total_app = (nb_apartments / nb_floors);
    console.log("total_app", total_app);
    var nb_elevators = Math.ceil(total_app / 6);
    console.log("nb_elevators", nb_elevators);
    var nb_shaft = Math.ceil(nb_floors / 20);
    console.log("nb_shaft", nb_shaft);
    var price = nb_elevators * nb_shaft * selected_price_range;
     console.log("price", price);
    //updateQuantities(quantity);
 }
 //Quantity Commercial
 function shaft() {
    quantity_shaft = $("#commercial_nb_elevator").val();
    console.log("quantity_shaft", quantity_shaft);
 }
 //Quantity Hybrid
 function quantity_hyb() {
    var hybrid_occupants_max = parseInt($("#hybrid_nb_occupants").val());
    var hybrid_nbfloors = parseInt($("#hybrid_nb_floors").val());
    var hybrid_nbbasements = parseInt($("#hybrid_nb_basements").val());
    var selected_price_range = document.querySelector('input[name="radioanswer"]:checked').val();
    var hybrid_floors_total = Math.ceil(hybrid_nbfloors + hybrid_nbbasements);
    console.log("hybrid_floors_total", hybrid_floors_total);
    var hybrid_occupants_total = Math.ceil(hybrid_floors_total * hybrid_occupants_max);
    console.log("hybrid_occupants_total", hybrid_occupants_total);
    var hybrid_cage_total = Math.ceil(hybrid_occupants_total / 1000);
    console.log("hybrid_cage_total", hybrid_cage_total);
    var hybrid_shaft_total = Math.floor(hybrid_floors_total / 20);
    console.log("hybrid_shaft_total", hybrid_shaft_total);
    var hybrid_elevator_total = Math.ceil(hybrid_cage_total / hybrid_shaft_total);
    console.log("hybrid_elevator_total", hybrid_elevator_total);
    var total_price_categorie = Math.ceil(hybrid_elevator_total * selected_price_range);
    console.log("total _price_categorie", total_price_categorie);
 }
 //Quantity Corporate
 function quantity_corp() {
    var corporate_occupants_max = parseInt($("#corporate_nb_occupants").val());
    var corporate_nbfloors = parseInt($("#corporate_nb_floors").val());
    var coporate_nbbasements = parseInt($("#corporate_nb_basements").val());
    var corporate_floors_total = Math.ceil(corporate_nbfloors + coporate_nbbasements);
    console.log("corporate_floors_total", hybrid_floors_total);
    var corporate_occupants_total = Math.ceil(corporate_floors_total * corporate_occupants_max);
    console.log("corporate_occupants_total", corporate_occupants_total);
    var corporate_cage_total = Math.ceil(corporate_occupants_total / 1000);
    console.log("corporate_cage_total", corporate_cage_total);
    var corporate_shaft_total = Math.floor(corporate_floors_total / 20);
    console.log("corporate_shaft_total", corporate_shaft_total);
    var corporate_elevator_total = Math.ceil(corporate_cage_total / corporate_shaft_total);
    console.log("corporate_elevator_total", corporate_elevator_total);
 }
 function pricetotal() {
    console.log("pricetotal")
    var type = $("#select_building_type").val();
    console.log("type", type);
    if( type == "residential") {
        quantityResi();
         }
     else if ( type == "hybrid") {
         }
    else if( type == "commercial") {
         }
     else if ( type == "corporate") {
        }
 }
 
 