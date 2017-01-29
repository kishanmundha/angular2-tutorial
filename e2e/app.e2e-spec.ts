import { Angular2TutorialPage } from './app.po';

describe('angular2-tutorial App', function() {
  let page: Angular2TutorialPage;

  beforeEach(() => {
    page = new Angular2TutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
