





// unknown codes above
// Happen when embede legitimate pages inside a malicious page.
// Rely on poor configurations from these web servers of legitimate page.
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req, res, next) => console.log('unknown codes'));

// Use the below two to prevent clickjacking from iframe.
/* app.use((req, res, next => {
    // can whitelist any domains that you want them to be able to access.
    // but not supported by every browsers, sadly.
    res.setHeader('Content-Security-Policy', 'frame-ancestor \'none\'; report-url /report;'); 
    next();
});*/
/* app.use((req, res, next) => {
    res.setHeader('X-Frame-Options', 'DENY'); // deny any iframe access, and appear void (default page) in the browser.
    next();
})*/

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
