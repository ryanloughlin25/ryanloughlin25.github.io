describe('move footman', function() {
  var sourceSquare = element.all(by.className('square')).get(28);
  var destinationSquare = element.all(by.className('square')).get(27)
  var img = null;

  beforeEach(function() {
    browser.get('http://localhost:8000');
    sourceSquare.click();
    destinationSquare.click();
    img = destinationSquare.element(by.tagName('img'));
  });

  it('should move a piece', function() {
    expect(img.getAttribute('src')).toMatch(/footman/);
  });

  it('should flip a piece', function() {
    expect(img.getAttribute('src')).toMatch(/back/);
  });
});
