describe('duke ui', function() {
  it('should move a piece', function() {
    browser.get('http://localhost:8000');
    element(by.className('square')).click();
    element.all(by.className('move')).get(1).click();
    var square = element.all(by.className('square')).get(6)
    var img = square.element(by.tagName('img'))
    expect(img.getAttribute('src')).toMatch(/footman/);
  });
});
