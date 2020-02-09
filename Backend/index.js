require('dotenv').config();
const express = require('express'),
  cors = require('cors'),
  path = require('path'),
  // eslint-disable-next-line import/no-extraneous-dependencies
  morgan = require('morgan'),
  compression = require('compression'),
  bodyParser = require('body-parser'),
  responseTime = require('response-time'),
  oneSignal = require('onesignal-node'),
  router = require('./Routes'),
  port = process.env.APP_PORT || 8001,
  version = process.env.API_VERSION || 1;

const app = express();
// eslint-disable-next-line max-len
global.pushClient = new oneSignal.Client(process.env.ONESIGNAL_APP_ID, process.env.ONESIGNAL_API_KEY);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(responseTime());
app.use(compression());
app.use(`/api/v${version}`, router);
app.use('/icon/amenity', express.static(path.join(__dirname, 'Public/Icons/Amenity')));
app.use('/image/hotel', express.static(path.join(__dirname, 'Public/Images/Hotel')));
app.use('/image/room', express.static(path.join(__dirname, 'Public/Images/Room')));
app.use('/image/profile', express.static(path.join(__dirname, 'Public/Images/Profile')));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('App Listen on Port ', port);
});
