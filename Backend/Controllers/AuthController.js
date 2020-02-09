/* eslint-disable no-else-return */
// eslint-disable-next-line camelcase
const { forgot_password } = require('../Utils/email');
const {
  response, signToken, compareHashedString, sendEmail, generateOTP, uploadProfileImage
} = require('../Utils');
const { User, Token, OTP, Balance, BalanceHistories } = require('../Services');

// eslint-disable-next-line consistent-return
const register = async (req, res) => {
  const {
    // eslint-disable-next-line camelcase
    first_name, last_name, email, password, phone
  } = req.body;
  const data = {
    first_name, last_name, email, password, phone
  };
  if (!data.first_name || !data.last_name || !data.email || !data.password) {
    return response(res, 200, false, 'Please Provide a Valid Data.');
  }
  else {
    data.role_id = 2;
    await User.createUser(data).then(async (result) => {
      const id = result.insertId;
      await Balance.createBalance(id).then(async (balance) => {
        await BalanceHistories.createBalanceHistory(id, balance.insertId, { balance: 1000 });
      }).catch((error) => response(res, 200, false, 'Error At Storing Initial Balance.', error));
      const token = signToken({
        id, first_name, last_name, email, role_id: 2
      });
      await Token.putToken({ token }).then(() => response(res, 200, true, 'Register Success.', {
        token, first_name, last_name, email
      })).catch((error) => response(res, 200, false, 'Error At Storing Token', error));
    }).catch((error) => {
      if(error.errno === 1062) {
        return response(res, 200, false, 'Email has been used before. Please use different email or try logging in.')
      }
      else {
        return response(res, 200, false, 'Error At Registering User.', error);
      }
    });
  }
};

// eslint-disable-next-line consistent-return
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return response(res, 200, false, 'Please Provide a Valid Data.');
  }
  else {
    // eslint-disable-next-line consistent-return
    await User.getUserByEmail(email).then(async (result) => {
      if (result.length > 0) {
        if (compareHashedString(password, result[0].password)) {
          // eslint-disable-next-line camelcase
          const { id, first_name, last_name, role_id } = result[0];
          const token = signToken({
            id, first_name, last_name, email, role_id: 2
          });
          await Token.putToken(token).then(() => response(res, 200, true, 'Login Success.', {
            token, first_name, last_name, email
          })).catch((error) => response(res, 200, false, 'Error At Putting Token Into Database', error));
        }
        else {
          return response(res, 200, false, 'Password Missmatch. Please Try Again.');
        }
      }
      else {
        return response(res, 200, false, 'User not Found.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Finding Valid User Email.', error));
  }
};

const logout = async (req, res) => {
  Token.revokeToken(req.headers.jwt_token).then(() => response(res, 200, true, 'Logout Success.')).catch((error) => response(res, 200, false, 'Error At Logging Out User.', error));
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  // eslint-disable-next-line consistent-return
  await User.getUserByEmail(email).then(async (result) => {
    if (result.length > 0) {
      const otpCode = generateOTP();
      await OTP.putCode(otpCode, 1).then(async () => {
        const payload = {
          to: email,
          subject: 'Reset Password Request Email.',
          html: forgot_password(otpCode)
        };
        await sendEmail(payload).then((_result) => response(res, 200, true, 'Forgot Password Request Success.')).catch((error) => response(res, 200, false, 'Error At Sending Forgot Password Email.', error));
      }).catch((error) => response(res, 200, false, 'Error At Storing OTP Codes', error));
    }
    else {
      return response(res, 200, false, 'Email Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Validating User Email.', error));
};

const checkOTP = async (req, res) => {
  const { code } = req.body;
  await OTP.checkCode(code).then(async (result) => {
    if (result.length > 0) {
      await OTP.revokeCode(code).then((_result) => {
        if (_result.affectedRows > 0) {
          return response(res, 200, true, 'OTP Check Success. Your Code is Valid.');
        }
        else {
          return response(res, 200, false, 'Updating OTP Code Status Failed. Please Try Again');
        }
      }).catch((error) => response(res, 200, false, 'Error At Updating OTP Code Status', error));
    }
    else {
      return response(res, 200, false, 'OTP Code Invalid. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At OTP Checking', error));
};

const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  // eslint-disable-next-line consistent-return
  await User.getUserByEmail(email).then(async (result) => {
    if (result.length > 0) {
      const { id } = result[0];
      await User.updateUser(id, { password }).then((_result) => response(res, 200, true, 'Change Password Success.')).catch((error) => response(res, 200, false, 'Change Password Failed.', error));
    }
    else {
      return response(res, 200, false, 'Email Not Found.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Validating User Email.', error));
};

const getProfile = async (req, res) => {
  const { id } = req.auth;
  await User.getUserById(id).then((result) => {
    if(result.length > 0) {
      return response(res, 200, true, 'Data Found.', result[0]);
    }
    else {
      return response(res, 200, false, 'Fetching User Profile Failed. Please Try Again.');
    }
  }).catch((error) => response(res, 200, false, 'Error At Fetching User Profile', error));
};

const updateProfile = async (req, res) => {
  const { id } = req.auth;
  var data = {};
  await uploadProfileImage(req).then(async (result) => {
    data = result;
    data.role_id = 2;
    await User.updateUser(id, data).then(async (_result) => {
      if(_result.affectedRows > 0) {
        await User.getUserById(id).then((__result) => {
          if(__result.length > 0) {
            return response(res, 200, true, 'User Profile Updated Successfuly.', __result[0]);
          }
          else {
            return response(res, 200, false, 'Fetching User Profile Failed. Please Try Again.');
          }
        }).catch((error) => response(res, 200, false, 'Error At Fetching User Profile.', error));
      }
      else {
        return response(res, 200, false, 'Updating User Profile Failed. Please Try Again.');
      }
    }).catch((error) => response(res, 200, false, 'Error At Updating User Profile', error));
  }).catch((error) => response(res, 200, false, 'Error At Uploading User Profile Image.', error));
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  checkOTP,
  resetPassword,
  getProfile,
  updateProfile
};
