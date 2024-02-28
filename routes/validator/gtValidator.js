const { body } = require("express-validator");

const AddGTvalid = [
  body("height")
    .notEmpty()
    .withMessage("Height must be entered.")
    .isNumeric()
    .withMessage("Height is in sentemeter only."),
  body("weight")
    .notEmpty()
    .withMessage("Weight must be entered.")
    .isNumeric()
    .withMessage("Weight is in sentemeter only."),
];

module.exports = { AddGTvalid };
