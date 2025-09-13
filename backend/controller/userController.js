export const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  console.log(email, name, password);
  res.status(201).json({
    success: true,
  });
};
