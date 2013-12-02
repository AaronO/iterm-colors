#!/usr/bin/env node

// Requires
var _ = require('underscore');

var fs = require('fs');
var path = require('path');

// Comannder
var prog = require('commander');

// etcd-dump's package.json file
var pkg = require('../package.json');

// Dumper class
var parser = require('../');

// General options
prog
.version(pkg.version)
.option('-p, --pretty', 'Pretty print JSON');


function jsonify(data) {
    // Pretty print if activated
    if(prog.pretty) {
        return JSON.stringify(
            data,
            null,
            4 // 4 spaces
        );
    }

    // Otherwise print inline
    return JSON.stringify(data);
}

// Commands
prog
.command('compile [filename]')
.description('Compile an *.itermcolors file to a JSON scheme')
.action(function(filename, opts) {

    // Output JSON color array
    console.log(jsonify(
        parser(fs.readFileSync(filename))
    ));
});

prog
.command('bundle [dir]')
.description('Bundle a given directory of schemes to one json file')
.action(function(dir, opts) {

    // Merge scheme's together and add name attribute based on filename
    var bundle = fs.readdirSync(dir).map(function(filename) {
        var name = filename.split('.')[0];
        var data = require('../' + path.join(dir, filename));
        data.name = name;

        return data;
    }).reduce(function(bundle, data) {
        bundle[data.name] = data;
        return bundle;
    }, {});

    // Output bundle's JSON
    console.log(jsonify(bundle));
});


// Parse and fallback to help if no args
if(_.isEmpty(prog.parse(process.argv).args)) { return prog.help(); }
