(function (p, l, o, w, i, n, g) {
  if (!p[i]) {
    p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
    p.GlobalSnowplowNamespace.push(i); p[i] = function () {
      (p[i].q = p[i].q || []).push(arguments)
    }; p[i].q = p[i].q || []; n = l.createElement(o); g = l.getElementsByTagName(o)[0]; n.async = 1;
    n.src = w; g.parentNode.insertBefore(n, g)
  }
}(window, document, "script", "sp.js", "snowplow"));



// Replace with your collector URL
var collector = "https://collector-sales-aws.snowplowanalytics.com";


window.snowplow('newTracker', 'sp', collector, {
  encodeBase64: false,
  appId: 'Snowplow_EventSmith',
  platform: 'web',
  contexts: {
    webPage: true,
    performanceTiming: true
  }
})


// snowplow('enableActivityTracking', {
//   minimumVisitLength: 10,
//   heartbeatDelay: 30
// });


snowplow('trackPageView');

window.snowplow(
  'addPlugin',
  'https://cdn.jsdelivr.net/npm/@snowplow/browser-plugin-enhanced-consent@latest/dist/index.umd.min.js',
  ['snowplowEnhancedConsentTracking', 'EnhancedConsentPlugin']
);



//COMMENTED OUT, TO UNCOMMENT PRESS THESE KEYS -> CMD + /






//Function to track custom event
function trackCustomEvent () {
const eventName = document.getElementById("event1-name").value;
const dataProductId = document.getElementById("data-product-id").value; 
const properties = collectProperties("event-properties-container", "event-prop-name", "event-prop-value");

snowplow('trackSelfDescribingEvent', {
  event: {
    schema: 'iglu:com.snplow.sales.aws/customDemo_Event/jsonschema/1-0-0',
    data: {
      eventName: eventName,
      dataProductId: dataProductId,
      ...properties
    }
  }
});
showToast(); // ✅ confirm tracked
}







//function to capture event + entity together
function trackCustomEventAndEntity () {
const eventName = document.getElementById("event1-name").value;
const entityName = document.getElementById("entity1-name").value;
const dataProductId = document.getElementById("data-product-id").value; 

const eventProperties = collectProperties("event-properties-container", "event-prop-name", "event-prop-value");
const entityProperties = collectProperties("entity-properties-container", "entity-prop-name", "entity-prop-value");

snowplow('trackSelfDescribingEvent', {
  event: {
    schema: 'iglu:com.snplow.sales.aws/customDemo_Event/jsonschema/1-0-0',
    data: {
      eventName: eventName,
      dataProductId: dataProductId,
      ...eventProperties
    }
  },
  context: [
    {
      schema: "iglu:com.snplow.sales.aws/customDemo_Entity/jsonschema/1-0-0",
      data: {
        entityName: entityName,
        dataProductId: dataProductId,
        ...entityProperties
      }
    }
  ]
});
showToast(); // ✅ confirm tracked
}
