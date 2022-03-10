/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/js/Rectangle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar settings_1 = __webpack_require__(/*! ./settings */ \"./src/js/settings.ts\");\n\nvar Rectangle = function () {\n  function Rectangle(ctx, canvas) {\n    this.speedX = 5;\n    this.speedY = 5;\n    this.maxSpeed = 10;\n    this.speed = 0;\n    this.mouse = {\n      x: 0,\n      y: 0\n    };\n    this.direction = Math.PI / 4;\n    this.fractionOfSpeed = 10;\n    this.ctx = ctx;\n    this.canvas = canvas;\n    this.width = Math.ceil(Math.random() * (settings_1.settings.maxWidth - settings_1.settings.minWidth) + settings_1.settings.minWidth);\n    this.height = Math.trunc(this.width * settings_1.settings.heightRatio);\n    this.x = Math.ceil(Math.random() * (this.canvas.width - this.width) + this.width / 2);\n    this.y = Math.ceil(Math.random() * (this.canvas.height - this.height) + this.height / 2);\n    this.color = \"hsl(\".concat(settings_1.settings.colors[Math.floor(Math.random() * settings_1.settings.colors.length)], \", \").concat(Math.ceil(Math.random() * 100), \"%, \").concat(Math.ceil(Math.random() * 100), \"%)\");\n    this.fractionOfSpeed = Math.random() * settings_1.settings.maxSpeed + settings_1.settings.minSpeed;\n    this.maxSpeed = Math.random() * settings_1.settings.maxSpeed + settings_1.settings.minSpeed;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.save();\n    this.ctx.translate(this.x, this.y);\n    this.ctx.rotate(this.direction);\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);\n    this.ctx.restore();\n  };\n\n  Rectangle.prototype.detectCollision = function () {\n    if (this.x + this.width / 2 >= this.canvas.width || this.x - this.width / 2 < 0) {\n      this.speedX = -this.speedX;\n    }\n\n    if (this.y + this.height / 2 >= this.canvas.height || this.y - this.height / 2 < 0) {\n      this.speedY = -this.speedY;\n    }\n  };\n\n  Rectangle.prototype.moveToMouse = function () {\n    var _this = this;\n\n    this.dy = this.mouse.y - this.y;\n    this.dx = this.mouse.x - this.x;\n    this.direction = Math.atan2(this.dy, this.dx);\n    this.dMouse = Math.abs(Math.sqrt(this.dx * this.dx + this.dy * this.dy));\n    this.speed = this.dMouse / this.fractionOfSpeed;\n\n    if (this.speed > this.maxSpeed) {\n      this.speed = this.maxSpeed;\n    }\n\n    this.x += Math.cos(this.direction) * this.speed;\n    this.y += Math.sin(this.direction) * this.speed;\n    this.canvas.addEventListener('mousemove', function (e) {\n      _this.mouse.x = e.clientX;\n      _this.mouse.y = e.clientY;\n    });\n  };\n\n  Rectangle.prototype.update = function () {\n    this.detectCollision();\n    this.moveToMouse();\n    this.draw();\n  };\n\n  return Rectangle;\n}();\n\nexports[\"default\"] = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixLQUFLYSxLQUExQztBQUVBLFNBQUt2QyxNQUFMLENBQVkwQyxnQkFBWixDQUE2QixXQUE3QixFQUEwQyxVQUFDQyxDQUFELEVBQUU7QUFDeENDLFdBQUksQ0FBQ1gsS0FBTCxDQUFXaEMsQ0FBWCxHQUFlMEMsQ0FBQyxDQUFDRSxPQUFqQjtBQUNBRCxXQUFJLENBQUNYLEtBQUwsQ0FBVy9CLENBQVgsR0FBZXlDLENBQUMsQ0FBQ0csT0FBakI7QUFDSCxLQUhEO0FBSUgsR0F0QkQ7O0FBd0JBeEI7QUFFSSxTQUFLeUIsZUFBTDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0FMRDs7QUFRSjtBQUFDLENBckZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvanMvUmVjdGFuZ2xlLnRzPzgwOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzZXR0aW5nc30gZnJvbSBcIi4vc2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIHtcbiAgICBwcml2YXRlIHg6IG51bWJlclxuICAgIHByaXZhdGUgeTogbnVtYmVyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlclxuICAgIHByaXZhdGUgY29sb3I6IHN0cmluZ1xuICAgIHByaXZhdGUgY3R4OkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRFxuICAgIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudFxuICAgIHByaXZhdGUgc3BlZWRYOiBudW1iZXIgPSA1XG4gICAgcHJpdmF0ZSBzcGVlZFk6IG51bWJlciA9IDVcbiAgICBwcml2YXRlIG1heFNwZWVkOiBudW1iZXIgPSAxMFxuICAgIHByaXZhdGUgc3BlZWQ6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIG1vdXNlID0ge3ggOiAwLCB5IDogMH1cbiAgICBwcml2YXRlIGRpcmVjdGlvbjogbnVtYmVyID0gTWF0aC5QSS80XG4gICAgcHJpdmF0ZSBkeDogbnVtYmVyXG4gICAgcHJpdmF0ZSBkeTogbnVtYmVyXG4gICAgcHJpdmF0ZSBkTW91c2U6IG51bWJlclxuICAgIHByaXZhdGUgZnJhY3Rpb25PZlNwZWVkOiBudW1iZXIgPSAxMFxuXG5cbiAgICBjb25zdHJ1Y3RvcihjdHg6Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgIHRoaXMud2lkdGggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIChzZXR0aW5ncy5tYXhXaWR0aCAtIHNldHRpbmdzLm1pbldpZHRoKSArIHNldHRpbmdzLm1pbldpZHRoKVxuICAgICAgICB0aGlzLmhlaWdodCA9IE1hdGgudHJ1bmModGhpcy53aWR0aCAqIHNldHRpbmdzLmhlaWdodFJhdGlvKVxuICAgICAgICB0aGlzLnggPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqICh0aGlzLmNhbnZhcy53aWR0aCAtIHRoaXMud2lkdGgpICsgdGhpcy53aWR0aCAvIDIpXG4gICAgICAgIHRoaXMueSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogKHRoaXMuY2FudmFzLmhlaWdodCAtIHRoaXMuaGVpZ2h0KSArIHRoaXMuaGVpZ2h0IC8gMilcbiAgICAgICAgdGhpcy5jb2xvciA9IGBoc2woJHtzZXR0aW5ncy5jb2xvcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiBzZXR0aW5ncy5jb2xvcnMubGVuZ3RoKV19LCAke01hdGguY2VpbChNYXRoLnJhbmRvbSgpKjEwMCl9JSwgJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDApfSUpYFxuICAgICAgICB0aGlzLmZyYWN0aW9uT2ZTcGVlZCA9IE1hdGgucmFuZG9tKCkgKiBzZXR0aW5ncy5tYXhTcGVlZCArIHNldHRpbmdzLm1pblNwZWVkO1xuICAgICAgICB0aGlzLm1heFNwZWVkID0gTWF0aC5yYW5kb20oKSAqIHNldHRpbmdzLm1heFNwZWVkICsgc2V0dGluZ3MubWluU3BlZWQ7XG4gICAgfVxuXG4gICAgZHJhdygpIHtcbiAgICAgICAgdGhpcy5jdHguc2F2ZSgpXG4gICAgICAgIHRoaXMuY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMueSlcbiAgICAgICAgdGhpcy5jdHgucm90YXRlKHRoaXMuZGlyZWN0aW9uKVxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC10aGlzLndpZHRoIC8gMiwtdGhpcy5oZWlnaHQgLyAyLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5jdHgucmVzdG9yZSgpXG4gICAgfVxuXG4gICAgZGV0ZWN0Q29sbGlzaW9uKCkge1xuICAgICAgICBpZigodGhpcy54ICsgdGhpcy53aWR0aCAvIDIpID49IHRoaXMuY2FudmFzLndpZHRoIHx8ICh0aGlzLnggLSB0aGlzLndpZHRoIC8gMikgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnNwZWVkWCA9IC10aGlzLnNwZWVkWFxuICAgICAgICB9XG4gICAgICAgIGlmKCh0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDIpID49IHRoaXMuY2FudmFzLmhlaWdodCB8fCAodGhpcy55IC0gdGhpcy5oZWlnaHQgLyAyKSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWRZID0gLXRoaXMuc3BlZWRZXG4gICAgICAgIH1cblxuICAgICAgICAvL3RoaXMueCArPSB0aGlzLnNwZWVkWFxuICAgICAgICAvL3RoaXMueSArPSB0aGlzLnNwZWVkWVxuICAgIH1cblxuICAgIG1vdmVUb01vdXNlKCkge1xuICAgICAgICAvL2Rpc3RhbmNlIGJldHdlZW4gbW91c2UgYW5kIHJlY3RhbmdsZVxuICAgICAgICB0aGlzLmR5ID0gdGhpcy5tb3VzZS55IC0gdGhpcy55XG4gICAgICAgIHRoaXMuZHggPSB0aGlzLm1vdXNlLnggLSB0aGlzLnhcbiAgICAgICAgLy9hbmdsZSBiZXR3ZWVuIHJlY3RhbmdsZSBhbmQgbW91c2VcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBNYXRoLmF0YW4yKHRoaXMuZHksdGhpcy5keClcbiAgICAgICAgLy8gZGlzdGFuY2Ugb2YgcmVjdGFuZ2xlIHRvIG1vdXNlIChhYnNvbHV0ZSB2YWx1ZSlcbiAgICAgICAgdGhpcy5kTW91c2UgPSBNYXRoLmFicyhNYXRoLnNxcnQodGhpcy5keCAqIHRoaXMuZHggKyB0aGlzLmR5ICogdGhpcy5keSkpXG4gICAgICAgIC8vIHNwZWVkID0gYSBmcmFjdGlvbiBvZiB0aGF0IGRpc3RhbmNlXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRNb3VzZSAvIHRoaXMuZnJhY3Rpb25PZlNwZWVkXG4gICAgICAgIC8vIHNwZWVkIGNhbm5vdCBiZSA+IHRoZW4gbWF4U3BlZWRcbiAgICAgICAgaWYodGhpcy5zcGVlZCA+IHRoaXMubWF4U3BlZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLm1heFNwZWVkXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVjYWxjdWxhdGUgeCBhbmQgeVxuICAgICAgICB0aGlzLnggKz0gTWF0aC5jb3ModGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZFxuICAgICAgICB0aGlzLnkgKz0gTWF0aC5zaW4odGhpcy5kaXJlY3Rpb24pICogdGhpcy5zcGVlZFxuXG4gICAgICAgIHRoaXMuY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlLnggPSBlLmNsaWVudFhcbiAgICAgICAgICAgIHRoaXMubW91c2UueSA9IGUuY2xpZW50WVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHVwZGF0ZSgpIHtcblxuICAgICAgICB0aGlzLmRldGVjdENvbGxpc2lvbigpXG4gICAgICAgIHRoaXMubW92ZVRvTW91c2UoKVxuICAgICAgICB0aGlzLmRyYXcoKVxuICAgIH1cblxuXG59Il0sIm5hbWVzIjpbImN0eCIsImNhbnZhcyIsIngiLCJ5IiwiTWF0aCIsIlBJIiwid2lkdGgiLCJjZWlsIiwicmFuZG9tIiwic2V0dGluZ3NfMSIsIm1heFdpZHRoIiwibWluV2lkdGgiLCJoZWlnaHQiLCJ0cnVuYyIsImhlaWdodFJhdGlvIiwiY29sb3IiLCJjb2xvcnMiLCJmbG9vciIsImxlbmd0aCIsImNvbmNhdCIsImZyYWN0aW9uT2ZTcGVlZCIsIm1heFNwZWVkIiwibWluU3BlZWQiLCJSZWN0YW5nbGUiLCJzYXZlIiwidHJhbnNsYXRlIiwicm90YXRlIiwiZGlyZWN0aW9uIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXN0b3JlIiwic3BlZWRYIiwic3BlZWRZIiwiZHkiLCJtb3VzZSIsImR4IiwiYXRhbjIiLCJkTW91c2UiLCJhYnMiLCJzcXJ0Iiwic3BlZWQiLCJjb3MiLCJzaW4iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIl90aGlzIiwiY2xpZW50WCIsImNsaWVudFkiLCJkZXRlY3RDb2xsaXNpb24iLCJtb3ZlVG9Nb3VzZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Rectangle.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.ts\");\n\nvar canvas = document.querySelector('.canvas');\nvar ctx = canvas.getContext('2d');\nvar rectangles = [];\n\nfunction updateCanvasSize() {\n  canvas.width = window.innerWidth;\n  canvas.height = window.innerHeight;\n}\n\nwindow.addEventListener('resize', function (e) {\n  updateCanvasSize();\n});\nupdateCanvasSize();\ncanvas.addEventListener('click', function (e) {\n  rectangles.push(new Rectangle_1[\"default\"](ctx, canvas));\n});\n\nfunction animate() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n\n  for (var _i = 0, rectangles_1 = rectangles; _i < rectangles_1.length; _i++) {\n    var rectangle = rectangles_1[_i];\n    rectangle.update();\n  }\n\n  window.requestAnimationFrame(animate);\n}\n\nanimate();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBRUEsSUFBTUMsVUFBVSxHQUFnQixFQUFoQzs7QUFFQSxTQUFTQyxnQkFBVCxHQUF5QjtBQUNyQk4sUUFBTSxDQUFDTyxLQUFQLEdBQWVDLE1BQU0sQ0FBQ0MsVUFBdEI7QUFDQVQsUUFBTSxDQUFDVSxNQUFQLEdBQWdCRixNQUFNLENBQUNHLFdBQXZCO0FBQ0g7O0FBRURILE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFFO0FBQ2hDUCxrQkFBZ0I7QUFDbkIsQ0FGRDtBQUlBQSxnQkFBZ0I7QUFFaEJOLE1BQU0sQ0FBQ1ksZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBQ0MsQ0FBRCxFQUFFO0FBQy9CUixZQUFVLENBQUNTLElBQVgsQ0FBZ0IsSUFBSUMsc0JBQUosQ0FBY1osR0FBZCxFQUFtQkgsTUFBbkIsQ0FBaEI7QUFDSCxDQUZEOztBQUtBLFNBQVNnQixPQUFULEdBQWdCO0FBQ1piLEtBQUcsQ0FBQ2MsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JqQixNQUFNLENBQUNPLEtBQTNCLEVBQWtDUCxNQUFNLENBQUNVLE1BQXpDOztBQUNBLE9BQXdCLHFDQUF4QixFQUF3QlEsd0JBQXhCLEVBQXdCQSxJQUF4QixFQUFvQztBQUEvQixRQUFNQyxTQUFTLG1CQUFmO0FBQ0RBLGFBQVMsQ0FBQ0MsTUFBVjtBQUNIOztBQUNEWixRQUFNLENBQUNhLHFCQUFQLENBQTZCTCxPQUE3QjtBQUNIOztBQUNEQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvanMvbWFpbi50cz80YjcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcbmNvbnN0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gY2FudmFzLmdldENvbnRleHQoJzJkJylcblxuY29uc3QgcmVjdGFuZ2xlczogUmVjdGFuZ2xlW10gPSBbXVxuXG5mdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplKCkge1xuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGUpID0+IHtcbiAgICB1cGRhdGVDYW52YXNTaXplKClcbn0pXG5cbnVwZGF0ZUNhbnZhc1NpemUoKVxuXG5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHJlY3RhbmdsZXMucHVzaChuZXcgUmVjdGFuZ2xlKGN0eCwgY2FudmFzKSlcbn0pXG5cblxuZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KVxuICAgIGZvciAoY29uc3QgcmVjdGFuZ2xlIG9mIHJlY3RhbmdsZXMpIHtcbiAgICAgICAgcmVjdGFuZ2xlLnVwZGF0ZSgpXG4gICAgfVxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbn1cbmFuaW1hdGUoKVxuIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN0eCIsImdldENvbnRleHQiLCJyZWN0YW5nbGVzIiwidXBkYXRlQ2FudmFzU2l6ZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwdXNoIiwiUmVjdGFuZ2xlXzEiLCJhbmltYXRlIiwiY2xlYXJSZWN0IiwiX2kiLCJyZWN0YW5nbGUiLCJ1cGRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/js/settings.ts":
/*!****************************!*\
  !*** ./src/js/settings.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.settings = void 0;\nexports.settings = {\n  minWidth: 50,\n  maxWidth: 200,\n  heightRatio: 0.4,\n  minSpeed: 5,\n  maxSpeed: 10,\n  colors: ['52', '13', '234', '151', '37']\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2V0dGluZ3MudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFhQSxnQkFBQUEsR0FBVztBQUNwQkMsVUFBUSxFQUFHLEVBRFM7QUFFcEJDLFVBQVEsRUFBRyxHQUZTO0FBR3BCQyxhQUFXLEVBQUcsR0FITTtBQUlwQkMsVUFBUSxFQUFHLENBSlM7QUFLcEJDLFVBQVEsRUFBRyxFQUxTO0FBTXBCQyxRQUFNLEVBQUcsQ0FDTCxJQURLLEVBRUwsSUFGSyxFQUdMLEtBSEssRUFJTCxLQUpLLEVBS0wsSUFMSztBQU5XLENBQVgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3ZlLW15LXJlY3RhbmdsZS8uL3NyYy9qcy9zZXR0aW5ncy50cz9jNDIxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBtaW5XaWR0aCA6IDUwLFxuICAgIG1heFdpZHRoIDogMjAwLFxuICAgIGhlaWdodFJhdGlvIDogMC40LFxuICAgIG1pblNwZWVkIDogNSxcbiAgICBtYXhTcGVlZCA6IDEwLFxuICAgIGNvbG9ycyA6IFtcbiAgICAgICAgJzUyJyxcbiAgICAgICAgJzEzJyxcbiAgICAgICAgJzIzNCcsXG4gICAgICAgICcxNTEnLFxuICAgICAgICAnMzcnLFxuICAgIF0sXG59Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaGVpZ2h0UmF0aW8iLCJtaW5TcGVlZCIsIm1heFNwZWVkIiwiY29sb3JzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/settings.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW92ZS1teS1yZWN0YW5nbGUvLi9zcmMvc2Nzcy9tYWluLnNjc3M/ZjdlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmove_my_rectangle"] = self["webpackChunkmove_my_rectangle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;