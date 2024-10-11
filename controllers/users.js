import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getUsers = asyncHandler( async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});

export const createUser = asyncHandler( async (req, res) => {
  const {
    body: { name, email, password }
  } = req;
  const found = await User.findOne({ where: { email } });
  if (found) throw new ErrorResponse('User with that email already exists', 400);
  const user = await User.create(req.body);
  res.status(201).json(user);
});

export const getUserById = asyncHandler( async (req, res) => {
  try {
    const {
      params: { id }
    } = req;
    const user = await User.findByPk(id);
    if (!user) throw new ErrorResponse('User not found', 404);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export const updateUser = asyncHandler( async (req, res) => {
  const {
    body: { name, email, password },
    params: { id }
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse('User not found', 404);
  await user.update(req.body);
  res.status(200).json(user);
});

export const deleteUser = asyncHandler( async (req, res) => {
  const {
    params: { id }
  } = req;
  const user = await User.findByPk(id);
  if (!user) throw new ErrorResponse('User not found');
  await user.destroy();
  res.json({ message: 'User deleted' });
});
