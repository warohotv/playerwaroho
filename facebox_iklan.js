$(document).ready(function() {   $("#open_now").click(function() {       $("#facebox").overlay().load();   });      // select the overlay element - and "make it an overlay"   $("#facebox").overlay({      // custom top position     top: 35,      // some mask tweaks suitable for facebox-looking dialogs     mask: {      // you might also consider a "transparent" color for the mask     color: '#fff',      // load mask a little faster     loadSpeed: 200,      // very transparent     opacity: 0.5     },      // disable this for modal dialog-type of overlays     closeOnClick: false,      // load it immediately after the construction     load: true      });     });