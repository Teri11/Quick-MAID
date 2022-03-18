// alert news...
// let restaurant=confirm("We'd like to show you notifications for the latest pizza offers and updates.")
// alert("Thank you for your response\n we are here to serve you better\n and welcome again.");

// hover on landing page image..
$(document).ready(function() {
    $("#work1").hover(function(){
    $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
     }, function(){
    $(".work" ,this).slideToggle(100, "linear").display(100, "linear");
    });
  });
  
  
  
  $("#palace").on("submit", function (e) {
    e.preventDefault();
  
  
  
  let pizza=""
  if(morning.checked) {
    pizza="small";
  
  }else if(midday.checked){
    pizza="medium";
  }else if(evenings.checked){
    pizza="large";
  };
  
  
  if(pizza=="Morning"){ 
   
    $("#size").append("morning")
    
  }else if(pizza=="midday"){
  
    $("#size").append("midday")
   
  }else if(pizza=="evenings"){
   
    $("#size").append("evenings")
   
  }
  
  
  let crust=""
  if(compound.checked) {
    crust="compound";
  
  }else if(backyard.checked){
    crust="backyard";
  }else if(garbage.checked){
    crust="garbage";
  };
  
  if(crust=="compound"){ 
   
    $("#crust").append("compound")
    
  }else if(crust=="backyard"){
   
    $("#crust").append("backyard")
   
  }else if(crust=="garbage"){
  
    $("#crust").append("garbage")
   
  }
  
  let toppings=""
  if(feeding_birds.checked) {
    toppings="feeding_birds";
  
  }else if(watering_flowers.checked){
    toppings="supreme";
  }else if(folding.checked){
    toppings="folding";
  };
  
  if(toppings=="feeding_birds"){ 
    
    $("#toppings").append("feeding_birds")
    
  }else if(toppings=="watering_flowers"){
  
    $("#toppings").append("watering_flowers")
   
  }else if(toppings=="folding"){
  
    $("#toppings").append("folding")
   
  }
  
  
  
  // adddition of checkout..
  var value = $("input[type=radio][name=pizza]:checked").val();
          if (value=="morning") {
             value=800;
          }else if(value=="midday"){
            value=10010;
         }else if(value=="evenings"){
           value=1500;
         }else{
           value=0;
         }
         
         var crustyy = $("input[type=radio][name=crusty]:checked").val();
         if (crustyy=="compound") {
            crustyy=100;
         }else if(crustyy=="backyard"){
           crustyy=100;
        }else if(crustyy=="garbage"){
          crustyy=100;
        }else{
          crustyy=0;
        }
  
        var topz = $("input[type=radio][name=toppings]:checked").val();
         if (topz=="feeding_bird") {
            topz=50;
         }else if(topz=="watering_flowers"){
           topz=50;
        }else if(topz=="folding"){
          topz=50;
        }else{
          topz=0;
        }
        let quantity=$("#number").val();
        $("#quantity").html(quantity);
        totalCost=value +crustyy +topz;
        totalCost=totalCost*quantity;
        $("#price").html(totalCost);
        
  
  // end of addition..
  
  
  
  
  let name=""
  if(karen.selected){
    name="karen";
  }else if(westland.selected){
    name="westland";
  }else if(rongai.selected){
    name="rongai";
  }else if(syokimau.selected){
    name="syokimau";
  }else if(kitengela.selected){
    name="kitengela";
  }else if(kileleshwa.selected){
    name="kileleshwa";
  }else if(kitusuru.selected){
    name="kitusuru";
  }else if(parklands.selected){
    name="parklands";
  }
  
  
  
  if(name=="karen"){
    $("#name").append("karen")
  }else if(name=="westland"){
    $("#name").append("westland")
  }else if(name=="rongai"){
    $("#name").append("rongai")
  }else if(name=="syokimau"){
    $("#name").append("syokimau")
  }else if(name=="kitengela"){
    $("#name").append("kitengela")
  }else if(name=="kileleshwa"){
    $("#name").append("kileleshwa")
  }else if(name=="kitusuru"){
    $("#name").append("kitusuru")
  }else if(name=="saint_louis"){
    $("#name").append("parklands")
  }
  
  });
  
  
  
  // form validation
    $("#btnn").on("click", function(event) {
      event.preventDefault();
              var name = $("#namee").val()
              var contact = $("#contactt").val()
              var destination = $("#destinationn").val()
              alert("Thank you" +" " + name + ",\n We have received your order for: "+" "+ contact+" "+ ",\n Your order will be delivered to your location in:"+" "+ destination)
  });
  
  
  
      // hide alert....
  $(document).ready(function(){
    $("#add").click(function(){
    $("#exampleModal").hide();
    });
    $("#add").click(function(){
    $("#exampleModal2").show();
    });
    });
    $(document).ready(function(){
      $("#proceed").click(function(){
      $("#exampleModal2").hide();
      });
      $("#proceed").click(function(){
      $("#exampleModal1").show();
      });
      });
      $(document).ready(function(){
        $("#btnn").click(function(){
        $("#exampleModal1").hide();
        });
        $("#btnn").click(function(){
        $("#end").show();
        });
        });