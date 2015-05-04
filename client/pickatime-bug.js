Template.pickatime.rendered = function () {
  var template = this;
  template.timepicker = this.$('.timepicker').pickatime({
    min: [21,00],
    max: [22,00]
  });

  template.timepickerlate = this.$('.timepicker-late').pickatime({
    min: [21,00],
    max: [2,00]
  });
};
