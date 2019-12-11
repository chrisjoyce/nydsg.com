module.exports = (req: any, res: any) => {
  res.send("Hello world from the /api route!");
  console.log(process.env.SENDGRID_API_KEY);
};
