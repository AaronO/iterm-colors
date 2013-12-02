#!/usr/bin/env node

// Requires
var _ = require('underscore');

var fs = require('fs');

// Comannder
var prog = require('commander');

// etcd-dump's package.json file
var pkg = require('../package.json');

// Dumper class
var parser = require('../');

// General options
prog
.version(pkg.version);

// Parse and fallback to help if no args
if(_.isEmpty(prog.parse(process.argv).args)) { return prog.help(); }

function convertFile(filename) {
    // Output JSON color array
    console.log(JSON.stringify(
        parser(fs.readFileSync(filename)),
        null,
        4 // 4 spaces
    ));
}

// Parse files given on command line
prog.args.forEach(convertFile);
