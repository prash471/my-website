"use strict";

exports.__esModule = true;
exports.default = BasicChart;

var _inferno = require("inferno");

function BasicChart(_ref) {
  var data = _ref.data,
      settings = _ref.settings;
  // Define theme styles
  var theme = Object.assign({
    styles: {
      table: {},
      yAxis: {
        padding: '0px 15px 0px 15px',
        color: '#3d464d',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        borderRight: '1px solid #adadad'
      },
      xAxis: {
        padding: '7.5px',
        textAlign: 'center',
        borderTop: '1px solid #adadad',
        color: '#5b5b5b',
        textTransform: 'uppercase'
      },
      barContainer: {
        width: '100%'
      },
      bars: {
        margin: '0px 12.5px 12.5px 12.5px',
        height: '30px',
        transition: 'width 250ms',
        background: '#a0a0a0',
        display: 'block'
      },
      score: {
        color: '#5d5d5d',
        fontSize: '15px',
        position: 'relative',
        right: '-100%',
        marginLeft: '5px',
        top: '18%'
      },
      bottomCell: {
        borderTop: '1px solid #adadad',
        borderRight: '1px solid #adadad'
      },
      noData: {
        textAlign: 'center',
        padding: '100px'
      }
    },
    labels: {
      xAxis: 'Time'
    }
  }, settings);
  var maxValue = Math.max.apply(Math, data.map(function (row) {
    return row.score;
  }));
  return (0, _inferno.createVNode)(1, "table", "inferno-basic-chart", (0, _inferno.createVNode)(1, "tbody", null, [data.map(function (row) {
    return (0, _inferno.createVNode)(1, "tr", null, [(0, _inferno.createVNode)(1, "td", null, row.label, 0, {
      "style": theme.styles.yAxis
    }, null, null), (0, _inferno.createVNode)(1, "td", null, (0, _inferno.createVNode)(1, "div", null, row.score ? (0, _inferno.createVNode)(1, "figure", null, row.score, 0, {
      "style": theme.styles.score
    }, null, null) : '', 0, {
      "style": Object.assign({}, theme.styles.bars, {
        width: row.score / maxValue * 100 + "%",
        background: row.bg ? row.bg : theme.styles.bars.background
      })
    }, null, null), 2, {
      "style": theme.styles.barContainer
    }, null, null)], 4, null, null, null);
  }), !data.length ? (0, _inferno.createVNode)(1, "tr", null, [(0, _inferno.createVNode)(1, "td", null, "\xA0", 16, {
    "style": theme.styles.yAxis
  }, null, null), (0, _inferno.createVNode)(1, "td", null, "No data has been supplied.", 16, {
    "style": theme.styles.noData,
    "colSpan": "2"
  }, null, null)], 4, null, null, null) : null, (0, _inferno.createVNode)(1, "tr", null, [(0, _inferno.createVNode)(1, "td", null, "\xA0", 16, {
    "style": theme.styles.bottomCell
  }, null, null), (0, _inferno.createVNode)(1, "td", null, theme.labels.xAxis, 0, {
    "style": theme.styles.xAxis
  }, null, null)], 4, null, null, null)], 0, null, null, null), 2, {
    "style": theme.styles.table
  }, null, null);
}