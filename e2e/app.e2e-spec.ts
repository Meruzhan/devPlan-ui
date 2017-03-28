import { DevplanAngularUiPage } from './app.po';

describe('devplan-angular-ui App', function() {
  let page: DevplanAngularUiPage;

  beforeEach(() => {
    page = new DevplanAngularUiPage();
  });

  it('should display message saying data-picker.component works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('data-picker.component works!');
  });
});
