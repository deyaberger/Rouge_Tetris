function cov_1m8mbb8cu1() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/getters.js";
  var hash = "6649c11adfe25b8cf7535c3c9abc282ef1813424";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/error/getters.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 22
        }
      },
      "1": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 20
        }
      }
    },
    fnMap: {
      "0": {
        name: "getPlayerError",
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
            column: 38
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "getRoomError",
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
            column: 36
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6649c11adfe25b8cf7535c3c9abc282ef1813424"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1m8mbb8cu1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1m8mbb8cu1();
export function getPlayerError(state) {
  cov_1m8mbb8cu1().f[0]++;
  cov_1m8mbb8cu1().s[0]++;
  return state.player;
}
export function getRoomError(state) {
  cov_1m8mbb8cu1().f[1]++;
  cov_1m8mbb8cu1().s[1]++;
  return state.room;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldHRlcnMuanMiXSwibmFtZXMiOlsiZ2V0UGxheWVyRXJyb3IiLCJzdGF0ZSIsInBsYXllciIsImdldFJvb21FcnJvciIsInJvb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBTyxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBO0FBQUE7QUFDcEMsU0FBT0EsS0FBSyxDQUFDQyxNQUFiO0FBQ0Q7QUFFRCxPQUFPLFNBQVNDLFlBQVQsQ0FBc0JGLEtBQXRCLEVBQTZCO0FBQUE7QUFBQTtBQUNsQyxTQUFPQSxLQUFLLENBQUNHLElBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRQbGF5ZXJFcnJvcihzdGF0ZSkge1xuICByZXR1cm4gc3RhdGUucGxheWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vbUVycm9yKHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5yb29tO1xufVxuIl19