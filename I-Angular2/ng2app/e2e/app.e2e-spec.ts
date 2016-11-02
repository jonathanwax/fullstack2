import { Ng2appnewPage } from './app.po';

describe('ng2appnew App', function() {
  let page: Ng2appnewPage;

  beforeEach(() => {
    page = new Ng2appnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
