const { instanceTransaction } = require('../dataBase').getInstance();
const { statusCodes, statusMessages, emailActionsEnum } = require('../constants');

// const { userService, mailService } = require('../services');
const userService = require('../services/user.services')
const mailService = require('../services/mail.services')

const getAllUsers = () => {};

const changeUserStatus = () => {};

const deleteUser = async (req, res, next) => {
  const transaction = await instanceTransaction();
  try {
    const { params: { userID }, query: { prefLang = 'en' } } = req;

    const { name, email } = await userService.findUserById(userID) || {};

    await userService.deleteUser(userID, transaction);

    await mailService.sendMail(email, emailActionsEnum.DELETE_ACCOUNT, { name });

    await transaction.commit();

    res.json(statusMessages.USER_WAS_DELETED[prefLang]);
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
}
module.exports = {
  getAllUsers,
  changeUserStatus,
  deleteUser
}
