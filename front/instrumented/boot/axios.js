function cov_1pzna772yy() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/boot/axios.js";
  var hash = "9e00f59824ea1a854d3a1b67e49e53d265a0b964";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/boot/axios.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 12
        },
        end: {
          line: 10,
          column: 64
        }
      },
      "1": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 45
        }
      },
      "2": {
        start: {
          line: 19,
          column: 2
        },
        end: {
          line: 19,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 20
          },
          end: {
            line: 12,
            column: 21
          }
        },
        loc: {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 22,
            column: 1
          }
        },
        line: 12
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
    hash: "9e00f59824ea1a854d3a1b67e49e53d265a0b964"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1pzna772yy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1pzna772yy();
import { boot } from 'quasar/wrappers';
import axios from 'axios'; // Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = (cov_1pzna772yy().s[0]++, axios.create({
  baseURL: 'https://api.example.com'
}));
export default boot(({
  app
}) => {
  cov_1pzna772yy().f[0]++;
  cov_1pzna772yy().s[1]++;
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios; // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  cov_1pzna772yy().s[2]++;
  app.config.globalProperties.$api = api; // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});
export { api };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zLmpzIl0sIm5hbWVzIjpbImJvb3QiLCJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJhcHAiLCJjb25maWciLCJnbG9iYWxQcm9wZXJ0aWVzIiwiJGF4aW9zIiwiJGFwaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsSUFBVCxRQUFxQixpQkFBckI7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLE9BQWxCLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsR0FBRyw2QkFBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWE7QUFBRUMsRUFBQUEsT0FBTyxFQUFFO0FBQVgsQ0FBYixDQUFILENBQVQ7QUFFQSxlQUFlSixJQUFJLENBQUMsQ0FBQztBQUFFSyxFQUFBQTtBQUFGLENBQUQsS0FBYTtBQUFBO0FBQUE7QUFDL0I7QUFFQUEsRUFBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVdDLGdCQUFYLENBQTRCQyxNQUE1QixHQUFxQ1AsS0FBckMsQ0FIK0IsQ0FJL0I7QUFDQTs7QUFMK0I7QUFPL0JJLEVBQUFBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxnQkFBWCxDQUE0QkUsSUFBNUIsR0FBbUNQLEdBQW5DLENBUCtCLENBUS9CO0FBQ0E7QUFDRCxDQVZrQixDQUFuQjtBQVlBLFNBQVNBLEdBQVQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBib290IH0gZnJvbSAncXVhc2FyL3dyYXBwZXJzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8vIEJlIGNhcmVmdWwgd2hlbiB1c2luZyBTU1IgZm9yIGNyb3NzLXJlcXVlc3Qgc3RhdGUgcG9sbHV0aW9uXG4vLyBkdWUgdG8gY3JlYXRpbmcgYSBTaW5nbGV0b24gaW5zdGFuY2UgaGVyZTtcbi8vIElmIGFueSBjbGllbnQgY2hhbmdlcyB0aGlzIChnbG9iYWwpIGluc3RhbmNlLCBpdCBtaWdodCBiZSBhXG4vLyBnb29kIGlkZWEgdG8gbW92ZSB0aGlzIGluc3RhbmNlIGNyZWF0aW9uIGluc2lkZSBvZiB0aGVcbi8vIFwiZXhwb3J0IGRlZmF1bHQgKCkgPT4ge31cIiBmdW5jdGlvbiBiZWxvdyAod2hpY2ggcnVucyBpbmRpdmlkdWFsbHlcbi8vIGZvciBlYWNoIGNsaWVudClcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7IGJhc2VVUkw6ICdodHRwczovL2FwaS5leGFtcGxlLmNvbScgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJvb3QoKHsgYXBwIH0pID0+IHtcbiAgLy8gZm9yIHVzZSBpbnNpZGUgVnVlIGZpbGVzIChPcHRpb25zIEFQSSkgdGhyb3VnaCB0aGlzLiRheGlvcyBhbmQgdGhpcy4kYXBpXG5cbiAgYXBwLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRheGlvcyA9IGF4aW9zO1xuICAvLyBeIF4gXiB0aGlzIHdpbGwgYWxsb3cgeW91IHRvIHVzZSB0aGlzLiRheGlvcyAoZm9yIFZ1ZSBPcHRpb25zIEFQSSBmb3JtKVxuICAvLyAgICAgICBzbyB5b3Ugd29uJ3QgbmVjZXNzYXJpbHkgaGF2ZSB0byBpbXBvcnQgYXhpb3MgaW4gZWFjaCB2dWUgZmlsZVxuXG4gIGFwcC5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kYXBpID0gYXBpO1xuICAvLyBeIF4gXiB0aGlzIHdpbGwgYWxsb3cgeW91IHRvIHVzZSB0aGlzLiRhcGkgKGZvciBWdWUgT3B0aW9ucyBBUEkgZm9ybSlcbiAgLy8gICAgICAgc28geW91IGNhbiBlYXNpbHkgcGVyZm9ybSByZXF1ZXN0cyBhZ2FpbnN0IHlvdXIgYXBwJ3MgQVBJXG59KTtcblxuZXhwb3J0IHsgYXBpIH07XG4iXX0=