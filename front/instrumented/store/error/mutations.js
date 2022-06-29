function cov_1dgwbzpbcw() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/mutations.js";
  var hash = "5bf732bfd842a284cc0be6fb502ce59f31ed62d0";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/mutations.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 23
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 21
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 20
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "setPlayerError",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 30
          }
        },
        loc: {
          start: {
            line: 1,
            column: 45
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "setRoomError",
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
            column: 43
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
            column: 29
          },
          end: {
            line: 12,
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
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "5bf732bfd842a284cc0be6fb502ce59f31ed62d0"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1dgwbzpbcw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1dgwbzpbcw();
export function setPlayerError(state, error) {
  cov_1dgwbzpbcw().f[0]++;
  cov_1dgwbzpbcw().s[0]++;
  state.player = error;
}
export function setRoomError(state, error) {
  cov_1dgwbzpbcw().f[1]++;
  cov_1dgwbzpbcw().s[1]++;
  state.room = error;
}
export function clear(state) {
  cov_1dgwbzpbcw().f[2]++;
  cov_1dgwbzpbcw().s[2]++;
  state.player = '';
  cov_1dgwbzpbcw().s[3]++;
  state.room = '';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRQbGF5ZXJFcnJvciIsInN0YXRlIiwiZXJyb3IiLCJwbGF5ZXIiLCJzZXRSb29tRXJyb3IiLCJyb29tIiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCQyxLQUEvQixFQUFzQztBQUFBO0FBQUE7QUFDM0NELEVBQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlRCxLQUFmO0FBQ0Q7QUFFRCxPQUFPLFNBQVNFLFlBQVQsQ0FBc0JILEtBQXRCLEVBQTZCQyxLQUE3QixFQUFvQztBQUFBO0FBQUE7QUFDekNELEVBQUFBLEtBQUssQ0FBQ0ksSUFBTixHQUFhSCxLQUFiO0FBQ0Q7QUFFRCxPQUFPLFNBQVNJLEtBQVQsQ0FBZUwsS0FBZixFQUFzQjtBQUFBO0FBQUE7QUFDM0JBLEVBQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLEVBQWY7QUFEMkI7QUFFM0JGLEVBQUFBLEtBQUssQ0FBQ0ksSUFBTixHQUFhLEVBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZXRQbGF5ZXJFcnJvcihzdGF0ZSwgZXJyb3IpIHtcbiAgc3RhdGUucGxheWVyID0gZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb29tRXJyb3Ioc3RhdGUsIGVycm9yKSB7XG4gIHN0YXRlLnJvb20gPSBlcnJvcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKHN0YXRlKSB7XG4gIHN0YXRlLnBsYXllciA9ICcnO1xuICBzdGF0ZS5yb29tID0gJyc7XG59XG4iXX0=