window.CreateRoomView = Backbone.View.extend({
  initialize: function(options) {
    this.setupSelectors();
    this.model.on("roomCreatedEvent", this.roomCreatedHandler, this);
  },
  events: {
    'keypress #room_name': 'createRoom'
  },
  setupSelectors: function() {
    this.room_name = this.$("#room_name");
  },
  createRoom: function(event) {
    if (event.which === 13) {
      var room_name = this.room_name.val(),
          errors    = this.model.validateOnCreate(room_name);
      
      if (errors.length > 0) {
        alert(errors.join("<br />"));
      } else {
        this.model.save(room_name);
      }
    }
  },
  roomCreatedHandler: function(response) {
    var r = $.parseJSON(response);
    
    if (r.success === 1) window.location.href = "/rooms/" + r.channel;
  }
})