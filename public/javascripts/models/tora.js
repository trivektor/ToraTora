// var Tora = Backbone.Model.extend({
//   initialize: function() {
//     this.setupPusher();
//   },
//   setupPusher: function() {
//     this.pusher = new Pusher("56d793f117cc69e4bc41");
//     this.channel = this.pusher.subscribe('tora-channel');
//     this.channel.bind('respond', function(data) {
//       $("#list").append("<li>" + data + "</li>");
//     })
//   },
//   send: function(text) {
//     $.ajax({
//       url: "/chat",
//       type: "POST",
//       data: {text: text},
//       success: function(response) {
//         
//       }
//     })
//   },
//   
// })