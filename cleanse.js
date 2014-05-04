fs = require('fs')

var fakedata = [];
fs.readFile('./fakedata2.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var userEmail = 'jcrish@gmail.com';
  data = JSON.parse(data);
  for(var i = 0; i < data.length; i++ ){
      for(var key in data[i].person_info) {
        if(key != userEmail){
          var gravatar = data[i].person_info[key].thumbnail
          data[i]['senderGravatar'] = gravatar
        }

        delete data[i].person_info;
      }

      fakedata.push(data[i]);
  }

  writeData(fakedata);

});

var writeData = function(data){
  data = JSON.stringify(data);
  fs.writeFile("./fakedataresults.json", data, function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
  });
}
