function update_status(o_id) {
  var element = "#order_status_" + o_id
  $.ajax({
        url: "/order/update_status", 
        type: "POST", 
        data: 'id=' + o_id + '&status=' + $(element).val()
   })
}