'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('cities', function() {

    beforeEach(function() {
      browser.get('index.html#/cities');
    });


    it('should render cities when user navigates to /cities', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for cities/);
    });

  });
});
