import { Controller } from 'egg'

export default class ProfileController extends Controller {
  public async index() {
    const { ctx } = this
    ctx.body = await ctx.service.test.sayHi('profile')
  }

  public async getProfile() {
    //
  }

  public async follow() {
    //
  }

  public async unfollow() {
    //
  }

}
