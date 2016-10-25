
            var PREBID_TIMEOUT = 1000;
            var googletag = googletag || {};
            googletag.cmd = googletag.cmd || [];
            googletag.cmd.push(function () {
                googletag.pubads().disableInitialLoad();
            });
            
            function initAdserver() {
                if (pbjs.initAdserverSet) return;
                googletag.cmd.push(function () {
                    pbjs.que.push(function () {
                        pbjs.setTargetingForGPTAsync();
                    });
                    googletag.pubads().refresh();
                });
                pbjs.initAdserverSet = true;
           
            setTimeout(initAdserver, PREBID_TIMEOUT);
            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];
            
            (function () {
                var d = document;
                var pbs = d.createElement("script");
                pbs.type = "text/javascript";
                pbs.src = 'http://www.wheresbarney.com/an/prebid.js';
                var target = d.getElementsByTagName("head")[0];
                target.insertBefore(pbs, target.firstChild);
            })();
         
            (function () {
                var gads = document.createElement('script');
                gads.async = true;
                gads.type = 'text/javascript';
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') +
                        '//www.googletagservices.com/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            })();
            pbjs.que.push(function () {
               
                var adUnits = [
                    {
                     code: '/1023632/300x250',
                sizes: [[300, 250]],
               bids: [
                      {
                        bidder: 'audienceNetwork',
                        params: {
                          placementId: '542426755904328_567859580027712',
                          testMode: true,
                                }
                            }, 


                        ]
                    }
                ];
       
                pbjs.addAdUnits(adUnits);
             
                pbjs.addCallback('adUnitBidsBack', function (adUnitCode) {
                    console.log('ad unit bids back for : ' + adUnitCode);
                });
              
                pbjs.requestBids({
                
                    bidsBackHandler: function (bidResponses) {
                        initAdserver();
                    }
                   
                });
                console.log('begin bid resp logging');
  
                console.log('end bid resp logging');
               

                pbjs.bidderSettings = {
                    standard: {
                        adserverTargeting: [
                             {
                         key: "fb_bidid",
                        val: function (bidResponse) {
      
                                 console.log('bid resp bidid: ' + bidResponse.fbBidId);
                          return bidResponse.fbBidId;
                         } 
                            },
                            {   
                                key: "hb_bidder",
                                val: function (bidResponse) {
                                    console.log('bid resp bcode: ' + bidResponse.bidderCode);
                                    return bidResponse.bidderCode;
                                }
                            }, {
                                key: "hb_adid",
                                val: function (bidResponse) {
                                    console.log('bid resp adid: ' + bidResponse.adId);
                                    return bidResponse.adId;
                                }
                            }, {
                                key: "hb_pb",
                                val: function (bidResponse) {
                                    console.log('bid resp pbmg: ' + bidResponse.pbMg);
                                    return bidResponse.pbMg;
                                }
                            }
                        ]
                    },

                };


        