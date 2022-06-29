function cov_25u4fh2z6v() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/router/routes.js";
  var hash = "fae6a7e5de2c9051fb57bcfda0cfb7728fa27b7a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/router/routes.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 15
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "1": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 53
        }
      },
      "2": {
        start: {
          line: 6,
          column: 35
        },
        end: {
          line: 6,
          column: 67
        }
      },
      "3": {
        start: {
          line: 7,
          column: 49
        },
        end: {
          line: 7,
          column: 81
        }
      },
      "4": {
        start: {
          line: 8,
          column: 41
        },
        end: {
          line: 8,
          column: 76
        }
      },
      "5": {
        start: {
          line: 17,
          column: 21
        },
        end: {
          line: 17,
          column: 54
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 15
          },
          end: {
            line: 4,
            column: 16
          }
        },
        loc: {
          start: {
            line: 4,
            column: 21
          },
          end: {
            line: 4,
            column: 53
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 29
          },
          end: {
            line: 6,
            column: 30
          }
        },
        loc: {
          start: {
            line: 6,
            column: 35
          },
          end: {
            line: 6,
            column: 67
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 7,
            column: 43
          },
          end: {
            line: 7,
            column: 44
          }
        },
        loc: {
          start: {
            line: 7,
            column: 49
          },
          end: {
            line: 7,
            column: 81
          }
        },
        line: 7
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 8,
            column: 35
          },
          end: {
            line: 8,
            column: 36
          }
        },
        loc: {
          start: {
            line: 8,
            column: 41
          },
          end: {
            line: 8,
            column: 76
          }
        },
        line: 8
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 17,
            column: 15
          },
          end: {
            line: 17,
            column: 16
          }
        },
        loc: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 17,
            column: 54
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fae6a7e5de2c9051fb57bcfda0cfb7728fa27b7a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_25u4fh2z6v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_25u4fh2z6v();
const routes = (cov_25u4fh2z6v().s[0]++, [{
  path: '/',
  component: () => {
    cov_25u4fh2z6v().f[0]++;
    cov_25u4fh2z6v().s[1]++;
    return import('layouts/MainLayout.vue');
  },
  children: [{
    path: '',
    component: () => {
      cov_25u4fh2z6v().f[1]++;
      cov_25u4fh2z6v().s[2]++;
      return import('src/pages/MenuPage.vue');
    }
  }, {
    path: ':room[:player]',
    component: () => {
      cov_25u4fh2z6v().f[2]++;
      cov_25u4fh2z6v().s[3]++;
      return import('src/pages/GamePage.vue');
    }
  }, {
    path: '/error',
    component: () => {
      cov_25u4fh2z6v().f[3]++;
      cov_25u4fh2z6v().s[4]++;
      return import('src/pages/ErrorServer.vue');
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => {
    cov_25u4fh2z6v().f[4]++;
    cov_25u4fh2z6v().s[5]++;
    return import('pages/ErrorNotFound.vue');
  }
}]);
export default routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJwYXRoIiwiY29tcG9uZW50IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixNQUFNQSxNQUFNLDZCQUFHLENBQ2I7QUFDRUMsRUFBQUEsSUFBSSxFQUFFLEdBRFI7QUFFRUMsRUFBQUEsU0FBUyxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsa0JBQU8sd0JBQVA7QUFBZ0MsR0FGbkQ7QUFHRUMsRUFBQUEsUUFBUSxFQUFFLENBQ1I7QUFBRUYsSUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsU0FBUyxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsb0JBQU8sd0JBQVA7QUFBZ0M7QUFBN0QsR0FEUSxFQUVSO0FBQUVELElBQUFBLElBQUksRUFBRSxnQkFBUjtBQUEwQkMsSUFBQUEsU0FBUyxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsb0JBQU8sd0JBQVA7QUFBZ0M7QUFBM0UsR0FGUSxFQUdSO0FBQUVELElBQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxJQUFBQSxTQUFTLEVBQUUsTUFBTTtBQUFBO0FBQUE7QUFBQSxvQkFBTywyQkFBUDtBQUFtQztBQUF0RSxHQUhRO0FBSFosQ0FEYSxFQVliO0FBQ0E7QUFDQTtBQUNFRCxFQUFBQSxJQUFJLEVBQUUsaUJBRFI7QUFFRUMsRUFBQUEsU0FBUyxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUEsa0JBQU8seUJBQVA7QUFBaUM7QUFGcEQsQ0FkYSxDQUFILENBQVo7QUFvQkEsZUFBZUYsTUFBZiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnbGF5b3V0cy9NYWluTGF5b3V0LnZ1ZScpLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7IHBhdGg6ICcnLCBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgnc3JjL3BhZ2VzL01lbnVQYWdlLnZ1ZScpIH0sXG4gICAgICB7IHBhdGg6ICc6cm9vbVs6cGxheWVyXScsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdzcmMvcGFnZXMvR2FtZVBhZ2UudnVlJykgfSxcbiAgICAgIHsgcGF0aDogJy9lcnJvcicsIGNvbXBvbmVudDogKCkgPT4gaW1wb3J0KCdzcmMvcGFnZXMvRXJyb3JTZXJ2ZXIudnVlJykgfSxcblxuICAgIF0sXG4gIH0sXG5cbiAgLy8gQWx3YXlzIGxlYXZlIHRoaXMgYXMgbGFzdCBvbmUsXG4gIC8vIGJ1dCB5b3UgY2FuIGFsc28gcmVtb3ZlIGl0XG4gIHtcbiAgICBwYXRoOiAnLzpjYXRjaEFsbCguKikqJyxcbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgncGFnZXMvRXJyb3JOb3RGb3VuZC52dWUnKSxcbiAgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiJdfQ==