import { ProductManFrontPage } from './app.po';

describe('product-man-front App', function() {
  let page: ProductManFrontPage;

  beforeEach(() => {
    page = new ProductManFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
