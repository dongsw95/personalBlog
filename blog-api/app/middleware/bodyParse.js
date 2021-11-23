module.exports = (options) => {
  return async function bodyParse(ctx, next) {
    await next();

    let body = ctx.body;
    // TODO: parse ctx.body as uniform format
  };
};
