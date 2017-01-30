import { UserManager2Page } from './app.po';

describe('user-manager-2 App', function() {
  let page: UserManager2Page;

  beforeEach(() => {
    page = new UserManager2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
