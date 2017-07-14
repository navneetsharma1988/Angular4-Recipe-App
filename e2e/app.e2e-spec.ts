import { Angular4RecipeAppPage } from './app.po';

describe('angular4-recipe-app App', () => {
  let page: Angular4RecipeAppPage;

  beforeEach(() => {
    page = new Angular4RecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
