describe('Duke', function() {
  function square(y, x) {
    return element.all(by.className('square')).get(y*6 + x);
  }

  beforeEach(function() {
    browser.get('http://localhost:8080/src');
  });

  it('should load the page', function() {
    expect(browser.getTitle()).toEqual('Duke');
  });

  it('should move a footman to the corner', function() {
    square(2, 1).click();
    square(1, 1).click();

    square(1, 1).click();
    var destination = square(0, 0);
    destination.click();
    expect(destination.getText()).toEqual('footman');
  });
});
