const Joi = require('joi');

const { statusAccountEnum: { BLOCKED, ACTIVE } } = require('../../constants');

module.exports = Joi.object({
  role: Joi
      .valid(BLOCKED, ACTIVE)
      .required(),
});
