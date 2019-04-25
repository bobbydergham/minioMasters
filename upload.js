var Minio = require('minio');
var Fs = require('fs');

var minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  useSSL: false,
  accessKey: 'MPJTDQFCBCGSZO5REUHH',
  secretKey: 'R+h0joTjDq3m7B5MMjbdvDKj1H9ZSRcyoo5LozVO'
});

var filePath = $('#upload-file');
var caption = $('#img-caption').val();


var fileStream = Fs.createReadStream(filePath);
var fileStat = Fs.stat(filePath, function (err, stats) {
  if (err) {
    return console.log(err);
  }
  minioClient.putObject('images', '40mbfile', fileStream, stats.size, function (err, etag) {
    return console.log(err, etag); // err should be null
  });
});
