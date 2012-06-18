window.Room = Backbone.Model.extend({
  validateOnCreate: function(room_name) {
    var errors = [];
    
    if (!room_name) errors.push(i18n.room_name_blank);
    if (/[ ]+/.test(room_name)) errors.push(i18n.room_name_no_space);
    
    return errors;
  },
  save: function(room_name) {
    var that = this;
    
    $.ajax({
      url: "/rooms",
      type: "POST",
      data: {name: room_name},
      success: function(response) {
        that.trigger("roomCreatedEvent", response);
      }
    })
    
  }
})