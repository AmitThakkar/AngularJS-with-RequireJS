/**
 * Created by namita on 22/5/15.
 */
(function (require) {
    var usersRegistered = [
        "namita"
    ];
    var express = require('express'),
        bodyParser = require('body-parser');
    var app = express();
    app.use(express.static('Part-3'));
    app.use('/lib', express.static('lib'));
    app.use(bodyParser.json());
    app.get('/user', function (req, res) {
        res.json(usersRegistered);
    });
   /* app.delete('/todo/:index', function (req, res) {
    usersRegistered.splice(req.params.index, 1);
        res.send({status: 200});
    });*/
    app.post('/login', function (req, res) {
        usersRegistered.push(req.body.user);
        res.send({status: 200});
    });
    var server = app.listen(3000, function () {
        console.log('Code Chutney app listening at http://localhost:' + server.address().port);
    });
})(require);