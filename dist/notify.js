function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Notify =
/*#__PURE__*/
function () {
  function Notify(t, e, i, s) {
    _classCallCheck(this, Notify);

    this.options = {
      position: "right-top",
      speed: 1e3,
      distance: "100px",
      background: "#fff",
      titleColor: "#3e3e3e",
      messageColor: "#878787",
      title: "Notification",
      message: "",
      type: "info",
      typeColor: {
        info: "#1D72F3",
        success: "#28985a",
        warning: "#FFC007",
        danger: "red"
      }
    }, t && "object" == _typeof(t) ? s = t : (this.options.title = t || this.options.title, this.options.message = e || this.options.message, this.options.type = i || this.options.type), this.element = null, this.style = null, this.pos = 0, this.loop = !1, this.interval = null, this.mergeOptions(s).createElements().setStyle().createStyle().show();
  }

  _createClass(Notify, [{
    key: "mergeOptions",
    value: function mergeOptions(t) {
      for (var e in t) {
        this.options.hasOwnProperty(e) && (this.options[e] = t[e]);
      }

      return this;
    }
  }, {
    key: "createElements",
    value: function createElements() {
      this.element = document.createElement("div"), this.element.setAttribute("class", "__notify");
      var t = document.createElement("p");
      t.setAttribute("class", "__notify_title"), t.innerHTML = this.options.title;
      var e = document.createElement("p");
      return e.setAttribute("class", "__notify_message"), e.innerHTML = this.options.message, this.element.appendChild(t), this.element.appendChild(e), this;
    }
  }, {
    key: "removeElement",
    value: function removeElement() {
      return this.element.parentNode.removeChild(this.element), this;
    }
  }, {
    key: "positions",
    value: function positions(t) {
      return {
        "right-top": {
          style: "right:5px;top: 5px;",
          animate: [{
            transform: "translateY(0px)"
          }, {
            transform: "translateY(" + this.options.distance + ")"
          }]
        },
        "right-bottom": {
          style: "right:5px;bottom:5px;",
          animate: [{
            transform: "translateY(0px)"
          }, {
            transform: "translateY(-" + this.options.distance + ")"
          }]
        },
        "left-top": {
          style: "left:5px;top:5px;",
          animate: [{
            transform: "translateY(0px)"
          }, {
            transform: "translateY(" + this.options.distance + ")"
          }]
        },
        "left-bottom": {
          style: "left:5px;bottom:5px;",
          animate: [{
            transform: "translateY(0px)"
          }, {
            transform: "translateY(-" + this.options.distance + ")"
          }]
        }
      }[t];
    }
  }, {
    key: "setStyle",
    value: function setStyle() {
      return this.element.setAttribute("style", this.positions(this.options.position).style), this;
    }
  }, {
    key: "show",
    value: function show() {
      document.body.appendChild(this.element), this.element.animate(this.positions(this.options.position).animate, {
        duration: this.options.speed
      });
      var t = this;
      return setTimeout(function () {
        -1 != ["right-top", "left-top"].indexOf(t.options.position) ? t.element.style.top = t.options.distance : t.element.style.bottom = t.options.distance, t.element.animate([{
          opacity: 1
        }, {
          opacity: 0
        }], {
          duration: 3e3
        });
      }, this.options.speed), setTimeout(function () {
        t.removeElement();
      }, this.options.speed + 3e3), this;
    }
  }, {
    key: "createStyle",
    value: function createStyle() {
      return document.head.querySelector("style#__notify") || (this.style = document.createElement("style"), this.style.setAttribute("id", "__notify"), this.style.innerHTML = this.cssText(this.cssObject()), document.head.appendChild(this.style)), this;
    }
  }, {
    key: "cssObject",
    value: function cssObject() {
      return {
        "div.__notify": {
          "max-width": "500px",
          display: "flex",
          "flex-flow": "column wrap",
          background: this.options.background,
          padding: "10px",
          "justify-content": "center",
          "min-width": "250px",
          height: "auto",
          "min-height": "80px",
          position: "absolute",
          "border-radius": 0
        },
        "div.__notify:before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          width: "8px",
          height: "100%",
          "border-radius": 0,
          "background-color": this.options.typeColor[this.options.type]
        },
        "div.__notify p.__notify_message": {
          "font-size": "14px",
          "margin-top": 0,
          "margin-bottom": 0,
          color: this.options.messageColor,
          "padding-left": "5px"
        },
        "div.__notify p.__notify_title": {
          color: this.options.titleColor,
          "font-weight": 700,
          "margin-top": 0,
          "margin-bottom": "8px"
        }
      };
    }
  }, {
    key: "cssText",
    value: function cssText(t) {
      var e = "";

      for (var _i = 0, _Object$entries = Object.entries(t); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            i = _Object$entries$_i[0],
            s = _Object$entries$_i[1];

        e += i + "{";

        for (var _i2 = 0, _Object$entries2 = Object.entries(s); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
              _t = _Object$entries2$_i[0],
              _i3 = _Object$entries2$_i[1];

          e += _t + ":" + _i3 + ";";
        }

        e += "}";
      }

      return e;
    }
  }]);

  return Notify;
}();