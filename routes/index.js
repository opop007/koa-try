const router = require('koa-router')()
// const getJson = require('api/getJson')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2`s json'
  }
})

router.post('/api/getJson',async (ctx, next) => {
    ctx.body = {
        name: '我大三',
        brithday: 19880203
    }
})

module.exports = router
