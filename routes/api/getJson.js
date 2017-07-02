exports.getinfo = async (ctx, next) => {
    ctx.body = {
        username: '我大三',
        brithday: 19880203
    }
}