//calculations forms

//residential

    function QuantityResidential() {

        var Appartments = $("residential_appartments").val();
        var Floors = $("residential_floors").val();
        var total = Math.ceil(Appartments/(Floors*6));
        var total2 = Math.ceil(Floors/20);
        quantity = total+total2;
        console.log("quantity",quantity);
        
    }

    
