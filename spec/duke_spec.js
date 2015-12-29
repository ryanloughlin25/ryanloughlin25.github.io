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

  it('should flip a footman on move', function() {
    //move white
    square(0, 1).click();
    square(1, 1).click();
    expect(square(1, 1).getText()).toEqual('footman back');

    //move black so we can move white again
    square(5, 1).click();
    square(4, 1).click();
    expect(square(4, 1).getText()).toEqual('footman back');

    //move white
    square(1, 1).click();
    square(0, 0).click();
    expect(square(0, 0).getText()).toEqual('footman front');
  });

  it('should take turns', function() {
    //try to move black
    square(5, 1).click();
    square(4, 1).click();
    expect(square(5, 1).getText()).toEqual('footman front');

    //move white
    square(0, 1).click();
    square(1, 1).click();
    expect(square(1, 1).getText()).toEqual('footman back');

    //try to move white again
    square(1, 1).click();
    square(0, 0).click();
    expect(square(1, 1).getText()).toEqual('footman back');

    //move black
    square(5, 1).click();
    square(4, 1).click();
    expect(square(4, 1).getText()).toEqual('footman back');
  });

  it('should slide', function() {
    //try to move duke through friendly footman
    square(0, 2).click();
    square(0, 0).click();
    expect(square(0, 2).getText()).toEqual('duke front');

    //move white footman
    square(0, 1).click();
    square(1, 1).click();
    expect(square(1, 1).getText()).toEqual('footman back');

    //move black footman
    square(4, 2).click();
    square(3, 2).click();
    expect(square(3, 2).getText()).toEqual('footman back');

    //move white duke
    square(0, 2).click();
    square(0, 1).click();
    expect(square(0, 1).getText()).toEqual('duke back');

    //move black footman
    square(3, 2).click();
    square(2, 3).click();
    expect(square(2, 3).getText()).toEqual('footman front');

    //move white footman
    square(1, 2).click();
    square(1, 3).click();
    expect(square(1, 3).getText()).toEqual('footman back');

    //move black duke
    square(5, 2).click();
    square(5, 3).click();
    expect(square(5, 3).getText()).toEqual('duke back');

    //try to move white duke
    square(0, 1).click();
    square(3, 1).click();
    expect(square(0, 1).getText()).toEqual('duke back');

    //move white footman
    square(1, 1).click();
    square(0, 0).click();
    expect(square(0, 0).getText()).toEqual('footman front');

    //try to move black duke
    square(5, 3).click();
    square(1, 3).click();
    expect(square(5, 3).getText()).toEqual('duke back');

    //move black footman
    square(2, 3).click();
    square(2, 4).click();
    expect(square(2, 4).getText()).toEqual('footman back');

    //move white duke
    square(0, 1).click();
    square(5, 1).click();
    expect(square(5, 1).getText()).toEqual('duke front');

    //move black duke
    square(5, 3).click();
    square(1, 3).click();
    expect(square(1, 3).getText()).toEqual('duke front');
  });
});
