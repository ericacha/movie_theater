var Ticket = {
  init:function() {
    this.price = 4
  },
  setPrice:function(input) {
    this.price += input;
  }
};


var newTicket = Object.create(Ticket);

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();
    newTicket.init();

    var price = parseInt($("select#age").val());

    newTicket.setPrice(price);

    var totalPrice = newTicket.price;

    $("#final_price").text(totalPrice);
  });
});
