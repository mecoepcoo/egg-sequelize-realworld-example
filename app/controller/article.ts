import { Controller } from 'egg'

export default class ArticleController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('article')
  }

  public async getArticles() {
    //
  }

  public async getFeedArticles() {
    //
  }

  public async getArticle() {
    //
  }

  public async createArticle() {
    //
  }

  public async updateArticle() {
    //
  }

  public async deleteArticle() {
    //
  }

  public async addComment() {
    //
  }

  public async getComments() {
    //
  }

  public async favoriteArticle() {
    //
  }

  public async unfavoriteArticle() {
    //
  }

  public async getTags() {
    //
  }

}
