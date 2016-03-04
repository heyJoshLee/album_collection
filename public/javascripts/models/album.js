var Album  = Backbone.Model.extend({
  parse: function(attrs) {
    attrs.tracks_url = "/albums/" + attrs.title;
    return attrs;
  }
});
