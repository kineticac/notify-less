/*!
 * Notify Less v0.0.1
 * http://artchang.com/
 *
 * Copyright 2011, Arthur Chang
 */
 
/* objects */
window.artchang = new Object();
window.artchang.notifyless = new NotifyLess();

/* Global DOM Elements */
var notification_count;
var notification_box;
var notification_red_box;

/* selectors */
var selector_notification_count_box = '#gbi1';
var selector_notification_red_box   = '#gbi1a';

$(document).ready(function() { 

  notification_box     = $(selector_notification_count_box);
  notification_red_box = $(selector_notification_red_box);
  
  if(notification_box.length > 0){
    window.artchang.notifyless.initialize();
  }

});

function NotifyLess() {
  NotifyLess.change_events = 'DOMNodeInserted DOMNodeRemoved DOMSubtreeModified';
}

NotifyLess.prototype.initialize = function() {
  
  notification_red_box.css({'background-image': '', 'background-color': '#336699'});
  notification_box.data('count', 0);
  notification_box.bind(NotifyLess.change_events, function(event) {
    newCount = parseInt(this.innerHTML);
    if(!isNaN(newCount) && newCount > notification_box.data('count')){
      notification_box.data('count', newCount);
      window.artchang.notifyless.checkNotifications();
    }
  });
}

NotifyLess.prototype.checkNotifications = function() {
  
}

NotifyLess.prototype.modifyAdds = function() {
  
}

NotifyLess.prototype.modifyPlusses = function() {
  
}
