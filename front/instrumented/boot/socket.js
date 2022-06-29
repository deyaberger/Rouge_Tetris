function cov_18tuy8f6x2() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/boot/socket.js";
  var hash = "0df532e2aa0c604b0c691916c20858e4fcef246d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/boot/socket.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 4,
          column: 42
        }
      },
      "1": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 39
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 47
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 20
          },
          end: {
            line: 6,
            column: 21
          }
        },
        loc: {
          start: {
            line: 6,
            column: 33
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0df532e2aa0c604b0c691916c20858e4fcef246d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_18tuy8f6x2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_18tuy8f6x2();
import { boot } from 'quasar/wrappers';
import { io } from 'socket.io-client';
const socket = (cov_18tuy8f6x2().s[0]++, io('http://localhost:3000'));
export default boot(({
  app
}) => {
  cov_18tuy8f6x2().f[0]++;
  cov_18tuy8f6x2().s[1]++;
  app.config.globalProperties.$io = io;
  cov_18tuy8f6x2().s[2]++;
  app.config.globalProperties.$socket = socket;
});
export { socket };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldC5qcyJdLCJuYW1lcyI6WyJib290IiwiaW8iLCJzb2NrZXQiLCJhcHAiLCJjb25maWciLCJnbG9iYWxQcm9wZXJ0aWVzIiwiJGlvIiwiJHNvY2tldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsSUFBVCxRQUFxQixpQkFBckI7QUFDQSxTQUFTQyxFQUFULFFBQW1CLGtCQUFuQjtBQUVBLE1BQU1DLE1BQU0sNkJBQUdELEVBQUUsQ0FBQyx1QkFBRCxDQUFMLENBQVo7QUFFQSxlQUFlRCxJQUFJLENBQUMsQ0FBQztBQUFFRyxFQUFBQTtBQUFGLENBQUQsS0FBYTtBQUFBO0FBQUE7QUFDL0JBLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxnQkFBWCxDQUE0QkMsR0FBNUIsR0FBa0NMLEVBQWxDO0FBRCtCO0FBRS9CRSxFQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsZ0JBQVgsQ0FBNEJFLE9BQTVCLEdBQXNDTCxNQUF0QztBQUNELENBSGtCLENBQW5CO0FBS0EsU0FBU0EsTUFBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50JztcblxuY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCcpO1xuXG5leHBvcnQgZGVmYXVsdCBib290KCh7IGFwcCB9KSA9PiB7XG4gIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kaW8gPSBpbztcbiAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRzb2NrZXQgPSBzb2NrZXQ7XG59KTtcblxuZXhwb3J0IHsgc29ja2V0IH07XG4iXX0=