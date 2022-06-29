function cov_t3gsqjnya() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/game/actions.js";
  var hash = "a9dddb0c0a4539b7773538fffbf626de1029bf26";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/game/actions.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 36
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 36
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "processGameState",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1,
            column: 56
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "setRoomState",
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      "2": {
        name: "quit",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 20
          }
        },
        loc: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a9dddb0c0a4539b7773538fffbf626de1029bf26"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_t3gsqjnya = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_t3gsqjnya();
export function processGameState({
  commit
}, gameState) {
  cov_t3gsqjnya().f[0]++;
  cov_t3gsqjnya().s[0]++;
  commit('setGameState', gameState);
}
export function setRoomState({
  commit
}, roomState) {
  cov_t3gsqjnya().f[1]++;
  cov_t3gsqjnya().s[1]++;
  commit('setRoomState', roomState);
}
export function quit({
  commit
}) {
  cov_t3gsqjnya().f[2]++;
  cov_t3gsqjnya().s[2]++;
  commit('quit');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOlsicHJvY2Vzc0dhbWVTdGF0ZSIsImNvbW1pdCIsImdhbWVTdGF0ZSIsInNldFJvb21TdGF0ZSIsInJvb21TdGF0ZSIsInF1aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBTyxTQUFTQSxnQkFBVCxDQUEwQjtBQUFFQyxFQUFBQTtBQUFGLENBQTFCLEVBQXNDQyxTQUF0QyxFQUFpRDtBQUFBO0FBQUE7QUFDdERELEVBQUFBLE1BQU0sQ0FBQyxjQUFELEVBQWlCQyxTQUFqQixDQUFOO0FBQ0Q7QUFFRCxPQUFPLFNBQVNDLFlBQVQsQ0FBc0I7QUFBRUYsRUFBQUE7QUFBRixDQUF0QixFQUFrQ0csU0FBbEMsRUFBNkM7QUFBQTtBQUFBO0FBQ2xESCxFQUFBQSxNQUFNLENBQUMsY0FBRCxFQUFpQkcsU0FBakIsQ0FBTjtBQUNEO0FBRUQsT0FBTyxTQUFTQyxJQUFULENBQWM7QUFBRUosRUFBQUE7QUFBRixDQUFkLEVBQTBCO0FBQUE7QUFBQTtBQUMvQkEsRUFBQUEsTUFBTSxDQUFDLE1BQUQsQ0FBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHYW1lU3RhdGUoeyBjb21taXQgfSwgZ2FtZVN0YXRlKSB7XG4gIGNvbW1pdCgnc2V0R2FtZVN0YXRlJywgZ2FtZVN0YXRlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJvb21TdGF0ZSh7IGNvbW1pdCB9LCByb29tU3RhdGUpIHtcbiAgY29tbWl0KCdzZXRSb29tU3RhdGUnLCByb29tU3RhdGUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVpdCh7IGNvbW1pdCB9KSB7XG4gIGNvbW1pdCgncXVpdCcpO1xufVxuIl19