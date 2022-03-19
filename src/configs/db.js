const { connect } = require("mongoose");

module.exports = () => {
  connect(
    `mongodb+srv://vasukomuravelli:Vasu1234@cluster0.t3wyf.mongodb.net/happycredit`
  );
};
