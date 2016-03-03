var $overlay = $("#overlay");

var TracksView = Backbone.View.extend({
    duration: 300,
    tempate: Handlebars.compile($("[data-name='tracks']").html()),

    open: function() {
      this.$el.add($overlay).fadeIn(300);
    },

    close: function(e) {
      e.preventDefault();
      this.fadeOut();
      history.back();
    },

    fadeOut: function() {
      $overlay.fadeOut(this.duration);
      this.$el.fadeOut(this.duration, function() {
        this.remove();
      }.bind(this));
    },

    render: function() {
      this.$el.html(this.template({
        tracks: this.collection.toJSON(I),
        album: this.album
      }));
      this.open();
    },


    initialize: function(options) {
      this.album = options.album;
      this.$el.appendTo(document.body);
    }
});
