!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}((function(e){"use strict";var t="CodeMirror-activeline",n="CodeMirror-activeline-background",i="CodeMirror-activeline-gutter";function r(e){for(var r=0;r<e.state.activeLines.length;r++)e.removeLineClass(e.state.activeLines[r],"wrap",t),e.removeLineClass(e.state.activeLines[r],"background",n),e.removeLineClass(e.state.activeLines[r],"gutter",i)}function o(e,o){for(var a=[],s=0;s<o.length;s++){var c=o[s],l=e.getOption("styleActiveLine");if("object"==typeof l&&l.nonEmpty?c.anchor.line==c.head.line:c.empty()){var f=e.getLineHandleVisualStart(c.head.line);a[a.length-1]!=f&&a.push(f)}}(function(e,t){if(e.length!=t.length)return!1;for(var n=0;n<e.length;n++)if(e[n]!=t[n])return!1;return!0})(e.state.activeLines,a)||e.operation((function(){r(e);for(var o=0;o<a.length;o++)e.addLineClass(a[o],"wrap",t),e.addLineClass(a[o],"background",n),e.addLineClass(a[o],"gutter",i);e.state.activeLines=a}))}function a(e,t){o(e,t.ranges)}e.defineOption("styleActiveLine",!1,(function(t,n,i){var s=i!=e.Init&&i;n!=s&&(s&&(t.off("beforeSelectionChange",a),r(t),delete t.state.activeLines),n&&(t.state.activeLines=[],o(t,t.listSelections()),t.on("beforeSelectionChange",a)))}))}));