/* prebid.js v0.16.0
Updated : 2017-01-04 */
! function(e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i() {
        for (var e = 0; e < _.que.length; e++)
            if (y(_.que[e].called) === D) try {
                _.que[e].call(), _.que[e].called = !0
            } catch (t) {
                C.logError("Error processing command :", "prebid.js", t)
            }
    }

    function o(e) {
        var t = _._bidsRequested.map(function(e) {
            return e.bids.map(function(e) {
                return e.placementCode
            })
        }).reduce(E.flatten).filter(E.uniques);
        return C.contains(t, e) ? !0 : (C.logError('The "' + e + '" placement is not defined.'), void 0)
    }

    function a() {
        E.isGptPubadsDefined() && window.googletag.pubads().getSlots().forEach(function(e) {
            W.forEach(function(t) {
                e.setTargeting(t, null)
            })
        })
    }

    function d(e) {
        window.googletag.pubads().getSlots().forEach(function(t) {
            e.filter(function(e) {
                return Object.keys(e)[0] === t.getAdUnitPath() || Object.keys(e)[0] === t.getSlotElementId()
            }).forEach(function(e) {
                return e[Object.keys(e)[0]].forEach(function(e) {
                    e[Object.keys(e)[0]].map(function(n) {
                        return C.logMessage("Attempting to set key value for slot: " + t.getSlotElementId() + " key: " + Object.keys(e)[0] + " value: " + n), n
                    }).forEach(function(n) {
                        t.setTargeting(Object.keys(e)[0], n)
                    })
                })
            })
        })
    }

    function s() {
        return N.getStandardBidderAdServerTargeting().map(function(e) {
            return e.key
        }).concat(S.TARGETING_KEYS).filter(E.uniques)
    }

    function u(e) {
        var t = e ? [e] : _._adUnitCodes;
        return _._bidsReceived.filter(function(e) {
            return t.includes(e.adUnitCode)
        }).filter(function(e) {
            return e.cpm > 0
        }).map(function(e) {
            return e.adUnitCode
        }).filter(E.uniques).map(function(e) {
            return _._bidsReceived.filter(function(t) {
                return t.adUnitCode === e ? t : null
            }).reduce(E.getHighestCpm, {
                adUnitCode: e,
                cpm: 0,
                adserverTargeting: {},
                timeToRespond: 0
            })
        })
    }

    function c() {
        var e = u();
        e.filter(function(e) {
            return e.dealId
        }).map(function(e) {
            return e.adserverTargeting.hb_deal = e.dealId
        });
        var t = s();
        return e = e.map(function(e) {
            return r({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(function(n) {
                return "undefined" == typeof e.sendStandardTargeting || e.sendStandardTargeting || -1 === t.indexOf(n)
            }).map(function(t) {
                return r({}, t.substring(0, 20), [e.adserverTargeting[t]])
            }))
        })
    }

    function l() {
        return _._bidsReceived.filter(function(e) {
            return e.dealId
        }).map(function(e) {
            var t = "hb_deal_" + e.bidderCode;
            return r({}, e.adUnitCode, g(e, S.TARGETING_KEYS).concat(r({}, t.substring(0, 20), [e.adserverTargeting[t]])))
        })
    }

    function f(e) {
        var t = s();
        return _._bidsReceived.filter(E.adUnitsFilter.bind(this, e)).map(function(e) {
            return e.alwaysUseBid ? r({}, e.adUnitCode, Object.keys(e.adserverTargeting).map(function(n) {
                return t.indexOf(n) > -1 ? void 0 : r({}, n.substring(0, 20), [e.adserverTargeting[n]])
            }).filter(function(e) {
                return e
            })) : void 0
        }).filter(function(e) {
            return e
        })
    }

    function p(e) {
        var t = S.TARGETING_KEYS;
        return _._bidsReceived.filter(E.adUnitsFilter.bind(this, e)).map(function(e) {
            return e.adserverTargeting ? r({}, e.adUnitCode, g(e, t)) : void 0
        }).filter(function(e) {
            return e
        })
    }

    function g(e, t) {
        return t.map(function(t) {
            return r({}, (t + "_" + e.bidderCode).substring(0, 20), [e.adserverTargeting[t]])
        })
    }

    function m(e) {
        var t = e && e.length ? [e] : _._adUnitCodes,
            n = c(t).concat(f(t)).concat(_._sendAllBids ? p(t) : []).concat(l(t));
        return n.map(function(e) {
            Object.keys(e).map(function(t) {
                e[t].map(function(e) {
                    -1 === W.indexOf(Object.keys(e)[0]) && (W = Object.keys(e).concat(W))
                })
            })
        }), n
    }

    function b() {
        _._bidsRequested = [], _._bidsReceived = _._bidsReceived.filter(function(e) {
            return !_._adUnitCodes.includes(e.adUnitCode)
        })
    }

    function v(e, t, n) {
        e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
    }
    var h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        A = n(1),
        E = n(2),
        T = n(4);
    n(13);
    var I = n(14),
        w = n(11),
        _ = A.getGlobal(),
        S = n(3),
        C = n(2),
        N = n(10),
        U = n(5),
        j = n(12),
        R = n(15),
        O = n(8),
        B = n(16),
        k = "function",
        D = "undefined",
        P = "object",
        q = S.EVENTS.BID_WON,
        x = S.EVENTS.AUCTION_END,
        M = !1,
        G = [],
        W = [],
        L = {
            bidWon: o
        };
    _._bidsRequested = [], _._bidsReceived = [], _._adUnitCodes = [], _._winningBids = [], _._adsReceived = [], _._sendAllBids = !1, _.bidderSettings = _.bidderSettings || {}, _.bidderTimeout = _.bidderTimeout || 3e3, _.cbTimeout = _.cbTimeout || 200, _.timeoutBuffer = 200, _.logging = _.logging || !1, _.libLoaded = !0, _.version = "v0.16.0", C.logInfo("Prebid.js v0.16.0 loaded"), _.adUnits = _.adUnits || [], _.que.push = function(e) {
        if (("undefined" == typeof e ? "undefined" : y(e)) === k) try {
            e.call()
        } catch (t) {
            C.logError("Error processing command :" + t.message)
        } else C.logError("Commands written into pbjs.que.push must wrapped in a function")
    }, _.getAdserverTargetingForAdUnitCodeStr = function(e) {
        if (C.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
            var t = _.getAdserverTargetingForAdUnitCode(e);
            return C.transformAdServerTargetingObj(t)
        }
        C.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
    }, _.getAdserverTargetingForAdUnitCode = function(e) {
        return _.getAdserverTargeting(e)[e]
    }, _.getAdserverTargeting = function(e) {
        return C.logInfo("Invoking pbjs.getAdserverTargeting", arguments), m(e).map(function(e) {
            return r({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function(e) {
                return r({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
            }).reduce(function(e, t) {
                return h(t, e)
            }, {}))
        }).reduce(function(e, t) {
            var n = Object.keys(t)[0];
            return e[n] = h({}, e[n], t[n]), e
        }, {})
    }, _.getBidResponses = function() {
        C.logInfo("Invoking pbjs.getBidResponses", arguments);
        var e = _._bidsReceived.filter(E.adUnitsFilter.bind(this, _._adUnitCodes)),
            t = e && e.length && e[e.length - 1].requestId;
        return e.map(function(e) {
            return e.adUnitCode
        }).filter(E.uniques).map(function(n) {
            return e.filter(function(e) {
                return e.requestId === t && e.adUnitCode === n
            })
        }).filter(function(e) {
            return e && e[0] && e[0].adUnitCode
        }).map(function(e) {
            return r({}, e[0].adUnitCode, {
                bids: e
            })
        }).reduce(function(e, t) {
            return h(e, t)
        }, {})
    }, _.getBidResponsesForAdUnitCode = function(e) {
        var t = _._bidsReceived.filter(function(t) {
            return t.adUnitCode === e
        });
        return {
            bids: t
        }
    }, _.setTargetingForGPTAsync = function() {
        return C.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), E.isGptPubadsDefined() ? (a(), d(m()), void 0) : (C.logError("window.googletag is not defined on the page"), void 0)
    }, _.allBidsAvailable = function() {
        return C.logInfo("Invoking pbjs.allBidsAvailable", arguments), N.bidsBackAll()
    }, _.renderAd = function(e, t) {
        if (C.logInfo("Invoking pbjs.renderAd", arguments), C.logMessage("Calling renderAd with adId :" + t), e && t) try {
            var n = _._bidsReceived.find(function(e) {
                return e.adId === t
            });
            if (n) {
                _._winningBids.push(n), O.emit(q, n);
                var r = n.height,
                    i = n.width,
                    o = n.adUrl,
                    a = n.ad;
                e === document || "video" === n.mediaType ? C.logError("Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.") : a ? (e.write(a), e.close(), v(e, i, r)) : o ? (e.write('<IFRAME SRC="' + o + '" FRAMEBORDER="0" SCROLLING="no" MARGINHEIGHT="0" MARGINWIDTH="0" TOPMARGIN="0" LEFTMARGIN="0" ALLOWTRANSPARENCY="true" WIDTH="' + i + '" HEIGHT="' + r + '"></IFRAME>'), e.close(), v(e, i, r)) : C.logError("Error trying to write ad. No ad for bid response id: " + t)
            } else C.logError("Error trying to write ad. Cannot find ad by given id : " + t)
        } catch (d) {
            C.logError("Error trying to write ad Id :" + t + " to the page:" + d.message)
        } else C.logError("Error trying to write ad Id :" + t + " to the page. Missing document or adId")
    }, _.removeAdUnit = function(e) {
        if (C.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
            for (var t = 0; t < _.adUnits.length; t++) _.adUnits[t].code === e && _.adUnits.splice(t, 1)
    }, _.clearAuction = function() {
        M = !1, C.logMessage("Prebid auction cleared"), O.emit(x), G.length && G.shift()()
    }, _.requestBids = function(e) {
        var t = e.bidsBackHandler,
            n = e.timeout,
            r = e.adUnits,
            i = e.adUnitCodes,
            o = _.cbTimeout = n || _.bidderTimeout;
        r = r || _.adUnits, C.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter(function(e) {
            return i.includes(e.code)
        }) : i = r && r.map(function(e) {
            return e.code
        });
        var a = r.filter(T.videoAdUnit).filter(T.hasNonVideoBidder);
        if (a.forEach(function(e) {
                C.logError("adUnit " + e.code + " has 'mediaType' set to 'video' but contains a bidder that doesn't support video. No Prebid demand requests will be triggered for this adUnit.");
                for (var t = 0; t < r.length; t++) r[t].code === e.code && r.splice(t, 1)
            }), M) return G.push(function() {
            _.requestBids({
                bidsBackHandler: t,
                timeout: o,
                adUnits: r,
                adUnitCodes: i
            })
        }), void 0;
        if (M = !0, _._adUnitCodes = i, N.externalCallbackReset(), b(), !r || 0 === r.length) return C.logMessage("No adUnits configured. No bids requested."), ("undefined" == typeof t ? "undefined" : y(t)) === k && N.addOneTimeCallback(t, !1), N.executeCallback(), void 0;
        var d = !0,
            s = N.executeCallback.bind(N, d),
            u = setTimeout(s, o);
        ("undefined" == typeof t ? "undefined" : y(t)) === k && N.addOneTimeCallback(t, u), U.callBids({
            adUnits: r,
            adUnitCodes: i,
            cbTimeout: o
        }), 0 === _._bidsRequested.length && N.executeCallback()
    }, _.addAdUnits = function(e) {
        C.logInfo("Invoking pbjs.addAdUnits", arguments), C.isArray(e) ? _.adUnits.push.apply(_.adUnits, e) : ("undefined" == typeof e ? "undefined" : y(e)) === P && _.adUnits.push(e)
    }, _.onEvent = function(e, t, n) {
        return C.logInfo("Invoking pbjs.onEvent", arguments), C.isFn(t) ? n && !L[e].call(null, n) ? (C.logError('The id provided is not valid for event "' + e + '" and no handler was set.'), void 0) : (O.on(e, t, n), void 0) : (C.logError('The event handler provided is not a function and was not set on event "' + e + '".'), void 0)
    }, _.offEvent = function(e, t, n) {
        C.logInfo("Invoking pbjs.offEvent", arguments), (!n || L[e].call(null, n)) && O.off(e, t, n)
    }, _.addCallback = function(e, t) {
        C.logInfo("Invoking pbjs.addCallback", arguments);
        var n = null;
        return e && t && ("undefined" == typeof t ? "undefined" : y(t)) === k ? (n = C.getUniqueIdentifierStr, N.addCallback(n, t, e), n) : (C.logError("error registering callback. Check method signature"), n)
    }, _.removeCallback = function() {
        return null
    }, _.registerBidAdapter = function(e, t) {
        C.logInfo("Invoking pbjs.registerBidAdapter", arguments);
        try {
            U.registerBidAdapter(e(), t)
        } catch (n) {
            C.logError("Error registering bidder adapter : " + n.message)
        }
    }, _.registerAnalyticsAdapter = function(e) {
        C.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
        try {
            U.registerAnalyticsAdapter(e)
        } catch (t) {
            C.logError("Error registering analytics adapter : " + t.message)
        }
    }, _.bidsAvailableForAdapter = function(e) {
        C.logInfo("Invoking pbjs.bidsAvailableForAdapter", arguments), _._bidsRequested.find(function(t) {
            return t.bidderCode === e
        }).bids.map(function(t) {
            return h(t, j.createBid(1), {
                bidderCode: e,
                adUnitCode: t.placementCode
            })
        }).map(function(e) {
            return _._bidsReceived.push(e)
        })
    }, _.createBid = function(e) {
        return C.logInfo("Invoking pbjs.createBid", arguments), j.createBid(e)
    }, _.addBidResponse = function(e, t) {
        C.logInfo("Invoking pbjs.addBidResponse", arguments), N.addBidResponse(e, t)
    }, _.loadScript = function(e, t, n) {
        C.logInfo("Invoking pbjs.loadScript", arguments), R.loadScript(e, t, n)
    }, _.enableAnalytics = function(e) {
        e && !C.isEmpty(e) ? (C.logInfo("Invoking pbjs.enableAnalytics for: ", e), U.enableAnalytics(e)) : C.logError("pbjs.enableAnalytics should be called with option {}")
    }, _.aliasBidder = function(e, t) {
        C.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? U.aliasBidAdapter(e, t) : C.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
    }, _.setPriceGranularity = function(e) {
        if (C.logInfo("Invoking pbjs.setPriceGranularity", arguments), !e) return C.logError("Prebid Error: no value passed to `setPriceGranularity()`"), void 0;
        if ("string" == typeof e) N.setPriceGranularity(e);
        else if ("object" === ("undefined" == typeof e ? "undefined" : y(e))) {
            if (!w.isValidePriceConfig(e)) return C.logError("Invalid custom price value passed to `setPriceGranularity()`"), void 0;
            N.setCustomPriceBucket(e), N.setPriceGranularity(S.GRANULARITY_OPTIONS.CUSTOM), C.logMessage("Using custom price granularity")
        }
    }, _.enableSendAllBids = function() {
        _._sendAllBids = !0
    }, _.getAllWinningBids = function() {
        return _._winningBids
    }, _.buildMasterVideoTagFromAdserverTag = function(e, t) {
        C.logInfo("Invoking pbjs.buildMasterVideoTagFromAdserverTag", arguments);
        var n = I.parse(e);
        if (0 === _._bidsReceived.length) return e;
        var r = "";
        if ("dfp" !== t.adserver.toLowerCase()) return C.logError("Only DFP adserver is supported"), void 0;
        var i = B.dfpAdserver(t, n);
        return i.verifyAdserverTag() || C.logError("Invalid adserverTag, required google params are missing in query string"), i.appendQueryParams(), r = I.format(i.urlComponents)
    }, _.setBidderSequence = function(e) {
        e === S.ORDER.RANDOM && U.setBidderSequence(S.ORDER.RANDOM)
    }, _.getHighestCpmBids = function(e) {
        return u(e)
    }, i()
}, function(e, t) {
    "use strict";

    function n() {
        return window.pbjs
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getGlobal = n, window.pbjs = window.pbjs || {}, window.pbjs.que = window.pbjs.que || []
}, function(e, t, n) {
    "use strict";

    function r() {
        return N() + Math.random().toString(16).substr(2)
    }

    function i() {
        return window.console && window.console.log
    }

    function o(e, t, n) {
        return n.indexOf(e) === t
    }

    function a(e, t) {
        return e.concat(t)
    }

    function d(e) {
        return pbjs._bidsRequested.map(function(t) {
            return t.bids.find(function(t) {
                return t.bidId === e
            })
        }).find(function(e) {
            return e
        })
    }

    function s(e) {
        return Object.keys(e)
    }

    function u(e, t) {
        return e[t]
    }

    function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits;
        return e.map(function(e) {
            return e.bids.map(function(e) {
                return e.bidder
            }).reduce(a, [])
        }).reduce(a).filter(o)
    }

    function l() {
        return window.googletag && t.isFn(window.googletag.pubads) && t.isFn(window.googletag.pubads().getSlots) ? !0 : void 0
    }

    function f(e, t) {
        return e.cpm === t.cpm ? e.timeToRespond > t.timeToRespond ? t : e : e.cpm < t.cpm ? t : e
    }

    function p(e) {
        for (var t = e.length; t > 0;) {
            var n = Math.floor(Math.random() * t);
            t--;
            var r = e[t];
            e[t] = e[n], e[n] = r
        }
        return e
    }

    function g(e, t) {
        return e.includes(t && t.placementCode || t && t.adUnitCode)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.uniques = o, t.flatten = a, t.getBidRequest = d, t.getKeys = s, t.getValue = u, t.getBidderCodes = c, t.isGptPubadsDefined = l, t.getHighestCpm = f, t.shuffle = p, t.adUnitsFilter = g;
    var b = n(3),
        v = "object",
        h = "string",
        y = "number",
        A = !1,
        E = "Array",
        T = "String",
        I = "Function",
        w = "Number",
        _ = Object.prototype.toString,
        S = null;
    try {
        S = console.info.bind(window.console)
    } catch (C) {}
    t.replaceTokenInString = function(e, t, n) {
        return this._each(t, function(t, r) {
            t = void 0 === t ? "" : t;
            var i = n + r.toUpperCase() + n,
                o = new RegExp(i, "g");
            e = e.replace(o, t)
        }), e
    };
    var N = function() {
        var e = 0;
        return function() {
            return e++, e
        }
    }();
    t.getUniqueIdentifierStr = r, t.generateUUID = function B(e) {
        return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, B)
    }, t.getBidIdParameter = function(e, t) {
        return t && t[e] ? t[e] : ""
    }, t.tryAppendQueryString = function(e, t, n) {
        return n ? e += t + "=" + encodeURIComponent(n) + "&" : e
    }, t.parseQueryStringParameters = function(e) {
        var t = "";
        for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
        return t
    }, t.transformAdServerTargetingObj = function(e) {
        return e && Object.getOwnPropertyNames(e).length > 0 ? s(e).map(function(t) {
            return t + "=" + encodeURIComponent(u(e, t))
        }).join("&") : ""
    }, t.extend = function(e, t) {
        return e = e || {}, this._each(t, function(n, r) {
            e[r] = m(t[r]) === v ? this.extend(e[r], t[r]) : t[r]
        }), e
    }, t.parseSizesInput = function(e) {
        var t = [];
        if (("undefined" == typeof e ? "undefined" : m(e)) === h) {
            var n = e.split(","),
                r = /^(\d)+x(\d)+$/i;
            if (n)
                for (var i in n) O(n, i) && n[i].match(r) && t.push(n[i])
        } else if (("undefined" == typeof e ? "undefined" : m(e)) === v) {
            var o = e.length;
            if (o > 0)
                if (2 === o && m(e[0]) === y && m(e[1]) === y) t.push(this.parseGPTSingleSizeArray(e));
                else
                    for (var a = 0; o > a; a++) t.push(this.parseGPTSingleSizeArray(e[a]))
        }
        return t
    }, t.parseGPTSingleSizeArray = function(e) {
        return !this.isArray(e) || 2 !== e.length || isNaN(e[0]) || isNaN(e[1]) ? void 0 : e[0] + "x" + e[1]
    }, t.getTopWindowLocation = function() {
        var e = void 0;
        try {
            e = window.top.location
        } catch (t) {
            e = window.location
        }
        return e
    }, t.getTopWindowUrl = function() {
        var e = void 0;
        try {
            e = this.getTopWindowLocation().href
        } catch (t) {
            e = ""
        }
        return e
    }, t.logWarn = function(e) {
        j() && console.warn && console.warn("WARNING: " + e)
    }, t.logInfo = function(e, t) {
        j() && i() && S && (t && 0 !== t.length || (t = ""), S("INFO: " + e + ("" === t ? "" : " : params : "), t))
    }, t.logMessage = function(e) {
        j() && i() && console.log("MESSAGE: " + e)
    }, t.hasConsoleLogger = i;
    var U = function(e) {
            return e ? window.console.error ? "error" : "log" : ""
        }(i()),
        j = function() {
            return pbjs.logging === !1 && A === !1 && (pbjs.logging = "TRUE" === R(b.DEBUG_MODE).toUpperCase(), A = !0), !!pbjs.logging
        };
    t.debugTurnedOn = j, t.logError = function(e, t, n) {
        var r = t || "ERROR";
        j() && i() && console[U](console, r + ": " + e, n || "")
    }, t.createInvisibleIframe = function() {
        var e = document.createElement("iframe");
        return e.id = r(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
    };
    var R = function(e) {
        var t = "[\\?&]" + e + "=([^&#]*)",
            n = new RegExp(t),
            r = n.exec(window.location.search);
        return null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
    };
    t.hasValidBidRequest = function(e, t, n) {
        function r(e, n) {
            n === t[o] && (i = !0)
        }
        for (var i = !1, o = 0; o < t.length; o++)
            if (i = !1, this._each(e, r), !i) return this.logError("Params are missing for bid request. One of these required paramaters are missing: " + t, n), !1;
        return !0
    }, t.addEventHandler = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
    }, t.isA = function(e, t) {
        return _.call(e) === "[object " + t + "]"
    }, t.isFn = function(e) {
        return this.isA(e, I)
    }, t.isStr = function(e) {
        return this.isA(e, T)
    }, t.isArray = function(e) {
        return this.isA(e, E)
    }, t.isNumber = function(e) {
        return this.isA(e, w)
    }, t.isEmpty = function(e) {
        if (!e) return !0;
        if (this.isArray(e) || this.isStr(e)) return !(e.length > 0);
        for (var t in e)
            if (hasOwnProperty.call(e, t)) return !1;
        return !0
    }, t.isEmptyStr = function(e) {
        return this.isStr(e) && (!e || 0 === e.length)
    }, t._each = function(e, t) {
        if (!this.isEmpty(e)) {
            if (this.isFn(e.forEach)) return e.forEach(t, this);
            var n = 0,
                r = e.length;
            if (r > 0)
                for (; r > n; n++) t(e[n], n, e);
            else
                for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
        }
    }, t.contains = function(e, t) {
        if (this.isEmpty(e)) return !1;
        if (this.isFn(e.indexOf)) return -1 !== e.indexOf(t);
        for (var n = e.length; n--;)
            if (e[n] === t) return !0;
        return !1
    }, t.indexOf = function() {
        return Array.prototype.indexOf ? Array.prototype.indexOf : void 0
    }(), t._map = function(e, t) {
        if (this.isEmpty(e)) return [];
        if (this.isFn(e.map)) return e.map(t);
        var n = [];
        return this._each(e, function(r, i) {
            n.push(t(r, i, e))
        }), n
    };
    var O = function(e, t) {
        return e.hasOwnProperty ? e.hasOwnProperty(t) : "undefined" != typeof e[t] && e.constructor.prototype[t] !== e[t]
    };
    t.createTrackPixelHtml = function(e) {
        if (!e) return "";
        var t = encodeURI(e),
            n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
        return n += '<img src="' + t + '"></div>'
    }, t.getIframeDocument = function(e) {
        if (e) {
            var t = void 0;
            try {
                t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
            } catch (n) {
                this.logError("Cannot get iframe document", n)
            }
            return t
        }
    }, t.getValueString = function(e, t, n) {
        return void 0 === t || null === t ? n : this.isStr(t) ? t : this.isNumber(t) ? t.toString() : (this.logWarn("Unsuported type for param: " + e + " required type: String"), void 0)
    }
}, function(e) {
    e.exports = {
        JSON_MAPPING: {
            PL_CODE: "code",
            PL_SIZE: "sizes",
            PL_BIDS: "bids",
            BD_BIDDER: "bidder",
            BD_ID: "paramsd",
            BD_PL_ID: "placementId",
            ADSERVER_TARGETING: "adserverTargeting",
            BD_SETTING_STANDARD: "standard"
        },
        REPO_AND_VERSION: "prebid_prebid_0.16.0",
        DEBUG_MODE: "pbjs_debug",
        STATUS: {
            GOOD: 1,
            NO_BID: 2
        },
        CB: {
            TYPE: {
                ALL_BIDS_BACK: "allRequestedBidsBack",
                AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                BID_WON: "bidWon"
            }
        },
        objectType_function: "function",
        objectType_undefined: "undefined",
        objectType_object: "object",
        objectType_string: "string",
        objectType_number: "number",
        EVENTS: {
            AUCTION_INIT: "auctionInit",
            AUCTION_END: "auctionEnd",
            BID_ADJUSTMENT: "bidAdjustment",
            BID_TIMEOUT: "bidTimeout",
            BID_REQUESTED: "bidRequested",
            BID_RESPONSE: "bidResponse",
            BID_WON: "bidWon"
        },
        EVENT_ID_PATHS: {
            bidWon: "adUnitCode"
        },
        ORDER: {
            RANDOM: "random"
        },
        GRANULARITY_OPTIONS: {
            LOW: "low",
            MEDIUM: "medium",
            HIGH: "high",
            AUTO: "auto",
            DENSE: "dense",
            CUSTOM: "custom"
        },
        TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size"]
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.hasNonVideoBidder = t.videoAdUnit = void 0; {
        var r = n(5),
            i = (t.videoAdUnit = function(e) {
                return "video" === e.mediaType
            }, function(e) {
                return !r.videoAdapters.includes(e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter(i).length
        }
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = e.bidderCode,
            n = e.requestId,
            r = e.bidderRequestId,
            i = e.adUnits;
        return i.map(function(e) {
            return e.bids.filter(function(e) {
                return e.bidder === t
            }).map(function(t) {
                var i = e.sizes;
                if (e.sizeMapping) {
                    var a = d.mapSizes(e);
                    if ("" === a) return "";
                    i = a
                }
                return o(t, {
                    placementCode: e.code,
                    mediaType: e.mediaType,
                    sizes: i,
                    bidId: u.getUniqueIdentifierStr(),
                    bidderRequestId: r,
                    requestId: n
                })
            })
        }).reduce(a.flatten, []).filter(function(e) {
            return "" !== e
        })
    }
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        a = n(2),
        d = n(6),
        s = n(7),
        u = n(2),
        c = n(3),
        l = n(8),
        f = {};
    t.bidderRegistry = f;
    var p = {},
        g = null;
    t.callBids = function(e) {
        var t = e.adUnits,
            n = e.cbTimeout,
            i = u.generateUUID(),
            o = Date.now(),
            d = {
                timestamp: o,
                requestId: i
            };
        l.emit(c.EVENTS.AUCTION_INIT, d);
        var s = a.getBidderCodes(t);
        g === c.ORDER.RANDOM && (s = a.shuffle(s)), s.forEach(function(e) {
            var a = f[e];
            if (a) {
                var d = u.getUniqueIdentifierStr(),
                    s = {
                        bidderCode: e,
                        requestId: i,
                        bidderRequestId: d,
                        bids: r({
                            bidderCode: e,
                            requestId: i,
                            bidderRequestId: d,
                            adUnits: t
                        }),
                        start: (new Date).getTime(),
                        auctionStart: o,
                        timeout: n
                    };
                s.bids && 0 !== s.bids.length && (u.logMessage("CALLING BIDDER ======= " + e), pbjs._bidsRequested.push(s), l.emit(c.EVENTS.BID_REQUESTED, s), a.callBids(s))
            } else u.logError("Adapter trying to be called which does not exist: " + e + " adaptermanager.callBids")
        })
    }, t.registerBidAdapter = function(e, t) {
        e && t ? i(e.callBids) === c.objectType_function ? f[t] = e : u.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : u.logError("bidAdaptor or bidderCode not specified")
    }, t.aliasBidAdapter = function(e, t) {
        var n = f[t];
        if (("undefined" == typeof n ? "undefined" : i(n)) === c.objectType_undefined) {
            var r = f[e];
            if (("undefined" == typeof r ? "undefined" : i(r)) === c.objectType_undefined) u.logError('bidderCode "' + e + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter");
            else try {
                var o = null;
                r instanceof s.BaseAdapter ? u.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter") : (o = r.createNew(), o.setBidderCode(t), this.registerBidAdapter(o, t))
            } catch (a) {
                u.logError(e + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
            }
        } else u.logMessage('alias name "' + t + '" has been already specified.')
    }, t.registerAnalyticsAdapter = function(e) {
        var t = e.adapter,
            n = e.code;
        t && n ? i(t.enableAnalytics) === c.objectType_function ? (t.code = n, p[n] = t) : u.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : u.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
    }, t.enableAnalytics = function(e) {
        u.isArray(e) || (e = [e]), u._each(e, function(e) {
            var t = p[e.provider];
            t ? t.enableAnalytics(e) : u.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
        })
    }, t.setBidderSequence = function(e) {
        g = e
    };
    var m = n(9);
    t.registerBidAdapter(new m, "audienceNetwork"), t.videoAdapters = []
}, function(e, t, n) {
    "use strict";

    function r(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return t["default"] = e, t
    }

    function i(e) {
        if (!o(e.sizeMapping)) return e.sizes;
        var t = a();
        if (!t) {
            var n = e.sizeMapping.reduce(function(e, t) {
                return e.minWidth < t.minWidth ? t : e
            });
            return n.sizes ? n.sizes : e.sizes
        }
        var r = "",
            i = e.sizeMapping.find(function(e) {
                return t > e.minWidth
            });
        return i && i.sizes ? (r = i.sizes, u.logMessage("AdUnit : " + e.code + " resized based on device width to : " + r)) : u.logMessage("AdUnit : " + e.code + " not mapped to any sizes for device width. This request will be suppressed."), r
    }

    function o(e) {
        return u.isArray(e) && e.length > 0 ? !0 : (u.logInfo("No size mapping defined"), !1)
    }

    function a(e) {
        var t = e || c || window;
        return t.screen && t.screen.width ? t.screen.width : 0
    }

    function d(e) {
        c = e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setWindow = t.getScreenWidth = t.mapSizes = void 0;
    var s = n(2),
        u = r(s),
        c = void 0;
    t.mapSizes = i, t.getScreenWidth = a, t.setWindow = d
}, function(e, t) {
    "use strict";

    function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }); {
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }();
        t.BaseAdapter = function() {
            function e(t) {
                n(this, e), this.code = t
            }
            return r(e, [{
                key: "getCode",
                value: function() {
                    return this.code
                }
            }, {
                key: "setCode",
                value: function(e) {
                    this.code = e
                }
            }, {
                key: "callBids",
                value: function() {
                    throw "adapter implementation must override callBids method"
                }
            }]), e
        }()
    }
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(3),
        o = Array.prototype.slice,
        a = Array.prototype.push,
        d = r._map(i.EVENTS, function(e) {
            return e
        }),
        s = i.EVENT_ID_PATHS,
        u = [];
    e.exports = function() {
        function e(e, t) {
            r.logMessage("Emitting event for: " + e);
            var i = t[0] || {},
                o = s[e],
                d = i[o],
                c = n[e] || {
                    que: []
                },
                l = r._map(c, function(e, t) {
                    return t
                }),
                f = [];
            u.push({
                eventType: e,
                args: i,
                id: d
            }), d && r.contains(l, d) && a.apply(f, c[d].que), a.apply(f, c.que), r._each(f, function(e) {
                if (e) try {
                    e.apply(null, t)
                } catch (n) {
                    r.logError("Error executing handler:", "events.js", n)
                }
            })
        }

        function t(e) {
            return r.contains(d, e)
        }
        var n = {},
            i = {};
        return i.on = function(e, i, o) {
            if (t(e)) {
                var a = n[e] || {
                    que: []
                };
                o ? (a[o] = a[o] || {
                    que: []
                }, a[o].que.push(i)) : a.que.push(i), n[e] = a
            } else r.logError("Wrong event name : " + e + " Valid event names :" + d)
        }, i.emit = function(t) {
            var n = o.call(arguments, 1);
            e(t, n)
        }, i.off = function(e, t, i) {
            var o = n[e];
            r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? r._each(o[i].que, function(e) {
                var n = o[i].que;
                e === t && n.splice(r.indexOf.call(n, e), 1)
            }) : r._each(o.que, function(e) {
                var n = o.que;
                e === t && n.splice(r.indexOf.call(n, e), 1)
            }), n[e] = o)
        }, i.get = function() {
            return n
        }, i.getEvents = function() {
            var e = [];
            return r._each(u, function(t) {
                var n = r.extend({}, t);
                e.push(n)
            }), e
        }, i
    }()
}, function(e, t, n) {
    "use strict";
    var r = n(8),
        i = n(10),
        o = n(12),
        a = n(2),
        d = n(3),
        s = function() {
            function e(e) {
                if (e.bids || !e.bids[0]) {
                    var n = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
                                n = 0,
                                r = 0,
                                i = e.sizes || {};
                            return 2 === i.length && "number" == typeof i[0] && "number" == typeof i[1] ? (n = i[0], r = i[1]) : i.length >= 1 && (n = i[0][0], r = i[0][1], t && i.length > 1 && a.logInfo("AudienceNetworkAdapter supports only one size per " + ("impression, but " + i.length + " sizes passed for ") + ("placementId " + e.params.placementId + ". Using first only."))), {
                                height: r,
                                width: n
                            }
                        },
                        s = function(e) {
                            if (e.params.native) return "native";
                            if (e.params.fullwidth) return "fullwidth";
                            var t = n(e);
                            return 320 === t.width && 50 === t.height || 300 === t.width && 250 === t.height || 728 === t.width && 90 === t.height ? t.width + "x" + t.height : void 0
                        },
                        u = "https://an.facebook.com/v2/placementbid.json?sdk=5.3.web&",
                        c = Number(e.bids[0].params.wwwExperiment);
                    c > 0 && 100 >= c && 0 === Math.floor(Math.random() * c) && (u = u.replace("an.facebook.com", "www.facebook.com/an"));
                    var l = new Map,
                        f = !0,
                        p = !1,
                        g = void 0;
                    try {
                        for (var m, b = e.bids[Symbol.iterator](); !(f = (m = b.next()).done); f = !0) {
                            var v = m.value;
                            void 0 === l[v.params.placementId] && (l[v.params.placementId] = []), l[v.params.placementId].push(v), u += "placementids[]=" + encodeURIComponent(v.params.placementId) + "&" + ("adformats[]=" + encodeURIComponent(s(v)) + "&")
                        }
                    } catch (h) {
                        p = !0, g = h
                    } finally {
                        try {
                            !f && b["return"] && b["return"]()
                        } finally {
                            if (p) throw g
                        }
                    }
                    e.bids[0].params.testMode && (u += "testmode=true&");
                    var y = new t,
                        A = (new Date).getTime();
                    y.get(u, function(t) {
                        var a = [],
                            u = t.request_id;
                        for (var c in l)
                            for (var f = t.bids[c], p = l[c], g = 0; g < p.length; g++) {
                                var m = p[g];
                                if (null !== f && void 0 !== f && null !== f[g] && void 0 !== f[g]) {
                                    var b = f[g],
                                        v = o.createBid(1);
                                    v.bidderCode = e.bidderCode, v.cpm = b.bid_price_cents / 100;
                                    var h = n(m);
                                    v.width = h.width, v.height = h.height, v.fbBidId = b.bid_id, v.fbPlacementId = c, a.push(c), v.fbFormat = s(m), v.ad = "fullwidth" === s(m) ? '\n          <html>\n            <head>\n              <script type="text/javascript">\n                window.onload = function() {\n                    if (parent) {\n                        var oHead = document.getElementsByTagName("head")[0];\n                        var arrStyleSheets = parent.document.getElementsByTagName("style");\n                        for (var i = 0; i < arrStyleSheets.length; i++)\n                            oHead.appendChild(arrStyleSheets[i].cloneNode(true));\n                    }\n                }\n              </script>\n            </head>\n            <body>\n              <div style="display:none; position: relative;">\n                <iframe style="display:none;"></iframe>\n                <script type="text/javascript">\n                  var data = {\n                    placementid: \'' + c + "',\n                    bidid: '" + b.bid_id + "',\n                    format: 'fullwidth',\n                    testmode: false,\n                    onAdLoaded: function(element) {\n                      console.log('Audience Network [" + c + "] ad loaded');\n                      element.style.display = 'block';\n                    },\n                    onAdError: function(errorCode, errorMessage) {\n                      console.log('Audience Network [" + c + "] error (' + errorCode + ') ' + errorMessage);\n                    }\n                  };\n                  (function(w,l,d,t){var a=t();var b=d.currentScript||(function(){var c=d.getElementsByTagName('script');return c[c.length-1];})();var e=b.parentElement;e.dataset.placementid=data.placementid;var f=function(v){try{return v.document.referrer;}catch(e){}return'';};var g=function(h){var i=h.indexOf('/',h.indexOf('://')+3);if(i===-1){return h;}return h.substring(0,i);};var j=[l.href];var k=false;var m=false;if(w!==w.parent){var n;var o=w;while(o!==n){var h;try{m=m||(o.$sf&&o.$sf.ext);h=o.location.href;}catch(e){k=true;}j.push(h||f(n));n=o;o=o.parent;}}var p=l.ancestorOrigins;if(p){if(p.length>0){data.domain=p[p.length-1];}else{data.domain=g(j[j.length-1]);}}data.url=j[j.length-1];data.channel=g(j[0]);data.width=screen.width;data.height=screen.height;data.pixelratio=w.devicePixelRatio;data.placementindex=w.ADNW&&w.ADNW.Ads?w.ADNW.Ads.length:0;data.crossdomain=k;data.safeframe=!!m;var q={};q.iframe=e.firstElementChild;var r='https://www.facebook.com/audiencenetwork/web/?sdk=5.3';for(var s in data){q[s]=data[s];if(typeof(data[s])!=='function'){r+='&'+s+'='+encodeURIComponent(data[s]);}}q.iframe.src=r;q.tagJsInitTime=a;q.rootElement=e;q.events=[];w.addEventListener('message',function(u){if(u.source!==q.iframe.contentWindow){return;}u.data.receivedTimestamp=t();if(this.sdkEventHandler){this.sdkEventHandler(u.data);}else{this.events.push(u.data);}}.bind(q),false);q.tagJsIframeAppendedTime=t();w.ADNW=w.ADNW||{};w.ADNW.Ads=w.ADNW.Ads||[];w.ADNW.Ads.push(q);w.ADNW.init&&w.ADNW.init(q);})(window,location,document,Date.now||function(){return+new Date;});\n                </script>\n                <script type=\"text/javascript\" src=\"https://connect.facebook.net/en_US/fbadnw.js\" async></script>\n                <div class=\"thirdPartyRoot\">\n                  <a class=\"fbAdLink\">\n                    <div class=\"fbAdMedia thirdPartyMediaClass\"></div>\n                    <div class=\"fbAdSubtitle thirdPartySubtitleClass\"></div>\n                    <div class=\"fbDefaultNativeAdWrapper\">\n                      <div class=\"fbAdCallToAction thirdPartyCallToActionClass\"></div>\n                      <div class=\"fbAdTitle thirdPartyTitleClass\"></div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </body>\n          </html>" : "native" === s(m) ? '\n          <html>\n            <head>\n              <script type="text/javascript">\n                window.onload = function() {\n                    if (parent) {\n                        var oHead = document.getElementsByTagName("head")[0];\n                        var arrStyleSheets = parent.document.getElementsByTagName("style");\n                        for (var i = 0; i < arrStyleSheets.length; i++)\n                            oHead.appendChild(arrStyleSheets[i].cloneNode(true));\n                    }\n                }\n              </script>\n            </head>\n            <body>\n              <div style="display:none; position: relative;">\n                <iframe style="display:none;"></iframe>\n                <script type="text/javascript">\n                  var data = {\n                    placementid: \'' + c + "',\n                    bidid: '" + b.bid_id + "',\n                    format: 'native',\n                    testmode: false,\n                    onAdLoaded: function(element) {\n                      console.log('Audience Network [" + c + "] ad loaded');\n                      element.style.display = 'block';\n                    },\n                    onAdError: function(errorCode, errorMessage) {\n                      console.log('Audience Network [" + c + "] error (' + errorCode + ') ' + errorMessage);\n                    }\n                  };\n                  (function(w,l,d,t){var a=t();var b=d.currentScript||(function(){var c=d.getElementsByTagName('script');return c[c.length-1];})();var e=b.parentElement;e.dataset.placementid=data.placementid;var f=function(v){try{return v.document.referrer;}catch(e){}return'';};var g=function(h){var i=h.indexOf('/',h.indexOf('://')+3);if(i===-1){return h;}return h.substring(0,i);};var j=[l.href];var k=false;var m=false;if(w!==w.parent){var n;var o=w;while(o!==n){var h;try{m=m||(o.$sf&&o.$sf.ext);h=o.location.href;}catch(e){k=true;}j.push(h||f(n));n=o;o=o.parent;}}var p=l.ancestorOrigins;if(p){if(p.length>0){data.domain=p[p.length-1];}else{data.domain=g(j[j.length-1]);}}data.url=j[j.length-1];data.channel=g(j[0]);data.width=screen.width;data.height=screen.height;data.pixelratio=w.devicePixelRatio;data.placementindex=w.ADNW&&w.ADNW.Ads?w.ADNW.Ads.length:0;data.crossdomain=k;data.safeframe=!!m;var q={};q.iframe=e.firstElementChild;var r='https://www.facebook.com/audiencenetwork/web/?sdk=5.3';for(var s in data){q[s]=data[s];if(typeof(data[s])!=='function'){r+='&'+s+'='+encodeURIComponent(data[s]);}}q.iframe.src=r;q.tagJsInitTime=a;q.rootElement=e;q.events=[];w.addEventListener('message',function(u){if(u.source!==q.iframe.contentWindow){return;}u.data.receivedTimestamp=t();if(this.sdkEventHandler){this.sdkEventHandler(u.data);}else{this.events.push(u.data);}}.bind(q),false);q.tagJsIframeAppendedTime=t();w.ADNW=w.ADNW||{};w.ADNW.Ads=w.ADNW.Ads||[];w.ADNW.Ads.push(q);w.ADNW.init&&w.ADNW.init(q);})(window,location,document,Date.now||function(){return+new Date;});\n                </script>\n                <script type=\"text/javascript\" src=\"https://connect.facebook.net/en_US/fbadnw.js\" async></script>\n                <div class=\"thirdPartyRoot\">\n                  <a class=\"fbAdLink\">\n                    <div class=\"fbAdMedia thirdPartyMediaClass\"></div>\n                    <div class=\"fbAdSubtitle thirdPartySubtitleClass\"></div>\n                    <div class=\"fbDefaultNativeAdWrapper\">\n                      <div class=\"fbAdCallToAction thirdPartyCallToActionClass\"></div>\n                      <div class=\"fbAdTitle thirdPartyTitleClass\"></div>\n                    </div>\n                  </a>\n                </div>\n              </div>\n            </body>\n          </html>" : '\n         <html>\n           <body>\n             <div style="display:none; position: relative;">\n               <iframe style="display:none;"></iframe>\n               <script type="text/javascript">\n                 var data = {\n                   placementid: \'' + c + "',\n                   format: '" + h.width + "x" + h.height + "',\n                   bidid: '" + b.bid_id + "',\n                   testmode: false,\n                   onAdLoaded: function(element) {\n                     console.log('Audience Network [" + c + "] ad loaded');\n                     element.style.display = 'block';\n                   },\n                   onAdError: function(errorCode, errorMessage) {\n                     console.log('Audience Network [" + c + "] error (' + errorCode + ') ' + errorMessage);\n                   }\n                 };\n                 (function(w,l,d,t){var a=t();var b=d.currentScript||(function(){var c=d.getElementsByTagName('script');return c[c.length-1];})();var e=b.parentElement;e.dataset.placementid=data.placementid;var f=function(v){try{return v.document.referrer;}catch(e){}return'';};var g=function(h){var i=h.indexOf('/',h.indexOf('://')+3);if(i===-1){return h;}return h.substring(0,i);};var j=[l.href];var k=false;var m=false;if(w!==w.parent){var n;var o=w;while(o!==n){var h;try{m=m||(o.$sf&&o.$sf.ext);h=o.location.href;}catch(e){k=true;}j.push(h||f(n));n=o;o=o.parent;}}var p=l.ancestorOrigins;if(p){if(p.length>0){data.domain=p[p.length-1];}else{data.domain=g(j[j.length-1]);}}data.url=j[j.length-1];data.channel=g(j[0]);data.width=screen.width;data.height=screen.height;data.pixelratio=w.devicePixelRatio;data.placementindex=w.ADNW&&w.ADNW.Ads?w.ADNW.Ads.length:0;data.crossdomain=k;data.safeframe=!!m;var q={};q.iframe=e.firstElementChild;var r='https://www.facebook.com/audiencenetwork/web/?sdk=5.3';for(var s in data){q[s]=data[s];if(typeof(data[s])!=='function'){r+='&'+s+'='+encodeURIComponent(data[s]);}}q.iframe.src=r;q.tagJsInitTime=a;q.rootElement=e;q.events=[];w.addEventListener('message',function(u){if(u.source!==q.iframe.contentWindow){return;}u.data.receivedTimestamp=t();if(this.sdkEventHandler){this.sdkEventHandler(u.data);}else{this.events.push(u.data);}}.bind(q),false);q.tagJsIframeAppendedTime=t();w.ADNW=w.ADNW||{};w.ADNW.Ads=w.ADNW.Ads||[];w.ADNW.Ads.push(q);w.ADNW.init&&w.ADNW.init(q);})(window,location,document,Date.now||function(){return+new Date;});\n               </script>\n               <script type=\"text/javascript\" src=\"https://connect.facebook.net/en_US/fbadnw.js\" async></script>\n             </div>\n           </body>\n         </html>", i.addBidResponse(m.placementCode, v)
                                } else {
                                    var y = o.createBid(2);
                                    y.bidderCode = e.bidderCode, i.addBidResponse(m.placementCode, y)
                                }
                            }
                        var E = (new Date).getTime(),
                            T = E - A,
                            I = E - performance.timing.navigationStart,
                            w = r.getEvents(),
                            _ = w.some(function(t) {
                                return t.args && t.eventType === d.EVENTS.BID_TIMEOUT && t.args.bidderCode === e.bidderCode
                            }),
                            S = "https://an.facebook.com/placementbidlatency.json?";
                        S += "bid_request_id=" + u, S += "&latency_ms=" + T.toString(), S += "&bid_returned_time_since_page_load_ms=" + I.toString(), S += "&timeout=" + _.toString();
                        var C = !0,
                            N = !1,
                            U = void 0;
                        try {
                            for (var j, R = a[Symbol.iterator](); !(C = (j = R.next()).done); C = !0) {
                                var O = j.value;
                                S += "&placement_ids[]=" + O
                            }
                        } catch (B) {
                            N = !0, U = B
                        } finally {
                            try {
                                !C && R["return"] && R["return"]()
                            } finally {
                                if (N) throw U
                            }
                        }
                        var k = new XMLHttpRequest;
                        k.open("GET", S, !0), k.withCredentials = !0, k.send(null)
                    })
                }
            }
            var t = function() {
                this.get = function(e, t) {
                    var n = new XMLHttpRequest;
                    n.onreadystatechange = function() {
                        if (4 === n.readyState && 200 === n.status) {
                            var r = JSON.parse(n.responseText);
                            a.logInfo("ANAdapter: " + e + " ==> " + JSON.stringify(r)), t(r)
                        }
                    }, n.open("GET", e, !0), n.withCredentials = !0, n.send(null)
                }
            };
            return {
                callBids: e
            }
        };
    e.exports = s
}, function(e, t, n) {
    "use strict";

    function r() {
        return (new Date).getTime()
    }

    function i(e) {
        return e.bidderCode
    }

    function o(e) {
        return e.bidder
    }

    function a(e) {
        var t = this,
            n = pbjs._bidsRequested.map(function(n) {
                return n.bids.filter(A.adUnitsFilter.bind(t, pbjs._adUnitCodes)).filter(function(t) {
                    return t.placementCode === e
                })
            }).reduce(A.flatten).map(function(e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            }).reduce(d, 0),
            r = pbjs._bidsReceived.filter(function(t) {
                return t.adUnitCode === e
            }).length;
        return n === r
    }

    function d(e, t) {
        return e + t
    }

    function s() {
        var e = pbjs._bidsRequested.map(function(e) {
                return e.bids
            }).reduce(A.flatten).filter(A.adUnitsFilter.bind(this, pbjs._adUnitCodes)).map(function(e) {
                return "indexExchange" === e.bidder ? e.sizes.length : 1
            }).reduce(function(e, t) {
                return e + t
            }, 0),
            t = pbjs._bidsReceived.filter(A.adUnitsFilter.bind(this, pbjs._adUnitCodes)).length;
        return e === t
    }

    function u(e, t) {
        return pbjs._bidsRequested.find(function(n) {
            return n.bids.filter(function(n) {
                return n.bidder === e && n.placementCode === t
            }).length > 0
        }) || {
            start: null,
            requestId: null
        }
    }

    function c(e, t) {
        var n = {},
            r = pbjs.bidderSettings;
        if (t && r) {
            var i = b();
            l(n, i, t)
        }
        return e && t && r && r[e] && r[e][T.JSON_MAPPING.ADSERVER_TARGETING] ? (l(n, r[e], t), t.alwaysUseBid = r[e].alwaysUseBid, t.sendStandardTargeting = r[e].sendStandardTargeting) : U[e] && (l(n, U[e], t), t.alwaysUseBid = U[e].alwaysUseBid, t.sendStandardTargeting = U[e].sendStandardTargeting), n
    }

    function l(e, t, n) {
        var r = t[T.JSON_MAPPING.ADSERVER_TARGETING];
        return n.size = n.getSize(), I._each(r, function(r) {
            var i = r.key,
                o = r.val;
            if (e[i] && I.logWarn("The key: " + i + " is getting ovewritten"), I.isFn(o)) try {
                o = o(n)
            } catch (a) {
                I.logError("bidmanager", "ERROR", a)
            }
            "undefined" == typeof t.suppressEmptyKeys || t.suppressEmptyKeys !== !0 || !I.isEmptyStr(o) && null !== o && void 0 !== o ? e[i] = o : I.logInfo("suppressing empty key '" + i + "' from adserver targeting")
        }), e
    }

    function f(e) {
        var t = [e];
        p(S.byAdUnit, t)
    }

    function p(e, t) {
        var n = this;
        I.isArray(e) && e.forEach(function(e) {
            var r = t || pbjs._adUnitCodes,
                i = [pbjs._bidsReceived.filter(A.adUnitsFilter.bind(n, r)).reduce(g, {})];
            e.apply(pbjs, i)
        })
    }

    function g(e, t, n, r) {
        return t.adUnitCode in Object.keys(e) ? e : (e[t.adUnitCode] = {
            bids: r.filter(function(e) {
                return e.adUnitCode === t.adUnitCode
            })
        }, e)
    }

    function m(e) {
        var t = e.bidderCode,
            n = e.cpm;
        if (t && pbjs.bidderSettings && pbjs.bidderSettings[t] && h(pbjs.bidderSettings[t].bidCpmAdjustment) === _) try {
            n = pbjs.bidderSettings[t].bidCpmAdjustment.call(null, e.cpm, I.extend({}, e))
        } catch (r) {
            I.logError("Error during bid adjustment", "bidmanager.js", r)
        }
        n >= 0 && (e.cpm = n)
    }

    function b() {
        var e = pbjs.bidderSettings;
        return e[T.JSON_MAPPING.BD_SETTING_STANDARD] || (e[T.JSON_MAPPING.BD_SETTING_STANDARD] = {
            adserverTargeting: [{
                key: "hb_bidder",
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: "hb_adid",
                val: function(e) {
                    return e.adId
                }
            }, {
                key: "hb_pb",
                val: function(e) {
                    return C === T.GRANULARITY_OPTIONS.AUTO ? e.pbAg : C === T.GRANULARITY_OPTIONS.DENSE ? e.pbDg : C === T.GRANULARITY_OPTIONS.LOW ? e.pbLg : C === T.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : C === T.GRANULARITY_OPTIONS.HIGH ? e.pbHg : C === T.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: "hb_size",
                val: function(e) {
                    return e.size
                }
            }]
        }), e[T.JSON_MAPPING.BD_SETTING_STANDARD]
    }

    function v() {
        return b()[T.JSON_MAPPING.ADSERVER_TARGETING]
    }
    var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        },
        A = n(2),
        E = n(11),
        T = n(3),
        I = n(2),
        w = n(8),
        _ = "function",
        S = {
            byAdUnit: [],
            all: [],
            oneTime: null,
            timer: !1
        },
        C = T.GRANULARITY_OPTIONS.MEDIUM,
        N = void 0,
        U = {};
    t.setCustomPriceBucket = function(e) {
        N = e
    }, t.getTimedOutBidders = function() {
        return pbjs._bidsRequested.map(i).filter(A.uniques).filter(function(e) {
            return pbjs._bidsReceived.map(o).filter(A.uniques).indexOf(e) < 0
        })
    }, t.bidsBackAll = function() {
        return s()
    }, t.addBidResponse = function(e, n) {
        if (n) {
            var i = u(n.bidderCode, e),
                o = i.requestId,
                d = i.start;
            if (y(n, {
                    requestId: o,
                    responseTimestamp: r(),
                    requestTimestamp: d,
                    cpm: n.cpm || 0,
                    bidder: n.bidderCode,
                    adUnitCode: e
                }), n.timeToRespond = n.responseTimestamp - n.requestTimestamp, n.timeToRespond > pbjs.cbTimeout + pbjs.timeoutBuffer) {
                var l = !0;
                t.executeCallback(l)
            }
            w.emit(T.EVENTS.BID_ADJUSTMENT, n), w.emit(T.EVENTS.BID_RESPONSE, n);
            var p = E.getPriceBucketString(n.cpm, N);
            n.pbLg = p.low, n.pbMg = p.med, n.pbHg = p.high, n.pbAg = p.auto, n.pbDg = p.dense, n.pbCg = p.custom;
            var g = {};
            n.bidderCode && 0 !== n.cpm && (g = c(n.bidderCode, n), n.dealId && (g["hb_deal_" + n.bidderCode] = n.dealId), n.adserverTargeting = g), pbjs._bidsReceived.push(n)
        }
        n && n.adUnitCode && a(n.adUnitCode) && f(n.adUnitCode), s() && t.executeCallback()
    }, t.getKeyValueTargetingPairs = function() {
        return c.apply(void 0, arguments)
    }, t.setPriceGranularity = function(e) {
        var t = T.GRANULARITY_OPTIONS;
        Object.keys(t).filter(function(n) {
            return e === t[n]
        }) ? C = e : (I.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default."), C = T.GRANULARITY_OPTIONS.MEDIUM)
    }, t.registerDefaultBidderSetting = function(e, t) {
        U[e] = t
    }, t.executeCallback = function(e) {
        if (!e && S.timer && clearTimeout(S.timer), S.all.called !== !0 && (p(S.all), S.all.called = !0, e)) {
            var n = t.getTimedOutBidders();
            n.length && w.emit(T.EVENTS.BID_TIMEOUT, n)
        }
        if (S.oneTime) try {
            p([S.oneTime])
        } finally {
            S.oneTime = null, S.timer = !1, pbjs.clearAuction()
        }
    }, t.externalCallbackReset = function() {
        S.all.called = !1
    }, t.addOneTimeCallback = function(e, t) {
        S.oneTime = e, S.timer = t
    }, t.addCallback = function(e, t, n) {
        t.id = e, T.CB.TYPE.ALL_BIDS_BACK === n ? S.all.push(t) : T.CB.TYPE.AD_UNIT_BIDS_BACK === n && S.byAdUnit.push(t)
    }, w.on(T.EVENTS.BID_ADJUSTMENT, function(e) {
        m(e)
    }), t.adjustBids = function() {
        return m.apply(void 0, arguments)
    }, t.getStandardBidderAdServerTargeting = v
}, function(e, t) {
    "use strict";

    function n(e, t) {
        var n = 0;
        return n = parseFloat(e), isNaN(n) && (n = ""), {
            low: "" === n ? "" : r(e, d),
            med: "" === n ? "" : r(e, s),
            high: "" === n ? "" : r(e, u),
            auto: "" === n ? "" : r(e, l),
            dense: "" === n ? "" : r(e, c),
            custom: "" === n ? "" : r(e, t)
        }
    }

    function r(e, t) {
        var n = "";
        if (!i(t)) return n;
        var r = t.buckets.reduce(function(e, t) {
                return e.max > t.max ? e : t
            }, {
                max: 0
            }),
            d = t.buckets.find(function(t) {
                if (e > r.max) {
                    var i = t.precision || a;
                    n = t.max.toFixed(i)
                } else if (e <= t.max && e >= t.min) return t
            });
        return d && (n = o(e, d.increment, d.precision)), n
    }

    function i(e) {
        if (!e || !e.buckets || !Array.isArray(e.buckets)) return !1;
        var t = !0;
        return e.buckets.forEach(function(e) {
            "undefined" != typeof e.min && e.max && e.increment || (t = !1)
        }), t
    }

    function o(e, t, n) {
        n || (n = a);
        var r = 1 / t;
        return (Math.floor(e * r) / r).toFixed(n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = 2,
        d = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .5
            }]
        },
        s = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .1
            }]
        },
        u = {
            buckets: [{
                min: 0,
                max: 20,
                increment: .01
            }]
        },
        c = {
            buckets: [{
                min: 0,
                max: 3,
                increment: .01
            }, {
                min: 3,
                max: 8,
                increment: .05
            }, {
                min: 8,
                max: 20,
                increment: .5
            }]
        },
        l = {
            buckets: [{
                min: 0,
                max: 5,
                increment: .05
            }, {
                min: 5,
                max: 10,
                increment: .1
            }, {
                min: 10,
                max: 20,
                increment: .5
            }]
        };
    t.getPriceBucketString = n, t.isValidePriceConfig = i
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        function n() {
            switch (o) {
                case 0:
                    return "Pending";
                case 1:
                    return "Bid available";
                case 2:
                    return "Bid returned empty or error response";
                case 3:
                    return "Bid timed out"
            }
        }
        var r = t && t.bidId || i.getUniqueIdentifierStr(),
            o = e || 0;
        this.bidderCode = "", this.width = 0, this.height = 0, this.statusMessage = n(), this.adId = r, this.getStatusCode = function() {
            return o
        }, this.getSize = function() {
            return this.width + "x" + this.height
        }
    }
    var i = n(2);
    t.createBid = function() {
        return new(Function.prototype.bind.apply(r, [null].concat(Array.prototype.slice.call(arguments))))
    }
}, function() {
    "use strict";
    Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function e(t) {
            if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
            if ("function" != typeof t) throw new TypeError("predicate must be a function");
            for (var e, n = Object(this), r = n.length >>> 0, i = arguments[1], o = 0; r > o; o++)
                if (e = n[o], t.call(i, e, o, n)) return e;
            return void 0
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e) {
            var t = Object(this),
                n = parseInt(t.length, 10) || 0;
            if (0 === n) return !1;
            var r, i = parseInt(arguments[1], 10) || 0;
            i >= 0 ? r = i : (r = n + i, 0 > r && (r = 0));
            for (var o; n > r;) {
                if (o = t[r], e === o || e !== e && o !== o) return !0;
                r++
            }
            return !1
        }
    }), Number.isInteger = Number.isInteger || function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e
    }
}, function(e, t) {
    "use strict";

    function n(e) {
        return e ? e.replace(/^\?/, "").split("&").reduce(function(e, t) {
            var n = t.split("="),
                r = a(n, 2),
                i = r[0],
                o = r[1];
            return /\[\]$/.test(i) ? (i = i.replace("[]", ""), e[i] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
        }, {}) : {}
    }

    function r(e) {
        return Object.keys(e).map(function(t) {
            return Array.isArray(e[t]) ? e[t].map(function(e) {
                return t + "[]=" + e
            }).join("&") : t + "=" + e[t]
        }).join("&")
    }

    function i(e) {
        var t = document.createElement("a");
        return t.href = decodeURIComponent(e), {
            protocol: (t.protocol || "").replace(/:$/, ""),
            hostname: t.hostname,
            port: +t.port,
            pathname: t.pathname,
            search: n(t.search || ""),
            hash: (t.hash || "").replace(/^#/, ""),
            host: t.host
        }
    }

    function o(e) {
        return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, d = e[Symbol.iterator](); !(r = (a = d.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (s) {
                i = !0, o = s
            } finally {
                try {
                    !r && d["return"] && d["return"]()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }
        return function(t, n) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, n);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    t.parseQS = n, t.formatQS = r, t.parse = i, t.format = o
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        var n = document.createElement("script");
        n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
            ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null, t())
        } : n.onload = function() {
            t()
        }), n.src = e;
        var r = document.getElementsByTagName("head");
        r = r.length ? r : document.getElementsByTagName("body"), r.length && (r = r[0], r.insertBefore(n, r.firstChild))
    }
    var i = n(2),
        o = {};
    t.loadScript = function(e, t, n) {
        return e ? (n ? o[e] ? t && "function" == typeof t && (o[e].loaded ? t() : o[e].callbacks.push(t)) : (o[e] = {
            loaded: !1,
            callbacks: []
        }, t && "function" == typeof t && o[e].callbacks.push(t), r(e, function() {
            o[e].loaded = !0;
            try {
                for (var t = 0; t < o[e].callbacks.length; t++) o[e].callbacks[t]()
            } catch (n) {
                i.logError("Error executing callback", "adloader.js:loadScript", n)
            }
        })) : r(e, t), void 0) : (i.logError("Error attempting to request empty URL", "adloader.js:loadScript"), void 0)
    }, t.trackPixel = function(e) {
        var t = void 0,
            n = void 0;
        return e && "string" == typeof e ? (t = e.indexOf("?") > 0 ? "&" : "?", n = e + t + "rnd=" + Math.floor(1e7 * Math.random()), (new Image).src = n, n) : (i.logMessage("Missing or invalid pixelUrl."), void 0)
    }
}, function(e, t, n) {
    "use strict";
    var r = n(14),
        i = function(e) {
            this.name = e.adserver, this.code = e.code, this.getWinningBidByCode = function() {
                var e = this,
                    t = pbjs._bidsReceived.find(function(t) {
                        return t.adUnitCode === e.code
                    });
                return t
            }
        };
    t.dfpAdserver = function(e, t) {
        var n = new i(e);
        n.urlComponents = t;
        var o = {
                env: "vp",
                gdfp_req: "1",
                impl: "s",
                unviewed_position_start: "1"
            },
            a = ["output", "iu", "sz", "url", "correlator", "description_url", "hl"],
            d = function(e) {
                return encodeURIComponent(r.formatQS(e))
            };
        return n.appendQueryParams = function() {
            var e = n.getWinningBidByCode();
            this.urlComponents.search.description_url = encodeURIComponent(e.vastUrl), this.urlComponents.search.cust_params = d(e.adserverTargeting), this.urlComponents.correlator = Date.now()
        }, n.verifyAdserverTag = function() {
            for (var e in o)
                if (!this.urlComponents.search.hasOwnProperty(e) || this.urlComponents.search[e] !== o[e]) return !1;
            for (var t in a)
                if (!this.urlComponents.search.hasOwnProperty(a[t])) return !1;
            return !0
        }, n
    }
}]);