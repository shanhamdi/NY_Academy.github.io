//--TOGGLE MENU KB--//
function toggle(target){    
  var artz = document.getElementsByClassName('artikel');
  var targ = document.getElementById(target);  
  var isVis = targ.style.display=='block';
    
  // hide all
  for(var i=0;i<artz.length;i++){
     artz[i].style.display = 'none';
  }
  // toggle current
  targ.style.display = isVis?'none':'block';
    
  return false;
}

//--BACK TO TOP--//
jQuery(document).ready(function() {
				var offset = 1000;
				var duration = 500;
				jQuery(window).scroll(function() {
					if (jQuery(this).scrollTop() > offset) {
						jQuery('.back-to-top').fadeIn(duration);
					} else {
						jQuery('.back-to-top').fadeOut(duration);
					}
				});
				
				jQuery('.back-to-top').click(function(event) {
					event.preventDefault();
					jQuery('html, body').animate({scrollTop: 0}, duration);
					return false;
				})
			});


//--KB ROW--//
$(document).ready(function() {
	
	var faqTab = $('.kb-row-handle'),
        faqTabContainer = $('.kb-row-container');
	
	if(faqTab.length){
	
		faqTab.off('click').on('click', function(){
			var faqRow = $(this).parent(),
			    faqContent = $(this).parent().find('.kb-row-content');
            
			    faqTabContainer.find('.kb-row-content').not(faqContent).stop().slideUp('slow');
                faqTabContainer.find('.kb-row').not(faqRow).removeClass('open');
                
			    faqContent.stop().slideToggle('slow', function() {
					faqRow.toggleClass('open', faqContent.is(':visible'));
				});
		});
		
	}
	
});