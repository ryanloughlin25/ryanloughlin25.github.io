var Duke = ng
  .Component({
    selector: 'duke-board',
    template: '<h1>Hello</h1>',
  })
  .Class({
    constructor: function () {},
  });

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(Duke);
});
