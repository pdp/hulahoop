import { HulawebPage } from './app.po';

describe('hulaweb App', function() {
  let page: HulawebPage;

  beforeEach(() => {
    page = new HulawebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
