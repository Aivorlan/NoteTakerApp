var express = require('express');
var fs = require('fs');
var path = require('path');
var uuid = require('uuid');

const notes = require('./Develop/db/db.json');

let app = express();
let PORT = process.env.PORT || 3306;

