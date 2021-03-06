import { controller, get, DarukContext } from 'daruk';
import { BaseController } from './BaseController';

@controller()
export class TestController extends BaseController {

  @get('/test')
  public async index(ctx: DarukContext) {
    console.log('ctx', ctx);
    await ctx.render('index', {
      title: 'llll'
    });
  }
}
