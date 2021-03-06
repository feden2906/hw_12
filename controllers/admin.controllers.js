const { instanceTransaction } = require('../dataBase').getInstance();
const { statusCodes, statusMessages, emailActionsEnum } = require('../constants');
const { ErrorHandler } = require('../helpers');

const { userService, mailService } = require('../services');

const getBlockedUsers = async (req, res, next) => {
  try {
    const users = await userService.findUsers(req.query);

    res.json(users);
  } catch (e) {
    next(e);
  }
};

const changeUserStatus = async (req, res, next) => {
  const transaction = await instanceTransaction();
  try {
    const { params: { userID }, query: { prefLang = 'en' } } = req;

    // TODO
    await userService.updateUser(userID, req.body, transaction);

    await transaction.commit();
    res.json(statusMessages.USER_STATUS_WAS_UPDATE[prefLang]);
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
};

const deleteUser = async (req, res, next) => {
  const transaction = await instanceTransaction();
  try {
    const { params: { userID }, query: { prefLang = 'en' } } = req;

    const { name, email } = await userService.findUserById(userID) || {};

    if (!email) {
      throw new ErrorHandler(statusMessages.USERS_NOT_FOUND[prefLang], statusCodes.BAD_REQUEST);
    }

    await userService.deleteUser(userID, transaction);

    await mailService.sendMail(email, emailActionsEnum.DELETE_ACCOUNT, { name });

    await transaction.commit();

    res.json(statusMessages.USER_WAS_DELETED[prefLang]);
  } catch (e) {
    await transaction.rollback();
    next(e);
  }
};
module.exports = {
  getBlockedUsers,
  changeUserStatus,
  deleteUser
};
