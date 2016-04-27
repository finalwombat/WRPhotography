var fs = require('fs');
var images = fs.readFileSync(__dirname + '../../public/images/images.json', 'utf-8');

module.exports = function(app) {
    app.get('/galleries', function(req, res) {
        //console.log(images);
        res.json(images);
    });
    
    app.get('/album:title', function(req, res) {
        imagesObj = JSON.parse(images);
        console.log(req.params.title);
        var album = imagesObj.filter(function(album){
            return album.title === req.params.title;
        })
        res.json(JSON.stringify(album[0]));
    });
}