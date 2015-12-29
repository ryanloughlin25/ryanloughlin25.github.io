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
    //move white front
    square(2, 1).click();
    square(1, 1).click();
    expect(square(1, 1).getText()).toEqual('footman');

    //move black so we can move white again
    square(4, 1).click();
    square(3, 1).click();
    expect(square(3, 1).getText()).toEqual('footman');

    //move white back
    square(1, 1).click();
    square(0, 0).click();
    expect(square(0, 0).getText()).toEqual('footman');
  });

  it('should take turns', function() {
    //try to move black
    square(4, 1).click();
    square(3, 1).click();
    expect(square(4, 1).getText()).toEqual('footman');

    //move white
    square(2, 1).click();
    square(1, 1).click();
    expect(square(1, 1).getText()).toEqual('footman');

    //try to move white again
    square(1, 1).click();
    square(0, 0).click();
    expect(square(1, 1).getText()).toEqual('footman');

    //move black
    square(4, 1).click();
    square(3, 1).click();
    expect(square(3, 1).getText()).toEqual('footman');
  });
});
