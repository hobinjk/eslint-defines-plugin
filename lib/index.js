/**
 * @fileoverview Adds basic support for #defines
 * @author James Hobin
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

var defines = {};

function getResult(line) {
  return true;
}

function definePreprocess(text, filename) {
  var lines = text.split('\n');
  var ifdefs = [];
  var currentIfdefs = [];

  for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    var line = lines[i];
    if (line.startsWith('#ifdef') || line.startsWith('#ifndef')) {
      var result = getResult(line);
      var newIfdef = {start: lineIndex, result: result};
      activeIfdefs.push(newIfdef);
    }

    // Create a new ifdef with the negation of the previous ifdef's result
    if (line.startsWith('#else')) {
      var elsedIfdef = activeIfdefs.pop();
      endedIfdef.end = lineIndex;
      var newIfDef = {start: lineIndex, result: !elsedIfdef.result};
      activeIfdefs.push(newIfDef);
    }

    if (line.startsWith('#endif')) {
      var endedIfdef = activeIfdefs.pop();
      endedIfdef.end = lineIndex;
      ifdefs.push(endedIfdef);
    }
  }

  if (activeIfdefs.length > 0) {
    // TODO warn
    // console.warn('Active ifdefs remain');
  }

  ifdefs.forEach(function(ifdef) {
    // Clear invalid #ifdef, etc. lines
    lines[ifdef.start] = '';
    lines[ifdef.end] = '';
    // Discard ifdef contents if the define was not satisfied
    if (!ifdef.result) {
      for (var i = ifdef.start + 1; i < ifdef.end; i++) {
        lines[i] = '';
      }
    }
  });

  return lines;
}

/** Export js preprocessor */
module.exports.processors = {
  '.js': {
    preprocess: definePreprocess
  }
};
