"use strict";
exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 8160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlyphsGeometry: () => (/* binding */ wa),
/* harmony export */   Text: () => (/* binding */ Oa),
/* harmony export */   configureTextBuilder: () => (/* binding */ Na),
/* harmony export */   createTextDerivedMaterial: () => (/* binding */ Da),
/* harmony export */   dumpSDFTextures: () => (/* binding */ za),
/* harmony export */   fontResolverWorkerModule: () => (/* binding */ fa),
/* harmony export */   getCaretAtPoint: () => (/* binding */ ja),
/* harmony export */   getSelectionRects: () => (/* binding */ Va),
/* harmony export */   getTextRenderInfo: () => (/* binding */ hn),
/* harmony export */   preloadFont: () => (/* binding */ Wa),
/* harmony export */   typesetterWorkerModule: () => (/* binding */ Ua)
/* harmony export */ });
/* harmony import */ var _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8815);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8143);



function zn() {
  var c = /* @__PURE__ */ Object.create(null);
  function r(t, e) {
    var a = t.id, o = t.name, n = t.dependencies;
    n === void 0 && (n = []);
    var i = t.init;
    i === void 0 && (i = function() {
    });
    var s = t.getTransferables;
    if (s === void 0 && (s = null), !c[a])
      try {
        n = n.map(function(l) {
          return l && l.isWorkerModule && (r(l, function(h) {
            if (h instanceof Error)
              throw h;
          }), l = c[l.id].value), l;
        }), i = u("<" + o + ">.init", i), s && (s = u("<" + o + ">.getTransferables", s));
        var f = null;
        typeof i == "function" ? f = i.apply(void 0, n) : console.error("worker module init function failed to rehydrate"), c[a] = {
          id: a,
          value: f,
          getTransferables: s
        }, e(f);
      } catch (l) {
        l && l.noLog || console.error(l), e(l);
      }
  }
  function d(t, e) {
    var a, o = t.id, n = t.args;
    (!c[o] || typeof c[o].value != "function") && e(new Error("Worker module " + o + ": not found or its 'init' did not return a function"));
    try {
      var i = (a = c[o]).value.apply(a, n);
      i && typeof i.then == "function" ? i.then(s, function(f) {
        return e(f instanceof Error ? f : new Error("" + f));
      }) : s(i);
    } catch (f) {
      e(f);
    }
    function s(f) {
      try {
        var l = c[o].getTransferables && c[o].getTransferables(f);
        (!l || !Array.isArray(l) || !l.length) && (l = void 0), e(f, l);
      } catch (h) {
        console.error(h), e(h);
      }
    }
  }
  function u(t, e) {
    var a = void 0;
    self.troikaDefine = function(n) {
      return a = n;
    };
    var o = URL.createObjectURL(
      new Blob(
        ["/** " + t.replace(/\*/g, "") + ` **/

troikaDefine(
` + e + `
)`],
        { type: "application/javascript" }
      )
    );
    try {
      importScripts(o);
    } catch (n) {
      console.error(n);
    }
    return URL.revokeObjectURL(o), delete self.troikaDefine, a;
  }
  self.addEventListener("message", function(t) {
    var e = t.data, a = e.messageId, o = e.action, n = e.data;
    try {
      o === "registerModule" && r(n, function(i) {
        i instanceof Error ? postMessage({
          messageId: a,
          success: !1,
          error: i.message
        }) : postMessage({
          messageId: a,
          success: !0,
          result: { isCallable: typeof i == "function" }
        });
      }), o === "callModule" && d(n, function(i, s) {
        i instanceof Error ? postMessage({
          messageId: a,
          success: !1,
          error: i.message
        }) : postMessage({
          messageId: a,
          success: !0,
          result: i
        }, s || void 0);
      });
    } catch (i) {
      postMessage({
        messageId: a,
        success: !1,
        error: i.stack
      });
    }
  });
}
function jn(c) {
  var r = function() {
    for (var d = [], u = arguments.length; u--; )
      d[u] = arguments[u];
    return r._getInitResult().then(function(t) {
      if (typeof t == "function")
        return t.apply(void 0, d);
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  };
  return r._getInitResult = function() {
    var d = c.dependencies, u = c.init;
    d = Array.isArray(d) ? d.map(
      function(e) {
        return e && e._getInitResult ? e._getInitResult() : e;
      }
    ) : [];
    var t = Promise.all(d).then(function(e) {
      return u.apply(null, e);
    });
    return r._getInitResult = function() {
      return t;
    }, t;
  }, r;
}
var sn = function() {
  var c = !1;
  if (typeof window < "u" && typeof window.document < "u")
    try {
      var r = new Worker(
        URL.createObjectURL(new Blob([""], { type: "application/javascript" }))
      );
      r.terminate(), c = !0;
    } catch (d) {
      typeof process < "u", console.log(
        "Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + d.message + "]"
      );
    }
  return sn = function() {
    return c;
  }, c;
}, Vn = 0, Xn = 0, ir = !1, yt = /* @__PURE__ */ Object.create(null), bt = /* @__PURE__ */ Object.create(null), ur = /* @__PURE__ */ Object.create(null);
function it(c) {
  if ((!c || typeof c.init != "function") && !ir)
    throw new Error("requires `options.init` function");
  var r = c.dependencies, d = c.init, u = c.getTransferables, t = c.workerId;
  if (!sn())
    return jn(c);
  t == null && (t = "#default");
  var e = "workerModule" + ++Vn, a = c.name || e, o = null;
  r = r && r.map(function(i) {
    return typeof i == "function" && !i.workerModuleData && (ir = !0, i = it({
      workerId: t,
      name: "<" + a + "> function dependency: " + i.name,
      init: `function(){return (
` + Ot(i) + `
)}`
    }), ir = !1), i && i.workerModuleData && (i = i.workerModuleData), i;
  });
  function n() {
    for (var i = [], s = arguments.length; s--; )
      i[s] = arguments[s];
    if (!o) {
      o = jr(t, "registerModule", n.workerModuleData);
      var f = function() {
        o = null, bt[t].delete(f);
      };
      (bt[t] || (bt[t] = /* @__PURE__ */ new Set())).add(f);
    }
    return o.then(function(l) {
      var h = l.isCallable;
      if (h)
        return jr(t, "callModule", { id: e, args: i });
      throw new Error("Worker module function was called but `init` did not return a callable function");
    });
  }
  return n.workerModuleData = {
    isWorkerModule: !0,
    id: e,
    name: a,
    dependencies: r,
    init: Ot(d),
    getTransferables: u && Ot(u)
  }, n;
}
function Hn(c) {
  bt[c] && bt[c].forEach(function(r) {
    r();
  }), yt[c] && (yt[c].terminate(), delete yt[c]);
}
function Ot(c) {
  var r = c.toString();
  return !/^function/.test(r) && /^\w+\s*\(/.test(r) && (r = "function " + r), r;
}
function Yn(c) {
  var r = yt[c];
  if (!r) {
    var d = Ot(zn);
    r = yt[c] = new Worker(
      URL.createObjectURL(
        new Blob(
          ["/** Worker Module Bootstrap: " + c.replace(/\*/g, "") + ` **/

;(` + d + ")()"],
          { type: "application/javascript" }
        )
      )
    ), r.onmessage = function(u) {
      var t = u.data, e = t.messageId, a = ur[e];
      if (!a)
        throw new Error("WorkerModule response with empty or unknown messageId");
      delete ur[e], a(t);
    };
  }
  return r;
}
function jr(c, r, d) {
  return new Promise(function(u, t) {
    var e = ++Xn;
    ur[e] = function(a) {
      a.success ? u(a.result) : t(new Error("Error in worker " + r + " call: " + a.error));
    }, Yn(c).postMessage({
      messageId: e,
      action: r,
      data: d
    });
  });
}
function fn() {
  var c = function(r) {
    function d(B, M, v, b, w, A, _, W) {
      var E = 1 - _;
      W.x = E * E * B + 2 * E * _ * v + _ * _ * w, W.y = E * E * M + 2 * E * _ * b + _ * _ * A;
    }
    function u(B, M, v, b, w, A, _, W, E, P) {
      var H = 1 - E;
      P.x = H * H * H * B + 3 * H * H * E * v + 3 * H * E * E * w + E * E * E * _, P.y = H * H * H * M + 3 * H * H * E * b + 3 * H * E * E * A + E * E * E * W;
    }
    function t(B, M) {
      for (var v = /([MLQCZ])([^MLQCZ]*)/g, b, w, A, _, W; b = v.exec(B); ) {
        var E = b[2].replace(/^\s*|\s*$/g, "").split(/[,\s]+/).map(function(P) {
          return parseFloat(P);
        });
        switch (b[1]) {
          case "M":
            _ = w = E[0], W = A = E[1];
            break;
          case "L":
            (E[0] !== _ || E[1] !== W) && M("L", _, W, _ = E[0], W = E[1]);
            break;
          case "Q": {
            M("Q", _, W, _ = E[2], W = E[3], E[0], E[1]);
            break;
          }
          case "C": {
            M("C", _, W, _ = E[4], W = E[5], E[0], E[1], E[2], E[3]);
            break;
          }
          case "Z":
            (_ !== w || W !== A) && M("L", _, W, w, A);
            break;
        }
      }
    }
    function e(B, M, v) {
      v === void 0 && (v = 16);
      var b = { x: 0, y: 0 };
      t(B, function(w, A, _, W, E, P, H, ee, X) {
        switch (w) {
          case "L":
            M(A, _, W, E);
            break;
          case "Q": {
            for (var z = A, pe = _, ue = 1; ue < v; ue++)
              d(
                A,
                _,
                P,
                H,
                W,
                E,
                ue / (v - 1),
                b
              ), M(z, pe, b.x, b.y), z = b.x, pe = b.y;
            break;
          }
          case "C": {
            for (var Q = A, te = _, se = 1; se < v; se++)
              u(
                A,
                _,
                P,
                H,
                ee,
                X,
                W,
                E,
                se / (v - 1),
                b
              ), M(Q, te, b.x, b.y), Q = b.x, te = b.y;
            break;
          }
        }
      });
    }
    var a = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", o = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}", n = /* @__PURE__ */ new WeakMap(), i = {
      premultipliedAlpha: !1,
      preserveDrawingBuffer: !0,
      antialias: !1,
      depth: !1
    };
    function s(B, M) {
      var v = B.getContext ? B.getContext("webgl", i) : B, b = n.get(v);
      if (!b) {
        let H = function(Q) {
          var te = A[Q];
          if (!te && (te = A[Q] = v.getExtension(Q), !te))
            throw new Error(Q + " not supported");
          return te;
        }, ee = function(Q, te) {
          var se = v.createShader(te);
          return v.shaderSource(se, Q), v.compileShader(se), se;
        }, X = function(Q, te, se, j) {
          if (!_[Q]) {
            var re = {}, q = {}, L = v.createProgram();
            v.attachShader(L, ee(te, v.VERTEX_SHADER)), v.attachShader(L, ee(se, v.FRAGMENT_SHADER)), v.linkProgram(L), _[Q] = {
              program: L,
              transaction: function(K) {
                v.useProgram(L), K({
                  setUniform: function(Y, be) {
                    for (var ne = [], oe = arguments.length - 2; oe-- > 0; )
                      ne[oe] = arguments[oe + 2];
                    var le = q[be] || (q[be] = v.getUniformLocation(L, be));
                    v["uniform" + Y].apply(v, [le].concat(ne));
                  },
                  setAttribute: function(Y, be, ne, oe, le) {
                    var de = re[Y];
                    de || (de = re[Y] = {
                      buf: v.createBuffer(),
                      // TODO should we destroy our buffers?
                      loc: v.getAttribLocation(L, Y),
                      data: null
                    }), v.bindBuffer(v.ARRAY_BUFFER, de.buf), v.vertexAttribPointer(de.loc, be, v.FLOAT, !1, 0, 0), v.enableVertexAttribArray(de.loc), w ? v.vertexAttribDivisor(de.loc, oe) : H("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(de.loc, oe), le !== de.data && (v.bufferData(v.ARRAY_BUFFER, le, ne), de.data = le);
                  }
                });
              }
            };
          }
          _[Q].transaction(j);
        }, z = function(Q, te) {
          E++;
          try {
            v.activeTexture(v.TEXTURE0 + E);
            var se = W[Q];
            se || (se = W[Q] = v.createTexture(), v.bindTexture(v.TEXTURE_2D, se), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST), v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST)), v.bindTexture(v.TEXTURE_2D, se), te(se, E);
          } finally {
            E--;
          }
        }, pe = function(Q, te, se) {
          var j = v.createFramebuffer();
          P.push(j), v.bindFramebuffer(v.FRAMEBUFFER, j), v.activeTexture(v.TEXTURE0 + te), v.bindTexture(v.TEXTURE_2D, Q), v.framebufferTexture2D(v.FRAMEBUFFER, v.COLOR_ATTACHMENT0, v.TEXTURE_2D, Q, 0);
          try {
            se(j);
          } finally {
            v.deleteFramebuffer(j), v.bindFramebuffer(v.FRAMEBUFFER, P[--P.length - 1] || null);
          }
        }, ue = function() {
          A = {}, _ = {}, W = {}, E = -1, P.length = 0;
        };
        var w = typeof WebGL2RenderingContext < "u" && v instanceof WebGL2RenderingContext, A = {}, _ = {}, W = {}, E = -1, P = [];
        v.canvas.addEventListener("webglcontextlost", function(Q) {
          ue(), Q.preventDefault();
        }, !1), n.set(v, b = {
          gl: v,
          isWebGL2: w,
          getExtension: H,
          withProgram: X,
          withTexture: z,
          withTextureFramebuffer: pe,
          handleContextLoss: ue
        });
      }
      M(b);
    }
    function f(B, M, v, b, w, A, _, W) {
      _ === void 0 && (_ = 15), W === void 0 && (W = null), s(B, function(E) {
        var P = E.gl, H = E.withProgram, ee = E.withTexture;
        ee("copy", function(X, z) {
          P.texImage2D(P.TEXTURE_2D, 0, P.RGBA, w, A, 0, P.RGBA, P.UNSIGNED_BYTE, M), H("copy", a, o, function(pe) {
            var ue = pe.setUniform, Q = pe.setAttribute;
            Q("aUV", 2, P.STATIC_DRAW, 0, new Float32Array([0, 0, 2, 0, 0, 2])), ue("1i", "image", z), P.bindFramebuffer(P.FRAMEBUFFER, W || null), P.disable(P.BLEND), P.colorMask(_ & 8, _ & 4, _ & 2, _ & 1), P.viewport(v, b, w, A), P.scissor(v, b, w, A), P.drawArrays(P.TRIANGLES, 0, 3);
          });
        });
      });
    }
    function l(B, M, v) {
      var b = B.width, w = B.height;
      s(B, function(A) {
        var _ = A.gl, W = new Uint8Array(b * w * 4);
        _.readPixels(0, 0, b, w, _.RGBA, _.UNSIGNED_BYTE, W), B.width = M, B.height = v, f(_, W, 0, 0, b, w);
      });
    }
    var h = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      withWebGLContext: s,
      renderImageData: f,
      resizeWebGLCanvasWithoutClearing: l
    });
    function p(B, M, v, b, w, A) {
      A === void 0 && (A = 1);
      var _ = new Uint8Array(B * M), W = b[2] - b[0], E = b[3] - b[1], P = [];
      e(v, function(Q, te, se, j) {
        P.push({
          x1: Q,
          y1: te,
          x2: se,
          y2: j,
          minX: Math.min(Q, se),
          minY: Math.min(te, j),
          maxX: Math.max(Q, se),
          maxY: Math.max(te, j)
        });
      }), P.sort(function(Q, te) {
        return Q.maxX - te.maxX;
      });
      for (var H = 0; H < B; H++)
        for (var ee = 0; ee < M; ee++) {
          var X = pe(
            b[0] + W * (H + 0.5) / B,
            b[1] + E * (ee + 0.5) / M
          ), z = Math.pow(1 - Math.abs(X) / w, A) / 2;
          X < 0 && (z = 1 - z), z = Math.max(0, Math.min(255, Math.round(z * 255))), _[ee * B + H] = z;
        }
      return _;
      function pe(Q, te) {
        for (var se = 1 / 0, j = 1 / 0, re = P.length; re--; ) {
          var q = P[re];
          if (q.maxX + j <= Q)
            break;
          if (Q + j > q.minX && te - j < q.maxY && te + j > q.minY) {
            var L = O(Q, te, q.x1, q.y1, q.x2, q.y2);
            L < se && (se = L, j = Math.sqrt(se));
          }
        }
        return ue(Q, te) && (j = -j), j;
      }
      function ue(Q, te) {
        for (var se = 0, j = P.length; j--; ) {
          var re = P[j];
          if (re.maxX <= Q)
            break;
          var q = re.y1 > te != re.y2 > te && Q < (re.x2 - re.x1) * (te - re.y1) / (re.y2 - re.y1) + re.x1;
          q && (se += re.y1 < re.y2 ? 1 : -1);
        }
        return se !== 0;
      }
    }
    function g(B, M, v, b, w, A, _, W, E, P) {
      A === void 0 && (A = 1), W === void 0 && (W = 0), E === void 0 && (E = 0), P === void 0 && (P = 0), y(B, M, v, b, w, A, _, null, W, E, P);
    }
    function y(B, M, v, b, w, A, _, W, E, P, H) {
      A === void 0 && (A = 1), E === void 0 && (E = 0), P === void 0 && (P = 0), H === void 0 && (H = 0);
      for (var ee = p(B, M, v, b, w, A), X = new Uint8Array(ee.length * 4), z = 0; z < ee.length; z++)
        X[z * 4 + H] = ee[z];
      f(_, X, E, P, B, M, 1 << 3 - H, W);
    }
    function O(B, M, v, b, w, A) {
      var _ = w - v, W = A - b, E = _ * _ + W * W, P = E ? Math.max(0, Math.min(1, ((B - v) * _ + (M - b) * W) / E)) : 0, H = B - (v + P * _), ee = M - (b + P * W);
      return H * H + ee * ee;
    }
    var S = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: p,
      generateIntoCanvas: g,
      generateIntoFramebuffer: y
    }), F = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}", U = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}", T = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}", G = new Float32Array([0, 0, 2, 0, 0, 2]), x = null, C = !1, N = {}, R = /* @__PURE__ */ new WeakMap();
    function J(B) {
      if (!C && !V(B))
        throw new Error("WebGL generation not supported");
    }
    function m(B, M, v, b, w, A, _) {
      if (A === void 0 && (A = 1), _ === void 0 && (_ = null), !_ && (_ = x, !_)) {
        var W = typeof OffscreenCanvas == "function" ? new OffscreenCanvas(1, 1) : typeof document < "u" ? document.createElement("canvas") : null;
        if (!W)
          throw new Error("OffscreenCanvas or DOM canvas not supported");
        _ = x = W.getContext("webgl", { depth: !1 });
      }
      J(_);
      var E = new Uint8Array(B * M * 4);
      s(_, function(X) {
        var z = X.gl, pe = X.withTexture, ue = X.withTextureFramebuffer;
        pe("readable", function(Q, te) {
          z.texImage2D(z.TEXTURE_2D, 0, z.RGBA, B, M, 0, z.RGBA, z.UNSIGNED_BYTE, null), ue(Q, te, function(se) {
            k(
              B,
              M,
              v,
              b,
              w,
              A,
              z,
              se,
              0,
              0,
              0
              // red channel
            ), z.readPixels(0, 0, B, M, z.RGBA, z.UNSIGNED_BYTE, E);
          });
        });
      });
      for (var P = new Uint8Array(B * M), H = 0, ee = 0; H < E.length; H += 4)
        P[ee++] = E[H];
      return P;
    }
    function D(B, M, v, b, w, A, _, W, E, P) {
      A === void 0 && (A = 1), W === void 0 && (W = 0), E === void 0 && (E = 0), P === void 0 && (P = 0), k(B, M, v, b, w, A, _, null, W, E, P);
    }
    function k(B, M, v, b, w, A, _, W, E, P, H) {
      A === void 0 && (A = 1), E === void 0 && (E = 0), P === void 0 && (P = 0), H === void 0 && (H = 0), J(_);
      var ee = [];
      e(v, function(X, z, pe, ue) {
        ee.push(X, z, pe, ue);
      }), ee = new Float32Array(ee), s(_, function(X) {
        var z = X.gl, pe = X.isWebGL2, ue = X.getExtension, Q = X.withProgram, te = X.withTexture, se = X.withTextureFramebuffer, j = X.handleContextLoss;
        if (te("rawDistances", function(re, q) {
          (B !== re._lastWidth || M !== re._lastHeight) && z.texImage2D(
            z.TEXTURE_2D,
            0,
            z.RGBA,
            re._lastWidth = B,
            re._lastHeight = M,
            0,
            z.RGBA,
            z.UNSIGNED_BYTE,
            null
          ), Q("main", F, U, function(L) {
            var he = L.setAttribute, K = L.setUniform, ae = !pe && ue("ANGLE_instanced_arrays"), Y = !pe && ue("EXT_blend_minmax");
            he("aUV", 2, z.STATIC_DRAW, 0, G), he("aLineSegment", 4, z.DYNAMIC_DRAW, 1, ee), K.apply(void 0, ["4f", "uGlyphBounds"].concat(b)), K("1f", "uMaxDistance", w), K("1f", "uExponent", A), se(re, q, function(be) {
              z.enable(z.BLEND), z.colorMask(!0, !0, !0, !0), z.viewport(0, 0, B, M), z.scissor(0, 0, B, M), z.blendFunc(z.ONE, z.ONE), z.blendEquationSeparate(z.FUNC_ADD, pe ? z.MAX : Y.MAX_EXT), z.clear(z.COLOR_BUFFER_BIT), pe ? z.drawArraysInstanced(z.TRIANGLES, 0, 3, ee.length / 4) : ae.drawArraysInstancedANGLE(z.TRIANGLES, 0, 3, ee.length / 4);
            });
          }), Q("post", a, T, function(L) {
            L.setAttribute("aUV", 2, z.STATIC_DRAW, 0, G), L.setUniform("1i", "tex", q), z.bindFramebuffer(z.FRAMEBUFFER, W), z.disable(z.BLEND), z.colorMask(H === 0, H === 1, H === 2, H === 3), z.viewport(E, P, B, M), z.scissor(E, P, B, M), z.drawArrays(z.TRIANGLES, 0, 3);
          });
        }), z.isContextLost())
          throw j(), new Error("webgl context lost");
      });
    }
    function V(B) {
      var M = !B || B === x ? N : B.canvas || B, v = R.get(M);
      if (v === void 0) {
        C = !0;
        var b = null;
        try {
          var w = [
            97,
            106,
            97,
            61,
            99,
            137,
            118,
            80,
            80,
            118,
            137,
            99,
            61,
            97,
            106,
            97
          ], A = m(
            4,
            4,
            "M8,8L16,8L24,24L16,24Z",
            [0, 0, 32, 32],
            24,
            1,
            B
          );
          v = A && w.length === A.length && A.every(function(_, W) {
            return _ === w[W];
          }), v || (b = "bad trial run results", console.info(w, A));
        } catch (_) {
          v = !1, b = _.message;
        }
        b && console.warn("WebGL SDF generation not supported:", b), C = !1, R.set(M, v);
      }
      return v;
    }
    var I = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      generate: m,
      generateIntoCanvas: D,
      generateIntoFramebuffer: k,
      isSupported: V
    });
    function Z(B, M, v, b, w, A) {
      w === void 0 && (w = Math.max(b[2] - b[0], b[3] - b[1]) / 2), A === void 0 && (A = 1);
      try {
        return m.apply(I, arguments);
      } catch (_) {
        return console.info("WebGL SDF generation failed, falling back to JS", _), p.apply(S, arguments);
      }
    }
    function $(B, M, v, b, w, A, _, W, E, P) {
      w === void 0 && (w = Math.max(b[2] - b[0], b[3] - b[1]) / 2), A === void 0 && (A = 1), W === void 0 && (W = 0), E === void 0 && (E = 0), P === void 0 && (P = 0);
      try {
        return D.apply(I, arguments);
      } catch (H) {
        return console.info("WebGL SDF generation failed, falling back to JS", H), g.apply(S, arguments);
      }
    }
    return r.forEachPathCommand = t, r.generate = Z, r.generateIntoCanvas = $, r.javascript = S, r.pathToLineSegments = e, r.webgl = I, r.webglUtils = h, Object.defineProperty(r, "__esModule", { value: !0 }), r;
  }({});
  return c;
}
function Jn() {
  var c = function(r) {
    var d = {
      R: "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
      EN: "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
      ES: "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
      ET: "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
      AN: "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
      CS: "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
      B: "a,3,f+2,2v,690",
      S: "9,2,k",
      WS: "c,k,4f4,1vk+a,u,1j,335",
      ON: "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
      BN: "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
      NSM: "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
      AL: "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
      LRO: "6ct",
      RLO: "6cu",
      LRE: "6cq",
      RLE: "6cr",
      PDF: "6cs",
      LRI: "6ee",
      RLI: "6ef",
      FSI: "6eg",
      PDI: "6eh"
    }, u = {}, t = {};
    u.L = 1, t[1] = "L", Object.keys(d).forEach(function(j, re) {
      u[j] = 1 << re + 1, t[u[j]] = j;
    }), Object.freeze(u);
    var e = u.LRI | u.RLI | u.FSI, a = u.L | u.R | u.AL, o = u.B | u.S | u.WS | u.ON | u.FSI | u.LRI | u.RLI | u.PDI, n = u.BN | u.RLE | u.LRE | u.RLO | u.LRO | u.PDF, i = u.S | u.WS | u.B | e | u.PDI | n, s = null;
    function f() {
      if (!s) {
        s = /* @__PURE__ */ new Map();
        var j = function(q) {
          if (d.hasOwnProperty(q)) {
            var L = 0;
            d[q].split(",").forEach(function(he) {
              var K = he.split("+"), ae = K[0], Y = K[1];
              ae = parseInt(ae, 36), Y = Y ? parseInt(Y, 36) : 0, s.set(L += ae, u[q]);
              for (var be = 0; be < Y; be++)
                s.set(++L, u[q]);
            });
          }
        };
        for (var re in d)
          j(re);
      }
    }
    function l(j) {
      return f(), s.get(j.codePointAt(0)) || u.L;
    }
    function h(j) {
      return t[l(j)];
    }
    var p = {
      pairs: "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
      canonical: "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
    };
    function g(j, re) {
      var q = 36, L = 0, he = /* @__PURE__ */ new Map(), K = re && /* @__PURE__ */ new Map(), ae;
      return j.split(",").forEach(function Y(be) {
        if (be.indexOf("+") !== -1)
          for (var ne = +be; ne--; )
            Y(ae);
        else {
          ae = be;
          var oe = be.split(">"), le = oe[0], de = oe[1];
          le = String.fromCodePoint(L += parseInt(le, q)), de = String.fromCodePoint(L += parseInt(de, q)), he.set(le, de), re && K.set(de, le);
        }
      }), { map: he, reverseMap: K };
    }
    var y, O, S;
    function F() {
      if (!y) {
        var j = g(p.pairs, !0), re = j.map, q = j.reverseMap;
        y = re, O = q, S = g(p.canonical, !1).map;
      }
    }
    function U(j) {
      return F(), y.get(j) || null;
    }
    function T(j) {
      return F(), O.get(j) || null;
    }
    function G(j) {
      return F(), S.get(j) || null;
    }
    var x = u.L, C = u.R, N = u.EN, R = u.ES, J = u.ET, m = u.AN, D = u.CS, k = u.B, V = u.S, I = u.ON, Z = u.BN, $ = u.NSM, B = u.AL, M = u.LRO, v = u.RLO, b = u.LRE, w = u.RLE, A = u.PDF, _ = u.LRI, W = u.RLI, E = u.FSI, P = u.PDI;
    function H(j, re) {
      for (var q = 125, L = new Uint32Array(j.length), he = 0; he < j.length; he++)
        L[he] = l(j[he]);
      var K = /* @__PURE__ */ new Map();
      function ae(Le, We) {
        var Be = L[Le];
        L[Le] = We, K.set(Be, K.get(Be) - 1), Be & o && K.set(o, K.get(o) - 1), K.set(We, (K.get(We) || 0) + 1), We & o && K.set(o, (K.get(o) || 0) + 1);
      }
      for (var Y = new Uint8Array(j.length), be = /* @__PURE__ */ new Map(), ne = [], oe = null, le = 0; le < j.length; le++)
        oe || ne.push(oe = {
          start: le,
          end: j.length - 1,
          // 3.3.1 P2-P3: Determine the paragraph level
          level: re === "rtl" ? 1 : re === "ltr" ? 0 : Ir(le, !1)
        }), L[le] & k && (oe.end = le, oe = null);
      for (var de = w | b | v | M | e | P | A | k, xe = function(Le) {
        return Le + (Le & 1 ? 1 : 2);
      }, Ce = function(Le) {
        return Le + (Le & 1 ? 2 : 1);
      }, ge = 0; ge < ne.length; ge++) {
        oe = ne[ge];
        var me = [{
          _level: oe.level,
          _override: 0,
          //0=neutral, 1=L, 2=R
          _isolate: 0
          //bool
        }], fe = void 0, ke = 0, we = 0, Oe = 0;
        K.clear();
        for (var Se = oe.start; Se <= oe.end; Se++) {
          var ce = L[Se];
          if (fe = me[me.length - 1], K.set(ce, (K.get(ce) || 0) + 1), ce & o && K.set(o, (K.get(o) || 0) + 1), ce & de)
            if (ce & (w | b)) {
              Y[Se] = fe._level;
              var Ue = (ce === w ? Ce : xe)(fe._level);
              Ue <= q && !ke && !we ? me.push({
                _level: Ue,
                _override: 0,
                _isolate: 0
              }) : ke || we++;
            } else if (ce & (v | M)) {
              Y[Se] = fe._level;
              var Xe = (ce === v ? Ce : xe)(fe._level);
              Xe <= q && !ke && !we ? me.push({
                _level: Xe,
                _override: ce & v ? C : x,
                _isolate: 0
              }) : ke || we++;
            } else if (ce & e) {
              ce & E && (ce = Ir(Se + 1, !0) === 1 ? W : _), Y[Se] = fe._level, fe._override && ae(Se, fe._override);
              var _e = (ce === W ? Ce : xe)(fe._level);
              _e <= q && ke === 0 && we === 0 ? (Oe++, me.push({
                _level: _e,
                _override: 0,
                _isolate: 1,
                _isolInitIndex: Se
              })) : ke++;
            } else if (ce & P) {
              if (ke > 0)
                ke--;
              else if (Oe > 0) {
                for (we = 0; !me[me.length - 1]._isolate; )
                  me.pop();
                var ye = me[me.length - 1]._isolInitIndex;
                ye != null && (be.set(ye, Se), be.set(Se, ye)), me.pop(), Oe--;
              }
              fe = me[me.length - 1], Y[Se] = fe._level, fe._override && ae(Se, fe._override);
            } else
              ce & A ? (ke === 0 && (we > 0 ? we-- : !fe._isolate && me.length > 1 && (me.pop(), fe = me[me.length - 1])), Y[Se] = fe._level) : ce & k && (Y[Se] = oe.level);
          else
            Y[Se] = fe._level, fe._override && ce !== Z && ae(Se, fe._override);
        }
        for (var Ae = [], Te = null, ve = oe.start; ve <= oe.end; ve++) {
          var Fe = L[ve];
          if (!(Fe & n)) {
            var Re = Y[ve], Me = Fe & e, De = Fe === P;
            Te && Re === Te._level ? (Te._end = ve, Te._endsWithIsolInit = Me) : Ae.push(Te = {
              _start: ve,
              _end: ve,
              _level: Re,
              _startsWithPDI: De,
              _endsWithIsolInit: Me
            });
          }
        }
        for (var Ie = [], He = 0; He < Ae.length; He++) {
          var je = Ae[He];
          if (!je._startsWithPDI || je._startsWithPDI && !be.has(je._start)) {
            for (var Ye = [Te = je], Qe = void 0; Te && Te._endsWithIsolInit && (Qe = be.get(Te._end)) != null; )
              for (var Ve = He + 1; Ve < Ae.length; Ve++)
                if (Ae[Ve]._start === Qe) {
                  Ye.push(Te = Ae[Ve]);
                  break;
                }
            for (var Ge = [], Ze = 0; Ze < Ye.length; Ze++)
              for (var br = Ye[Ze], Nt = br._start; Nt <= br._end; Nt++)
                Ge.push(Nt);
            for (var bn = Y[Ge[0]], Ur = oe.level, Ut = Ge[0] - 1; Ut >= 0; Ut--)
              if (!(L[Ut] & n)) {
                Ur = Y[Ut];
                break;
              }
            var Wt = Ge[Ge.length - 1], Un = Y[Wt], _r = oe.level;
            if (!(L[Wt] & e)) {
              for (var _t = Wt + 1; _t <= oe.end; _t++)
                if (!(L[_t] & n)) {
                  _r = Y[_t];
                  break;
                }
            }
            Ie.push({
              _seqIndices: Ge,
              _sosType: Math.max(Ur, bn) % 2 ? C : x,
              _eosType: Math.max(_r, Un) % 2 ? C : x
            });
          }
        }
        for (var zt = 0; zt < Ie.length; zt++) {
          var jt = Ie[zt], ie = jt._seqIndices, st = jt._sosType, _n = jt._eosType, tt = Y[ie[0]] & 1 ? C : x;
          if (K.get($))
            for (var xt = 0; xt < ie.length; xt++) {
              var xr = ie[xt];
              if (L[xr] & $) {
                for (var Vt = st, St = xt - 1; St >= 0; St--)
                  if (!(L[ie[St]] & n)) {
                    Vt = L[ie[St]];
                    break;
                  }
                ae(xr, Vt & (e | P) ? I : Vt);
              }
            }
          if (K.get(N))
            for (var kt = 0; kt < ie.length; kt++) {
              var Sr = ie[kt];
              if (L[Sr] & N)
                for (var wt = kt - 1; wt >= -1; wt--) {
                  var kr = wt === -1 ? st : L[ie[wt]];
                  if (kr & a) {
                    kr === B && ae(Sr, m);
                    break;
                  }
                }
            }
          if (K.get(B))
            for (var Xt = 0; Xt < ie.length; Xt++) {
              var wr = ie[Xt];
              L[wr] & B && ae(wr, C);
            }
          if (K.get(R) || K.get(D))
            for (var ft = 1; ft < ie.length - 1; ft++) {
              var Ht = ie[ft];
              if (L[Ht] & (R | D)) {
                for (var rt = 0, Yt = 0, Jt = ft - 1; Jt >= 0 && (rt = L[ie[Jt]], !!(rt & n)); Jt--)
                  ;
                for (var Kt = ft + 1; Kt < ie.length && (Yt = L[ie[Kt]], !!(Yt & n)); Kt++)
                  ;
                rt === Yt && (L[Ht] === R ? rt === N : rt & (N | m)) && ae(Ht, rt);
              }
            }
          if (K.get(N))
            for (var ze = 0; ze < ie.length; ze++) {
              var xn = ie[ze];
              if (L[xn] & N) {
                for (var Tt = ze - 1; Tt >= 0 && L[ie[Tt]] & (J | n); Tt--)
                  ae(ie[Tt], N);
                for (ze++; ze < ie.length && L[ie[ze]] & (J | n | N); ze++)
                  L[ie[ze]] !== N && ae(ie[ze], N);
              }
            }
          if (K.get(J) || K.get(R) || K.get(D))
            for (var lt = 0; lt < ie.length; lt++) {
              var Tr = ie[lt];
              if (L[Tr] & (J | R | D)) {
                ae(Tr, I);
                for (var Ft = lt - 1; Ft >= 0 && L[ie[Ft]] & n; Ft--)
                  ae(ie[Ft], I);
                for (var Ct = lt + 1; Ct < ie.length && L[ie[Ct]] & n; Ct++)
                  ae(ie[Ct], I);
              }
            }
          if (K.get(N))
            for (var Qt = 0, Fr = st; Qt < ie.length; Qt++) {
              var Cr = ie[Qt], Zt = L[Cr];
              Zt & N ? Fr === x && ae(Cr, x) : Zt & a && (Fr = Zt);
            }
          if (K.get(o)) {
            var ut = C | N | m, Ar = ut | x, At = [];
            {
              for (var nt = [], at = 0; at < ie.length; at++)
                if (L[ie[at]] & o) {
                  var ct = j[ie[at]], Dr = void 0;
                  if (U(ct) !== null)
                    if (nt.length < 63)
                      nt.push({ char: ct, seqIndex: at });
                    else
                      break;
                  else if ((Dr = T(ct)) !== null)
                    for (var ht = nt.length - 1; ht >= 0; ht--) {
                      var qt = nt[ht].char;
                      if (qt === Dr || qt === T(G(ct)) || U(G(qt)) === ct) {
                        At.push([nt[ht].seqIndex, at]), nt.length = ht;
                        break;
                      }
                    }
                }
              At.sort(function(Le, We) {
                return Le[0] - We[0];
              });
            }
            for (var $t = 0; $t < At.length; $t++) {
              for (var Er = At[$t], Dt = Er[0], er = Er[1], Mr = !1, Ne = 0, tr = Dt + 1; tr < er; tr++) {
                var Rr = ie[tr];
                if (L[Rr] & Ar) {
                  Mr = !0;
                  var Gr = L[Rr] & ut ? C : x;
                  if (Gr === tt) {
                    Ne = Gr;
                    break;
                  }
                }
              }
              if (Mr && !Ne) {
                Ne = st;
                for (var rr = Dt - 1; rr >= 0; rr--) {
                  var Or = ie[rr];
                  if (L[Or] & Ar) {
                    var Lr = L[Or] & ut ? C : x;
                    Lr !== tt ? Ne = Lr : Ne = tt;
                    break;
                  }
                }
              }
              if (Ne) {
                if (L[ie[Dt]] = L[ie[er]] = Ne, Ne !== tt) {
                  for (var dt = Dt + 1; dt < ie.length; dt++)
                    if (!(L[ie[dt]] & n)) {
                      l(j[ie[dt]]) & $ && (L[ie[dt]] = Ne);
                      break;
                    }
                }
                if (Ne !== tt) {
                  for (var vt = er + 1; vt < ie.length; vt++)
                    if (!(L[ie[vt]] & n)) {
                      l(j[ie[vt]]) & $ && (L[ie[vt]] = Ne);
                      break;
                    }
                }
              }
            }
            for (var Je = 0; Je < ie.length; Je++)
              if (L[ie[Je]] & o) {
                for (var Br = Je, nr = Je, ar = st, pt = Je - 1; pt >= 0; pt--)
                  if (L[ie[pt]] & n)
                    Br = pt;
                  else {
                    ar = L[ie[pt]] & ut ? C : x;
                    break;
                  }
                for (var Pr = _n, gt = Je + 1; gt < ie.length; gt++)
                  if (L[ie[gt]] & (o | n))
                    nr = gt;
                  else {
                    Pr = L[ie[gt]] & ut ? C : x;
                    break;
                  }
                for (var or = Br; or <= nr; or++)
                  L[ie[or]] = ar === Pr ? ar : tt;
                Je = nr;
              }
          }
        }
        for (var Pe = oe.start; Pe <= oe.end; Pe++) {
          var Sn = Y[Pe], Et = L[Pe];
          if (Sn & 1 ? Et & (x | N | m) && Y[Pe]++ : Et & C ? Y[Pe]++ : Et & (m | N) && (Y[Pe] += 2), Et & n && (Y[Pe] = Pe === 0 ? oe.level : Y[Pe - 1]), Pe === oe.end || l(j[Pe]) & (V | k))
            for (var Mt = Pe; Mt >= 0 && l(j[Mt]) & i; Mt--)
              Y[Mt] = oe.level;
        }
      }
      return {
        levels: Y,
        paragraphs: ne
      };
      function Ir(Le, We) {
        for (var Be = Le; Be < j.length; Be++) {
          var Ke = L[Be];
          if (Ke & (C | B))
            return 1;
          if (Ke & (k | x) || We && Ke === P)
            return 0;
          if (Ke & e) {
            var Nr = kn(Be);
            Be = Nr === -1 ? j.length : Nr;
          }
        }
        return 0;
      }
      function kn(Le) {
        for (var We = 1, Be = Le + 1; Be < j.length; Be++) {
          var Ke = L[Be];
          if (Ke & k)
            break;
          if (Ke & P) {
            if (--We === 0)
              return Be;
          } else
            Ke & e && We++;
        }
        return -1;
      }
    }
    var ee = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1", X;
    function z() {
      if (!X) {
        var j = g(ee, !0), re = j.map, q = j.reverseMap;
        q.forEach(function(L, he) {
          re.set(he, L);
        }), X = re;
      }
    }
    function pe(j) {
      return z(), X.get(j) || null;
    }
    function ue(j, re, q, L) {
      var he = j.length;
      q = Math.max(0, q == null ? 0 : +q), L = Math.min(he - 1, L == null ? he - 1 : +L);
      for (var K = /* @__PURE__ */ new Map(), ae = q; ae <= L; ae++)
        if (re[ae] & 1) {
          var Y = pe(j[ae]);
          Y !== null && K.set(ae, Y);
        }
      return K;
    }
    function Q(j, re, q, L) {
      var he = j.length;
      q = Math.max(0, q == null ? 0 : +q), L = Math.min(he - 1, L == null ? he - 1 : +L);
      var K = [];
      return re.paragraphs.forEach(function(ae) {
        var Y = Math.max(q, ae.start), be = Math.min(L, ae.end);
        if (Y < be) {
          for (var ne = re.levels.slice(Y, be + 1), oe = be; oe >= Y && l(j[oe]) & i; oe--)
            ne[oe] = ae.level;
          for (var le = ae.level, de = 1 / 0, xe = 0; xe < ne.length; xe++) {
            var Ce = ne[xe];
            Ce > le && (le = Ce), Ce < de && (de = Ce | 1);
          }
          for (var ge = le; ge >= de; ge--)
            for (var me = 0; me < ne.length; me++)
              if (ne[me] >= ge) {
                for (var fe = me; me + 1 < ne.length && ne[me + 1] >= ge; )
                  me++;
                me > fe && K.push([fe + Y, me + Y]);
              }
        }
      }), K;
    }
    function te(j, re, q, L) {
      var he = se(j, re, q, L), K = [].concat(j);
      return he.forEach(function(ae, Y) {
        K[Y] = (re.levels[ae] & 1 ? pe(j[ae]) : null) || j[ae];
      }), K.join("");
    }
    function se(j, re, q, L) {
      for (var he = Q(j, re, q, L), K = [], ae = 0; ae < j.length; ae++)
        K[ae] = ae;
      return he.forEach(function(Y) {
        for (var be = Y[0], ne = Y[1], oe = K.slice(be, ne + 1), le = oe.length; le--; )
          K[ne - le] = oe[le];
      }), K;
    }
    return r.closingToOpeningBracket = T, r.getBidiCharType = l, r.getBidiCharTypeName = h, r.getCanonicalBracket = G, r.getEmbeddingLevels = H, r.getMirroredCharacter = pe, r.getMirroredCharactersMap = ue, r.getReorderSegments = Q, r.getReorderedIndices = se, r.getReorderedString = te, r.openingToClosingBracket = U, Object.defineProperty(r, "__esModule", { value: !0 }), r;
  }({});
  return c;
}
const ln = /\bvoid\s+main\s*\(\s*\)\s*{/g;
function cr(c) {
  const r = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function d(u, t) {
    let e = _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aZ[t];
    return e ? cr(e) : u;
  }
  return c.replace(r, d);
}
const Ee = [];
for (let c = 0; c < 256; c++)
  Ee[c] = (c < 16 ? "0" : "") + c.toString(16);
function Kn() {
  const c = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0, d = Math.random() * 4294967295 | 0, u = Math.random() * 4294967295 | 0;
  return (Ee[c & 255] + Ee[c >> 8 & 255] + Ee[c >> 16 & 255] + Ee[c >> 24 & 255] + "-" + Ee[r & 255] + Ee[r >> 8 & 255] + "-" + Ee[r >> 16 & 15 | 64] + Ee[r >> 24 & 255] + "-" + Ee[d & 63 | 128] + Ee[d >> 8 & 255] + "-" + Ee[d >> 16 & 255] + Ee[d >> 24 & 255] + Ee[u & 255] + Ee[u >> 8 & 255] + Ee[u >> 16 & 255] + Ee[u >> 24 & 255]).toUpperCase();
}
const qe = Object.assign || function() {
  let c = arguments[0];
  for (let r = 1, d = arguments.length; r < d; r++) {
    let u = arguments[r];
    if (u)
      for (let t in u)
        Object.prototype.hasOwnProperty.call(u, t) && (c[t] = u[t]);
  }
  return c;
}, Qn = Date.now(), Vr = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new Map();
let Zn = 1e10;
function hr(c, r) {
  const d = ta(r);
  let u = Vr.get(c);
  if (u || Vr.set(c, u = /* @__PURE__ */ Object.create(null)), u[d])
    return new u[d]();
  const t = `_onBeforeCompile${d}`, e = function(i, s) {
    c.onBeforeCompile.call(this, i, s);
    const f = this.customProgramCacheKey() + "|" + i.vertexShader + "|" + i.fragmentShader;
    let l = Xr[f];
    if (!l) {
      const h = qn(this, i, r, d);
      l = Xr[f] = h;
    }
    i.vertexShader = l.vertexShader, i.fragmentShader = l.fragmentShader, qe(i.uniforms, this.uniforms), r.timeUniform && (i.uniforms[r.timeUniform] = {
      get value() {
        return Date.now() - Qn;
      }
    }), this[t] && this[t](i);
  }, a = function() {
    return o(r.chained ? c : c.clone());
  }, o = function(i) {
    const s = Object.create(i, n);
    return Object.defineProperty(s, "baseMaterial", { value: c }), Object.defineProperty(s, "id", { value: Zn++ }), s.uuid = Kn(), s.uniforms = qe({}, i.uniforms, r.uniforms), s.defines = qe({}, i.defines, r.defines), s.defines[`TROIKA_DERIVED_MATERIAL_${d}`] = "", s.extensions = qe({}, i.extensions, r.extensions), s._listeners = void 0, s;
  }, n = {
    constructor: { value: a },
    isDerivedMaterial: { value: !0 },
    customProgramCacheKey: {
      writable: !0,
      configurable: !0,
      value: function() {
        return c.customProgramCacheKey() + "|" + d;
      }
    },
    onBeforeCompile: {
      get() {
        return e;
      },
      set(i) {
        this[t] = i;
      }
    },
    copy: {
      writable: !0,
      configurable: !0,
      value: function(i) {
        return c.copy.call(this, i), !c.isShaderMaterial && !c.isDerivedMaterial && (qe(this.extensions, i.extensions), qe(this.defines, i.defines), qe(this.uniforms, _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aC.clone(i.uniforms))), this;
      }
    },
    clone: {
      writable: !0,
      configurable: !0,
      value: function() {
        const i = new c.constructor();
        return o(i).copy(this);
      }
    },
    /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDepthMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let i = this._depthMaterial;
        return i || (i = this._depthMaterial = hr(
          c.isDerivedMaterial ? c.getDepthMaterial() : new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aW({ depthPacking: _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aX }),
          r
        ), i.defines.IS_DEPTH_MATERIAL = "", i.uniforms = this.uniforms), i;
      }
    },
    /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */
    getDistanceMaterial: {
      writable: !0,
      configurable: !0,
      value: function() {
        let i = this._distanceMaterial;
        return i || (i = this._distanceMaterial = hr(
          c.isDerivedMaterial ? c.getDistanceMaterial() : new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aY(),
          r
        ), i.defines.IS_DISTANCE_MATERIAL = "", i.uniforms = this.uniforms), i;
      }
    },
    dispose: {
      writable: !0,
      configurable: !0,
      value() {
        const { _depthMaterial: i, _distanceMaterial: s } = this;
        i && i.dispose(), s && s.dispose(), c.dispose.call(this);
      }
    }
  };
  return u[d] = a, new a();
}
function qn(c, { vertexShader: r, fragmentShader: d }, u, t) {
  let {
    vertexDefs: e,
    vertexMainIntro: a,
    vertexMainOutro: o,
    vertexTransform: n,
    fragmentDefs: i,
    fragmentMainIntro: s,
    fragmentMainOutro: f,
    fragmentColorTransform: l,
    customRewriter: h,
    timeUniform: p
  } = u;
  if (e = e || "", a = a || "", o = o || "", i = i || "", s = s || "", f = f || "", (n || h) && (r = cr(r)), (l || h) && (d = d.replace(
    /^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,
    `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`
  ), d = cr(d)), h) {
    let g = h({ vertexShader: r, fragmentShader: d });
    r = g.vertexShader, d = g.fragmentShader;
  }
  if (l) {
    let g = [];
    d = d.replace(
      /^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,
      // [^]+? = non-greedy match of any chars including newlines
      (y) => (g.push(y), "")
    ), f = `${l}
${g.join(`
`)}
${f}`;
  }
  if (p) {
    const g = `
uniform float ${p};
`;
    e = g + e, i = g + i;
  }
  return n && (r = `vec3 troika_position_${t};
vec3 troika_normal_${t};
vec2 troika_uv_${t};
${r}
`, e = `${e}
void troikaVertexTransform${t}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${n}
}
`, a = `
troika_position_${t} = vec3(position);
troika_normal_${t} = vec3(normal);
troika_uv_${t} = vec2(uv);
troikaVertexTransform${t}(troika_position_${t}, troika_normal_${t}, troika_uv_${t});
${a}
`, r = r.replace(/\b(position|normal|uv)\b/g, (g, y, O, S) => /\battribute\s+vec[23]\s+$/.test(S.substr(0, O)) ? y : `troika_${y}_${t}`), c.map && c.map.channel > 0 || (r = r.replace(/\bMAP_UV\b/g, `troika_uv_${t}`))), r = Hr(r, t, e, a, o), d = Hr(d, t, i, s, f), {
    vertexShader: r,
    fragmentShader: d
  };
}
function Hr(c, r, d, u, t) {
  return (u || t || d) && (c = c.replace(
    ln,
    `
${d}
void troikaOrigMain${r}() {`
  ), c += `
void main() {
  ${u}
  troikaOrigMain${r}();
  ${t}
}`), c;
}
function $n(c, r) {
  return c === "uniforms" ? void 0 : typeof r == "function" ? r.toString() : r;
}
let ea = 0;
const Yr = /* @__PURE__ */ new Map();
function ta(c) {
  const r = JSON.stringify(c, $n);
  let d = Yr.get(r);
  return d == null && Yr.set(r, d = ++ea), d;
}
/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/
function ra() {
  return typeof window > "u" && (self.window = self), function(c) {
    var r = { parse: function(t) {
      var e = r._bin, a = new Uint8Array(t);
      if (e.readASCII(a, 0, 4) == "ttcf") {
        var o = 4;
        e.readUshort(a, o), o += 2, e.readUshort(a, o), o += 2;
        var n = e.readUint(a, o);
        o += 4;
        for (var i = [], s = 0; s < n; s++) {
          var f = e.readUint(a, o);
          o += 4, i.push(r._readFont(a, f));
        }
        return i;
      }
      return [r._readFont(a, 0)];
    }, _readFont: function(t, e) {
      var a = r._bin, o = e;
      a.readFixed(t, e), e += 4;
      var n = a.readUshort(t, e);
      e += 2, a.readUshort(t, e), e += 2, a.readUshort(t, e), e += 2, a.readUshort(t, e), e += 2;
      for (var i = ["cmap", "head", "hhea", "maxp", "hmtx", "name", "OS/2", "post", "loca", "glyf", "kern", "CFF ", "GDEF", "GPOS", "GSUB", "SVG "], s = { _data: t, _offset: o }, f = {}, l = 0; l < n; l++) {
        var h = a.readASCII(t, e, 4);
        e += 4, a.readUint(t, e), e += 4;
        var p = a.readUint(t, e);
        e += 4;
        var g = a.readUint(t, e);
        e += 4, f[h] = { offset: p, length: g };
      }
      for (l = 0; l < i.length; l++) {
        var y = i[l];
        f[y] && (s[y.trim()] = r[y.trim()].parse(t, f[y].offset, f[y].length, s));
      }
      return s;
    }, _tabOffset: function(t, e, a) {
      for (var o = r._bin, n = o.readUshort(t, a + 4), i = a + 12, s = 0; s < n; s++) {
        var f = o.readASCII(t, i, 4);
        i += 4, o.readUint(t, i), i += 4;
        var l = o.readUint(t, i);
        if (i += 4, o.readUint(t, i), i += 4, f == e)
          return l;
      }
      return 0;
    } };
    r._bin = { readFixed: function(t, e) {
      return (t[e] << 8 | t[e + 1]) + (t[e + 2] << 8 | t[e + 3]) / 65540;
    }, readF2dot14: function(t, e) {
      return r._bin.readShort(t, e) / 16384;
    }, readInt: function(t, e) {
      return r._bin._view(t).getInt32(e);
    }, readInt8: function(t, e) {
      return r._bin._view(t).getInt8(e);
    }, readShort: function(t, e) {
      return r._bin._view(t).getInt16(e);
    }, readUshort: function(t, e) {
      return r._bin._view(t).getUint16(e);
    }, readUshorts: function(t, e, a) {
      for (var o = [], n = 0; n < a; n++)
        o.push(r._bin.readUshort(t, e + 2 * n));
      return o;
    }, readUint: function(t, e) {
      return r._bin._view(t).getUint32(e);
    }, readUint64: function(t, e) {
      return 4294967296 * r._bin.readUint(t, e) + r._bin.readUint(t, e + 4);
    }, readASCII: function(t, e, a) {
      for (var o = "", n = 0; n < a; n++)
        o += String.fromCharCode(t[e + n]);
      return o;
    }, readUnicode: function(t, e, a) {
      for (var o = "", n = 0; n < a; n++) {
        var i = t[e++] << 8 | t[e++];
        o += String.fromCharCode(i);
      }
      return o;
    }, _tdec: typeof window < "u" && window.TextDecoder ? new window.TextDecoder() : null, readUTF8: function(t, e, a) {
      var o = r._bin._tdec;
      return o && e == 0 && a == t.length ? o.decode(t) : r._bin.readASCII(t, e, a);
    }, readBytes: function(t, e, a) {
      for (var o = [], n = 0; n < a; n++)
        o.push(t[e + n]);
      return o;
    }, readASCIIArray: function(t, e, a) {
      for (var o = [], n = 0; n < a; n++)
        o.push(String.fromCharCode(t[e + n]));
      return o;
    }, _view: function(t) {
      return t._dataView || (t._dataView = t.buffer ? new DataView(t.buffer, t.byteOffset, t.byteLength) : new DataView(new Uint8Array(t).buffer));
    } }, r._lctf = {}, r._lctf.parse = function(t, e, a, o, n) {
      var i = r._bin, s = {}, f = e;
      i.readFixed(t, e), e += 4;
      var l = i.readUshort(t, e);
      e += 2;
      var h = i.readUshort(t, e);
      e += 2;
      var p = i.readUshort(t, e);
      return e += 2, s.scriptList = r._lctf.readScriptList(t, f + l), s.featureList = r._lctf.readFeatureList(t, f + h), s.lookupList = r._lctf.readLookupList(t, f + p, n), s;
    }, r._lctf.readLookupList = function(t, e, a) {
      var o = r._bin, n = e, i = [], s = o.readUshort(t, e);
      e += 2;
      for (var f = 0; f < s; f++) {
        var l = o.readUshort(t, e);
        e += 2;
        var h = r._lctf.readLookupTable(t, n + l, a);
        i.push(h);
      }
      return i;
    }, r._lctf.readLookupTable = function(t, e, a) {
      var o = r._bin, n = e, i = { tabs: [] };
      i.ltype = o.readUshort(t, e), e += 2, i.flag = o.readUshort(t, e), e += 2;
      var s = o.readUshort(t, e);
      e += 2;
      for (var f = i.ltype, l = 0; l < s; l++) {
        var h = o.readUshort(t, e);
        e += 2;
        var p = a(t, f, n + h, i);
        i.tabs.push(p);
      }
      return i;
    }, r._lctf.numOfOnes = function(t) {
      for (var e = 0, a = 0; a < 32; a++)
        t >>> a & 1 && e++;
      return e;
    }, r._lctf.readClassDef = function(t, e) {
      var a = r._bin, o = [], n = a.readUshort(t, e);
      if (e += 2, n == 1) {
        var i = a.readUshort(t, e);
        e += 2;
        var s = a.readUshort(t, e);
        e += 2;
        for (var f = 0; f < s; f++)
          o.push(i + f), o.push(i + f), o.push(a.readUshort(t, e)), e += 2;
      }
      if (n == 2) {
        var l = a.readUshort(t, e);
        for (e += 2, f = 0; f < l; f++)
          o.push(a.readUshort(t, e)), e += 2, o.push(a.readUshort(t, e)), e += 2, o.push(a.readUshort(t, e)), e += 2;
      }
      return o;
    }, r._lctf.getInterval = function(t, e) {
      for (var a = 0; a < t.length; a += 3) {
        var o = t[a], n = t[a + 1];
        if (t[a + 2], o <= e && e <= n)
          return a;
      }
      return -1;
    }, r._lctf.readCoverage = function(t, e) {
      var a = r._bin, o = {};
      o.fmt = a.readUshort(t, e), e += 2;
      var n = a.readUshort(t, e);
      return e += 2, o.fmt == 1 && (o.tab = a.readUshorts(t, e, n)), o.fmt == 2 && (o.tab = a.readUshorts(t, e, 3 * n)), o;
    }, r._lctf.coverageIndex = function(t, e) {
      var a = t.tab;
      if (t.fmt == 1)
        return a.indexOf(e);
      if (t.fmt == 2) {
        var o = r._lctf.getInterval(a, e);
        if (o != -1)
          return a[o + 2] + (e - a[o]);
      }
      return -1;
    }, r._lctf.readFeatureList = function(t, e) {
      var a = r._bin, o = e, n = [], i = a.readUshort(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = a.readASCII(t, e, 4);
        e += 4;
        var l = a.readUshort(t, e);
        e += 2;
        var h = r._lctf.readFeatureTable(t, o + l);
        h.tag = f.trim(), n.push(h);
      }
      return n;
    }, r._lctf.readFeatureTable = function(t, e) {
      var a = r._bin, o = e, n = {}, i = a.readUshort(t, e);
      e += 2, i > 0 && (n.featureParams = o + i);
      var s = a.readUshort(t, e);
      e += 2, n.tab = [];
      for (var f = 0; f < s; f++)
        n.tab.push(a.readUshort(t, e + 2 * f));
      return n;
    }, r._lctf.readScriptList = function(t, e) {
      var a = r._bin, o = e, n = {}, i = a.readUshort(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = a.readASCII(t, e, 4);
        e += 4;
        var l = a.readUshort(t, e);
        e += 2, n[f.trim()] = r._lctf.readScriptTable(t, o + l);
      }
      return n;
    }, r._lctf.readScriptTable = function(t, e) {
      var a = r._bin, o = e, n = {}, i = a.readUshort(t, e);
      e += 2, i > 0 && (n.default = r._lctf.readLangSysTable(t, o + i));
      var s = a.readUshort(t, e);
      e += 2;
      for (var f = 0; f < s; f++) {
        var l = a.readASCII(t, e, 4);
        e += 4;
        var h = a.readUshort(t, e);
        e += 2, n[l.trim()] = r._lctf.readLangSysTable(t, o + h);
      }
      return n;
    }, r._lctf.readLangSysTable = function(t, e) {
      var a = r._bin, o = {};
      a.readUshort(t, e), e += 2, o.reqFeature = a.readUshort(t, e), e += 2;
      var n = a.readUshort(t, e);
      return e += 2, o.features = a.readUshorts(t, e, n), o;
    }, r.CFF = {}, r.CFF.parse = function(t, e, a) {
      var o = r._bin;
      (t = new Uint8Array(t.buffer, e, a))[e = 0], t[++e], t[++e], t[++e], e++;
      var n = [];
      e = r.CFF.readIndex(t, e, n);
      for (var i = [], s = 0; s < n.length - 1; s++)
        i.push(o.readASCII(t, e + n[s], n[s + 1] - n[s]));
      e += n[n.length - 1];
      var f = [];
      e = r.CFF.readIndex(t, e, f);
      var l = [];
      for (s = 0; s < f.length - 1; s++)
        l.push(r.CFF.readDict(t, e + f[s], e + f[s + 1]));
      e += f[f.length - 1];
      var h = l[0], p = [];
      e = r.CFF.readIndex(t, e, p);
      var g = [];
      for (s = 0; s < p.length - 1; s++)
        g.push(o.readASCII(t, e + p[s], p[s + 1] - p[s]));
      if (e += p[p.length - 1], r.CFF.readSubrs(t, e, h), h.CharStrings) {
        e = h.CharStrings, p = [], e = r.CFF.readIndex(t, e, p);
        var y = [];
        for (s = 0; s < p.length - 1; s++)
          y.push(o.readBytes(t, e + p[s], p[s + 1] - p[s]));
        h.CharStrings = y;
      }
      if (h.ROS) {
        e = h.FDArray;
        var O = [];
        for (e = r.CFF.readIndex(t, e, O), h.FDArray = [], s = 0; s < O.length - 1; s++) {
          var S = r.CFF.readDict(t, e + O[s], e + O[s + 1]);
          r.CFF._readFDict(t, S, g), h.FDArray.push(S);
        }
        e += O[O.length - 1], e = h.FDSelect, h.FDSelect = [];
        var F = t[e];
        if (e++, F != 3)
          throw F;
        var U = o.readUshort(t, e);
        for (e += 2, s = 0; s < U + 1; s++)
          h.FDSelect.push(o.readUshort(t, e), t[e + 2]), e += 3;
      }
      return h.Encoding && (h.Encoding = r.CFF.readEncoding(t, h.Encoding, h.CharStrings.length)), h.charset && (h.charset = r.CFF.readCharset(t, h.charset, h.CharStrings.length)), r.CFF._readFDict(t, h, g), h;
    }, r.CFF._readFDict = function(t, e, a) {
      var o;
      for (var n in e.Private && (o = e.Private[1], e.Private = r.CFF.readDict(t, o, o + e.Private[0]), e.Private.Subrs && r.CFF.readSubrs(t, o + e.Private.Subrs, e.Private)), e)
        ["FamilyName", "FontName", "FullName", "Notice", "version", "Copyright"].indexOf(n) != -1 && (e[n] = a[e[n] - 426 + 35]);
    }, r.CFF.readSubrs = function(t, e, a) {
      var o = r._bin, n = [];
      e = r.CFF.readIndex(t, e, n);
      var i, s = n.length;
      i = s < 1240 ? 107 : s < 33900 ? 1131 : 32768, a.Bias = i, a.Subrs = [];
      for (var f = 0; f < n.length - 1; f++)
        a.Subrs.push(o.readBytes(t, e + n[f], n[f + 1] - n[f]));
    }, r.CFF.tableSE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 0, 111, 112, 113, 114, 0, 115, 116, 117, 118, 119, 120, 121, 122, 0, 123, 0, 124, 125, 126, 127, 128, 129, 130, 131, 0, 132, 133, 0, 134, 135, 136, 137, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 139, 0, 0, 0, 0, 140, 141, 142, 143, 0, 0, 0, 0, 0, 144, 0, 0, 0, 145, 0, 0, 146, 147, 148, 149, 0, 0, 0, 0], r.CFF.glyphByUnicode = function(t, e) {
      for (var a = 0; a < t.charset.length; a++)
        if (t.charset[a] == e)
          return a;
      return -1;
    }, r.CFF.glyphBySE = function(t, e) {
      return e < 0 || e > 255 ? -1 : r.CFF.glyphByUnicode(t, r.CFF.tableSE[e]);
    }, r.CFF.readEncoding = function(t, e, a) {
      r._bin;
      var o = [".notdef"], n = t[e];
      if (e++, n != 0)
        throw "error: unknown encoding format: " + n;
      var i = t[e];
      e++;
      for (var s = 0; s < i; s++)
        o.push(t[e + s]);
      return o;
    }, r.CFF.readCharset = function(t, e, a) {
      var o = r._bin, n = [".notdef"], i = t[e];
      if (e++, i == 0)
        for (var s = 0; s < a; s++) {
          var f = o.readUshort(t, e);
          e += 2, n.push(f);
        }
      else {
        if (i != 1 && i != 2)
          throw "error: format: " + i;
        for (; n.length < a; ) {
          f = o.readUshort(t, e), e += 2;
          var l = 0;
          for (i == 1 ? (l = t[e], e++) : (l = o.readUshort(t, e), e += 2), s = 0; s <= l; s++)
            n.push(f), f++;
        }
      }
      return n;
    }, r.CFF.readIndex = function(t, e, a) {
      var o = r._bin, n = o.readUshort(t, e) + 1, i = t[e += 2];
      if (e++, i == 1)
        for (var s = 0; s < n; s++)
          a.push(t[e + s]);
      else if (i == 2)
        for (s = 0; s < n; s++)
          a.push(o.readUshort(t, e + 2 * s));
      else if (i == 3)
        for (s = 0; s < n; s++)
          a.push(16777215 & o.readUint(t, e + 3 * s - 1));
      else if (n != 1)
        throw "unsupported offset size: " + i + ", count: " + n;
      return (e += n * i) - 1;
    }, r.CFF.getCharString = function(t, e, a) {
      var o = r._bin, n = t[e], i = t[e + 1];
      t[e + 2], t[e + 3], t[e + 4];
      var s = 1, f = null, l = null;
      n <= 20 && (f = n, s = 1), n == 12 && (f = 100 * n + i, s = 2), 21 <= n && n <= 27 && (f = n, s = 1), n == 28 && (l = o.readShort(t, e + 1), s = 3), 29 <= n && n <= 31 && (f = n, s = 1), 32 <= n && n <= 246 && (l = n - 139, s = 1), 247 <= n && n <= 250 && (l = 256 * (n - 247) + i + 108, s = 2), 251 <= n && n <= 254 && (l = 256 * -(n - 251) - i - 108, s = 2), n == 255 && (l = o.readInt(t, e + 1) / 65535, s = 5), a.val = l ?? "o" + f, a.size = s;
    }, r.CFF.readCharString = function(t, e, a) {
      for (var o = e + a, n = r._bin, i = []; e < o; ) {
        var s = t[e], f = t[e + 1];
        t[e + 2], t[e + 3], t[e + 4];
        var l = 1, h = null, p = null;
        s <= 20 && (h = s, l = 1), s == 12 && (h = 100 * s + f, l = 2), s != 19 && s != 20 || (h = s, l = 2), 21 <= s && s <= 27 && (h = s, l = 1), s == 28 && (p = n.readShort(t, e + 1), l = 3), 29 <= s && s <= 31 && (h = s, l = 1), 32 <= s && s <= 246 && (p = s - 139, l = 1), 247 <= s && s <= 250 && (p = 256 * (s - 247) + f + 108, l = 2), 251 <= s && s <= 254 && (p = 256 * -(s - 251) - f - 108, l = 2), s == 255 && (p = n.readInt(t, e + 1) / 65535, l = 5), i.push(p ?? "o" + h), e += l;
      }
      return i;
    }, r.CFF.readDict = function(t, e, a) {
      for (var o = r._bin, n = {}, i = []; e < a; ) {
        var s = t[e], f = t[e + 1];
        t[e + 2], t[e + 3], t[e + 4];
        var l = 1, h = null, p = null;
        if (s == 28 && (p = o.readShort(t, e + 1), l = 3), s == 29 && (p = o.readInt(t, e + 1), l = 5), 32 <= s && s <= 246 && (p = s - 139, l = 1), 247 <= s && s <= 250 && (p = 256 * (s - 247) + f + 108, l = 2), 251 <= s && s <= 254 && (p = 256 * -(s - 251) - f - 108, l = 2), s == 255)
          throw p = o.readInt(t, e + 1) / 65535, l = 5, "unknown number";
        if (s == 30) {
          var g = [];
          for (l = 1; ; ) {
            var y = t[e + l];
            l++;
            var O = y >> 4, S = 15 & y;
            if (O != 15 && g.push(O), S != 15 && g.push(S), S == 15)
              break;
          }
          for (var F = "", U = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "e", "e-", "reserved", "-", "endOfNumber"], T = 0; T < g.length; T++)
            F += U[g[T]];
          p = parseFloat(F);
        }
        s <= 21 && (h = ["version", "Notice", "FullName", "FamilyName", "Weight", "FontBBox", "BlueValues", "OtherBlues", "FamilyBlues", "FamilyOtherBlues", "StdHW", "StdVW", "escape", "UniqueID", "XUID", "charset", "Encoding", "CharStrings", "Private", "Subrs", "defaultWidthX", "nominalWidthX"][s], l = 1, s == 12 && (h = ["Copyright", "isFixedPitch", "ItalicAngle", "UnderlinePosition", "UnderlineThickness", "PaintType", "CharstringType", "FontMatrix", "StrokeWidth", "BlueScale", "BlueShift", "BlueFuzz", "StemSnapH", "StemSnapV", "ForceBold", 0, 0, "LanguageGroup", "ExpansionFactor", "initialRandomSeed", "SyntheticBase", "PostScript", "BaseFontName", "BaseFontBlend", 0, 0, 0, 0, 0, 0, "ROS", "CIDFontVersion", "CIDFontRevision", "CIDFontType", "CIDCount", "UIDBase", "FDArray", "FDSelect", "FontName"][f], l = 2)), h != null ? (n[h] = i.length == 1 ? i[0] : i, i = []) : i.push(p), e += l;
      }
      return n;
    }, r.cmap = {}, r.cmap.parse = function(t, e, a) {
      t = new Uint8Array(t.buffer, e, a), e = 0;
      var o = r._bin, n = {};
      o.readUshort(t, e), e += 2;
      var i = o.readUshort(t, e);
      e += 2;
      var s = [];
      n.tables = [];
      for (var f = 0; f < i; f++) {
        var l = o.readUshort(t, e);
        e += 2;
        var h = o.readUshort(t, e);
        e += 2;
        var p = o.readUint(t, e);
        e += 4;
        var g = "p" + l + "e" + h, y = s.indexOf(p);
        if (y == -1) {
          var O;
          y = n.tables.length, s.push(p);
          var S = o.readUshort(t, p);
          S == 0 ? O = r.cmap.parse0(t, p) : S == 4 ? O = r.cmap.parse4(t, p) : S == 6 ? O = r.cmap.parse6(t, p) : S == 12 ? O = r.cmap.parse12(t, p) : console.debug("unknown format: " + S, l, h, p), n.tables.push(O);
        }
        if (n[g] != null)
          throw "multiple tables for one platform+encoding";
        n[g] = y;
      }
      return n;
    }, r.cmap.parse0 = function(t, e) {
      var a = r._bin, o = {};
      o.format = a.readUshort(t, e), e += 2;
      var n = a.readUshort(t, e);
      e += 2, a.readUshort(t, e), e += 2, o.map = [];
      for (var i = 0; i < n - 6; i++)
        o.map.push(t[e + i]);
      return o;
    }, r.cmap.parse4 = function(t, e) {
      var a = r._bin, o = e, n = {};
      n.format = a.readUshort(t, e), e += 2;
      var i = a.readUshort(t, e);
      e += 2, a.readUshort(t, e), e += 2;
      var s = a.readUshort(t, e);
      e += 2;
      var f = s / 2;
      n.searchRange = a.readUshort(t, e), e += 2, n.entrySelector = a.readUshort(t, e), e += 2, n.rangeShift = a.readUshort(t, e), e += 2, n.endCount = a.readUshorts(t, e, f), e += 2 * f, e += 2, n.startCount = a.readUshorts(t, e, f), e += 2 * f, n.idDelta = [];
      for (var l = 0; l < f; l++)
        n.idDelta.push(a.readShort(t, e)), e += 2;
      for (n.idRangeOffset = a.readUshorts(t, e, f), e += 2 * f, n.glyphIdArray = []; e < o + i; )
        n.glyphIdArray.push(a.readUshort(t, e)), e += 2;
      return n;
    }, r.cmap.parse6 = function(t, e) {
      var a = r._bin, o = {};
      o.format = a.readUshort(t, e), e += 2, a.readUshort(t, e), e += 2, a.readUshort(t, e), e += 2, o.firstCode = a.readUshort(t, e), e += 2;
      var n = a.readUshort(t, e);
      e += 2, o.glyphIdArray = [];
      for (var i = 0; i < n; i++)
        o.glyphIdArray.push(a.readUshort(t, e)), e += 2;
      return o;
    }, r.cmap.parse12 = function(t, e) {
      var a = r._bin, o = {};
      o.format = a.readUshort(t, e), e += 2, e += 2, a.readUint(t, e), e += 4, a.readUint(t, e), e += 4;
      var n = a.readUint(t, e);
      e += 4, o.groups = [];
      for (var i = 0; i < n; i++) {
        var s = e + 12 * i, f = a.readUint(t, s + 0), l = a.readUint(t, s + 4), h = a.readUint(t, s + 8);
        o.groups.push([f, l, h]);
      }
      return o;
    }, r.glyf = {}, r.glyf.parse = function(t, e, a, o) {
      for (var n = [], i = 0; i < o.maxp.numGlyphs; i++)
        n.push(null);
      return n;
    }, r.glyf._parseGlyf = function(t, e) {
      var a = r._bin, o = t._data, n = r._tabOffset(o, "glyf", t._offset) + t.loca[e];
      if (t.loca[e] == t.loca[e + 1])
        return null;
      var i = {};
      if (i.noc = a.readShort(o, n), n += 2, i.xMin = a.readShort(o, n), n += 2, i.yMin = a.readShort(o, n), n += 2, i.xMax = a.readShort(o, n), n += 2, i.yMax = a.readShort(o, n), n += 2, i.xMin >= i.xMax || i.yMin >= i.yMax)
        return null;
      if (i.noc > 0) {
        i.endPts = [];
        for (var s = 0; s < i.noc; s++)
          i.endPts.push(a.readUshort(o, n)), n += 2;
        var f = a.readUshort(o, n);
        if (n += 2, o.length - n < f)
          return null;
        i.instructions = a.readBytes(o, n, f), n += f;
        var l = i.endPts[i.noc - 1] + 1;
        for (i.flags = [], s = 0; s < l; s++) {
          var h = o[n];
          if (n++, i.flags.push(h), (8 & h) != 0) {
            var p = o[n];
            n++;
            for (var g = 0; g < p; g++)
              i.flags.push(h), s++;
          }
        }
        for (i.xs = [], s = 0; s < l; s++) {
          var y = (2 & i.flags[s]) != 0, O = (16 & i.flags[s]) != 0;
          y ? (i.xs.push(O ? o[n] : -o[n]), n++) : O ? i.xs.push(0) : (i.xs.push(a.readShort(o, n)), n += 2);
        }
        for (i.ys = [], s = 0; s < l; s++)
          y = (4 & i.flags[s]) != 0, O = (32 & i.flags[s]) != 0, y ? (i.ys.push(O ? o[n] : -o[n]), n++) : O ? i.ys.push(0) : (i.ys.push(a.readShort(o, n)), n += 2);
        var S = 0, F = 0;
        for (s = 0; s < l; s++)
          S += i.xs[s], F += i.ys[s], i.xs[s] = S, i.ys[s] = F;
      } else {
        var U;
        i.parts = [];
        do {
          U = a.readUshort(o, n), n += 2;
          var T = { m: { a: 1, b: 0, c: 0, d: 1, tx: 0, ty: 0 }, p1: -1, p2: -1 };
          if (i.parts.push(T), T.glyphIndex = a.readUshort(o, n), n += 2, 1 & U) {
            var G = a.readShort(o, n);
            n += 2;
            var x = a.readShort(o, n);
            n += 2;
          } else
            G = a.readInt8(o, n), n++, x = a.readInt8(o, n), n++;
          2 & U ? (T.m.tx = G, T.m.ty = x) : (T.p1 = G, T.p2 = x), 8 & U ? (T.m.a = T.m.d = a.readF2dot14(o, n), n += 2) : 64 & U ? (T.m.a = a.readF2dot14(o, n), n += 2, T.m.d = a.readF2dot14(o, n), n += 2) : 128 & U && (T.m.a = a.readF2dot14(o, n), n += 2, T.m.b = a.readF2dot14(o, n), n += 2, T.m.c = a.readF2dot14(o, n), n += 2, T.m.d = a.readF2dot14(o, n), n += 2);
        } while (32 & U);
        if (256 & U) {
          var C = a.readUshort(o, n);
          for (n += 2, i.instr = [], s = 0; s < C; s++)
            i.instr.push(o[n]), n++;
        }
      }
      return i;
    }, r.GDEF = {}, r.GDEF.parse = function(t, e, a, o) {
      var n = e;
      e += 4;
      var i = r._bin.readUshort(t, e);
      return { glyphClassDef: i === 0 ? null : r._lctf.readClassDef(t, n + i) };
    }, r.GPOS = {}, r.GPOS.parse = function(t, e, a, o) {
      return r._lctf.parse(t, e, a, o, r.GPOS.subt);
    }, r.GPOS.subt = function(t, e, a, o) {
      var n = r._bin, i = a, s = {};
      if (s.fmt = n.readUshort(t, a), a += 2, e == 1 || e == 2 || e == 3 || e == 7 || e == 8 && s.fmt <= 2) {
        var f = n.readUshort(t, a);
        a += 2, s.coverage = r._lctf.readCoverage(t, f + i);
      }
      if (e == 1 && s.fmt == 1) {
        var l = n.readUshort(t, a);
        a += 2, l != 0 && (s.pos = r.GPOS.readValueRecord(t, a, l));
      } else if (e == 2 && s.fmt >= 1 && s.fmt <= 2) {
        l = n.readUshort(t, a), a += 2;
        var h = n.readUshort(t, a);
        a += 2;
        var p = r._lctf.numOfOnes(l), g = r._lctf.numOfOnes(h);
        if (s.fmt == 1) {
          s.pairsets = [];
          var y = n.readUshort(t, a);
          a += 2;
          for (var O = 0; O < y; O++) {
            var S = i + n.readUshort(t, a);
            a += 2;
            var F = n.readUshort(t, S);
            S += 2;
            for (var U = [], T = 0; T < F; T++) {
              var G = n.readUshort(t, S);
              S += 2, l != 0 && (m = r.GPOS.readValueRecord(t, S, l), S += 2 * p), h != 0 && (D = r.GPOS.readValueRecord(t, S, h), S += 2 * g), U.push({ gid2: G, val1: m, val2: D });
            }
            s.pairsets.push(U);
          }
        }
        if (s.fmt == 2) {
          var x = n.readUshort(t, a);
          a += 2;
          var C = n.readUshort(t, a);
          a += 2;
          var N = n.readUshort(t, a);
          a += 2;
          var R = n.readUshort(t, a);
          for (a += 2, s.classDef1 = r._lctf.readClassDef(t, i + x), s.classDef2 = r._lctf.readClassDef(t, i + C), s.matrix = [], O = 0; O < N; O++) {
            var J = [];
            for (T = 0; T < R; T++) {
              var m = null, D = null;
              l != 0 && (m = r.GPOS.readValueRecord(t, a, l), a += 2 * p), h != 0 && (D = r.GPOS.readValueRecord(t, a, h), a += 2 * g), J.push({ val1: m, val2: D });
            }
            s.matrix.push(J);
          }
        }
      } else if (e == 4 && s.fmt == 1)
        s.markCoverage = r._lctf.readCoverage(t, n.readUshort(t, a) + i), s.baseCoverage = r._lctf.readCoverage(t, n.readUshort(t, a + 2) + i), s.markClassCount = n.readUshort(t, a + 4), s.markArray = r.GPOS.readMarkArray(t, n.readUshort(t, a + 6) + i), s.baseArray = r.GPOS.readBaseArray(t, n.readUshort(t, a + 8) + i, s.markClassCount);
      else if (e == 6 && s.fmt == 1)
        s.mark1Coverage = r._lctf.readCoverage(t, n.readUshort(t, a) + i), s.mark2Coverage = r._lctf.readCoverage(t, n.readUshort(t, a + 2) + i), s.markClassCount = n.readUshort(t, a + 4), s.mark1Array = r.GPOS.readMarkArray(t, n.readUshort(t, a + 6) + i), s.mark2Array = r.GPOS.readBaseArray(t, n.readUshort(t, a + 8) + i, s.markClassCount);
      else {
        if (e == 9 && s.fmt == 1) {
          var k = n.readUshort(t, a);
          a += 2;
          var V = n.readUint(t, a);
          if (a += 4, o.ltype == 9)
            o.ltype = k;
          else if (o.ltype != k)
            throw "invalid extension substitution";
          return r.GPOS.subt(t, o.ltype, i + V);
        }
        console.debug("unsupported GPOS table LookupType", e, "format", s.fmt);
      }
      return s;
    }, r.GPOS.readValueRecord = function(t, e, a) {
      var o = r._bin, n = [];
      return n.push(1 & a ? o.readShort(t, e) : 0), e += 1 & a ? 2 : 0, n.push(2 & a ? o.readShort(t, e) : 0), e += 2 & a ? 2 : 0, n.push(4 & a ? o.readShort(t, e) : 0), e += 4 & a ? 2 : 0, n.push(8 & a ? o.readShort(t, e) : 0), e += 8 & a ? 2 : 0, n;
    }, r.GPOS.readBaseArray = function(t, e, a) {
      var o = r._bin, n = [], i = e, s = o.readUshort(t, e);
      e += 2;
      for (var f = 0; f < s; f++) {
        for (var l = [], h = 0; h < a; h++)
          l.push(r.GPOS.readAnchorRecord(t, i + o.readUshort(t, e))), e += 2;
        n.push(l);
      }
      return n;
    }, r.GPOS.readMarkArray = function(t, e) {
      var a = r._bin, o = [], n = e, i = a.readUshort(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = r.GPOS.readAnchorRecord(t, a.readUshort(t, e + 2) + n);
        f.markClass = a.readUshort(t, e), o.push(f), e += 4;
      }
      return o;
    }, r.GPOS.readAnchorRecord = function(t, e) {
      var a = r._bin, o = {};
      return o.fmt = a.readUshort(t, e), o.x = a.readShort(t, e + 2), o.y = a.readShort(t, e + 4), o;
    }, r.GSUB = {}, r.GSUB.parse = function(t, e, a, o) {
      return r._lctf.parse(t, e, a, o, r.GSUB.subt);
    }, r.GSUB.subt = function(t, e, a, o) {
      var n = r._bin, i = a, s = {};
      if (s.fmt = n.readUshort(t, a), a += 2, e != 1 && e != 2 && e != 4 && e != 5 && e != 6)
        return null;
      if (e == 1 || e == 2 || e == 4 || e == 5 && s.fmt <= 2 || e == 6 && s.fmt <= 2) {
        var f = n.readUshort(t, a);
        a += 2, s.coverage = r._lctf.readCoverage(t, i + f);
      }
      if (e == 1 && s.fmt >= 1 && s.fmt <= 2) {
        if (s.fmt == 1)
          s.delta = n.readShort(t, a), a += 2;
        else if (s.fmt == 2) {
          var l = n.readUshort(t, a);
          a += 2, s.newg = n.readUshorts(t, a, l), a += 2 * s.newg.length;
        }
      } else if (e == 2 && s.fmt == 1) {
        l = n.readUshort(t, a), a += 2, s.seqs = [];
        for (var h = 0; h < l; h++) {
          var p = n.readUshort(t, a) + i;
          a += 2;
          var g = n.readUshort(t, p);
          s.seqs.push(n.readUshorts(t, p + 2, g));
        }
      } else if (e == 4)
        for (s.vals = [], l = n.readUshort(t, a), a += 2, h = 0; h < l; h++) {
          var y = n.readUshort(t, a);
          a += 2, s.vals.push(r.GSUB.readLigatureSet(t, i + y));
        }
      else if (e == 5 && s.fmt == 2) {
        if (s.fmt == 2) {
          var O = n.readUshort(t, a);
          a += 2, s.cDef = r._lctf.readClassDef(t, i + O), s.scset = [];
          var S = n.readUshort(t, a);
          for (a += 2, h = 0; h < S; h++) {
            var F = n.readUshort(t, a);
            a += 2, s.scset.push(F == 0 ? null : r.GSUB.readSubClassSet(t, i + F));
          }
        }
      } else if (e == 6 && s.fmt == 3) {
        if (s.fmt == 3) {
          for (h = 0; h < 3; h++) {
            l = n.readUshort(t, a), a += 2;
            for (var U = [], T = 0; T < l; T++)
              U.push(r._lctf.readCoverage(t, i + n.readUshort(t, a + 2 * T)));
            a += 2 * l, h == 0 && (s.backCvg = U), h == 1 && (s.inptCvg = U), h == 2 && (s.ahedCvg = U);
          }
          l = n.readUshort(t, a), a += 2, s.lookupRec = r.GSUB.readSubstLookupRecords(t, a, l);
        }
      } else {
        if (e == 7 && s.fmt == 1) {
          var G = n.readUshort(t, a);
          a += 2;
          var x = n.readUint(t, a);
          if (a += 4, o.ltype == 9)
            o.ltype = G;
          else if (o.ltype != G)
            throw "invalid extension substitution";
          return r.GSUB.subt(t, o.ltype, i + x);
        }
        console.debug("unsupported GSUB table LookupType", e, "format", s.fmt);
      }
      return s;
    }, r.GSUB.readSubClassSet = function(t, e) {
      var a = r._bin.readUshort, o = e, n = [], i = a(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = a(t, e);
        e += 2, n.push(r.GSUB.readSubClassRule(t, o + f));
      }
      return n;
    }, r.GSUB.readSubClassRule = function(t, e) {
      var a = r._bin.readUshort, o = {}, n = a(t, e), i = a(t, e += 2);
      e += 2, o.input = [];
      for (var s = 0; s < n - 1; s++)
        o.input.push(a(t, e)), e += 2;
      return o.substLookupRecords = r.GSUB.readSubstLookupRecords(t, e, i), o;
    }, r.GSUB.readSubstLookupRecords = function(t, e, a) {
      for (var o = r._bin.readUshort, n = [], i = 0; i < a; i++)
        n.push(o(t, e), o(t, e + 2)), e += 4;
      return n;
    }, r.GSUB.readChainSubClassSet = function(t, e) {
      var a = r._bin, o = e, n = [], i = a.readUshort(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = a.readUshort(t, e);
        e += 2, n.push(r.GSUB.readChainSubClassRule(t, o + f));
      }
      return n;
    }, r.GSUB.readChainSubClassRule = function(t, e) {
      for (var a = r._bin, o = {}, n = ["backtrack", "input", "lookahead"], i = 0; i < n.length; i++) {
        var s = a.readUshort(t, e);
        e += 2, i == 1 && s--, o[n[i]] = a.readUshorts(t, e, s), e += 2 * o[n[i]].length;
      }
      return s = a.readUshort(t, e), e += 2, o.subst = a.readUshorts(t, e, 2 * s), e += 2 * o.subst.length, o;
    }, r.GSUB.readLigatureSet = function(t, e) {
      var a = r._bin, o = e, n = [], i = a.readUshort(t, e);
      e += 2;
      for (var s = 0; s < i; s++) {
        var f = a.readUshort(t, e);
        e += 2, n.push(r.GSUB.readLigature(t, o + f));
      }
      return n;
    }, r.GSUB.readLigature = function(t, e) {
      var a = r._bin, o = { chain: [] };
      o.nglyph = a.readUshort(t, e), e += 2;
      var n = a.readUshort(t, e);
      e += 2;
      for (var i = 0; i < n - 1; i++)
        o.chain.push(a.readUshort(t, e)), e += 2;
      return o;
    }, r.head = {}, r.head.parse = function(t, e, a) {
      var o = r._bin, n = {};
      return o.readFixed(t, e), e += 4, n.fontRevision = o.readFixed(t, e), e += 4, o.readUint(t, e), e += 4, o.readUint(t, e), e += 4, n.flags = o.readUshort(t, e), e += 2, n.unitsPerEm = o.readUshort(t, e), e += 2, n.created = o.readUint64(t, e), e += 8, n.modified = o.readUint64(t, e), e += 8, n.xMin = o.readShort(t, e), e += 2, n.yMin = o.readShort(t, e), e += 2, n.xMax = o.readShort(t, e), e += 2, n.yMax = o.readShort(t, e), e += 2, n.macStyle = o.readUshort(t, e), e += 2, n.lowestRecPPEM = o.readUshort(t, e), e += 2, n.fontDirectionHint = o.readShort(t, e), e += 2, n.indexToLocFormat = o.readShort(t, e), e += 2, n.glyphDataFormat = o.readShort(t, e), e += 2, n;
    }, r.hhea = {}, r.hhea.parse = function(t, e, a) {
      var o = r._bin, n = {};
      return o.readFixed(t, e), e += 4, n.ascender = o.readShort(t, e), e += 2, n.descender = o.readShort(t, e), e += 2, n.lineGap = o.readShort(t, e), e += 2, n.advanceWidthMax = o.readUshort(t, e), e += 2, n.minLeftSideBearing = o.readShort(t, e), e += 2, n.minRightSideBearing = o.readShort(t, e), e += 2, n.xMaxExtent = o.readShort(t, e), e += 2, n.caretSlopeRise = o.readShort(t, e), e += 2, n.caretSlopeRun = o.readShort(t, e), e += 2, n.caretOffset = o.readShort(t, e), e += 2, e += 8, n.metricDataFormat = o.readShort(t, e), e += 2, n.numberOfHMetrics = o.readUshort(t, e), e += 2, n;
    }, r.hmtx = {}, r.hmtx.parse = function(t, e, a, o) {
      for (var n = r._bin, i = { aWidth: [], lsBearing: [] }, s = 0, f = 0, l = 0; l < o.maxp.numGlyphs; l++)
        l < o.hhea.numberOfHMetrics && (s = n.readUshort(t, e), e += 2, f = n.readShort(t, e), e += 2), i.aWidth.push(s), i.lsBearing.push(f);
      return i;
    }, r.kern = {}, r.kern.parse = function(t, e, a, o) {
      var n = r._bin, i = n.readUshort(t, e);
      if (e += 2, i == 1)
        return r.kern.parseV1(t, e - 2, a, o);
      var s = n.readUshort(t, e);
      e += 2;
      for (var f = { glyph1: [], rval: [] }, l = 0; l < s; l++) {
        e += 2, a = n.readUshort(t, e), e += 2;
        var h = n.readUshort(t, e);
        e += 2;
        var p = h >>> 8;
        if ((p &= 15) != 0)
          throw "unknown kern table format: " + p;
        e = r.kern.readFormat0(t, e, f);
      }
      return f;
    }, r.kern.parseV1 = function(t, e, a, o) {
      var n = r._bin;
      n.readFixed(t, e), e += 4;
      var i = n.readUint(t, e);
      e += 4;
      for (var s = { glyph1: [], rval: [] }, f = 0; f < i; f++) {
        n.readUint(t, e), e += 4;
        var l = n.readUshort(t, e);
        e += 2, n.readUshort(t, e), e += 2;
        var h = l >>> 8;
        if ((h &= 15) != 0)
          throw "unknown kern table format: " + h;
        e = r.kern.readFormat0(t, e, s);
      }
      return s;
    }, r.kern.readFormat0 = function(t, e, a) {
      var o = r._bin, n = -1, i = o.readUshort(t, e);
      e += 2, o.readUshort(t, e), e += 2, o.readUshort(t, e), e += 2, o.readUshort(t, e), e += 2;
      for (var s = 0; s < i; s++) {
        var f = o.readUshort(t, e);
        e += 2;
        var l = o.readUshort(t, e);
        e += 2;
        var h = o.readShort(t, e);
        e += 2, f != n && (a.glyph1.push(f), a.rval.push({ glyph2: [], vals: [] }));
        var p = a.rval[a.rval.length - 1];
        p.glyph2.push(l), p.vals.push(h), n = f;
      }
      return e;
    }, r.loca = {}, r.loca.parse = function(t, e, a, o) {
      var n = r._bin, i = [], s = o.head.indexToLocFormat, f = o.maxp.numGlyphs + 1;
      if (s == 0)
        for (var l = 0; l < f; l++)
          i.push(n.readUshort(t, e + (l << 1)) << 1);
      if (s == 1)
        for (l = 0; l < f; l++)
          i.push(n.readUint(t, e + (l << 2)));
      return i;
    }, r.maxp = {}, r.maxp.parse = function(t, e, a) {
      var o = r._bin, n = {}, i = o.readUint(t, e);
      return e += 4, n.numGlyphs = o.readUshort(t, e), e += 2, i == 65536 && (n.maxPoints = o.readUshort(t, e), e += 2, n.maxContours = o.readUshort(t, e), e += 2, n.maxCompositePoints = o.readUshort(t, e), e += 2, n.maxCompositeContours = o.readUshort(t, e), e += 2, n.maxZones = o.readUshort(t, e), e += 2, n.maxTwilightPoints = o.readUshort(t, e), e += 2, n.maxStorage = o.readUshort(t, e), e += 2, n.maxFunctionDefs = o.readUshort(t, e), e += 2, n.maxInstructionDefs = o.readUshort(t, e), e += 2, n.maxStackElements = o.readUshort(t, e), e += 2, n.maxSizeOfInstructions = o.readUshort(t, e), e += 2, n.maxComponentElements = o.readUshort(t, e), e += 2, n.maxComponentDepth = o.readUshort(t, e), e += 2), n;
    }, r.name = {}, r.name.parse = function(t, e, a) {
      var o = r._bin, n = {};
      o.readUshort(t, e), e += 2;
      var i = o.readUshort(t, e);
      e += 2, o.readUshort(t, e);
      for (var s, f = ["copyright", "fontFamily", "fontSubfamily", "ID", "fullName", "version", "postScriptName", "trademark", "manufacturer", "designer", "description", "urlVendor", "urlDesigner", "licence", "licenceURL", "---", "typoFamilyName", "typoSubfamilyName", "compatibleFull", "sampleText", "postScriptCID", "wwsFamilyName", "wwsSubfamilyName", "lightPalette", "darkPalette"], l = e += 2, h = 0; h < i; h++) {
        var p = o.readUshort(t, e);
        e += 2;
        var g = o.readUshort(t, e);
        e += 2;
        var y = o.readUshort(t, e);
        e += 2;
        var O = o.readUshort(t, e);
        e += 2;
        var S = o.readUshort(t, e);
        e += 2;
        var F = o.readUshort(t, e);
        e += 2;
        var U, T = f[O], G = l + 12 * i + F;
        if (p == 0)
          U = o.readUnicode(t, G, S / 2);
        else if (p == 3 && g == 0)
          U = o.readUnicode(t, G, S / 2);
        else if (g == 0)
          U = o.readASCII(t, G, S);
        else if (g == 1)
          U = o.readUnicode(t, G, S / 2);
        else if (g == 3)
          U = o.readUnicode(t, G, S / 2);
        else {
          if (p != 1)
            throw "unknown encoding " + g + ", platformID: " + p;
          U = o.readASCII(t, G, S), console.debug("reading unknown MAC encoding " + g + " as ASCII");
        }
        var x = "p" + p + "," + y.toString(16);
        n[x] == null && (n[x] = {}), n[x][T !== void 0 ? T : O] = U, n[x]._lang = y;
      }
      for (var C in n)
        if (n[C].postScriptName != null && n[C]._lang == 1033)
          return n[C];
      for (var C in n)
        if (n[C].postScriptName != null && n[C]._lang == 0)
          return n[C];
      for (var C in n)
        if (n[C].postScriptName != null && n[C]._lang == 3084)
          return n[C];
      for (var C in n)
        if (n[C].postScriptName != null)
          return n[C];
      for (var C in n) {
        s = C;
        break;
      }
      return console.debug("returning name table with languageID " + n[s]._lang), n[s];
    }, r["OS/2"] = {}, r["OS/2"].parse = function(t, e, a) {
      var o = r._bin.readUshort(t, e);
      e += 2;
      var n = {};
      if (o == 0)
        r["OS/2"].version0(t, e, n);
      else if (o == 1)
        r["OS/2"].version1(t, e, n);
      else if (o == 2 || o == 3 || o == 4)
        r["OS/2"].version2(t, e, n);
      else {
        if (o != 5)
          throw "unknown OS/2 table version: " + o;
        r["OS/2"].version5(t, e, n);
      }
      return n;
    }, r["OS/2"].version0 = function(t, e, a) {
      var o = r._bin;
      return a.xAvgCharWidth = o.readShort(t, e), e += 2, a.usWeightClass = o.readUshort(t, e), e += 2, a.usWidthClass = o.readUshort(t, e), e += 2, a.fsType = o.readUshort(t, e), e += 2, a.ySubscriptXSize = o.readShort(t, e), e += 2, a.ySubscriptYSize = o.readShort(t, e), e += 2, a.ySubscriptXOffset = o.readShort(t, e), e += 2, a.ySubscriptYOffset = o.readShort(t, e), e += 2, a.ySuperscriptXSize = o.readShort(t, e), e += 2, a.ySuperscriptYSize = o.readShort(t, e), e += 2, a.ySuperscriptXOffset = o.readShort(t, e), e += 2, a.ySuperscriptYOffset = o.readShort(t, e), e += 2, a.yStrikeoutSize = o.readShort(t, e), e += 2, a.yStrikeoutPosition = o.readShort(t, e), e += 2, a.sFamilyClass = o.readShort(t, e), e += 2, a.panose = o.readBytes(t, e, 10), e += 10, a.ulUnicodeRange1 = o.readUint(t, e), e += 4, a.ulUnicodeRange2 = o.readUint(t, e), e += 4, a.ulUnicodeRange3 = o.readUint(t, e), e += 4, a.ulUnicodeRange4 = o.readUint(t, e), e += 4, a.achVendID = [o.readInt8(t, e), o.readInt8(t, e + 1), o.readInt8(t, e + 2), o.readInt8(t, e + 3)], e += 4, a.fsSelection = o.readUshort(t, e), e += 2, a.usFirstCharIndex = o.readUshort(t, e), e += 2, a.usLastCharIndex = o.readUshort(t, e), e += 2, a.sTypoAscender = o.readShort(t, e), e += 2, a.sTypoDescender = o.readShort(t, e), e += 2, a.sTypoLineGap = o.readShort(t, e), e += 2, a.usWinAscent = o.readUshort(t, e), e += 2, a.usWinDescent = o.readUshort(t, e), e += 2;
    }, r["OS/2"].version1 = function(t, e, a) {
      var o = r._bin;
      return e = r["OS/2"].version0(t, e, a), a.ulCodePageRange1 = o.readUint(t, e), e += 4, a.ulCodePageRange2 = o.readUint(t, e), e += 4;
    }, r["OS/2"].version2 = function(t, e, a) {
      var o = r._bin;
      return e = r["OS/2"].version1(t, e, a), a.sxHeight = o.readShort(t, e), e += 2, a.sCapHeight = o.readShort(t, e), e += 2, a.usDefault = o.readUshort(t, e), e += 2, a.usBreak = o.readUshort(t, e), e += 2, a.usMaxContext = o.readUshort(t, e), e += 2;
    }, r["OS/2"].version5 = function(t, e, a) {
      var o = r._bin;
      return e = r["OS/2"].version2(t, e, a), a.usLowerOpticalPointSize = o.readUshort(t, e), e += 2, a.usUpperOpticalPointSize = o.readUshort(t, e), e += 2;
    }, r.post = {}, r.post.parse = function(t, e, a) {
      var o = r._bin, n = {};
      return n.version = o.readFixed(t, e), e += 4, n.italicAngle = o.readFixed(t, e), e += 4, n.underlinePosition = o.readShort(t, e), e += 2, n.underlineThickness = o.readShort(t, e), e += 2, n;
    }, r == null && (r = {}), r.U == null && (r.U = {}), r.U.codeToGlyph = function(t, e) {
      var a = t.cmap, o = -1;
      if (a.p0e4 != null ? o = a.p0e4 : a.p3e1 != null ? o = a.p3e1 : a.p1e0 != null ? o = a.p1e0 : a.p0e3 != null && (o = a.p0e3), o == -1)
        throw "no familiar platform and encoding!";
      var n = a.tables[o];
      if (n.format == 0)
        return e >= n.map.length ? 0 : n.map[e];
      if (n.format == 4) {
        for (var i = -1, s = 0; s < n.endCount.length; s++)
          if (e <= n.endCount[s]) {
            i = s;
            break;
          }
        return i == -1 || n.startCount[i] > e ? 0 : 65535 & (n.idRangeOffset[i] != 0 ? n.glyphIdArray[e - n.startCount[i] + (n.idRangeOffset[i] >> 1) - (n.idRangeOffset.length - i)] : e + n.idDelta[i]);
      }
      if (n.format == 12) {
        if (e > n.groups[n.groups.length - 1][1])
          return 0;
        for (s = 0; s < n.groups.length; s++) {
          var f = n.groups[s];
          if (f[0] <= e && e <= f[1])
            return f[2] + (e - f[0]);
        }
        return 0;
      }
      throw "unknown cmap table format " + n.format;
    }, r.U.glyphToPath = function(t, e) {
      var a = { cmds: [], crds: [] };
      if (t.SVG && t.SVG.entries[e]) {
        var o = t.SVG.entries[e];
        return o == null ? a : (typeof o == "string" && (o = r.SVG.toPath(o), t.SVG.entries[e] = o), o);
      }
      if (t.CFF) {
        var n = { x: 0, y: 0, stack: [], nStems: 0, haveWidth: !1, width: t.CFF.Private ? t.CFF.Private.defaultWidthX : 0, open: !1 }, i = t.CFF, s = t.CFF.Private;
        if (i.ROS) {
          for (var f = 0; i.FDSelect[f + 2] <= e; )
            f += 2;
          s = i.FDArray[i.FDSelect[f + 1]].Private;
        }
        r.U._drawCFF(t.CFF.CharStrings[e], n, i, s, a);
      } else
        t.glyf && r.U._drawGlyf(e, t, a);
      return a;
    }, r.U._drawGlyf = function(t, e, a) {
      var o = e.glyf[t];
      o == null && (o = e.glyf[t] = r.glyf._parseGlyf(e, t)), o != null && (o.noc > -1 ? r.U._simpleGlyph(o, a) : r.U._compoGlyph(o, e, a));
    }, r.U._simpleGlyph = function(t, e) {
      for (var a = 0; a < t.noc; a++) {
        for (var o = a == 0 ? 0 : t.endPts[a - 1] + 1, n = t.endPts[a], i = o; i <= n; i++) {
          var s = i == o ? n : i - 1, f = i == n ? o : i + 1, l = 1 & t.flags[i], h = 1 & t.flags[s], p = 1 & t.flags[f], g = t.xs[i], y = t.ys[i];
          if (i == o)
            if (l) {
              if (!h) {
                r.U.P.moveTo(e, g, y);
                continue;
              }
              r.U.P.moveTo(e, t.xs[s], t.ys[s]);
            } else
              h ? r.U.P.moveTo(e, t.xs[s], t.ys[s]) : r.U.P.moveTo(e, (t.xs[s] + g) / 2, (t.ys[s] + y) / 2);
          l ? h && r.U.P.lineTo(e, g, y) : p ? r.U.P.qcurveTo(e, g, y, t.xs[f], t.ys[f]) : r.U.P.qcurveTo(e, g, y, (g + t.xs[f]) / 2, (y + t.ys[f]) / 2);
        }
        r.U.P.closePath(e);
      }
    }, r.U._compoGlyph = function(t, e, a) {
      for (var o = 0; o < t.parts.length; o++) {
        var n = { cmds: [], crds: [] }, i = t.parts[o];
        r.U._drawGlyf(i.glyphIndex, e, n);
        for (var s = i.m, f = 0; f < n.crds.length; f += 2) {
          var l = n.crds[f], h = n.crds[f + 1];
          a.crds.push(l * s.a + h * s.b + s.tx), a.crds.push(l * s.c + h * s.d + s.ty);
        }
        for (f = 0; f < n.cmds.length; f++)
          a.cmds.push(n.cmds[f]);
      }
    }, r.U._getGlyphClass = function(t, e) {
      var a = r._lctf.getInterval(e, t);
      return a == -1 ? 0 : e[a + 2];
    }, r.U._applySubs = function(t, e, a, o) {
      for (var n = t.length - e - 1, i = 0; i < a.tabs.length; i++)
        if (a.tabs[i] != null) {
          var s, f = a.tabs[i];
          if (!f.coverage || (s = r._lctf.coverageIndex(f.coverage, t[e])) != -1) {
            if (a.ltype == 1)
              t[e], f.fmt == 1 ? t[e] = t[e] + f.delta : t[e] = f.newg[s];
            else if (a.ltype == 4)
              for (var l = f.vals[s], h = 0; h < l.length; h++) {
                var p = l[h], g = p.chain.length;
                if (!(g > n)) {
                  for (var y = !0, O = 0, S = 0; S < g; S++) {
                    for (; t[e + O + (1 + S)] == -1; )
                      O++;
                    p.chain[S] != t[e + O + (1 + S)] && (y = !1);
                  }
                  if (y) {
                    for (t[e] = p.nglyph, S = 0; S < g + O; S++)
                      t[e + S + 1] = -1;
                    break;
                  }
                }
              }
            else if (a.ltype == 5 && f.fmt == 2)
              for (var F = r._lctf.getInterval(f.cDef, t[e]), U = f.cDef[F + 2], T = f.scset[U], G = 0; G < T.length; G++) {
                var x = T[G], C = x.input;
                if (!(C.length > n)) {
                  for (y = !0, S = 0; S < C.length; S++) {
                    var N = r._lctf.getInterval(f.cDef, t[e + 1 + S]);
                    if (F == -1 && f.cDef[N + 2] != C[S]) {
                      y = !1;
                      break;
                    }
                  }
                  if (y) {
                    var R = x.substLookupRecords;
                    for (h = 0; h < R.length; h += 2)
                      R[h], R[h + 1];
                  }
                }
              }
            else if (a.ltype == 6 && f.fmt == 3) {
              if (!r.U._glsCovered(t, f.backCvg, e - f.backCvg.length) || !r.U._glsCovered(t, f.inptCvg, e) || !r.U._glsCovered(t, f.ahedCvg, e + f.inptCvg.length))
                continue;
              var J = f.lookupRec;
              for (G = 0; G < J.length; G += 2) {
                F = J[G];
                var m = o[J[G + 1]];
                r.U._applySubs(t, e + F, m, o);
              }
            }
          }
        }
    }, r.U._glsCovered = function(t, e, a) {
      for (var o = 0; o < e.length; o++)
        if (r._lctf.coverageIndex(e[o], t[a + o]) == -1)
          return !1;
      return !0;
    }, r.U.glyphsToPath = function(t, e, a) {
      for (var o = { cmds: [], crds: [] }, n = 0, i = 0; i < e.length; i++) {
        var s = e[i];
        if (s != -1) {
          for (var f = i < e.length - 1 && e[i + 1] != -1 ? e[i + 1] : 0, l = r.U.glyphToPath(t, s), h = 0; h < l.crds.length; h += 2)
            o.crds.push(l.crds[h] + n), o.crds.push(l.crds[h + 1]);
          for (a && o.cmds.push(a), h = 0; h < l.cmds.length; h++)
            o.cmds.push(l.cmds[h]);
          a && o.cmds.push("X"), n += t.hmtx.aWidth[s], i < e.length - 1 && (n += r.U.getPairAdjustment(t, s, f));
        }
      }
      return o;
    }, r.U.P = {}, r.U.P.moveTo = function(t, e, a) {
      t.cmds.push("M"), t.crds.push(e, a);
    }, r.U.P.lineTo = function(t, e, a) {
      t.cmds.push("L"), t.crds.push(e, a);
    }, r.U.P.curveTo = function(t, e, a, o, n, i, s) {
      t.cmds.push("C"), t.crds.push(e, a, o, n, i, s);
    }, r.U.P.qcurveTo = function(t, e, a, o, n) {
      t.cmds.push("Q"), t.crds.push(e, a, o, n);
    }, r.U.P.closePath = function(t) {
      t.cmds.push("Z");
    }, r.U._drawCFF = function(t, e, a, o, n) {
      for (var i = e.stack, s = e.nStems, f = e.haveWidth, l = e.width, h = e.open, p = 0, g = e.x, y = e.y, O = 0, S = 0, F = 0, U = 0, T = 0, G = 0, x = 0, C = 0, N = 0, R = 0, J = { val: 0, size: 0 }; p < t.length; ) {
        r.CFF.getCharString(t, p, J);
        var m = J.val;
        if (p += J.size, m == "o1" || m == "o18")
          i.length % 2 != 0 && !f && (l = i.shift() + o.nominalWidthX), s += i.length >> 1, i.length = 0, f = !0;
        else if (m == "o3" || m == "o23")
          i.length % 2 != 0 && !f && (l = i.shift() + o.nominalWidthX), s += i.length >> 1, i.length = 0, f = !0;
        else if (m == "o4")
          i.length > 1 && !f && (l = i.shift() + o.nominalWidthX, f = !0), h && r.U.P.closePath(n), y += i.pop(), r.U.P.moveTo(n, g, y), h = !0;
        else if (m == "o5")
          for (; i.length > 0; )
            g += i.shift(), y += i.shift(), r.U.P.lineTo(n, g, y);
        else if (m == "o6" || m == "o7")
          for (var D = i.length, k = m == "o6", V = 0; V < D; V++) {
            var I = i.shift();
            k ? g += I : y += I, k = !k, r.U.P.lineTo(n, g, y);
          }
        else if (m == "o8" || m == "o24") {
          D = i.length;
          for (var Z = 0; Z + 6 <= D; )
            O = g + i.shift(), S = y + i.shift(), F = O + i.shift(), U = S + i.shift(), g = F + i.shift(), y = U + i.shift(), r.U.P.curveTo(n, O, S, F, U, g, y), Z += 6;
          m == "o24" && (g += i.shift(), y += i.shift(), r.U.P.lineTo(n, g, y));
        } else {
          if (m == "o11")
            break;
          if (m == "o1234" || m == "o1235" || m == "o1236" || m == "o1237")
            m == "o1234" && (S = y, F = (O = g + i.shift()) + i.shift(), R = U = S + i.shift(), G = U, C = y, g = (x = (T = (N = F + i.shift()) + i.shift()) + i.shift()) + i.shift(), r.U.P.curveTo(n, O, S, F, U, N, R), r.U.P.curveTo(n, T, G, x, C, g, y)), m == "o1235" && (O = g + i.shift(), S = y + i.shift(), F = O + i.shift(), U = S + i.shift(), N = F + i.shift(), R = U + i.shift(), T = N + i.shift(), G = R + i.shift(), x = T + i.shift(), C = G + i.shift(), g = x + i.shift(), y = C + i.shift(), i.shift(), r.U.P.curveTo(n, O, S, F, U, N, R), r.U.P.curveTo(n, T, G, x, C, g, y)), m == "o1236" && (O = g + i.shift(), S = y + i.shift(), F = O + i.shift(), R = U = S + i.shift(), G = U, x = (T = (N = F + i.shift()) + i.shift()) + i.shift(), C = G + i.shift(), g = x + i.shift(), r.U.P.curveTo(n, O, S, F, U, N, R), r.U.P.curveTo(n, T, G, x, C, g, y)), m == "o1237" && (O = g + i.shift(), S = y + i.shift(), F = O + i.shift(), U = S + i.shift(), N = F + i.shift(), R = U + i.shift(), T = N + i.shift(), G = R + i.shift(), x = T + i.shift(), C = G + i.shift(), Math.abs(x - g) > Math.abs(C - y) ? g = x + i.shift() : y = C + i.shift(), r.U.P.curveTo(n, O, S, F, U, N, R), r.U.P.curveTo(n, T, G, x, C, g, y));
          else if (m == "o14") {
            if (i.length > 0 && !f && (l = i.shift() + a.nominalWidthX, f = !0), i.length == 4) {
              var $ = i.shift(), B = i.shift(), M = i.shift(), v = i.shift(), b = r.CFF.glyphBySE(a, M), w = r.CFF.glyphBySE(a, v);
              r.U._drawCFF(a.CharStrings[b], e, a, o, n), e.x = $, e.y = B, r.U._drawCFF(a.CharStrings[w], e, a, o, n);
            }
            h && (r.U.P.closePath(n), h = !1);
          } else if (m == "o19" || m == "o20")
            i.length % 2 != 0 && !f && (l = i.shift() + o.nominalWidthX), s += i.length >> 1, i.length = 0, f = !0, p += s + 7 >> 3;
          else if (m == "o21")
            i.length > 2 && !f && (l = i.shift() + o.nominalWidthX, f = !0), y += i.pop(), g += i.pop(), h && r.U.P.closePath(n), r.U.P.moveTo(n, g, y), h = !0;
          else if (m == "o22")
            i.length > 1 && !f && (l = i.shift() + o.nominalWidthX, f = !0), g += i.pop(), h && r.U.P.closePath(n), r.U.P.moveTo(n, g, y), h = !0;
          else if (m == "o25") {
            for (; i.length > 6; )
              g += i.shift(), y += i.shift(), r.U.P.lineTo(n, g, y);
            O = g + i.shift(), S = y + i.shift(), F = O + i.shift(), U = S + i.shift(), g = F + i.shift(), y = U + i.shift(), r.U.P.curveTo(n, O, S, F, U, g, y);
          } else if (m == "o26")
            for (i.length % 2 && (g += i.shift()); i.length > 0; )
              O = g, S = y + i.shift(), g = F = O + i.shift(), y = (U = S + i.shift()) + i.shift(), r.U.P.curveTo(n, O, S, F, U, g, y);
          else if (m == "o27")
            for (i.length % 2 && (y += i.shift()); i.length > 0; )
              S = y, F = (O = g + i.shift()) + i.shift(), U = S + i.shift(), g = F + i.shift(), y = U, r.U.P.curveTo(n, O, S, F, U, g, y);
          else if (m == "o10" || m == "o29") {
            var A = m == "o10" ? o : a;
            if (i.length == 0)
              console.debug("error: empty stack");
            else {
              var _ = i.pop(), W = A.Subrs[_ + A.Bias];
              e.x = g, e.y = y, e.nStems = s, e.haveWidth = f, e.width = l, e.open = h, r.U._drawCFF(W, e, a, o, n), g = e.x, y = e.y, s = e.nStems, f = e.haveWidth, l = e.width, h = e.open;
            }
          } else if (m == "o30" || m == "o31") {
            var E = i.length, P = (Z = 0, m == "o31");
            for (Z += E - (D = -3 & E); Z < D; )
              P ? (S = y, F = (O = g + i.shift()) + i.shift(), y = (U = S + i.shift()) + i.shift(), D - Z == 5 ? (g = F + i.shift(), Z++) : g = F, P = !1) : (O = g, S = y + i.shift(), F = O + i.shift(), U = S + i.shift(), g = F + i.shift(), D - Z == 5 ? (y = U + i.shift(), Z++) : y = U, P = !0), r.U.P.curveTo(n, O, S, F, U, g, y), Z += 4;
          } else {
            if ((m + "").charAt(0) == "o")
              throw console.debug("Unknown operation: " + m, t), m;
            i.push(m);
          }
        }
      }
      e.x = g, e.y = y, e.nStems = s, e.haveWidth = f, e.width = l, e.open = h;
    };
    var d = r, u = { Typr: d };
    return c.Typr = d, c.default = u, Object.defineProperty(c, "__esModule", { value: !0 }), c;
  }({}).Typr;
}
/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/
function na() {
  return function(c) {
    var r = Uint8Array, d = Uint16Array, u = Uint32Array, t = new r([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]), e = new r([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]), a = new r([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), o = function(m, D) {
      for (var k = new d(31), V = 0; V < 31; ++V)
        k[V] = D += 1 << m[V - 1];
      var I = new u(k[30]);
      for (V = 1; V < 30; ++V)
        for (var Z = k[V]; Z < k[V + 1]; ++Z)
          I[Z] = Z - k[V] << 5 | V;
      return [k, I];
    }, n = o(t, 2), i = n[0], s = n[1];
    i[28] = 258, s[258] = 28;
    for (var f = o(e, 0)[0], l = new d(32768), h = 0; h < 32768; ++h) {
      var p = (43690 & h) >>> 1 | (21845 & h) << 1;
      p = (61680 & (p = (52428 & p) >>> 2 | (13107 & p) << 2)) >>> 4 | (3855 & p) << 4, l[h] = ((65280 & p) >>> 8 | (255 & p) << 8) >>> 1;
    }
    var g = function(m, D, k) {
      for (var V = m.length, I = 0, Z = new d(D); I < V; ++I)
        ++Z[m[I] - 1];
      var $, B = new d(D);
      for (I = 0; I < D; ++I)
        B[I] = B[I - 1] + Z[I - 1] << 1;
      if (k) {
        $ = new d(1 << D);
        var M = 15 - D;
        for (I = 0; I < V; ++I)
          if (m[I])
            for (var v = I << 4 | m[I], b = D - m[I], w = B[m[I] - 1]++ << b, A = w | (1 << b) - 1; w <= A; ++w)
              $[l[w] >>> M] = v;
      } else
        for ($ = new d(V), I = 0; I < V; ++I)
          m[I] && ($[I] = l[B[m[I] - 1]++] >>> 15 - m[I]);
      return $;
    }, y = new r(288);
    for (h = 0; h < 144; ++h)
      y[h] = 8;
    for (h = 144; h < 256; ++h)
      y[h] = 9;
    for (h = 256; h < 280; ++h)
      y[h] = 7;
    for (h = 280; h < 288; ++h)
      y[h] = 8;
    var O = new r(32);
    for (h = 0; h < 32; ++h)
      O[h] = 5;
    var S = g(y, 9, 1), F = g(O, 5, 1), U = function(m) {
      for (var D = m[0], k = 1; k < m.length; ++k)
        m[k] > D && (D = m[k]);
      return D;
    }, T = function(m, D, k) {
      var V = D / 8 | 0;
      return (m[V] | m[V + 1] << 8) >> (7 & D) & k;
    }, G = function(m, D) {
      var k = D / 8 | 0;
      return (m[k] | m[k + 1] << 8 | m[k + 2] << 16) >> (7 & D);
    }, x = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"], C = function(m, D, k) {
      var V = new Error(D || x[m]);
      if (V.code = m, Error.captureStackTrace && Error.captureStackTrace(V, C), !k)
        throw V;
      return V;
    }, N = function(m, D, k) {
      var V = m.length;
      if (!V || k && !k.l && V < 5)
        return D || new r(0);
      var I = !D || k, Z = !k || k.i;
      k || (k = {}), D || (D = new r(3 * V));
      var $, B = function(fe) {
        var ke = D.length;
        if (fe > ke) {
          var we = new r(Math.max(2 * ke, fe));
          we.set(D), D = we;
        }
      }, M = k.f || 0, v = k.p || 0, b = k.b || 0, w = k.l, A = k.d, _ = k.m, W = k.n, E = 8 * V;
      do {
        if (!w) {
          k.f = M = T(m, v, 1);
          var P = T(m, v + 1, 3);
          if (v += 3, !P) {
            var H = m[(q = (($ = v) / 8 | 0) + (7 & $ && 1) + 4) - 4] | m[q - 3] << 8, ee = q + H;
            if (ee > V) {
              Z && C(0);
              break;
            }
            I && B(b + H), D.set(m.subarray(q, ee), b), k.b = b += H, k.p = v = 8 * ee;
            continue;
          }
          if (P == 1)
            w = S, A = F, _ = 9, W = 5;
          else if (P == 2) {
            var X = T(m, v, 31) + 257, z = T(m, v + 10, 15) + 4, pe = X + T(m, v + 5, 31) + 1;
            v += 14;
            for (var ue = new r(pe), Q = new r(19), te = 0; te < z; ++te)
              Q[a[te]] = T(m, v + 3 * te, 7);
            v += 3 * z;
            var se = U(Q), j = (1 << se) - 1, re = g(Q, se, 1);
            for (te = 0; te < pe; ) {
              var q, L = re[T(m, v, j)];
              if (v += 15 & L, (q = L >>> 4) < 16)
                ue[te++] = q;
              else {
                var he = 0, K = 0;
                for (q == 16 ? (K = 3 + T(m, v, 3), v += 2, he = ue[te - 1]) : q == 17 ? (K = 3 + T(m, v, 7), v += 3) : q == 18 && (K = 11 + T(m, v, 127), v += 7); K--; )
                  ue[te++] = he;
              }
            }
            var ae = ue.subarray(0, X), Y = ue.subarray(X);
            _ = U(ae), W = U(Y), w = g(ae, _, 1), A = g(Y, W, 1);
          } else
            C(1);
          if (v > E) {
            Z && C(0);
            break;
          }
        }
        I && B(b + 131072);
        for (var be = (1 << _) - 1, ne = (1 << W) - 1, oe = v; ; oe = v) {
          var le = (he = w[G(m, v) & be]) >>> 4;
          if ((v += 15 & he) > E) {
            Z && C(0);
            break;
          }
          if (he || C(2), le < 256)
            D[b++] = le;
          else {
            if (le == 256) {
              oe = v, w = null;
              break;
            }
            var de = le - 254;
            if (le > 264) {
              var xe = t[te = le - 257];
              de = T(m, v, (1 << xe) - 1) + i[te], v += xe;
            }
            var Ce = A[G(m, v) & ne], ge = Ce >>> 4;
            if (Ce || C(3), v += 15 & Ce, Y = f[ge], ge > 3 && (xe = e[ge], Y += G(m, v) & (1 << xe) - 1, v += xe), v > E) {
              Z && C(0);
              break;
            }
            I && B(b + 131072);
            for (var me = b + de; b < me; b += 4)
              D[b] = D[b - Y], D[b + 1] = D[b + 1 - Y], D[b + 2] = D[b + 2 - Y], D[b + 3] = D[b + 3 - Y];
            b = me;
          }
        }
        k.l = w, k.p = oe, k.b = b, w && (M = 1, k.m = _, k.d = A, k.n = W);
      } while (!M);
      return b == D.length ? D : function(fe, ke, we) {
        (ke == null || ke < 0) && (ke = 0), (we == null || we > fe.length) && (we = fe.length);
        var Oe = new (fe instanceof d ? d : fe instanceof u ? u : r)(we - ke);
        return Oe.set(fe.subarray(ke, we)), Oe;
      }(D, 0, b);
    }, R = new r(0), J = typeof TextDecoder < "u" && new TextDecoder();
    try {
      J.decode(R, { stream: !0 });
    } catch {
    }
    return c.convert_streams = function(m) {
      var D = new DataView(m), k = 0;
      function V() {
        var X = D.getUint16(k);
        return k += 2, X;
      }
      function I() {
        var X = D.getUint32(k);
        return k += 4, X;
      }
      function Z(X) {
        H.setUint16(ee, X), ee += 2;
      }
      function $(X) {
        H.setUint32(ee, X), ee += 4;
      }
      for (var B = { signature: I(), flavor: I(), length: I(), numTables: V(), reserved: V(), totalSfntSize: I(), majorVersion: V(), minorVersion: V(), metaOffset: I(), metaLength: I(), metaOrigLength: I(), privOffset: I(), privLength: I() }, M = 0; Math.pow(2, M) <= B.numTables; )
        M++;
      M--;
      for (var v = 16 * Math.pow(2, M), b = 16 * B.numTables - v, w = 12, A = [], _ = 0; _ < B.numTables; _++)
        A.push({ tag: I(), offset: I(), compLength: I(), origLength: I(), origChecksum: I() }), w += 16;
      var W, E = new Uint8Array(12 + 16 * A.length + A.reduce(function(X, z) {
        return X + z.origLength + 4;
      }, 0)), P = E.buffer, H = new DataView(P), ee = 0;
      return $(B.flavor), Z(B.numTables), Z(v), Z(M), Z(b), A.forEach(function(X) {
        $(X.tag), $(X.origChecksum), $(w), $(X.origLength), X.outOffset = w, (w += X.origLength) % 4 != 0 && (w += 4 - w % 4);
      }), A.forEach(function(X) {
        var z, pe = m.slice(X.offset, X.offset + X.compLength);
        if (X.compLength != X.origLength) {
          var ue = new Uint8Array(X.origLength);
          z = new Uint8Array(pe, 2), N(z, ue);
        } else
          ue = new Uint8Array(pe);
        E.set(ue, X.outOffset);
        var Q = 0;
        (w = X.outOffset + X.origLength) % 4 != 0 && (Q = 4 - w % 4), E.set(new Uint8Array(Q).buffer, X.outOffset + X.origLength), W = w + Q;
      }), P.slice(0, W);
    }, Object.defineProperty(c, "__esModule", { value: !0 }), c;
  }({}).convert_streams;
}
function aa(c, r) {
  const d = {
    M: 2,
    L: 2,
    Q: 4,
    C: 6,
    Z: 0
  }, u = { C: "18g,ca,368,1kz", D: "17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v", R: "17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6", L: "x9u,jff,a,fd,jv", T: "4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n" }, t = 1, e = 2, a = 4, o = 8, n = 16, i = 32;
  let s;
  function f(x) {
    if (!s) {
      const C = {
        R: e,
        L: t,
        D: a,
        C: n,
        U: i,
        T: o
      };
      s = /* @__PURE__ */ new Map();
      for (let N in u) {
        let R = 0;
        u[N].split(",").forEach((J) => {
          let [m, D] = J.split("+");
          m = parseInt(m, 36), D = D ? parseInt(D, 36) : 0, s.set(R += m, C[N]);
          for (let k = D; k--; )
            s.set(++R, C[N]);
        });
      }
    }
    return s.get(x) || i;
  }
  const l = 1, h = 2, p = 3, g = 4, y = [null, "isol", "init", "fina", "medi"];
  function O(x) {
    const C = new Uint8Array(x.length);
    let N = i, R = l, J = -1;
    for (let m = 0; m < x.length; m++) {
      const D = x.codePointAt(m);
      let k = f(D) | 0, V = l;
      k & o || (N & (t | a | n) ? k & (e | a | n) ? (V = p, (R === l || R === p) && C[J]++) : k & (t | i) && (R === h || R === g) && C[J]-- : N & (e | i) && (R === h || R === g) && C[J]--, R = C[m] = V, N = k, J = m, D > 65535 && m++);
    }
    return C;
  }
  function S(x, C) {
    const N = [];
    for (let J = 0; J < C.length; J++) {
      const m = C.codePointAt(J);
      m > 65535 && J++, N.push(c.U.codeToGlyph(x, m));
    }
    const R = x.GSUB;
    if (R) {
      const { lookupList: J, featureList: m } = R;
      let D;
      const k = /^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/, V = [];
      m.forEach((I) => {
        if (k.test(I.tag))
          for (let Z = 0; Z < I.tab.length; Z++) {
            if (V[I.tab[Z]])
              continue;
            V[I.tab[Z]] = !0;
            const $ = J[I.tab[Z]], B = /^(isol|init|fina|medi)$/.test(I.tag);
            B && !D && (D = O(C));
            for (let M = 0; M < N.length; M++)
              (!D || !B || y[D[M]] === I.tag) && c.U._applySubs(N, M, $, J);
          }
      });
    }
    return N;
  }
  function F(x, C) {
    const N = new Int16Array(C.length * 3);
    let R = 0;
    for (; R < C.length; R++) {
      const k = C[R];
      if (k === -1)
        continue;
      N[R * 3 + 2] = x.hmtx.aWidth[k];
      const V = x.GPOS;
      if (V) {
        const I = V.lookupList;
        for (let Z = 0; Z < I.length; Z++) {
          const $ = I[Z];
          for (let B = 0; B < $.tabs.length; B++) {
            const M = $.tabs[B];
            if ($.ltype === 1) {
              if (c._lctf.coverageIndex(M.coverage, k) !== -1 && M.pos) {
                D(M.pos, R);
                break;
              }
            } else if ($.ltype === 2) {
              let v = null, b = J();
              if (b !== -1) {
                const w = c._lctf.coverageIndex(M.coverage, C[b]);
                if (w !== -1) {
                  if (M.fmt === 1) {
                    const A = M.pairsets[w];
                    for (let _ = 0; _ < A.length; _++)
                      A[_].gid2 === k && (v = A[_]);
                  } else if (M.fmt === 2) {
                    const A = c.U._getGlyphClass(C[b], M.classDef1), _ = c.U._getGlyphClass(k, M.classDef2);
                    v = M.matrix[A][_];
                  }
                  if (v) {
                    v.val1 && D(v.val1, b), v.val2 && D(v.val2, R);
                    break;
                  }
                }
              }
            } else if ($.ltype === 4) {
              const v = c._lctf.coverageIndex(M.markCoverage, k);
              if (v !== -1) {
                const b = J(m), w = b === -1 ? -1 : c._lctf.coverageIndex(M.baseCoverage, C[b]);
                if (w !== -1) {
                  const A = M.markArray[v], _ = M.baseArray[w][A.markClass];
                  N[R * 3] = _.x - A.x + N[b * 3] - N[b * 3 + 2], N[R * 3 + 1] = _.y - A.y + N[b * 3 + 1];
                  break;
                }
              }
            } else if ($.ltype === 6) {
              const v = c._lctf.coverageIndex(M.mark1Coverage, k);
              if (v !== -1) {
                const b = J();
                if (b !== -1) {
                  const w = C[b];
                  if (U(x, w) === 3) {
                    const A = c._lctf.coverageIndex(M.mark2Coverage, w);
                    if (A !== -1) {
                      const _ = M.mark1Array[v], W = M.mark2Array[A][_.markClass];
                      N[R * 3] = W.x - _.x + N[b * 3] - N[b * 3 + 2], N[R * 3 + 1] = W.y - _.y + N[b * 3 + 1];
                      break;
                    }
                  }
                }
              }
            }
          }
        }
      } else if (x.kern && !x.cff) {
        const I = J();
        if (I !== -1) {
          const Z = x.kern.glyph1.indexOf(C[I]);
          if (Z !== -1) {
            const $ = x.kern.rval[Z].glyph2.indexOf(k);
            $ !== -1 && (N[I * 3 + 2] += x.kern.rval[Z].vals[$]);
          }
        }
      }
    }
    return N;
    function J(k) {
      for (let V = R - 1; V >= 0; V--)
        if (C[V] !== -1 && (!k || k(C[V])))
          return V;
      return -1;
    }
    function m(k) {
      return U(x, k) === 1;
    }
    function D(k, V) {
      for (let I = 0; I < 3; I++)
        N[V * 3 + I] += k[I] || 0;
    }
  }
  function U(x, C) {
    const N = x.GDEF && x.GDEF.glyphClassDef;
    return N ? c.U._getGlyphClass(C, N) : 0;
  }
  function T(...x) {
    for (let C = 0; C < x.length; C++)
      if (typeof x[C] == "number")
        return x[C];
  }
  function G(x) {
    const C = /* @__PURE__ */ Object.create(null), N = x["OS/2"], R = x.hhea, J = x.head.unitsPerEm, m = T(N && N.sTypoAscender, R && R.ascender, J), D = {
      unitsPerEm: J,
      ascender: m,
      descender: T(N && N.sTypoDescender, R && R.descender, 0),
      capHeight: T(N && N.sCapHeight, m),
      xHeight: T(N && N.sxHeight, m),
      lineGap: T(N && N.sTypoLineGap, R && R.lineGap),
      supportsCodePoint(k) {
        return c.U.codeToGlyph(x, k) > 0;
      },
      forEachGlyph(k, V, I, Z) {
        let $ = 0;
        const B = 1 / D.unitsPerEm * V, M = S(x, k);
        let v = 0;
        const b = F(x, M);
        return M.forEach((w, A) => {
          if (w !== -1) {
            let _ = C[w];
            if (!_) {
              const { cmds: W, crds: E } = c.U.glyphToPath(x, w);
              let P = "", H = 0;
              for (let ue = 0, Q = W.length; ue < Q; ue++) {
                const te = d[W[ue]];
                P += W[ue];
                for (let se = 1; se <= te; se++)
                  P += (se > 1 ? "," : "") + E[H++];
              }
              let ee, X, z, pe;
              if (E.length) {
                ee = X = 1 / 0, z = pe = -1 / 0;
                for (let ue = 0, Q = E.length; ue < Q; ue += 2) {
                  let te = E[ue], se = E[ue + 1];
                  te < ee && (ee = te), se < X && (X = se), te > z && (z = te), se > pe && (pe = se);
                }
              } else
                ee = z = X = pe = 0;
              _ = C[w] = {
                index: w,
                advanceWidth: x.hmtx.aWidth[w],
                xMin: ee,
                yMin: X,
                xMax: z,
                yMax: pe,
                path: P
              };
            }
            Z.call(
              null,
              _,
              $ + b[A * 3] * B,
              b[A * 3 + 1] * B,
              v
            ), $ += b[A * 3 + 2] * B, I && ($ += I * V);
          }
          v += k.codePointAt(v) > 65535 ? 2 : 1;
        }), $;
      }
    };
    return D;
  }
  return function(C) {
    const N = new Uint8Array(C, 0, 4), R = c._bin.readASCII(N, 0, 4);
    if (R === "wOFF")
      C = r(C);
    else if (R === "wOF2")
      throw new Error("woff2 fonts not supported");
    return G(c.parse(C)[0]);
  };
}
const oa = /* @__PURE__ */ it({
  name: "Typr Font Parser",
  dependencies: [ra, na, aa],
  init(c, r, d) {
    const u = c(), t = r();
    return d(u, t);
  }
});
/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/
function ia() {
  return function(c) {
    var r = function() {
      this.buckets = /* @__PURE__ */ new Map();
    };
    r.prototype.add = function(F) {
      var U = F >> 5;
      this.buckets.set(U, (this.buckets.get(U) || 0) | 1 << (31 & F));
    }, r.prototype.has = function(F) {
      var U = this.buckets.get(F >> 5);
      return U !== void 0 && (U & 1 << (31 & F)) != 0;
    }, r.prototype.serialize = function() {
      var F = [];
      return this.buckets.forEach(function(U, T) {
        F.push((+T).toString(36) + ":" + U.toString(36));
      }), F.join(",");
    }, r.prototype.deserialize = function(F) {
      var U = this;
      this.buckets.clear(), F.split(",").forEach(function(T) {
        var G = T.split(":");
        U.buckets.set(parseInt(G[0], 36), parseInt(G[1], 36));
      });
    };
    var d = Math.pow(2, 8), u = d - 1, t = ~u;
    function e(F) {
      var U = function(G) {
        return G & t;
      }(F).toString(16), T = function(G) {
        return (G & t) + d - 1;
      }(F).toString(16);
      return "codepoint-index/plane" + (F >> 16) + "/" + U + "-" + T + ".json";
    }
    function a(F, U) {
      var T = F & u, G = U.codePointAt(T / 6 | 0);
      return ((G = (G || 48) - 48) & 1 << T % 6) != 0;
    }
    function o(F, U) {
      var T;
      (T = F, T.replace(/U\+/gi, "").replace(/^,+|,+$/g, "").split(/,+/).map(function(G) {
        return G.split("-").map(function(x) {
          return parseInt(x.trim(), 16);
        });
      })).forEach(function(G) {
        var x = G[0], C = G[1];
        C === void 0 && (C = x), U(x, C);
      });
    }
    function n(F, U) {
      o(F, function(T, G) {
        for (var x = T; x <= G; x++)
          U(x);
      });
    }
    var i = {}, s = {}, f = /* @__PURE__ */ new WeakMap(), l = "https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";
    function h(F) {
      var U = f.get(F);
      return U || (U = new r(), n(F.ranges, function(T) {
        return U.add(T);
      }), f.set(F, U)), U;
    }
    var p, g = /* @__PURE__ */ new Map();
    function y(F, U, T) {
      return F[U] ? U : F[T] ? T : function(G) {
        for (var x in G)
          return x;
      }(F);
    }
    function O(F, U) {
      var T = U;
      if (!F.includes(T)) {
        T = 1 / 0;
        for (var G = 0; G < F.length; G++)
          Math.abs(F[G] - U) < Math.abs(T - U) && (T = F[G]);
      }
      return T;
    }
    function S(F) {
      return p || (p = /* @__PURE__ */ new Set(), n("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000", function(U) {
        p.add(U);
      })), p.has(F);
    }
    return c.CodePointSet = r, c.clearCache = function() {
      i = {}, s = {};
    }, c.getFontsForString = function(F, U) {
      U === void 0 && (U = {});
      var T, G = U.lang;
      G === void 0 && (G = /\p{Script=Hangul}/u.test(T = F) ? "ko" : /\p{Script=Hiragana}|\p{Script=Katakana}/u.test(T) ? "ja" : "en");
      var x = U.category;
      x === void 0 && (x = "sans-serif");
      var C = U.style;
      C === void 0 && (C = "normal");
      var N = U.weight;
      N === void 0 && (N = 400);
      var R = (U.dataUrl || l).replace(/\/$/g, ""), J = /* @__PURE__ */ new Map(), m = new Uint8Array(F.length), D = {}, k = {}, V = new Array(F.length), I = /* @__PURE__ */ new Map(), Z = !1;
      function $(v) {
        var b = g.get(v);
        return b || (b = fetch(R + "/" + v).then(function(w) {
          if (!w.ok)
            throw new Error(w.statusText);
          return w.json().then(function(A) {
            if (!Array.isArray(A) || A[0] !== 1)
              throw new Error("Incorrect schema version; need 1, got " + A[0]);
            return A[1];
          });
        }).catch(function(w) {
          if (R !== l)
            return Z || (console.error('unicode-font-resolver: Failed loading from dataUrl "' + R + '", trying default CDN. ' + w.message), Z = !0), R = l, g.delete(v), $(v);
          throw w;
        }), g.set(v, b)), b;
      }
      for (var B = function(v) {
        var b = F.codePointAt(v), w = e(b);
        V[v] = w, i[w] || I.has(w) || I.set(w, $(w).then(function(A) {
          i[w] = A;
        })), b > 65535 && (v++, M = v);
      }, M = 0; M < F.length; M++)
        B(M);
      return Promise.all(I.values()).then(function() {
        I.clear();
        for (var v = function(w) {
          var A = F.codePointAt(w), _ = null, W = i[V[w]], E = void 0;
          for (var P in W) {
            var H = k[P];
            if (H === void 0 && (H = k[P] = new RegExp(P).test(G || "en")), H) {
              for (var ee in E = P, W[P])
                if (a(A, W[P][ee])) {
                  _ = ee;
                  break;
                }
              break;
            }
          }
          if (!_) {
            e:
              for (var X in W)
                if (X !== E) {
                  for (var z in W[X])
                    if (a(A, W[X][z])) {
                      _ = z;
                      break e;
                    }
                }
          }
          _ || (console.debug("No font coverage for U+" + A.toString(16)), _ = "latin"), V[w] = _, s[_] || I.has(_) || I.set(_, $("font-meta/" + _ + ".json").then(function(pe) {
            s[_] = pe;
          })), A > 65535 && (w++, b = w);
        }, b = 0; b < F.length; b++)
          v(b);
        return Promise.all(I.values());
      }).then(function() {
        for (var v, b = null, w = 0; w < F.length; w++) {
          var A = F.codePointAt(w);
          if (b && (S(A) || h(b).has(A)))
            m[w] = m[w - 1];
          else {
            b = s[V[w]];
            var _ = D[b.id];
            if (!_) {
              var W = b.typeforms, E = y(W, x, "sans-serif"), P = y(W[E], C, "normal"), H = O((v = W[E]) === null || v === void 0 ? void 0 : v[P], N);
              _ = D[b.id] = R + "/font-files/" + b.id + "/" + E + "." + P + "." + H + ".woff";
            }
            var ee = J.get(_);
            ee == null && (ee = J.size, J.set(_, ee)), m[w] = ee;
          }
          A > 65535 && (w++, m[w] = m[w - 1]);
        }
        return { fontUrls: Array.from(J.keys()), chars: m };
      });
    }, Object.defineProperty(c, "__esModule", { value: !0 }), c;
  }({});
}
function sa(c, r) {
  const d = /* @__PURE__ */ Object.create(null), u = /* @__PURE__ */ Object.create(null);
  function t(a, o) {
    const n = (i) => {
      console.error(`Failure loading font ${a}`, i);
    };
    try {
      const i = new XMLHttpRequest();
      i.open("get", a, !0), i.responseType = "arraybuffer", i.onload = function() {
        if (i.status >= 400)
          n(new Error(i.statusText));
        else if (i.status > 0)
          try {
            const s = c(i.response);
            s.src = a, o(s);
          } catch (s) {
            n(s);
          }
      }, i.onerror = n, i.send();
    } catch (i) {
      n(i);
    }
  }
  function e(a, o) {
    let n = d[a];
    n ? o(n) : u[a] ? u[a].push(o) : (u[a] = [o], t(a, (i) => {
      i.src = a, d[a] = i, u[a].forEach((s) => s(i)), delete u[a];
    }));
  }
  return function(a, o, {
    lang: n,
    fonts: i = [],
    style: s = "normal",
    weight: f = "normal",
    unicodeFontsURL: l
  } = {}) {
    const h = new Uint8Array(a.length), p = [];
    a.length || S();
    const g = /* @__PURE__ */ new Map(), y = [];
    if (s !== "italic" && (s = "normal"), typeof f != "number" && (f = f === "bold" ? 700 : 400), i && !Array.isArray(i) && (i = [i]), i = i.slice().filter((U) => !U.lang || U.lang.test(n)).reverse(), i.length) {
      let x = 0;
      (function C(N = 0) {
        for (let R = N, J = a.length; R < J; R++) {
          const m = a.codePointAt(R);
          if (x === 1 && p[h[R - 1]].supportsCodePoint(m) || /\s/.test(a[R]))
            h[R] = h[R - 1], x === 2 && (y[y.length - 1][1] = R);
          else
            for (let D = h[R], k = i.length; D <= k; D++)
              if (D === k) {
                const V = x === 2 ? y[y.length - 1] : y[y.length] = [R, R];
                V[1] = R, x = 2;
              } else {
                h[R] = D;
                const { src: V, unicodeRange: I } = i[D];
                if (!I || F(m, I)) {
                  const Z = d[V];
                  if (!Z) {
                    e(V, () => {
                      C(R);
                    });
                    return;
                  }
                  if (Z.supportsCodePoint(m)) {
                    let $ = g.get(Z);
                    typeof $ != "number" && ($ = p.length, p.push(Z), g.set(Z, $)), h[R] = $, x = 1;
                    break;
                  }
                }
              }
          m > 65535 && R + 1 < J && (h[R + 1] = h[R], R++, x === 2 && (y[y.length - 1][1] = R));
        }
        O();
      })();
    } else
      y.push([0, a.length - 1]), O();
    function O() {
      if (y.length) {
        const U = y.map((T) => a.substring(T[0], T[1] + 1)).join(`
`);
        r.getFontsForString(U, {
          lang: n || void 0,
          style: s,
          weight: f,
          dataUrl: l
        }).then(({ fontUrls: T, chars: G }) => {
          const x = p.length;
          let C = 0;
          y.forEach((R) => {
            for (let J = 0, m = R[1] - R[0]; J <= m; J++)
              h[R[0] + J] = G[C++] + x;
            C++;
          });
          let N = 0;
          T.forEach((R, J) => {
            e(R, (m) => {
              p[J + x] = m, ++N === T.length && S();
            });
          });
        });
      } else
        S();
    }
    function S() {
      o({
        chars: h,
        fonts: p
      });
    }
    function F(U, T) {
      for (let G = 0; G < T.length; G++) {
        const [x, C = x] = T[G];
        if (x <= U && U <= C)
          return !0;
      }
      return !1;
    }
  };
}
const fa = /* @__PURE__ */ it({
  name: "FontResolver",
  dependencies: [
    sa,
    oa,
    ia
  ],
  init(c, r, d) {
    return c(r, d());
  }
});
function la(c, r) {
  const u = /[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/, t = "[^\\S\\u00A0]", e = new RegExp(`${t}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);
  function a({ text: p, lang: g, fonts: y, style: O, weight: S, preResolvedFonts: F, unicodeFontsURL: U }, T) {
    const G = ({ chars: x, fonts: C }) => {
      let N, R;
      const J = [];
      for (let m = 0; m < x.length; m++)
        x[m] !== R ? (R = x[m], J.push(N = { start: m, end: m, fontObj: C[x[m]] })) : N.end = m;
      T(J);
    };
    F ? G(F) : c(
      p,
      G,
      { lang: g, fonts: y, style: O, weight: S, unicodeFontsURL: U }
    );
  }
  function o({
    text: p = "",
    font: g,
    lang: y,
    sdfGlyphSize: O = 64,
    fontSize: S = 400,
    fontWeight: F = 1,
    fontStyle: U = "normal",
    letterSpacing: T = 0,
    lineHeight: G = "normal",
    maxWidth: x = 1 / 0,
    direction: C,
    textAlign: N = "left",
    textIndent: R = 0,
    whiteSpace: J = "normal",
    overflowWrap: m = "normal",
    anchorX: D = 0,
    anchorY: k = 0,
    metricsOnly: V = !1,
    unicodeFontsURL: I,
    preResolvedFonts: Z = null,
    includeCaretPositions: $ = !1,
    chunkedBoundsSize: B = 8192,
    colorRanges: M = null
  }, v) {
    const b = f(), w = { fontLoad: 0, typesetting: 0 };
    p.indexOf("\r") > -1 && (console.info("Typesetter: got text with \\r chars; normalizing to \\n"), p = p.replace(/\r\n/g, `
`).replace(/\r/g, `
`)), S = +S, T = +T, x = +x, G = G || "normal", R = +R, a({
      text: p,
      lang: y,
      style: U,
      weight: F,
      fonts: typeof g == "string" ? [{ src: g }] : g,
      unicodeFontsURL: I,
      preResolvedFonts: Z
    }, (A) => {
      w.fontLoad = f() - b;
      const _ = isFinite(x);
      let W = null, E = null, P = null, H = null, ee = null, X = null, z = null, pe = null, ue = 0, Q = 0, te = J !== "nowrap";
      const se = /* @__PURE__ */ new Map(), j = f();
      let re = R, q = 0, L = new l();
      const he = [L];
      A.forEach((ne) => {
        const { fontObj: oe } = ne, { ascender: le, descender: de, unitsPerEm: xe, lineGap: Ce, capHeight: ge, xHeight: me } = oe;
        let fe = se.get(oe);
        if (!fe) {
          const ce = S / xe, Ue = G === "normal" ? (le - de + Ce) * ce : G * S, Xe = (Ue - (le - de) * ce) / 2, _e = Math.min(Ue, (le - de) * ce), ye = (le + de) / 2 * ce + _e / 2;
          fe = {
            index: se.size,
            src: oe.src,
            fontObj: oe,
            fontSizeMult: ce,
            unitsPerEm: xe,
            ascender: le * ce,
            descender: de * ce,
            capHeight: ge * ce,
            xHeight: me * ce,
            lineHeight: Ue,
            baseline: -Xe - le * ce,
            // baseline offset from top of line height
            // cap: -halfLeading - capHeight * fontSizeMult, // cap from top of line height
            // ex: -halfLeading - xHeight * fontSizeMult, // ex from top of line height
            caretTop: (le + de) / 2 * ce + _e / 2,
            caretBottom: ye - _e
          }, se.set(oe, fe);
        }
        const { fontSizeMult: ke } = fe, we = p.slice(ne.start, ne.end + 1);
        let Oe, Se;
        oe.forEachGlyph(we, S, T, (ce, Ue, Xe, _e) => {
          Ue += q, _e += ne.start, Oe = Ue, Se = ce;
          const ye = p.charAt(_e), Ae = ce.advanceWidth * ke, Te = L.count;
          let ve;
          if ("isEmpty" in ce || (ce.isWhitespace = !!ye && new RegExp(t).test(ye), ce.canBreakAfter = !!ye && e.test(ye), ce.isEmpty = ce.xMin === ce.xMax || ce.yMin === ce.yMax || u.test(ye)), !ce.isWhitespace && !ce.isEmpty && Q++, te && _ && !ce.isWhitespace && Ue + Ae + re > x && Te) {
            if (L.glyphAt(Te - 1).glyphObj.canBreakAfter)
              ve = new l(), re = -Ue;
            else
              for (let Re = Te; Re--; )
                if (Re === 0 && m === "break-word") {
                  ve = new l(), re = -Ue;
                  break;
                } else if (L.glyphAt(Re).glyphObj.canBreakAfter) {
                  ve = L.splitAt(Re + 1);
                  const Me = ve.glyphAt(0).x;
                  re -= Me;
                  for (let De = ve.count; De--; )
                    ve.glyphAt(De).x -= Me;
                  break;
                }
            ve && (L.isSoftWrapped = !0, L = ve, he.push(L), ue = x);
          }
          let Fe = L.glyphAt(L.count);
          Fe.glyphObj = ce, Fe.x = Ue + re, Fe.y = Xe, Fe.width = Ae, Fe.charIndex = _e, Fe.fontData = fe, ye === `
` && (L = new l(), he.push(L), re = -(Ue + Ae + T * S) + R);
        }), q = Oe + Se.advanceWidth * ke + T * S;
      });
      let K = 0;
      he.forEach((ne) => {
        let oe = !0;
        for (let le = ne.count; le--; ) {
          const de = ne.glyphAt(le);
          oe && !de.glyphObj.isWhitespace && (ne.width = de.x + de.width, ne.width > ue && (ue = ne.width), oe = !1);
          let { lineHeight: xe, capHeight: Ce, xHeight: ge, baseline: me } = de.fontData;
          xe > ne.lineHeight && (ne.lineHeight = xe);
          const fe = me - ne.baseline;
          fe < 0 && (ne.baseline += fe, ne.cap += fe, ne.ex += fe), ne.cap = Math.max(ne.cap, ne.baseline + Ce), ne.ex = Math.max(ne.ex, ne.baseline + ge);
        }
        ne.baseline -= K, ne.cap -= K, ne.ex -= K, K += ne.lineHeight;
      });
      let ae = 0, Y = 0;
      if (D && (typeof D == "number" ? ae = -D : typeof D == "string" && (ae = -ue * (D === "left" ? 0 : D === "center" ? 0.5 : D === "right" ? 1 : i(D)))), k && (typeof k == "number" ? Y = -k : typeof k == "string" && (Y = k === "top" ? 0 : k === "top-baseline" ? -he[0].baseline : k === "top-cap" ? -he[0].cap : k === "top-ex" ? -he[0].ex : k === "middle" ? K / 2 : k === "bottom" ? K : k === "bottom-baseline" ? he[he.length - 1].baseline : i(k) * K)), !V) {
        const ne = r.getEmbeddingLevels(p, C);
        W = new Uint16Array(Q), E = new Uint8Array(Q), P = new Float32Array(Q * 2), H = {}, z = [1 / 0, 1 / 0, -1 / 0, -1 / 0], pe = [], $ && (X = new Float32Array(p.length * 4)), M && (ee = new Uint8Array(Q * 3));
        let oe = 0, le = -1, de = -1, xe, Ce;
        if (he.forEach((ge, me) => {
          let { count: fe, width: ke } = ge;
          if (fe > 0) {
            let we = 0;
            for (let _e = fe; _e-- && ge.glyphAt(_e).glyphObj.isWhitespace; )
              we++;
            let Oe = 0, Se = 0;
            if (N === "center")
              Oe = (ue - ke) / 2;
            else if (N === "right")
              Oe = ue - ke;
            else if (N === "justify" && ge.isSoftWrapped) {
              let _e = 0;
              for (let ye = fe - we; ye--; )
                ge.glyphAt(ye).glyphObj.isWhitespace && _e++;
              Se = (ue - ke) / _e;
            }
            if (Se || Oe) {
              let _e = 0;
              for (let ye = 0; ye < fe; ye++) {
                let Ae = ge.glyphAt(ye);
                const Te = Ae.glyphObj;
                Ae.x += Oe + _e, Se !== 0 && Te.isWhitespace && ye < fe - we && (_e += Se, Ae.width += Se);
              }
            }
            const ce = r.getReorderSegments(
              p,
              ne,
              ge.glyphAt(0).charIndex,
              ge.glyphAt(ge.count - 1).charIndex
            );
            for (let _e = 0; _e < ce.length; _e++) {
              const [ye, Ae] = ce[_e];
              let Te = 1 / 0, ve = -1 / 0;
              for (let Fe = 0; Fe < fe; Fe++)
                if (ge.glyphAt(Fe).charIndex >= ye) {
                  let Re = Fe, Me = Fe;
                  for (; Me < fe; Me++) {
                    let De = ge.glyphAt(Me);
                    if (De.charIndex > Ae)
                      break;
                    Me < fe - we && (Te = Math.min(Te, De.x), ve = Math.max(ve, De.x + De.width));
                  }
                  for (let De = Re; De < Me; De++) {
                    const Ie = ge.glyphAt(De);
                    Ie.x = ve - (Ie.x + Ie.width - Te);
                  }
                  break;
                }
            }
            let Ue;
            const Xe = (_e) => Ue = _e;
            for (let _e = 0; _e < fe; _e++) {
              const ye = ge.glyphAt(_e);
              Ue = ye.glyphObj;
              const Ae = Ue.index, Te = ne.levels[ye.charIndex] & 1;
              if (Te) {
                const ve = r.getMirroredCharacter(p[ye.charIndex]);
                ve && ye.fontData.fontObj.forEachGlyph(ve, 0, 0, Xe);
              }
              if ($) {
                const { charIndex: ve, fontData: Fe } = ye, Re = ye.x + ae, Me = ye.x + ye.width + ae;
                X[ve * 4] = Te ? Me : Re, X[ve * 4 + 1] = Te ? Re : Me, X[ve * 4 + 2] = ge.baseline + Fe.caretBottom + Y, X[ve * 4 + 3] = ge.baseline + Fe.caretTop + Y;
                const De = ve - le;
                De > 1 && s(X, le, De), le = ve;
              }
              if (M) {
                const { charIndex: ve } = ye;
                for (; ve > de; )
                  de++, M.hasOwnProperty(de) && (Ce = M[de]);
              }
              if (!Ue.isWhitespace && !Ue.isEmpty) {
                const ve = oe++, { fontSizeMult: Fe, src: Re, index: Me } = ye.fontData, De = H[Re] || (H[Re] = {});
                De[Ae] || (De[Ae] = {
                  path: Ue.path,
                  pathBounds: [Ue.xMin, Ue.yMin, Ue.xMax, Ue.yMax]
                });
                const Ie = ye.x + ae, He = ye.y + ge.baseline + Y;
                P[ve * 2] = Ie, P[ve * 2 + 1] = He;
                const je = Ie + Ue.xMin * Fe, Ye = He + Ue.yMin * Fe, Qe = Ie + Ue.xMax * Fe, Ve = He + Ue.yMax * Fe;
                je < z[0] && (z[0] = je), Ye < z[1] && (z[1] = Ye), Qe > z[2] && (z[2] = Qe), Ve > z[3] && (z[3] = Ve), ve % B === 0 && (xe = { start: ve, end: ve, rect: [1 / 0, 1 / 0, -1 / 0, -1 / 0] }, pe.push(xe)), xe.end++;
                const Ge = xe.rect;
                if (je < Ge[0] && (Ge[0] = je), Ye < Ge[1] && (Ge[1] = Ye), Qe > Ge[2] && (Ge[2] = Qe), Ve > Ge[3] && (Ge[3] = Ve), W[ve] = Ae, E[ve] = Me, M) {
                  const Ze = ve * 3;
                  ee[Ze] = Ce >> 16 & 255, ee[Ze + 1] = Ce >> 8 & 255, ee[Ze + 2] = Ce & 255;
                }
              }
            }
          }
        }), X) {
          const ge = p.length - le;
          ge > 1 && s(X, le, ge);
        }
      }
      const be = [];
      se.forEach(({ index: ne, src: oe, unitsPerEm: le, ascender: de, descender: xe, lineHeight: Ce, capHeight: ge, xHeight: me }) => {
        be[ne] = { src: oe, unitsPerEm: le, ascender: de, descender: xe, lineHeight: Ce, capHeight: ge, xHeight: me };
      }), w.typesetting = f() - j, v({
        glyphIds: W,
        //id for each glyph, specific to that glyph's font
        glyphFontIndices: E,
        //index into fontData for each glyph
        glyphPositions: P,
        //x,y of each glyph's origin in layout
        glyphData: H,
        //dict holding data about each glyph appearing in the text
        fontData: be,
        //data about each font used in the text
        caretPositions: X,
        //startX,endX,bottomY caret positions for each char
        // caretHeight, //height of cursor from bottom to top - todo per glyph?
        glyphColors: ee,
        //color for each glyph, if color ranges supplied
        chunkedBounds: pe,
        //total rects per (n=chunkedBoundsSize) consecutive glyphs
        fontSize: S,
        //calculated em height
        topBaseline: Y + he[0].baseline,
        //y coordinate of the top line's baseline
        blockBounds: [
          //bounds for the whole block of text, including vertical padding for lineHeight
          ae,
          Y - K,
          ae + ue,
          Y
        ],
        visibleBounds: z,
        //total bounds of visible text paths, may be larger or smaller than blockBounds
        timings: w
      });
    });
  }
  function n(p, g) {
    o({ ...p, metricsOnly: !0 }, (y) => {
      const [O, S, F, U] = y.blockBounds;
      g({
        width: F - O,
        height: U - S
      });
    });
  }
  function i(p) {
    let g = p.match(/^([\d.]+)%$/), y = g ? parseFloat(g[1]) : NaN;
    return isNaN(y) ? 0 : y / 100;
  }
  function s(p, g, y) {
    const O = p[g * 4], S = p[g * 4 + 1], F = p[g * 4 + 2], U = p[g * 4 + 3], T = (S - O) / y;
    for (let G = 0; G < y; G++) {
      const x = (g + G) * 4;
      p[x] = O + T * G, p[x + 1] = O + T * (G + 1), p[x + 2] = F, p[x + 3] = U;
    }
  }
  function f() {
    return (self.performance || Date).now();
  }
  function l() {
    this.data = [];
  }
  const h = ["glyphObj", "x", "y", "width", "charIndex", "fontData"];
  return l.prototype = {
    width: 0,
    lineHeight: 0,
    baseline: 0,
    cap: 0,
    ex: 0,
    isSoftWrapped: !1,
    get count() {
      return Math.ceil(this.data.length / h.length);
    },
    glyphAt(p) {
      let g = l.flyweight;
      return g.data = this.data, g.index = p, g;
    },
    splitAt(p) {
      let g = new l();
      return g.data = this.data.splice(p * h.length), g;
    }
  }, l.flyweight = h.reduce((p, g, y, O) => (Object.defineProperty(p, g, {
    get() {
      return this.data[this.index * h.length + y];
    },
    set(S) {
      this.data[this.index * h.length + y] = S;
    }
  }), p), { data: null, index: 0 }), {
    typeset: o,
    measure: n
  };
}
const et = () => (self.performance || Date).now(), It = /* @__PURE__ */ fn();
let Jr;
function ua(c, r, d, u, t, e, a, o, n, i, s = !0) {
  return s ? ha(c, r, d, u, t, e, a, o, n, i).then(
    null,
    (f) => (Jr || (console.warn("WebGL SDF generation failed, falling back to JS", f), Jr = !0), Qr(c, r, d, u, t, e, a, o, n, i))
  ) : Qr(c, r, d, u, t, e, a, o, n, i);
}
const Lt = [], ca = 5;
let dr = 0;
function un() {
  const c = et();
  for (; Lt.length && et() - c < ca; )
    Lt.shift()();
  dr = Lt.length ? setTimeout(un, 0) : 0;
}
const ha = (...c) => new Promise((r, d) => {
  Lt.push(() => {
    const u = et();
    try {
      It.webgl.generateIntoCanvas(...c), r({ timing: et() - u });
    } catch (t) {
      d(t);
    }
  }), dr || (dr = setTimeout(un, 0));
}), da = 4, va = 2e3, Kr = {};
let pa = 0;
function Qr(c, r, d, u, t, e, a, o, n, i) {
  const s = "TroikaTextSDFGenerator_JS_" + pa++ % da;
  let f = Kr[s];
  return f || (f = Kr[s] = {
    workerModule: it({
      name: s,
      workerId: s,
      dependencies: [
        fn,
        et
      ],
      init(l, h) {
        const p = l().javascript.generate;
        return function(...g) {
          const y = h();
          return {
            textureData: p(...g),
            timing: h() - y
          };
        };
      },
      getTransferables(l) {
        return [l.textureData.buffer];
      }
    }),
    requests: 0,
    idleTimer: null
  }), f.requests++, clearTimeout(f.idleTimer), f.workerModule(c, r, d, u, t, e).then(({ textureData: l, timing: h }) => {
    const p = et(), g = new Uint8Array(l.length * 4);
    for (let y = 0; y < l.length; y++)
      g[y * 4 + i] = l[y];
    return It.webglUtils.renderImageData(a, g, o, n, c, r, 1 << 3 - i), h += et() - p, --f.requests === 0 && (f.idleTimer = setTimeout(() => {
      Hn(s);
    }, va)), { timing: h };
  });
}
function ga(c) {
  c._warm || (It.webgl.isSupported(c), c._warm = !0);
}
const ma = It.webglUtils.resizeWebGLCanvasWithoutClearing, $e = {
  defaultFontURL: null,
  unicodeFontsURL: null,
  sdfGlyphSize: 64,
  sdfMargin: 1 / 16,
  sdfExponent: 9,
  textureWidth: 2048
}, ya = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.i();
let cn = !1;
function ot() {
  return (self.performance || Date).now();
}
function Na(c) {
  cn ? console.warn("configureTextBuilder called after first font request; will be ignored.") : vn($e, c);
}
const Pt = /* @__PURE__ */ Object.create(null);
function hn(c, r) {
  cn = !0, c = vn({}, c);
  const d = ot(), { defaultFontURL: u } = $e, t = [];
  if (u && t.push({ label: "default", src: Zr(u) }), c.font && t.push({ label: "user", src: Zr(c.font) }), c.font = t, c.text = "" + c.text, c.sdfGlyphSize = c.sdfGlyphSize || $e.sdfGlyphSize, c.unicodeFontsURL = c.unicodeFontsURL || $e.unicodeFontsURL, c.colorRanges != null) {
    let l = {};
    for (let h in c.colorRanges)
      if (c.colorRanges.hasOwnProperty(h)) {
        let p = c.colorRanges[h];
        typeof p != "number" && (p = ya.set(p).getHex()), l[h] = p;
      }
    c.colorRanges = l;
  }
  Object.freeze(c);
  const { textureWidth: e, sdfExponent: a } = $e, { sdfGlyphSize: o } = c, n = e / o * 4;
  let i = Pt[o];
  if (!i) {
    const l = document.createElement("canvas");
    l.width = e, l.height = o * 256 / n, i = Pt[o] = {
      glyphCount: 0,
      sdfGlyphSize: o,
      sdfCanvas: l,
      sdfTexture: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.T(
        l,
        void 0,
        void 0,
        void 0,
        _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.$,
        _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.$
      ),
      contextLost: !1,
      glyphsByFont: /* @__PURE__ */ new Map()
    }, i.sdfTexture.generateMipmaps = !1, ba(i);
  }
  const { sdfTexture: s, sdfCanvas: f } = i;
  _a(c).then((l) => {
    const { glyphIds: h, glyphFontIndices: p, fontData: g, glyphPositions: y, fontSize: O, timings: S } = l, F = [], U = new Float32Array(h.length * 4);
    let T = 0, G = 0;
    const x = ot(), C = g.map((D) => {
      let k = i.glyphsByFont.get(D.src);
      return k || i.glyphsByFont.set(D.src, k = /* @__PURE__ */ new Map()), k;
    });
    h.forEach((D, k) => {
      const V = p[k], { src: I, unitsPerEm: Z } = g[V];
      let $ = C[V].get(D);
      if (!$) {
        const { path: w, pathBounds: A } = l.glyphData[I][D], _ = Math.max(A[2] - A[0], A[3] - A[1]) / o * ($e.sdfMargin * o + 0.5), W = i.glyphCount++, E = [
          A[0] - _,
          A[1] - _,
          A[2] + _,
          A[3] + _
        ];
        C[V].set(D, $ = { path: w, atlasIndex: W, sdfViewBox: E }), F.push($);
      }
      const { sdfViewBox: B } = $, M = y[G++], v = y[G++], b = O / Z;
      U[T++] = M + B[0] * b, U[T++] = v + B[1] * b, U[T++] = M + B[2] * b, U[T++] = v + B[3] * b, h[k] = $.atlasIndex;
    }), S.quads = (S.quads || 0) + (ot() - x);
    const N = ot();
    S.sdf = {};
    const R = f.height, J = Math.ceil(i.glyphCount / n), m = Math.pow(2, Math.ceil(Math.log2(J * o)));
    m > R && (console.info(`Increasing SDF texture size ${R}->${m}`), ma(f, e, m), s.dispose()), Promise.all(F.map(
      (D) => dn(D, i, c.gpuAccelerateSDF).then(({ timing: k }) => {
        S.sdf[D.atlasIndex] = k;
      })
    )).then(() => {
      F.length && !i.contextLost && (pn(i), s.needsUpdate = !0), S.sdfTotal = ot() - N, S.total = ot() - d, r(Object.freeze({
        parameters: c,
        sdfTexture: s,
        sdfGlyphSize: o,
        sdfExponent: a,
        glyphBounds: U,
        glyphAtlasIndices: h,
        glyphColors: l.glyphColors,
        caretPositions: l.caretPositions,
        chunkedBounds: l.chunkedBounds,
        ascender: l.ascender,
        descender: l.descender,
        lineHeight: l.lineHeight,
        capHeight: l.capHeight,
        xHeight: l.xHeight,
        topBaseline: l.topBaseline,
        blockBounds: l.blockBounds,
        visibleBounds: l.visibleBounds,
        timings: l.timings
      }));
    });
  }), Promise.resolve().then(() => {
    i.contextLost || ga(f);
  });
}
function dn({ path: c, atlasIndex: r, sdfViewBox: d }, { sdfGlyphSize: u, sdfCanvas: t, contextLost: e }, a) {
  if (e)
    return Promise.resolve({ timing: -1 });
  const { textureWidth: o, sdfExponent: n } = $e, i = Math.max(d[2] - d[0], d[3] - d[1]), s = Math.floor(r / 4), f = s % (o / u) * u, l = Math.floor(s / (o / u)) * u, h = r % 4;
  return ua(u, u, c, d, i, n, t, f, l, h, a);
}
function ba(c) {
  const r = c.sdfCanvas;
  r.addEventListener("webglcontextlost", (d) => {
    console.log("Context Lost", d), d.preventDefault(), c.contextLost = !0;
  }), r.addEventListener("webglcontextrestored", (d) => {
    console.log("Context Restored", d), c.contextLost = !1;
    const u = [];
    c.glyphsByFont.forEach((t) => {
      t.forEach((e) => {
        u.push(dn(e, c, !0));
      });
    }), Promise.all(u).then(() => {
      pn(c), c.sdfTexture.needsUpdate = !0;
    });
  });
}
function Wa({ font: c, characters: r, sdfGlyphSize: d }, u) {
  let t = Array.isArray(r) ? r.join(`
`) : "" + r;
  hn({ font: c, sdfGlyphSize: d, text: t }, u);
}
function vn(c, r) {
  for (let d in r)
    r.hasOwnProperty(d) && (c[d] = r[d]);
  return c;
}
let Rt;
function Zr(c) {
  return Rt || (Rt = typeof document > "u" ? {} : document.createElement("a")), Rt.href = c, Rt.href;
}
function pn(c) {
  if (typeof createImageBitmap != "function") {
    console.info("Safari<15: applying SDF canvas workaround");
    const { sdfCanvas: r, sdfTexture: d } = c, { width: u, height: t } = r, e = c.sdfCanvas.getContext("webgl");
    let a = d.image.data;
    (!a || a.length !== u * t * 4) && (a = new Uint8Array(u * t * 4), d.image = { width: u, height: t, data: a }, d.flipY = !1, d.isDataTexture = !0), e.readPixels(0, 0, u, t, e.RGBA, e.UNSIGNED_BYTE, a);
  }
}
const Ua = /* @__PURE__ */ it({
  name: "Typesetter",
  dependencies: [
    la,
    fa,
    Jn
  ],
  init(c, r, d) {
    return c(r, d());
  }
}), _a = /* @__PURE__ */ it({
  name: "Typesetter",
  dependencies: [
    Ua
  ],
  init(c) {
    return function(r) {
      return new Promise((d) => {
        c.typeset(r, d);
      });
    };
  },
  getTransferables(c) {
    const r = [];
    for (let d in c)
      c[d] && c[d].buffer && r.push(c[d].buffer);
    return r;
  }
});
function za() {
  Object.keys(Pt).forEach((c) => {
    const r = Pt[c].sdfCanvas, { width: d, height: u } = r;
    console.log("%c.", `
      background: url(${r.toDataURL()});
      background-size: ${d}px ${u}px;
      color: transparent;
      font-size: 0;
      line-height: ${u}px;
      padding-left: ${d}px;
    `);
  });
}
const qr = {};
function xa(c) {
  let r = qr[c];
  if (!r) {
    const d = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a$(1, 1, c, c), u = d.clone(), t = d.attributes, e = u.attributes, a = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.h(), o = t.uv.count;
    for (let n = 0; n < o; n++)
      e.position.array[n * 3] *= -1, e.normal.array[n * 3 + 2] *= -1;
    ["position", "normal", "uv"].forEach((n) => {
      a.setAttribute(
        n,
        new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.ay(
          [...t[n].array, ...e[n].array],
          t[n].itemSize
        )
      );
    }), a.setIndex([...d.index.array, ...u.index.array.map((n) => n + o)]), a.translate(0.5, 0.5, 0), r = qr[c] = a;
  }
  return r;
}
const Sa = "aTroikaGlyphBounds", $r = "aTroikaGlyphIndex", ka = "aTroikaGlyphColor";
class wa extends _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.ax {
  constructor() {
    super(), this.detail = 1, this.curveRadius = 0, this.groups = [
      { start: 0, count: 1 / 0, materialIndex: 0 },
      { start: 0, count: 1 / 0, materialIndex: 1 }
    ], this.boundingSphere = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.av(), this.boundingBox = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.au();
  }
  computeBoundingSphere() {
  }
  computeBoundingBox() {
  }
  // Since our base geometry contains triangles for both front and back sides, we can emulate
  // the "side" by restricting the draw range.
  setSide(r) {
    const d = this.getIndex().count;
    this.setDrawRange(r === _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aI ? d / 2 : 0, r === _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a5 ? d : d / 2);
  }
  set detail(r) {
    if (r !== this._detail) {
      this._detail = r, (typeof r != "number" || r < 1) && (r = 1);
      let d = xa(r);
      ["position", "normal", "uv"].forEach((u) => {
        this.attributes[u] = d.attributes[u].clone();
      }), this.setIndex(d.getIndex().clone());
    }
  }
  get detail() {
    return this._detail;
  }
  set curveRadius(r) {
    r !== this._curveRadius && (this._curveRadius = r, this._updateBounds());
  }
  get curveRadius() {
    return this._curveRadius;
  }
  /**
   * Update the geometry for a new set of glyphs.
   * @param {Float32Array} glyphBounds - An array holding the planar bounds for all glyphs
   *        to be rendered, 4 entries for each glyph: x1,x2,y1,y1
   * @param {Float32Array} glyphAtlasIndices - An array holding the index of each glyph within
   *        the SDF atlas texture.
   * @param {Array} blockBounds - An array holding the [minX, minY, maxX, maxY] across all glyphs
   * @param {Array} [chunkedBounds] - An array of objects describing bounds for each chunk of N
   *        consecutive glyphs: `{start:N, end:N, rect:[minX, minY, maxX, maxY]}`. This can be
   *        used with `applyClipRect` to choose an optimized `instanceCount`.
   * @param {Uint8Array} [glyphColors] - An array holding r,g,b values for each glyph.
   */
  updateGlyphs(r, d, u, t, e) {
    sr(this, Sa, r, 4), sr(this, $r, d, 1), sr(this, ka, e, 3), this._blockBounds = u, this._chunkedBounds = t, this.instanceCount = d.length, this._updateBounds();
  }
  _updateBounds() {
    const r = this._blockBounds;
    if (r) {
      const { curveRadius: d, boundingBox: u } = this;
      if (d) {
        const { PI: t, floor: e, min: a, max: o, sin: n, cos: i } = Math, s = t / 2, f = t * 2, l = Math.abs(d), h = r[0] / l, p = r[2] / l, g = e((h + s) / f) !== e((p + s) / f) ? -l : a(n(h) * l, n(p) * l), y = e((h - s) / f) !== e((p - s) / f) ? l : o(n(h) * l, n(p) * l), O = e((h + t) / f) !== e((p + t) / f) ? l * 2 : o(l - i(h) * l, l - i(p) * l);
        u.min.set(g, r[1], d < 0 ? -O : 0), u.max.set(y, r[3], d < 0 ? 0 : O);
      } else
        u.min.set(r[0], r[1], 0), u.max.set(r[2], r[3], 0);
      u.getBoundingSphere(this.boundingSphere);
    }
  }
  /**
   * Given a clipping rect, and the chunkedBounds from the last updateGlyphs call, choose the lowest
   * `instanceCount` that will show all glyphs within the clipped view. This is an optimization
   * for long blocks of text that are clipped, to skip vertex shader evaluation for glyphs that would
   * be clipped anyway.
   *
   * Note that since `drawElementsInstanced[ANGLE]` only accepts an instance count and not a starting
   * offset, this optimization becomes less effective as the clipRect moves closer to the end of the
   * text block. We could fix that by switching from instancing to a full geometry with a drawRange,
   * but at the expense of much larger attribute buffers (see classdoc above.)
   *
   * @param {Vector4} clipRect
   */
  applyClipRect(r) {
    let d = this.getAttribute($r).count, u = this._chunkedBounds;
    if (u)
      for (let t = u.length; t--; ) {
        d = u[t].end;
        let e = u[t].rect;
        if (e[1] < r.w && e[3] > r.y && e[0] < r.z && e[2] > r.x)
          break;
      }
    this.instanceCount = d;
  }
}
function sr(c, r, d, u) {
  const t = c.getAttribute(r);
  d ? t && t.array.length === d.length ? (t.array.set(d), t.needsUpdate = !0) : (c.setAttribute(r, new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a_(d, u)), delete c._maxInstanceCount, c.dispose()) : t && c.deleteAttribute(r);
}
const Ta = `
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`, Fa = `
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`, Ca = `
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`, Aa = `
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;
function Da(c) {
  const r = hr(c, {
    chained: !0,
    extensions: {
      derivatives: !0
    },
    uniforms: {
      uTroikaSDFTexture: { value: null },
      uTroikaSDFTextureSize: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.V() },
      uTroikaSDFGlyphSize: { value: 0 },
      uTroikaSDFExponent: { value: 0 },
      uTroikaTotalBounds: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aE(0, 0, 0, 0) },
      uTroikaClipRect: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aE(0, 0, 0, 0) },
      uTroikaDistanceOffset: { value: 0 },
      uTroikaOutlineOpacity: { value: 0 },
      uTroikaFillOpacity: { value: 1 },
      uTroikaPositionOffset: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.V() },
      uTroikaCurveRadius: { value: 0 },
      uTroikaBlurRadius: { value: 0 },
      uTroikaStrokeWidth: { value: 0 },
      uTroikaStrokeColor: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.i() },
      uTroikaStrokeOpacity: { value: 1 },
      uTroikaOrient: { value: new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.aK() },
      uTroikaUseGlyphColors: { value: !0 },
      uTroikaSDFDebug: { value: !1 }
    },
    vertexDefs: Ta,
    vertexTransform: Fa,
    fragmentDefs: Ca,
    fragmentColorTransform: Aa,
    customRewriter({ vertexShader: d, fragmentShader: u }) {
      let t = /\buniform\s+vec3\s+diffuse\b/;
      return t.test(u) && (u = u.replace(t, "varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g, "vTroikaGlyphColor"), t.test(d) || (d = d.replace(
        ln,
        `uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`
      ))), { vertexShader: d, fragmentShader: u };
    }
  });
  return r.transparent = !0, Object.defineProperties(r, {
    isTroikaTextMaterial: { value: !0 },
    // WebGLShadowMap reverses the side of the shadow material by default, which fails
    // for planes, so here we force the `shadowSide` to always match the main side.
    shadowSide: {
      get() {
        return this.side;
      },
      set() {
      }
    }
  }), r;
}
const yr = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.z({
  color: 16777215,
  side: _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a5,
  transparent: !0
}), en = 8421504, tn = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.l(), Gt = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.b(), fr = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.b(), mt = [], Ea = /* @__PURE__ */ new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.b(), lr = "+x+y";
function rn(c) {
  return Array.isArray(c) ? c[0] : c;
}
let gn = () => {
  const c = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a8(
    new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a$(1, 1),
    yr
  );
  return gn = () => c, c;
}, mn = () => {
  const c = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a8(
    new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a$(1, 1, 32, 1),
    yr
  );
  return mn = () => c, c;
};
const Ma = { type: "syncstart" }, Ra = { type: "synccomplete" }, yn = [
  "font",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "lang",
  "letterSpacing",
  "lineHeight",
  "maxWidth",
  "overflowWrap",
  "text",
  "direction",
  "textAlign",
  "textIndent",
  "whiteSpace",
  "anchorX",
  "anchorY",
  "colorRanges",
  "sdfGlyphSize"
], Ga = yn.concat(
  "material",
  "color",
  "depthOffset",
  "clipRect",
  "curveRadius",
  "orientation",
  "glyphGeometryDetail"
);
class Oa extends _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.a8 {
  constructor() {
    const r = new wa();
    super(r, null), this.text = "", this.anchorX = 0, this.anchorY = 0, this.curveRadius = 0, this.direction = "auto", this.font = null, this.unicodeFontsURL = null, this.fontSize = 0.1, this.fontWeight = "normal", this.fontStyle = "normal", this.lang = null, this.letterSpacing = 0, this.lineHeight = "normal", this.maxWidth = 1 / 0, this.overflowWrap = "normal", this.textAlign = "left", this.textIndent = 0, this.whiteSpace = "normal", this.material = null, this.color = null, this.colorRanges = null, this.outlineWidth = 0, this.outlineColor = 0, this.outlineOpacity = 1, this.outlineBlur = 0, this.outlineOffsetX = 0, this.outlineOffsetY = 0, this.strokeWidth = 0, this.strokeColor = en, this.strokeOpacity = 1, this.fillOpacity = 1, this.depthOffset = 0, this.clipRect = null, this.orientation = lr, this.glyphGeometryDetail = 1, this.sdfGlyphSize = null, this.gpuAccelerateSDF = !0, this.debugSDF = !1;
  }
  /**
   * Updates the text rendering according to the current text-related configuration properties.
   * This is an async process, so you can pass in a callback function to be executed when it
   * finishes.
   * @param {function} [callback]
   */
  sync(r) {
    this._needsSync && (this._needsSync = !1, this._isSyncing ? (this._queuedSyncs || (this._queuedSyncs = [])).push(r) : (this._isSyncing = !0, this.dispatchEvent(Ma), hn({
      text: this.text,
      font: this.font,
      lang: this.lang,
      fontSize: this.fontSize || 0.1,
      fontWeight: this.fontWeight || "normal",
      fontStyle: this.fontStyle || "normal",
      letterSpacing: this.letterSpacing || 0,
      lineHeight: this.lineHeight || "normal",
      maxWidth: this.maxWidth,
      direction: this.direction || "auto",
      textAlign: this.textAlign,
      textIndent: this.textIndent,
      whiteSpace: this.whiteSpace,
      overflowWrap: this.overflowWrap,
      anchorX: this.anchorX,
      anchorY: this.anchorY,
      colorRanges: this.colorRanges,
      includeCaretPositions: !0,
      //TODO parameterize
      sdfGlyphSize: this.sdfGlyphSize,
      gpuAccelerateSDF: this.gpuAccelerateSDF,
      unicodeFontsURL: this.unicodeFontsURL
    }, (d) => {
      this._isSyncing = !1, this._textRenderInfo = d, this.geometry.updateGlyphs(
        d.glyphBounds,
        d.glyphAtlasIndices,
        d.blockBounds,
        d.chunkedBounds,
        d.glyphColors
      );
      const u = this._queuedSyncs;
      u && (this._queuedSyncs = null, this._needsSync = !0, this.sync(() => {
        u.forEach((t) => t && t());
      })), this.dispatchEvent(Ra), r && r();
    })));
  }
  /**
   * Initiate a sync if needed - note it won't complete until next frame at the
   * earliest so if possible it's a good idea to call sync() manually as soon as
   * all the properties have been set.
   * @override
   */
  onBeforeRender(r, d, u, t, e, a) {
    this.sync(), e.isTroikaTextMaterial && this._prepareForRender(e), e._hadOwnSide = e.hasOwnProperty("side"), this.geometry.setSide(e._actualSide = e.side), e.side = _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.ap;
  }
  onAfterRender(r, d, u, t, e, a) {
    e._hadOwnSide ? e.side = e._actualSide : delete e.side;
  }
  /**
   * Shortcut to dispose the geometry specific to this instance.
   * Note: we don't also dispose the derived material here because if anything else is
   * sharing the same base material it will result in a pause next frame as the program
   * is recompiled. Instead users can dispose the base material manually, like normal,
   * and we'll also dispose the derived material at that time.
   */
  dispose() {
    this.geometry.dispose();
  }
  /**
   * @property {TroikaTextRenderInfo|null} textRenderInfo
   * @readonly
   * The current processed rendering data for this TextMesh, returned by the TextBuilder after
   * a `sync()` call. This will be `null` initially, and may be stale for a short period until
   * the asynchrous `sync()` process completes.
   */
  get textRenderInfo() {
    return this._textRenderInfo || null;
  }
  // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
  // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
  get material() {
    let r = this._derivedMaterial;
    const d = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = yr.clone());
    if ((!r || r.baseMaterial !== d) && (r = this._derivedMaterial = Da(d), d.addEventListener("dispose", function u() {
      d.removeEventListener("dispose", u), r.dispose();
    })), this.outlineWidth || this.outlineBlur || this.outlineOffsetX || this.outlineOffsetY) {
      let u = r._outlineMtl;
      return u || (u = r._outlineMtl = Object.create(r, {
        id: { value: r.id + 0.1 }
      }), u.isTextOutlineMaterial = !0, u.depthWrite = !1, u.map = null, r.addEventListener("dispose", function t() {
        r.removeEventListener("dispose", t), u.dispose();
      })), [
        u,
        r
      ];
    } else
      return r;
  }
  set material(r) {
    r && r.isTroikaTextMaterial ? (this._derivedMaterial = r, this._baseMaterial = r.baseMaterial) : this._baseMaterial = r;
  }
  get glyphGeometryDetail() {
    return this.geometry.detail;
  }
  set glyphGeometryDetail(r) {
    this.geometry.detail = r;
  }
  get curveRadius() {
    return this.geometry.curveRadius;
  }
  set curveRadius(r) {
    this.geometry.curveRadius = r;
  }
  // Create and update material for shadows upon request:
  get customDepthMaterial() {
    return rn(this.material).getDepthMaterial();
  }
  get customDistanceMaterial() {
    return rn(this.material).getDistanceMaterial();
  }
  _prepareForRender(r) {
    const d = r.isTextOutlineMaterial, u = r.uniforms, t = this.textRenderInfo;
    if (t) {
      const { sdfTexture: o, blockBounds: n } = t;
      u.uTroikaSDFTexture.value = o, u.uTroikaSDFTextureSize.value.set(o.image.width, o.image.height), u.uTroikaSDFGlyphSize.value = t.sdfGlyphSize, u.uTroikaSDFExponent.value = t.sdfExponent, u.uTroikaTotalBounds.value.fromArray(n), u.uTroikaUseGlyphColors.value = !d && !!t.glyphColors;
      let i = 0, s = 0, f = 0, l, h, p, g = 0, y = 0;
      if (d) {
        let { outlineWidth: S, outlineOffsetX: F, outlineOffsetY: U, outlineBlur: T, outlineOpacity: G } = this;
        i = this._parsePercent(S) || 0, s = Math.max(0, this._parsePercent(T) || 0), l = G, g = this._parsePercent(F) || 0, y = this._parsePercent(U) || 0;
      } else
        f = Math.max(0, this._parsePercent(this.strokeWidth) || 0), f && (p = this.strokeColor, u.uTroikaStrokeColor.value.set(p ?? en), h = this.strokeOpacity, h == null && (h = 1)), l = this.fillOpacity;
      u.uTroikaDistanceOffset.value = i, u.uTroikaPositionOffset.value.set(g, y), u.uTroikaBlurRadius.value = s, u.uTroikaStrokeWidth.value = f, u.uTroikaStrokeOpacity.value = h, u.uTroikaFillOpacity.value = l ?? 1, u.uTroikaCurveRadius.value = this.curveRadius || 0;
      let O = this.clipRect;
      if (O && Array.isArray(O) && O.length === 4)
        u.uTroikaClipRect.value.fromArray(O);
      else {
        const S = (this.fontSize || 0.1) * 100;
        u.uTroikaClipRect.value.set(
          n[0] - S,
          n[1] - S,
          n[2] + S,
          n[3] + S
        );
      }
      this.geometry.applyClipRect(u.uTroikaClipRect.value);
    }
    u.uTroikaSDFDebug.value = !!this.debugSDF, r.polygonOffset = !!this.depthOffset, r.polygonOffsetFactor = r.polygonOffsetUnits = this.depthOffset || 0;
    const e = d ? this.outlineColor || 0 : this.color;
    if (e == null)
      delete r.color;
    else {
      const o = r.hasOwnProperty("color") ? r.color : r.color = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.i();
      (e !== o._input || typeof e == "object") && o.set(o._input = e);
    }
    let a = this.orientation || lr;
    if (a !== r._orientation) {
      let o = u.uTroikaOrient.value;
      a = a.replace(/[^-+xyz]/g, "");
      let n = a !== lr && a.match(/^([-+])([xyz])([-+])([xyz])$/);
      if (n) {
        let [, i, s, f, l] = n;
        Gt.set(0, 0, 0)[s] = i === "-" ? 1 : -1, fr.set(0, 0, 0)[l] = f === "-" ? -1 : 1, tn.lookAt(Ea, Gt.cross(fr), fr), o.setFromMatrix4(tn);
      } else
        o.identity();
      r._orientation = a;
    }
  }
  _parsePercent(r) {
    if (typeof r == "string") {
      let d = r.match(/^(-?[\d.]+)%$/), u = d ? parseFloat(d[1]) : NaN;
      r = (isNaN(u) ? 0 : u / 100) * this.fontSize;
    }
    return r;
  }
  /**
   * Translate a point in local space to an x/y in the text plane.
   */
  localPositionToTextCoords(r, d = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.V()) {
    d.copy(r);
    const u = this.curveRadius;
    return u && (d.x = Math.atan2(r.x, Math.abs(u) - Math.abs(r.z)) * Math.abs(u)), d;
  }
  /**
   * Translate a point in world space to an x/y in the text plane.
   */
  worldPositionToTextCoords(r, d = new _index_8c3ac570_js__WEBPACK_IMPORTED_MODULE_0__.V()) {
    return Gt.copy(r), this.localPositionToTextCoords(this.worldToLocal(Gt), d);
  }
  /**
   * @override Custom raycasting to test against the whole text block's max rectangular bounds
   * TODO is there any reason to make this more granular, like within individual line or glyph rects?
   */
  raycast(r, d) {
    const { textRenderInfo: u, curveRadius: t } = this;
    if (u) {
      const e = u.blockBounds, a = t ? mn() : gn(), o = a.geometry, { position: n, uv: i } = o.attributes;
      for (let s = 0; s < i.count; s++) {
        let f = e[0] + i.getX(s) * (e[2] - e[0]);
        const l = e[1] + i.getY(s) * (e[3] - e[1]);
        let h = 0;
        t && (h = t - Math.cos(f / t) * t, f = Math.sin(f / t) * t), n.setXYZ(s, f, l, h);
      }
      o.boundingSphere = this.geometry.boundingSphere, o.boundingBox = this.geometry.boundingBox, a.matrixWorld = this.matrixWorld, a.material.side = this.material.side, mt.length = 0, a.raycast(r, mt);
      for (let s = 0; s < mt.length; s++)
        mt[s].object = this, d.push(mt[s]);
    }
  }
  copy(r) {
    const d = this.geometry;
    return super.copy(r), this.geometry = d, Ga.forEach((u) => {
      this[u] = r[u];
    }), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
yn.forEach((c) => {
  const r = "_private_" + c;
  Object.defineProperty(Oa.prototype, c, {
    get() {
      return this[r];
    },
    set(d) {
      d !== this[r] && (this[r] = d, this._needsSync = !0);
    }
  });
});
function ja(c, r, d) {
  let u = null;
  const t = La(c);
  let e = null;
  return t.forEach((a) => {
    (!e || Math.abs(d - (a.top + a.bottom) / 2) < Math.abs(d - (e.top + e.bottom) / 2)) && (e = a);
  }), e.carets.forEach((a) => {
    (!u || Math.abs(r - a.x) < Math.abs(r - u.x)) && (u = a);
  }), u;
}
const nn = /* @__PURE__ */ new WeakMap();
function Va(c, r, d) {
  let u;
  if (c) {
    let t = nn.get(c);
    if (t && t.start === r && t.end === d)
      return t.rects;
    const { caretPositions: e } = c;
    if (d < r) {
      const o = r;
      r = d, d = o;
    }
    r = Math.max(r, 0), d = Math.min(d, e.length + 1), u = [];
    let a = null;
    for (let o = r; o < d; o++) {
      const n = e[o * 4], i = e[o * 4 + 1], s = Math.min(n, i), f = Math.max(n, i), l = e[o * 4 + 2], h = e[o * 4 + 3];
      (!a || l !== a.bottom || h !== a.top || s > a.right || f < a.left) && (a = {
        left: 1 / 0,
        right: -1 / 0,
        bottom: l,
        top: h
      }, u.push(a)), a.left = Math.min(s, a.left), a.right = Math.max(f, a.right);
    }
    u.sort((o, n) => n.bottom - o.bottom || o.left - n.left);
    for (let o = u.length - 1; o-- > 0; ) {
      const n = u[o], i = u[o + 1];
      n.bottom === i.bottom && n.top === i.top && n.left <= i.right && n.right >= i.left && (i.left = Math.min(i.left, n.left), i.right = Math.max(i.right, n.right), u.splice(o, 1));
    }
    nn.set(c, { start: r, end: d, rects: u });
  }
  return u;
}
const an = /* @__PURE__ */ new WeakMap();
function La(c) {
  let r = an.get(c);
  if (!r) {
    r = [];
    const { caretPositions: d } = c;
    let u;
    const t = (a, o, n, i) => {
      (!u || n < (u.top + u.bottom) / 2) && r.push(u = { bottom: o, top: n, carets: [] }), n > u.top && (u.top = n), o < u.bottom && (u.bottom = o), u.carets.push({
        x: a,
        y: o,
        height: n - o,
        charIndex: i
      });
    };
    let e = 0;
    for (; e < d.length; e += 4)
      t(d[e], d[e + 2], d[e + 3], e / 4);
    t(d[e - 3], d[e - 2], d[e - 1], e / 4);
  }
  return an.set(c, r), r;
}



/***/ })

};
;