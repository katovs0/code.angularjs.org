describe("api/ng.$sce", function() {
  beforeEach(function() {
    browser.get("index-nocache.html#!/api/ng.$sce");
  });

describe('SCE doc demo', function() {
  it('should sanitize untrusted values', function() {
    expect(element(by.css('.htmlComment')).getInnerHtml())
        .toBe('<span>Is <i>anyone</i> reading this?</span>');
  });

  it('should NOT sanitize explicitly trusted values', function() {
    expect(element(by.id('explicitlyTrustedHtml')).getInnerHtml()).toBe(
        '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
        'sanitization.&quot;">Hover over this text.</span>');
  });
});

});
