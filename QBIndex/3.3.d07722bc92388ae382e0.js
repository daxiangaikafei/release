webpackJsonp([3],{

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _transform = __webpack_require__(476);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function () {
	    var lastTime = 0;
	    var vendors = ['webkit', 'moz'];
	    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
	        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	    }

	    if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
	        var currTime = new Date().getTime();
	        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	        var id = window.setTimeout(function () {
	            callback(currTime + timeToCall);
	        }, timeToCall);
	        lastTime = currTime + timeToCall;
	        return id;
	    };

	    if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
	        clearTimeout(id);
	    };
	})(); /* AlloyTouch
	       * By AlloyTeam http://www.alloyteam.com/
	       * Github: https://github.com/AlloyTeam/AlloyTouch
	       * MIT Licensed.
	       */
	/*; (function () {*/

	//import * as _ from './../util/underscore';
	//import {$}  from 'zepto';


	function bind(element, type, callback) {
	    element.addEventListener(type, callback, false);
	}
	function removeBind(element, type, callback) {
	    //element.removeEventListener()
	    //debugger;
	    element.removeEventListener(type, callback, false);
	}

	function iosEase(x) {
	    return Math.sqrt(1 - Math.pow(x - 1, 2));
	}

	function preventDefaultTest(el, exceptions) {
	    for (var i in exceptions) {
	        if (exceptions[i].test(el[i])) {
	            return true;
	        }
	    }
	    return false;
	}

	var AlloyTouch = function AlloyTouch(option) {
	    /*tp  改写  2016年9月1日start*/
	    this.findScroller = option.findScroller ? option.findScroller : false;
	    //this.findScroller = option.findScroller || function () { };
	    this.iosEase = iosEase;
	    //this.transform = transform;
	    /*tp  改写  2016年9月1日 end*/

	    /*tp 2016年10月18日 改写 start*/
	    this.reverse = option.reverse === false ? option.reverse : true;
	    /*tp 2016年10月18日 改写 end*/

	    this.scroller = option.target;
	    this.element = typeof option.touch === "string" ? document.querySelector(option.touch) : option.touch;
	    this.vertical = option.vertical;
	    this.vertical === undefined && (this.vertical = true);
	    this.property = option.property;
	    this.tickID = 0;
	    this.preX;
	    this.preY;
	    this.sensitivity = option.sensitivity === undefined ? 1 : option.sensitivity;
	    this.factor = option.factor === undefined ? 1 : option.factor;
	    this.sMf = this.sensitivity * this.factor;
	    //拖动时候的摩擦因子
	    this.factor1 = 1;
	    this.min = option.min;
	    this.max = option.max;
	    this.startTime;
	    this.start;
	    this.deceleration = 0.0006;
	    this.change = option.change || function () {};
	    this.touchEnd = option.touchEnd || function () {};
	    this.touchStart = option.touchStart || function () {};
	    this.touchMove = option.touchMove || function () {};
	    this.reboundEnd = option.reboundEnd || function () {};
	    this.animationEnd = option.animationEnd || function () {};
	    this.preventDefaultException = { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ };
	    this.hasMin = !(this.min === undefined);
	    this.hasMax = !(this.max === undefined);
	    this.isTouchStart = false;
	    this.step = option.step;
	    this.spring = option.spring;
	    this.spring === undefined && (this.spring = true);
	    this.inertia = option.inertia;
	    this.inertia === undefined && (this.inertia = true);
	    this.correctionEnd = option.correctionEnd || function () {};
	    this.intelligentCorrection = option.intelligentCorrection;
	    if (this.hasMax && this.hasMin) {
	        this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	    }

	    this.move = this._move.bind(this);
	    this.end = this._end.bind(this);
	    bind(this.element, "touchstart", this._start.bind(this));
	    bind(window, "touchmove", this.move);
	    bind(window, "touchend", this.end);

	    this.destory = this.destory.bind(this);

	    if (!this.findScroller) {
	        // //console.log("this.element",this.scroller)
	        (0, _transform2.default)(this.scroller);
	    }
	};

	AlloyTouch.prototype = {
	    destory: function destory() {
	        //removeBind(this.element, "touchstart", this._start);
	        removeBind(window, "touchmove", this.move);
	        removeBind(window, "touchend", this.end);
	    },
	    _start: function _start(evt) {
	        // setTimeout(function(){
	        this.isTouchStart = true;
	        this._firstTouchMove = true;
	        this._preventMoveDefault = true;

	        console.log("触发 。----------------------------start");

	        if (evt.touches.length > 1) {
	            return false;
	        }
	        /*
	         tp  改写  2016年9月1日
	         */
	        //找到 对应的 子的target 并加对应的transform事件
	        //__translateX
	        if (this.findScroller) {

	            this.scroller = this.findScroller(evt);

	            //this.scroller = $(evt.target).parents(this.findScroller).get(0);
	            if (this.scroller) {
	                //console.info("进入  自定义方法",this.scroller[this.property])
	                this.scroller[this.property] === undefined && (0, _transform2.default)(this.scroller);
	                this.touchStart(this.scroller[this.property], this.scroller);
	                cancelAnimationFrame(this.tickID);
	                this.correctionEnd(this.scroller[this.property], this.scroller);
	                if (this.hasMax && this.hasMin) {
	                    this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	                }
	                this.startTime = new Date().getTime();
	                this._startX = this.preX = evt.touches[0].pageX;
	                this._startY = this.preY = evt.touches[0].pageY;
	                this.start = this.vertical ? this.preY : this.preX;
	            }
	            /*  else{
	                   this.touchStart(this.scroller[this.property],false);
	                   return;
	              }*/
	            // this.scroller = $(evt.target).children(this.findScroller).get(0);
	        } else {
	            this.touchStart(this.scroller[this.property], this.scroller);
	            cancelAnimationFrame(this.tickID);
	            this.correctionEnd(this.scroller[this.property], this.scroller);
	            if (this.hasMax && this.hasMin) {
	                this.currentPage = Math.round((this.max - this.scroller[this.property]) / this.step);
	            }
	            this.startTime = new Date().getTime();
	            this._startX = this.preX = evt.touches[0].pageX;
	            this._startY = this.preY = evt.touches[0].pageY;
	            this.start = this.vertical ? this.preY : this.preX;
	        };
	        /* 改写  end */

	        // }.bind(this),0)
	    },
	    _move: function _move(evt) {
	        //setTimeout(function(){
	        if (this.isTouchStart) {
	            if (this._firstTouchMove) {
	                var dDis = Math.abs(evt.touches[0].pageX - this._startX) - Math.abs(evt.touches[0].pageY - this._startY);
	                if (dDis > 0 && this.vertical) {
	                    this._preventMoveDefault = false;
	                } else if (dDis < 0 && !this.vertical) {
	                    this._preventMoveDefault = false;
	                }
	                this._firstTouchMove = false;
	            }
	            if (this._preventMoveDefault && this.scroller) {

	                if (evt.touches.length > 1) {
	                    return false;
	                }

	                var d = (this.vertical ? evt.touches[0].pageY - this.preY : evt.touches[0].pageX - this.preX) * this.sMf;
	                if (this.hasMax && this.scroller[this.property] > this.max && d > 0) {
	                    this.factor1 = 0.3;
	                } else if (this.hasMin && this.scroller[this.property] < this.min && d < 0) {
	                    this.factor1 = 0.3;
	                } else {
	                    this.factor1 = 1;
	                }
	                d *= this.factor1;

	                /*tp  2016年10月18日  改写  start*/
	                if (this.reverse === false && d < 0) {
	                    //console.log("222")
	                    return false;
	                }
	                /*tp  2016年10月18日  改写  end*/

	                this.preX = evt.touches[0].pageX;
	                this.preY = evt.touches[0].pageY;
	                this.scroller[this.property] += d;
	                this.change(this.scroller[this.property]);
	                var timestamp = new Date().getTime();
	                if (timestamp - this.startTime > 300) {
	                    this.startTime = timestamp;
	                    this.start = this.vertical ? this.preY : this.preX;
	                }
	                this.touchMove(this.scroller[this.property]);

	                evt.preventDefault();
	            }
	        }
	        console.info("触发 。----------------------------move--------------");
	        // }.bind(this),0)
	    },
	    _end: function _end(evt) {

	        console.info("触发 。----------------------------end--------------");
	        /* //console.log("zuihou ",this.scroller[this.property]);
	         if(this.reverse===false&&this.scroller[this.property]===0){
	             return false;
	         }*/
	        if (evt.touches.length > 1) {
	            return false;
	        }
	        if (this.isTouchStart && this._preventMoveDefault && this.scroller) {
	            var self = this;
	            this.touchEnd(this.scroller[this.property]);
	            if (this.hasMax && this.scroller[this.property] > this.max) {
	                this.to(this.scroller, this.property, this.max, 200, iosEase, this.change, function (value) {
	                    this.reboundEnd(value);
	                    this.animationEnd(value);
	                }.bind(this));
	            } else if (this.hasMin && this.scroller[this.property] < this.min) {
	                this.to(this.scroller, this.property, this.min, 200, iosEase, this.change, function (value) {
	                    this.reboundEnd(value);
	                    this.animationEnd(value);
	                }.bind(this));
	            } else if (this.inertia) {
	                //var y = evt.changedTouches[0].pageY;
	                var duration = new Date().getTime() - this.startTime;
	                if (duration < 300) {
	                    var distance = ((this.vertical ? evt.changedTouches[0].pageY : evt.changedTouches[0].pageX) - this.start) * this.sensitivity,
	                        speed = Math.abs(distance) / duration,
	                        speed2 = this.factor * speed,
	                        destination = this.scroller[this.property] + speed2 * speed2 / (2 * this.deceleration) * (distance < 0 ? -1 : 1);

	                    self.to(this.scroller, this.property, Math.round(destination), Math.round(speed / self.deceleration), iosEase, function (value) {

	                        if (self.spring) {
	                            if (self.hasMax && self.scroller[self.property] > self.max) {
	                                setTimeout(function () {
	                                    cancelAnimationFrame(self.tickID);
	                                    self.to(self.scroller, self.property, self.max, 200, iosEase, self.change, self.animationEnd);
	                                }, 50);
	                            } else if (self.hasMin && self.scroller[self.property] < self.min) {
	                                setTimeout(function () {
	                                    cancelAnimationFrame(self.tickID);
	                                    self.to(self.scroller, self.property, self.min, 200, iosEase, self.change, self.animationEnd);
	                                }, 50);
	                            }
	                        } else {

	                            if (self.hasMax && self.scroller[self.property] > self.max) {
	                                cancelAnimationFrame(self.tickID);
	                                self.scroller[self.property] = self.max;
	                                self.animationEnd(self.max);
	                            } else if (self.hasMin && self.scroller[self.property] < self.min) {
	                                cancelAnimationFrame(self.tickID);
	                                self.scroller[self.property] = self.min;
	                                self.animationEnd(self.min);
	                            }
	                        }
	                        self.change(self.scroller[self.property]);
	                    }, function () {
	                        if (self.step) {
	                            self.correction(self.scroller, self.property);
	                        } else {
	                            self.animationEnd(self.scroller[self.property]);
	                        }
	                    });
	                } else {
	                    if (self.step) {
	                        self.correction(self.scroller, self.property);
	                    }
	                }
	            } else {
	                if (self.step) {
	                    self.correction(self.scroller, self.property);
	                }
	            }
	            if (!preventDefaultTest(evt.target, this.preventDefaultException)) {
	                evt.preventDefault();
	            }
	            this.isTouchStart = false;
	        }
	    },
	    to: function to(el, property, value, time, ease, onChange, onEnd) {
	        //setTimeout(function(){
	        var current = el[property];
	        var dv = value - current;
	        var beginTime = new Date();
	        var self = this;
	        var toTick = function toTick() {

	            var dt = new Date() - beginTime;
	            if (dt >= time) {
	                el[property] = value;
	                onChange && onChange(value);
	                onEnd && onEnd(value);
	                return;
	            }
	            el[property] = dv * ease(dt / time) + current;
	            self.tickID = requestAnimationFrame(toTick);
	            //cancelAnimationFrame必须在 tickID = requestAnimationFrame(toTick);的后面
	            onChange && onChange(el[property]);
	        };
	        toTick();
	        //}.bind(this),0)
	    },
	    correction: function correction(el, property) {

	        var value = el[property];
	        ////console.error("你要干啥",value)
	        if (this.intelligentCorrection && this.hasMax && this.hasMin) {
	            var prevPage = this.currentPage;
	            var d = this.scroller[this.property] - (this.max - prevPage * this.step);
	            if (Math.abs(d) > this.step / 20) {
	                if (d > 0) {
	                    this.to(el, property, (value < 0 ? -1 : 1) * (prevPage - 1) * this.step, 400, iosEase, this.change, function (value) {
	                        this.correctionEnd(value, this.scroller);
	                        this.currentPage = prevPage - 1;
	                        this.animationEnd(value);
	                    }.bind(this));
	                } else {
	                    this.to(el, property, (value < 0 ? -1 : 1) * (prevPage + 1) * this.step, 400, iosEase, this.change, function (value) {
	                        this.correctionEnd(value, this.scroller);
	                        this.currentPage = prevPage + 1;
	                        this.animationEnd(value);
	                    }.bind(this));
	                }
	            } else {
	                this.to(el, property, (value < 0 ? -1 : 1) * prevPage * this.step, 400, iosEase, this.change, function (value) {
	                    this.correctionEnd(value, this.scroller);
	                    this.animationEnd(value);
	                }.bind(this));
	            }
	        } else {
	            var rpt = Math.floor(Math.abs(value / this.step));
	            var dy = value % this.step;
	            if (Math.abs(dy) > this.step / 2) {
	                this.to(el, property, (value < 0 ? -1 : 1) * (rpt + 1) * this.step, 400, iosEase, this.change, function (value) {
	                    this.correctionEnd(value);
	                    this.animationEnd(value, this.scroller);
	                }.bind(this));
	            } else {
	                this.to(el, property, (value < 0 ? -1 : 1) * rpt * this.step, 400, iosEase, this.change, function (value) {
	                    this.correctionEnd(value, this.scroller);
	                    this.animationEnd(value);
	                }.bind(this));
	            }
	        }
	    }
	};

	module.exports = AlloyTouch;
	//export default AlloyTouch;

	/* window.AlloyTouch = AlloyTouch;

	 })();
	 */

/***/ },

/***/ 476:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _defineProperty = __webpack_require__(161);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* transformjs
	 * By dntzhang
	 */
	//;(function () {

	var Matrix3D = function Matrix3D(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	    this.elements = window.Float32Array ? new Float32Array(16) : [];
	    var te = this.elements;
	    te[0] = n11 !== undefined ? n11 : 1;te[4] = n12 || 0;te[8] = n13 || 0;te[12] = n14 || 0;
	    te[1] = n21 || 0;te[5] = n22 !== undefined ? n22 : 1;te[9] = n23 || 0;te[13] = n24 || 0;
	    te[2] = n31 || 0;te[6] = n32 || 0;te[10] = n33 !== undefined ? n33 : 1;te[14] = n34 || 0;
	    te[3] = n41 || 0;te[7] = n42 || 0;te[11] = n43 || 0;te[15] = n44 !== undefined ? n44 : 1;
	};

	Matrix3D.DEG_TO_RAD = Math.PI / 180;

	Matrix3D.prototype = {
	    set: function set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {
	        var te = this.elements;
	        te[0] = n11;te[4] = n12;te[8] = n13;te[12] = n14;
	        te[1] = n21;te[5] = n22;te[9] = n23;te[13] = n24;
	        te[2] = n31;te[6] = n32;te[10] = n33;te[14] = n34;
	        te[3] = n41;te[7] = n42;te[11] = n43;te[15] = n44;
	        return this;
	    },
	    identity: function identity() {
	        this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
	        return this;
	    },
	    multiplyMatrices: function multiplyMatrices(a, be) {

	        var ae = a.elements;
	        var te = this.elements;
	        var a11 = ae[0],
	            a12 = ae[4],
	            a13 = ae[8],
	            a14 = ae[12];
	        var a21 = ae[1],
	            a22 = ae[5],
	            a23 = ae[9],
	            a24 = ae[13];
	        var a31 = ae[2],
	            a32 = ae[6],
	            a33 = ae[10],
	            a34 = ae[14];
	        var a41 = ae[3],
	            a42 = ae[7],
	            a43 = ae[11],
	            a44 = ae[15];

	        var b11 = be[0],
	            b12 = be[1],
	            b13 = be[2],
	            b14 = be[3];
	        var b21 = be[4],
	            b22 = be[5],
	            b23 = be[6],
	            b24 = be[7];
	        var b31 = be[8],
	            b32 = be[9],
	            b33 = be[10],
	            b34 = be[11];
	        var b41 = be[12],
	            b42 = be[13],
	            b43 = be[14],
	            b44 = be[15];

	        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
	        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
	        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
	        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

	        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
	        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
	        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
	        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

	        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
	        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
	        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
	        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

	        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
	        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
	        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
	        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

	        return this;
	    },
	    // 解决角度为90的整数倍导致Math.cos得到极小的数，其实是0。导致不渲染
	    _rounded: function _rounded(value, i) {
	        i = Math.pow(10, i || 15);
	        // default
	        return Math.round(value * i) / i;
	    },
	    appendTransform: function appendTransform(x, y, z, scaleX, scaleY, scaleZ, rotateX, rotateY, rotateZ, skewX, skewY, originX, originY, originZ) {

	        var rx = rotateX * Matrix3D.DEG_TO_RAD;
	        var cosx = this._rounded(Math.cos(rx));
	        var sinx = this._rounded(Math.sin(rx));
	        var ry = rotateY * Matrix3D.DEG_TO_RAD;
	        var cosy = this._rounded(Math.cos(ry));
	        var siny = this._rounded(Math.sin(ry));
	        var rz = rotateZ * Matrix3D.DEG_TO_RAD;
	        var cosz = this._rounded(Math.cos(rz * -1));
	        var sinz = this._rounded(Math.sin(rz * -1));

	        this.multiplyMatrices(this, [1, 0, 0, x, 0, cosx, sinx, y, 0, -sinx, cosx, z, 0, 0, 0, 1]);

	        this.multiplyMatrices(this, [cosy, 0, siny, 0, 0, 1, 0, 0, -siny, 0, cosy, 0, 0, 0, 0, 1]);

	        this.multiplyMatrices(this, [cosz * scaleX, sinz * scaleY, 0, 0, -sinz * scaleX, cosz * scaleY, 0, 0, 0, 0, 1 * scaleZ, 0, 0, 0, 0, 1]);

	        if (skewX || skewY) {
	            this.multiplyMatrices(this, [this._rounded(Math.cos(skewX * Matrix3D.DEG_TO_RAD)), this._rounded(Math.sin(skewX * Matrix3D.DEG_TO_RAD)), 0, 0, -1 * this._rounded(Math.sin(skewY * Matrix3D.DEG_TO_RAD)), this._rounded(Math.cos(skewY * Matrix3D.DEG_TO_RAD)), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	        }

	        if (originX || originY || originZ) {
	            this.elements[12] -= originX * this.elements[0] + originY * this.elements[4] + originZ * this.elements[8];
	            this.elements[13] -= originX * this.elements[1] + originY * this.elements[5] + originZ * this.elements[9];
	            this.elements[14] -= originX * this.elements[2] + originY * this.elements[6] + originZ * this.elements[10];
	        }
	        return this;
	    }
	};

	function observe(target, props, callback) {
	    for (var i = 0, len = props.length; i < len; i++) {
	        var prop = props[i];
	        watch(target, prop, callback);
	    }
	}

	function watch(target, prop, callback) {
	    (0, _defineProperty2.default)(target, prop, {
	        get: function get() {
	            return this["__" + prop];
	        },
	        set: function set(value) {
	            if (value !== this["__" + prop]) {
	                this["__" + prop] = value;
	                callback();
	            }
	        }
	    });
	}

	//window.Transform = function (element) {
	var Transform = function Transform(element) {

	    observe(element, ["translateX", "translateY", "translateZ", "scaleX", "scaleY", "scaleZ", "rotateX", "rotateY", "rotateZ", "skewX", "skewY", "originX", "originY", "originZ"], function () {
	        var mtx = element.matrix3D.identity().appendTransform(element.translateX, element.translateY, element.translateZ, element.scaleX, element.scaleY, element.scaleZ, element.rotateX, element.rotateY, element.rotateZ, element.skewX, element.skewY, element.originX, element.originY, element.originZ);
	        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(mtx.elements).join(",") + ")";
	    });

	    observe(element, ["perspective"], function () {
	        element.style.transform = element.style.msTransform = element.style.OTransform = element.style.MozTransform = element.style.webkitTransform = "perspective(" + element.perspective + "px) matrix3d(" + Array.prototype.slice.call(element.matrix3D.elements).join(",") + ")";
	    });

	    element.matrix3D = new Matrix3D();
	    element.perspective = 500;
	    element.scaleX = element.scaleY = element.scaleZ = 1;
	    //由于image自带了x\y\z，所有加上translate前缀
	    element.translateX = element.translateY = element.translateZ = element.rotateX = element.rotateY = element.rotateZ = element.skewX = element.skewY = element.originX = element.originY = element.originZ = 0;
	};

	module.exports = Transform;
	// export default Transform;
	//})();

/***/ }

});