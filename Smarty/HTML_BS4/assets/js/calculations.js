//calculations forms

//residential

    function QuantityResidential() {

        var Appartments = parseInt(document.getElementById("residential_appartments").value);
        var Floors = parseInt(document.getElementById("residential_floors").value);
        var total = Math.ceil(Appartments/(Floors*6));
        var total2 = Math.ceil(Floors/20);
        quantity = total+total2;
        console.log("quantity",quantity);
        updateQuantity(quantity);
        InstallationTotal();
    }

    function QuantityCommercial(){
        var Commercial = parseInt(document.getElementById("commercial_shaft").value);
        updateQuantity(quantity);
        RangePriceXelevator();
        InstallationTotal();
        console.log("quantity",quantity);
        
    }

    function QuantityCorporate(){

        var Floors = parseInt(document.getElementById("corporate_floors").value);
        var Basements = parseint(document.getElementById("corporate_basements").value);
        var MaxOccupants = parseInt(document.getElementById)("corporate_occupants".value);
        var total = Math.ceil((MaxOccupants/Floors)*(Floors+Basements));
        quantity = total/1000;
        console.log("quantity",quantity);
        updateQuantity(quantity);
        InstallationTotal();

    }

    function QuantityHybrid(){

        var Floors = parseInt(document.getElementById)("hybrid_floors".value);
        var Basements = parseint(document.getElementById)("hybrid_basements".value);
        var MaxOccupants = parseInt(document.getElementById)("hybrid_occupants".value);
        var total = Math.ceil((MaxOccupants/Floors)*(Floors+Basements));
        quantity = total/1000;
        console.log("quantity",quantity);
        updateQuantity(quantity);
        InstallationTotal();
    }
