// import module in application
let express = require('express');
let morgan = require('morgan');
let mongoose = require('mongoose');
let path = require('path');

// connect mongodb with mongoose
mongoose.connect('mongodb+srv://dangkhoaitt:dangkhoaitt@cluster0.sfhmv.mongodb.net/newstransport-local?retryWrites=true&w=majority',{ useNewUrlParser: true });
require('./model/init'); // init data
let app = express(); // khoi tao ung dung

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev')); // hien thi log cung morgan
app.use('/', require('./router'));  // nap router vao he thong


// run ung dung trn cong 82
app.listen(3007, 'localhost', () => {
  console.log(`App running port 3007`);
});