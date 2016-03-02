var AlbumsView = Backbone.View.extend({
  template: Handlebars.compile($("[data-name='albums']").html()),
  render: function() {
    this.$el.html(this.template({albums: this.collection.toJSON() }));
  },

  initialize: function() {
    this.$el = $("#albums");
    this.listenTo(this.collection, "change", this.render);
  }

});
