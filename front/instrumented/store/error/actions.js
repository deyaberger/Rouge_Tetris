function cov_2b66q1azj5() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/actions.js";
  var hash = "25dd7cbae17ef8e48717e05510e259aff9bc8970";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/actions.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 33
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 31
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "player",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 22
          }
        },
        loc: {
          start: {
            line: 1,
            column: 41
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "room",
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 20
          }
        },
        loc: {
          start: {
            line: 5,
            column: 39
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      "2": {
        name: "clear",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 21
          }
        },
        loc: {
          start: {
            line: 9,
            column: 34
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
    hash: "25dd7cbae17ef8e48717e05510e259aff9bc8970"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2b66q1azj5 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2b66q1azj5();
export function player({
  commit
}, hint) {
  cov_2b66q1azj5().f[0]++;
  cov_2b66q1azj5().s[0]++;
  commit('setPlayerError', hint);
}
export function room({
  commit
}, hint) {
  cov_2b66q1azj5().f[1]++;
  cov_2b66q1azj5().s[1]++;
  commit('setRoomError', hint);
}
export function clear({
  commit
}) {
  cov_2b66q1azj5().f[2]++;
  cov_2b66q1azj5().s[2]++;
  commit('clear');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnMuanMiXSwibmFtZXMiOlsicGxheWVyIiwiY29tbWl0IiwiaGludCIsInJvb20iLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLFNBQVNBLE1BQVQsQ0FBZ0I7QUFBRUMsRUFBQUE7QUFBRixDQUFoQixFQUE0QkMsSUFBNUIsRUFBa0M7QUFBQTtBQUFBO0FBQ3ZDRCxFQUFBQSxNQUFNLENBQUMsZ0JBQUQsRUFBbUJDLElBQW5CLENBQU47QUFDRDtBQUVELE9BQU8sU0FBU0MsSUFBVCxDQUFjO0FBQUVGLEVBQUFBO0FBQUYsQ0FBZCxFQUEwQkMsSUFBMUIsRUFBZ0M7QUFBQTtBQUFBO0FBQ3JDRCxFQUFBQSxNQUFNLENBQUMsY0FBRCxFQUFpQkMsSUFBakIsQ0FBTjtBQUNEO0FBRUQsT0FBTyxTQUFTRSxLQUFULENBQWU7QUFBRUgsRUFBQUE7QUFBRixDQUFmLEVBQTJCO0FBQUE7QUFBQTtBQUNoQ0EsRUFBQUEsTUFBTSxDQUFDLE9BQUQsQ0FBTjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHBsYXllcih7IGNvbW1pdCB9LCBoaW50KSB7XG4gIGNvbW1pdCgnc2V0UGxheWVyRXJyb3InLCBoaW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvb20oeyBjb21taXQgfSwgaGludCkge1xuICBjb21taXQoJ3NldFJvb21FcnJvcicsIGhpbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoeyBjb21taXQgfSkge1xuICBjb21taXQoJ2NsZWFyJyk7XG59XG4iXX0=