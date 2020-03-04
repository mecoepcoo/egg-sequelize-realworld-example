import { Controller } from 'egg'

export default class UserController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('user')
  }

  public async login() {
    //
  }

  public async register() {
    //
  }

  public async getUser() {
    //
  }

  public async updateUser() {
    //
  }

}
