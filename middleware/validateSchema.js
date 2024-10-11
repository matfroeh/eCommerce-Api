import userSchema from "../schemas/userSchema.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const validateUserSchema = async (req, res, next) => {
  try {
    const { error } = await userSchema.validateAsync(req.body);
    if (error) {
      return next(new ErrorResponse(error.message, 404));
    }
  } catch (error) {
    return next(new ErrorResponse(error.message, 404));
  }
  next();
};

