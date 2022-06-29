function cov_2gn47gdou9() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/index.js";
  var hash = "cfbb6db8d173e6d4108434db7a90af4270eab0bd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/index.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 20,
          column: 4
        }
      },
      "1": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 15
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 47
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cfbb6db8d173e6d4108434db7a90af4270eab0bd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2gn47gdou9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2gn47gdou9();
import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import game from './game';
import error from './error';
import createWebSocketPlugin from '../plugins/socket.js';
export default store(() => {
  cov_2gn47gdou9().f[0]++;
  const Store = (cov_2gn47gdou9().s[0]++, createStore({
    modules: {
      game,
      error
    },
    plugins: [createWebSocketPlugin()],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  }));
  cov_2gn47gdou9().s[1]++;
  return Store;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJnYW1lIiwiZXJyb3IiLCJjcmVhdGVXZWJTb2NrZXRQbHVnaW4iLCJTdG9yZSIsIm1vZHVsZXMiLCJwbHVnaW5zIiwic3RyaWN0IiwicHJvY2VzcyIsImVudiIsIkRFQlVHR0lORyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLEtBQVQsUUFBc0IsaUJBQXRCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixNQUE1QjtBQUVBLE9BQU9DLElBQVAsTUFBaUIsUUFBakI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLFNBQWxCO0FBRUEsT0FBT0MscUJBQVAsTUFBa0Msc0JBQWxDO0FBRUEsZUFBZUosS0FBSyxDQUFDLE1BQTBCO0FBQUE7QUFDN0MsUUFBTUssS0FBSyw2QkFBR0osV0FBVyxDQUFDO0FBQ3hCSyxJQUFBQSxPQUFPLEVBQUU7QUFDUEosTUFBQUEsSUFETztBQUVQQyxNQUFBQTtBQUZPLEtBRGU7QUFLeEJJLElBQUFBLE9BQU8sRUFBRSxDQUFDSCxxQkFBcUIsRUFBdEIsQ0FMZTtBQU94QjtBQUNBO0FBQ0FJLElBQUFBLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBVEksR0FBRCxDQUFkLENBQVg7QUFENkM7QUFhN0MsU0FBT04sS0FBUDtBQUNELENBZG1CLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3RvcmUgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4JztcblxuaW1wb3J0IGdhbWUgZnJvbSAnLi9nYW1lJztcbmltcG9ydCBlcnJvciBmcm9tICcuL2Vycm9yJztcblxuaW1wb3J0IGNyZWF0ZVdlYlNvY2tldFBsdWdpbiBmcm9tICcuLi9wbHVnaW5zL3NvY2tldC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlKCgvKiB7IHNzckNvbnRleHQgfSAqLykgPT4ge1xuICBjb25zdCBTdG9yZSA9IGNyZWF0ZVN0b3JlKHtcbiAgICBtb2R1bGVzOiB7XG4gICAgICBnYW1lLFxuICAgICAgZXJyb3IsXG4gICAgfSxcbiAgICBwbHVnaW5zOiBbY3JlYXRlV2ViU29ja2V0UGx1Z2luKCldLFxuXG4gICAgLy8gZW5hYmxlIHN0cmljdCBtb2RlIChhZGRzIG92ZXJoZWFkISlcbiAgICAvLyBmb3IgZGV2IG1vZGUgYW5kIC0tZGVidWcgYnVpbGRzIG9ubHlcbiAgICBzdHJpY3Q6IHByb2Nlc3MuZW52LkRFQlVHR0lORyxcbiAgfSk7XG5cbiAgcmV0dXJuIFN0b3JlO1xufSk7XG4iXX0=