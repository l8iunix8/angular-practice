var fs = require("fs");
module.exports = {
  writeCommentJSON: function (newUser) {
    //先將原本的 json 檔讀出來
    fs.readFile("./public/comment.json", function (err, userInfo) {
      if (err) {
        return console.error(err);
      }

      //將二進制數據轉換為字串符
      var user = userInfo.toString();
      user = JSON.parse(user);
      //將傳來的資訊推送到數組對象中
      user.push(newUser);
      //   直接傳新東西進來(另一種寫法)
      //   user = newUser;
      //因為寫入文件（json）只認識字符串或二進制數，所以需要將json對象轉換成字符串
      var str = JSON.stringify(user);
      //將字串符傳入您的 json 文件中
      fs.writeFile("./public/comment.json", str, function (err) {
        if (err) {
          console.error(err);
        }
        console.log("Add new user to userInfo...");
      });
    });
  }
};
