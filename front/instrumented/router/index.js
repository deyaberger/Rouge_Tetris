function cov_ztzd09rh8() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/router/index.js";
  var hash = "4c608d9d8c118cb3a75ba373600ddd219a6bb4ce";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/router/index.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 19,
          column: 91
        }
      },
      "1": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 29,
          column: 4
        }
      },
      "2": {
        start: {
          line: 22,
          column: 27
        },
        end: {
          line: 22,
          column: 46
        }
      },
      "3": {
        start: {
          line: 31,
          column: 2
        },
        end: {
          line: 31,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 16,
            column: 22
          }
        },
        loc: {
          start: {
            line: 16,
            column: 54
          },
          end: {
            line: 32,
            column: 1
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 21
          }
        },
        loc: {
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 46
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 24
          },
          end: {
            line: 19,
            column: 91
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 18,
            column: 6
          },
          end: {
            line: 18,
            column: 25
          }
        }, {
          start: {
            line: 19,
            column: 7
          },
          end: {
            line: 19,
            column: 90
          }
        }],
        line: 17
      },
      "1": {
        loc: {
          start: {
            line: 19,
            column: 7
          },
          end: {
            line: 19,
            column: 90
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 19,
            column: 51
          },
          end: {
            line: 19,
            column: 67
          }
        }, {
          start: {
            line: 19,
            column: 70
          },
          end: {
            line: 19,
            column: 90
          }
        }],
        line: 19
      },
      "2": {
        loc: {
          start: {
            line: 28,
            column: 27
          },
          end: {
            line: 28,
            column: 92
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 28,
            column: 56
          },
          end: {
            line: 28,
            column: 62
          }
        }, {
          start: {
            line: 28,
            column: 65
          },
          end: {
            line: 28,
            column: 92
          }
        }],
        line: 28
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4c608d9d8c118cb3a75ba373600ddd219a6bb4ce"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ztzd09rh8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ztzd09rh8();
import { route } from 'quasar/wrappers';
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router';
import routes from './routes';
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(() => {
  cov_ztzd09rh8().f[0]++;
  const createHistory = (cov_ztzd09rh8().s[0]++, process.env.SERVER ? (cov_ztzd09rh8().b[0][0]++, createMemoryHistory) : (cov_ztzd09rh8().b[0][1]++, process.env.VUE_ROUTER_MODE === 'history' ? (cov_ztzd09rh8().b[1][0]++, createWebHistory) : (cov_ztzd09rh8().b[1][1]++, createWebHashHistory)));
  const Router = (cov_ztzd09rh8().s[1]++, createRouter({
    scrollBehavior: () => {
      cov_ztzd09rh8().f[1]++;
      cov_ztzd09rh8().s[2]++;
      return {
        left: 0,
        top: 0
      };
    },
    routes,
    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.MODE === 'ssr' ? (cov_ztzd09rh8().b[2][0]++, void 0) : (cov_ztzd09rh8().b[2][1]++, process.env.VUE_ROUTER_BASE))
  }));
  cov_ztzd09rh8().s[3]++;
  return Router;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJvdXRlIiwiY3JlYXRlUm91dGVyIiwiY3JlYXRlTWVtb3J5SGlzdG9yeSIsImNyZWF0ZVdlYkhpc3RvcnkiLCJjcmVhdGVXZWJIYXNoSGlzdG9yeSIsInJvdXRlcyIsImNyZWF0ZUhpc3RvcnkiLCJwcm9jZXNzIiwiZW52IiwiU0VSVkVSIiwiVlVFX1JPVVRFUl9NT0RFIiwiUm91dGVyIiwic2Nyb2xsQmVoYXZpb3IiLCJsZWZ0IiwidG9wIiwiaGlzdG9yeSIsIk1PREUiLCJWVUVfUk9VVEVSX0JBU0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsS0FBVCxRQUFzQixpQkFBdEI7QUFDQSxTQUNFQyxZQURGLEVBQ2dCQyxtQkFEaEIsRUFDcUNDLGdCQURyQyxFQUN1REMsb0JBRHZELFFBRU8sWUFGUDtBQUdBLE9BQU9DLE1BQVAsTUFBbUIsVUFBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWVMLEtBQUssQ0FBQyxNQUFpQztBQUFBO0FBQ3BELFFBQU1NLGFBQWEsNEJBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxNQUFaLCtCQUNsQlAsbUJBRGtCLGdDQUVqQkssT0FBTyxDQUFDQyxHQUFSLENBQVlFLGVBQVosS0FBZ0MsU0FBaEMsK0JBQTRDUCxnQkFBNUMsZ0NBQStEQyxvQkFBL0QsQ0FGaUIsQ0FBSCxDQUFuQjtBQUlBLFFBQU1PLE1BQU0sNEJBQUdWLFlBQVksQ0FBQztBQUMxQlcsSUFBQUEsY0FBYyxFQUFFLE1BQU87QUFBQTtBQUFBO0FBQUE7QUFBRUMsUUFBQUEsSUFBSSxFQUFFLENBQVI7QUFBV0MsUUFBQUEsR0FBRyxFQUFFO0FBQWhCO0FBQW1CLEtBRGhCO0FBRTFCVCxJQUFBQSxNQUYwQjtBQUkxQjtBQUNBO0FBQ0E7QUFDQVUsSUFBQUEsT0FBTyxFQUFFVCxhQUFhLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaLEtBQXFCLEtBQXJCLCtCQUE2QixLQUFLLENBQWxDLGdDQUFzQ1QsT0FBTyxDQUFDQyxHQUFSLENBQVlTLGVBQWxELENBQUQ7QUFQSSxHQUFELENBQWYsQ0FBWjtBQUxvRDtBQWVwRCxTQUFPTixNQUFQO0FBQ0QsQ0FoQm1CLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcm91dGUgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlUm91dGVyLCBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVXZWJIaXN0b3J5LCBjcmVhdGVXZWJIYXNoSGlzdG9yeSxcbn0gZnJvbSAndnVlLXJvdXRlcic7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuLypcbiAqIElmIG5vdCBidWlsZGluZyB3aXRoIFNTUiBtb2RlLCB5b3UgY2FuXG4gKiBkaXJlY3RseSBleHBvcnQgdGhlIFJvdXRlciBpbnN0YW50aWF0aW9uO1xuICpcbiAqIFRoZSBmdW5jdGlvbiBiZWxvdyBjYW4gYmUgYXN5bmMgdG9vOyBlaXRoZXIgdXNlXG4gKiBhc3luYy9hd2FpdCBvciByZXR1cm4gYSBQcm9taXNlIHdoaWNoIHJlc29sdmVzXG4gKiB3aXRoIHRoZSBSb3V0ZXIgaW5zdGFuY2UuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgcm91dGUoKC8qIHsgc3RvcmUsIHNzckNvbnRleHQgfSAqLykgPT4ge1xuICBjb25zdCBjcmVhdGVIaXN0b3J5ID0gcHJvY2Vzcy5lbnYuU0VSVkVSXG4gICAgPyBjcmVhdGVNZW1vcnlIaXN0b3J5XG4gICAgOiAocHJvY2Vzcy5lbnYuVlVFX1JPVVRFUl9NT0RFID09PSAnaGlzdG9yeScgPyBjcmVhdGVXZWJIaXN0b3J5IDogY3JlYXRlV2ViSGFzaEhpc3RvcnkpO1xuXG4gIGNvbnN0IFJvdXRlciA9IGNyZWF0ZVJvdXRlcih7XG4gICAgc2Nyb2xsQmVoYXZpb3I6ICgpID0+ICh7IGxlZnQ6IDAsIHRvcDogMCB9KSxcbiAgICByb3V0ZXMsXG5cbiAgICAvLyBMZWF2ZSB0aGlzIGFzIGlzIGFuZCBtYWtlIGNoYW5nZXMgaW4gcXVhc2FyLmNvbmYuanMgaW5zdGVhZCFcbiAgICAvLyBxdWFzYXIuY29uZi5qcyAtPiBidWlsZCAtPiB2dWVSb3V0ZXJNb2RlXG4gICAgLy8gcXVhc2FyLmNvbmYuanMgLT4gYnVpbGQgLT4gcHVibGljUGF0aFxuICAgIGhpc3Rvcnk6IGNyZWF0ZUhpc3RvcnkocHJvY2Vzcy5lbnYuTU9ERSA9PT0gJ3NzcicgPyB2b2lkIDAgOiBwcm9jZXNzLmVudi5WVUVfUk9VVEVSX0JBU0UpLFxuICB9KTtcblxuICByZXR1cm4gUm91dGVyO1xufSk7XG4iXX0=