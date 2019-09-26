var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var port = process.env.PORT || 3000
var http = require('http').createServer(app);
var io = require('socket.io')(http);
const chat = require("../newsoftpro/models/chat");
var usernames = {};


app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
)

var path = require("path")
app.use(express.static(path.join(__dirname, 'uploads')))

var Users = require("./routes/users")
app.use("/users", Users)

var Admin = require("./routes/admin")
app.use("/users", Admin)

var Chat = require("./routes/Chat")
app.use("/users", Chat)

var Skills = require("./routes/skills")
app.use("/users", Skills)

var Projects = require("./routes/projects")
app.use("/users", Projects)

var Bids = require("./routes/bids")
app.use("/users", Bids)

var DevHome = require("./routes/DevHome")
app.use("/users", DevHome)

var CliHome = require("./routes/CliHome")
app.use("/users", CliHome)

var Bid_response = require("./routes/Bid_responses")
app.use("/users", Bid_response)

var Request_developers = require("./routes/Request_developers")
app.use("/users", Request_developers)

var Request_projects = require("./routes/Request_projects")
app.use("/users", Request_projects)

var Image = require("./routes/Images")
app.use("/users", Image)

var Conf_pro = require("./routes/Confirmed_projects")
app.use("/users", Conf_pro)

var Competition = require("./routes/Competition")
app.use("/users", Competition)

//setting up with socket for chat

const checked_user = {
    st: '',
    key: '',
    email: ''
}
const nMsg = {
    from: '',
    to: '',
    message: '',
    isViewed: Boolean,
    to_id : Number,
    from_id : Number
}

function show_users() {

    for (var i in usernames) {
        console.log('email :' + i + ' key: ' + usernames[i])
    }

}

function check_user(email) {

    for (var i in usernames) {
        if (i == email) {
            checked_user.st = 1;
            checked_user.key = usernames[i];
            checked_user.email = i;
            console.log('found user ' + i);
            break;


        } else {
            checked_user.st = 0;
            checked_user.key = '';
            checked_user.email = '';
            console.log('found user ' + i);
        }
    }
    console.log('status=' + checked_user.st + ' key ' + checked_user.key + ':' + checked_user.email);
    return checked_user;

}

io.on('connection', (socket) => {
    console.log('Socket opened');


    socket.on('disconnect', function () {
        console.log('Socket closed ' + usernames[socket.email] + ' was removed');
        delete usernames[socket.email];

        console.info(usernames);

    })



    socket.on('client_new_msg', function (data) {
        var checkedStatus = '';
        nMsg.from = data.sEmail;
        nMsg.to = data.rEmail;
        nMsg.to_id = data.rId;
        nMsg.from_id = data.fId;
        console.log("id:"+data.rId)
        nMsg.message = data.msg;
        checkedStatus = check_user(data.rEmail);
        if(nMsg.to == undefined || nMsg.from == undefined){
            console.log("msg not sent. Error in emails")
        }else{
        if (checkedStatus.st == 1) {
            socket.in(checkedStatus.key).broadcast.emit('server_new_message', {
                BEname: data.sName,
                BEmsg: data.msg,
                BEdate: new Date()
            })
            nMsg.isViewed = true;
            chat.create(nMsg);
            console.log('msg sent online :' + 'from' + nMsg.from + ' to ' + nMsg.to);
        } else {
            nMsg.isViewed = false;
            chat.create(nMsg);
            console.log('msg sent to databse :' + 'from :' + nMsg.from + ' to :' + nMsg.to);
        }
    }
    })

    socket.on('new_joinee', function (data) {

        if (data.email in usernames) {

        } else {
            var email = data.email
            socket.email = data.email;
            usernames[email] = socket.id;
            show_users();

        }
        console.info(usernames);
        console.log("new joined email: " + data.email);
    })

    socket.on('checkStatus', function (data) {
        var status = '';
        status = check_user(data.crEmail);
        socket.emit('user_status', {
            BEtStatus: status.st,
            BEtEmail : data.crEmail,
            BEtName : data.crName,
            BEfId : data.cuId,
            BEtId : data.crId
        })
    })


})



http.listen(port, function () {
    console.log("http server run on port:" + port);
})

//app.listen(port, function(){
 //   console.log("UDEVS Server is running on port:"+port)
//})