import { DevplanAngularUiPage } from './app.po';

describe('devplan-angular-ui App', function() {
  let page: DevplanAngularUiPage;

  beforeEach(() => {
    page = new DevplanAngularUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
