function cov_2b66ts9ky1() {
  var path = "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/game/mutations.js";
  var hash = "6f6ee0f0ddd77bf43088a0c7ab9646f2bdff8419";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/lewisbonnetete/Desktop/Rouge_Tetris/front/src/store/game/mutations.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 35
        }
      },
      "1": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 42
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 34
        }
      },
      "3": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 50
        }
      },
      "4": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 43
        }
      },
      "5": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 39
        }
      },
      "6": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 66
        }
      },
      "7": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 9,
          column: 65
        }
      },
      "8": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "9": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 11,
          column: 34
        }
      },
      "10": {
        start: {
          line: 12,
          column: 2
        },
        end: {
          line: 12,
          column: 34
        }
      },
      "11": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 30
        }
      },
      "12": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 23
        }
      },
      "13": {
        start: {
          line: 21,
          column: 2
        },
        end: {
          line: 21,
          column: 20
        }
      },
      "14": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 30
        }
      },
      "15": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 23,
          column: 24
        }
      },
      "16": {
        start: {
          line: 24,
          column: 2
        },
        end: {
          line: 24,
          column: 22
        }
      },
      "17": {
        start: {
          line: 25,
          column: 2
        },
        end: {
          line: 25,
          column: 34
        }
      },
      "18": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 34
        }
      },
      "19": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 27,
          column: 22
        }
      },
      "20": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 20
        }
      },
      "21": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 29,
          column: 22
        }
      }
    },
    fnMap: {
      "0": {
        name: "setGameState",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 47
          },
          end: {
            line: 13,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "setRoomState",
        decl: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 15,
            column: 28
          }
        },
        loc: {
          start: {
            line: 15,
            column: 47
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 15
      },
      "2": {
        name: "quit",
        decl: {
          start: {
            line: 19,
            column: 16
          },
          end: {
            line: 19,
            column: 20
          }
        },
        loc: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 30,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6f6ee0f0ddd77bf43088a0c7ab9646f2bdff8419"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2b66ts9ky1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2b66ts9ky1();
export function setGameState(state, gameState) {
  cov_2b66ts9ky1().f[0]++;
  cov_2b66ts9ky1().s[0]++;
  state.gameOn = gameState.game_on;
  cov_2b66ts9ky1().s[1]++;
  state.gamePaused = gameState.game_pause;
  cov_2b66ts9ky1().s[2]++;
  state.master = gameState.master;
  cov_2b66ts9ky1().s[3]++;
  state.playerHasLost = gameState.player_has_lost;
  cov_2b66ts9ky1().s[4]++;
  state.playerName = gameState.player_name;
  cov_2b66ts9ky1().s[5]++;
  state.roomName = gameState.room_name;
  cov_2b66ts9ky1().s[6]++;
  state.rowsAboutToBeBlocked = gameState.rows_about_to_be_blocked;
  cov_2b66ts9ky1().s[7]++;
  state.rowsAboutToDisappear = gameState.rows_about_to_disappear;
  cov_2b66ts9ky1().s[8]++;
  state.spectres = gameState.spectres;
  cov_2b66ts9ky1().s[9]++;
  state.tetris = gameState.tetris;
  cov_2b66ts9ky1().s[10]++;
  state.winner = gameState.winner;
}
export function setRoomState(state, roomState) {
  cov_2b66ts9ky1().f[1]++;
  cov_2b66ts9ky1().s[11]++;
  state.roomState = roomState;
}
export function quit(state) {
  cov_2b66ts9ky1().f[2]++;
  cov_2b66ts9ky1().s[12]++;
  state.gameOn = false;
  cov_2b66ts9ky1().s[13]++;
  state.master = '';
  cov_2b66ts9ky1().s[14]++;
  state.playerHasLost = false;
  cov_2b66ts9ky1().s[15]++;
  state.playerName = '';
  cov_2b66ts9ky1().s[16]++;
  state.roomName = '';
  cov_2b66ts9ky1().s[17]++;
  state.rowsAboutToBeBlocked = [];
  cov_2b66ts9ky1().s[18]++;
  state.rowsAboutToDisappear = [];
  cov_2b66ts9ky1().s[19]++;
  state.spectres = {};
  cov_2b66ts9ky1().s[20]++;
  state.tetris = [];
  cov_2b66ts9ky1().s[21]++;
  state.winner = null;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11dGF0aW9ucy5qcyJdLCJuYW1lcyI6WyJzZXRHYW1lU3RhdGUiLCJzdGF0ZSIsImdhbWVTdGF0ZSIsImdhbWVPbiIsImdhbWVfb24iLCJnYW1lUGF1c2VkIiwiZ2FtZV9wYXVzZSIsIm1hc3RlciIsInBsYXllckhhc0xvc3QiLCJwbGF5ZXJfaGFzX2xvc3QiLCJwbGF5ZXJOYW1lIiwicGxheWVyX25hbWUiLCJyb29tTmFtZSIsInJvb21fbmFtZSIsInJvd3NBYm91dFRvQmVCbG9ja2VkIiwicm93c19hYm91dF90b19iZV9ibG9ja2VkIiwicm93c0Fib3V0VG9EaXNhcHBlYXIiLCJyb3dzX2Fib3V0X3RvX2Rpc2FwcGVhciIsInNwZWN0cmVzIiwidGV0cmlzIiwid2lubmVyIiwic2V0Um9vbVN0YXRlIiwicm9vbVN0YXRlIiwicXVpdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU8sU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLFNBQTdCLEVBQXdDO0FBQUE7QUFBQTtBQUM3Q0QsRUFBQUEsS0FBSyxDQUFDRSxNQUFOLEdBQWVELFNBQVMsQ0FBQ0UsT0FBekI7QUFENkM7QUFFN0NILEVBQUFBLEtBQUssQ0FBQ0ksVUFBTixHQUFtQkgsU0FBUyxDQUFDSSxVQUE3QjtBQUY2QztBQUc3Q0wsRUFBQUEsS0FBSyxDQUFDTSxNQUFOLEdBQWVMLFNBQVMsQ0FBQ0ssTUFBekI7QUFINkM7QUFJN0NOLEVBQUFBLEtBQUssQ0FBQ08sYUFBTixHQUFzQk4sU0FBUyxDQUFDTyxlQUFoQztBQUo2QztBQUs3Q1IsRUFBQUEsS0FBSyxDQUFDUyxVQUFOLEdBQW1CUixTQUFTLENBQUNTLFdBQTdCO0FBTDZDO0FBTTdDVixFQUFBQSxLQUFLLENBQUNXLFFBQU4sR0FBaUJWLFNBQVMsQ0FBQ1csU0FBM0I7QUFONkM7QUFPN0NaLEVBQUFBLEtBQUssQ0FBQ2Esb0JBQU4sR0FBNkJaLFNBQVMsQ0FBQ2Esd0JBQXZDO0FBUDZDO0FBUTdDZCxFQUFBQSxLQUFLLENBQUNlLG9CQUFOLEdBQTZCZCxTQUFTLENBQUNlLHVCQUF2QztBQVI2QztBQVM3Q2hCLEVBQUFBLEtBQUssQ0FBQ2lCLFFBQU4sR0FBaUJoQixTQUFTLENBQUNnQixRQUEzQjtBQVQ2QztBQVU3Q2pCLEVBQUFBLEtBQUssQ0FBQ2tCLE1BQU4sR0FBZWpCLFNBQVMsQ0FBQ2lCLE1BQXpCO0FBVjZDO0FBVzdDbEIsRUFBQUEsS0FBSyxDQUFDbUIsTUFBTixHQUFlbEIsU0FBUyxDQUFDa0IsTUFBekI7QUFDRDtBQUVELE9BQU8sU0FBU0MsWUFBVCxDQUFzQnBCLEtBQXRCLEVBQTZCcUIsU0FBN0IsRUFBd0M7QUFBQTtBQUFBO0FBQzdDckIsRUFBQUEsS0FBSyxDQUFDcUIsU0FBTixHQUFrQkEsU0FBbEI7QUFDRDtBQUVELE9BQU8sU0FBU0MsSUFBVCxDQUFjdEIsS0FBZCxFQUFxQjtBQUFBO0FBQUE7QUFDMUJBLEVBQUFBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLEtBQWY7QUFEMEI7QUFFMUJGLEVBQUFBLEtBQUssQ0FBQ00sTUFBTixHQUFlLEVBQWY7QUFGMEI7QUFHMUJOLEVBQUFBLEtBQUssQ0FBQ08sYUFBTixHQUFzQixLQUF0QjtBQUgwQjtBQUkxQlAsRUFBQUEsS0FBSyxDQUFDUyxVQUFOLEdBQW1CLEVBQW5CO0FBSjBCO0FBSzFCVCxFQUFBQSxLQUFLLENBQUNXLFFBQU4sR0FBaUIsRUFBakI7QUFMMEI7QUFNMUJYLEVBQUFBLEtBQUssQ0FBQ2Esb0JBQU4sR0FBNkIsRUFBN0I7QUFOMEI7QUFPMUJiLEVBQUFBLEtBQUssQ0FBQ2Usb0JBQU4sR0FBNkIsRUFBN0I7QUFQMEI7QUFRMUJmLEVBQUFBLEtBQUssQ0FBQ2lCLFFBQU4sR0FBaUIsRUFBakI7QUFSMEI7QUFTMUJqQixFQUFBQSxLQUFLLENBQUNrQixNQUFOLEdBQWUsRUFBZjtBQVQwQjtBQVUxQmxCLEVBQUFBLEtBQUssQ0FBQ21CLE1BQU4sR0FBZSxJQUFmO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2V0R2FtZVN0YXRlKHN0YXRlLCBnYW1lU3RhdGUpIHtcbiAgc3RhdGUuZ2FtZU9uID0gZ2FtZVN0YXRlLmdhbWVfb247XG4gIHN0YXRlLmdhbWVQYXVzZWQgPSBnYW1lU3RhdGUuZ2FtZV9wYXVzZTtcbiAgc3RhdGUubWFzdGVyID0gZ2FtZVN0YXRlLm1hc3RlcjtcbiAgc3RhdGUucGxheWVySGFzTG9zdCA9IGdhbWVTdGF0ZS5wbGF5ZXJfaGFzX2xvc3Q7XG4gIHN0YXRlLnBsYXllck5hbWUgPSBnYW1lU3RhdGUucGxheWVyX25hbWU7XG4gIHN0YXRlLnJvb21OYW1lID0gZ2FtZVN0YXRlLnJvb21fbmFtZTtcbiAgc3RhdGUucm93c0Fib3V0VG9CZUJsb2NrZWQgPSBnYW1lU3RhdGUucm93c19hYm91dF90b19iZV9ibG9ja2VkO1xuICBzdGF0ZS5yb3dzQWJvdXRUb0Rpc2FwcGVhciA9IGdhbWVTdGF0ZS5yb3dzX2Fib3V0X3RvX2Rpc2FwcGVhcjtcbiAgc3RhdGUuc3BlY3RyZXMgPSBnYW1lU3RhdGUuc3BlY3RyZXM7XG4gIHN0YXRlLnRldHJpcyA9IGdhbWVTdGF0ZS50ZXRyaXM7XG4gIHN0YXRlLndpbm5lciA9IGdhbWVTdGF0ZS53aW5uZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSb29tU3RhdGUoc3RhdGUsIHJvb21TdGF0ZSkge1xuICBzdGF0ZS5yb29tU3RhdGUgPSByb29tU3RhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBxdWl0KHN0YXRlKSB7XG4gIHN0YXRlLmdhbWVPbiA9IGZhbHNlO1xuICBzdGF0ZS5tYXN0ZXIgPSAnJztcbiAgc3RhdGUucGxheWVySGFzTG9zdCA9IGZhbHNlO1xuICBzdGF0ZS5wbGF5ZXJOYW1lID0gJyc7XG4gIHN0YXRlLnJvb21OYW1lID0gJyc7XG4gIHN0YXRlLnJvd3NBYm91dFRvQmVCbG9ja2VkID0gW107XG4gIHN0YXRlLnJvd3NBYm91dFRvRGlzYXBwZWFyID0gW107XG4gIHN0YXRlLnNwZWN0cmVzID0ge307XG4gIHN0YXRlLnRldHJpcyA9IFtdO1xuICBzdGF0ZS53aW5uZXIgPSBudWxsO1xufVxuIl19