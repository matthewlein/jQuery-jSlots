

(function($){
    
    $.jSlots = function(el, options){

        var base = this;
        
        base.$el = $(el);
        base.el = el;
        
        base.$el.data("jSlots", base);
        
        base.init = function() {
            
            base.options = $.extend({},$.jSlots.defaultOptions, options);
            
            base.setup();
            base.bindEvents();
            
        };
        
        /* --------------------------------------------------------------------- */
        // HELPERS
        /* --------------------------------------------------------------------- */
        
        base.randomRange = function(minNum, maxNum) {
            var multiplier = maxNum-minNum+1;
        	return Math.floor(Math.random()*multiplier+minNum);
        };
        
        /* --------------------------------------------------------------------- */
        // VARS
        /* --------------------------------------------------------------------- */
        
        base.isSpinning = false;
        
        /* --------------------------------------------------------------------- */
        // FUNCTIONS
        /* --------------------------------------------------------------------- */
        
        
        base.setup = function() {
            
            // set sizes
            
            var $list = base.$el;
            var $li = $list.find('li').first();
            
            var height = $li.outerHeight();
            var width = $li.outerWidth();
            
            var $listWrapper = $list.wrap('<div class="jSlots-wrapper"></div>')
            
            $listWrapper.css({
                overflow: 'hidden',
                height: height
            })
            
            // clone lists
            for (var i = base.options.number - 1; i >= 0; i--){
                base.$el.clone().appendTo($listWrapper);
            }
            
        }

        
        
        base.spinEm = function() {
            
            
            
        }
        
        base.playSlots = function() {

        	base.isSpinning = true;
        	var winCount = 0;
        	var finishedCount = 0;

        	slotNumber = base.options.number

        	$('.slot').each( function() {

    			var currentList = $(this);

    			var firstItem = currentList.children('li:first');
    			var myList = currentList.children('li');
    			var listHeight = -( firstItem.outerHeight() * ( myList.length-1) );

    			var spinSpeed = 200;

    			function lowerSpeed() {

    				if ( spinSpeed < 1000 ) {
    					spinSpeed +=200
    					spinEm()
    				} else {

    					spinSpeed +=200
    					
    					var myNum = base.randomRange(1, (myList.length-1) )

    					var finalPos = - ( (firstItem.outerHeight() * myNum)-firstItem.outerHeight() )
    					var finalSpeed = ( (spinSpeed * .5) * (myList.length-1) ) / myNum				

    					function checkWinner() {
    						finishedCount++

    						if (myNum == 1) {
    							sevenCount++
    						}
    						if (slotNumber > $('.slot').length) {
    							slotNumber = $('.slot').length
    						}

    						if (finishedCount == slotNumber) {
    							winAmount = 0

    							if (sevenCount == 1) {
    								//alert('1 seven!')
    								winAmount = betAmount * 5
    							} else if (sevenCount == 2) {
    								//alert('2 sevens!')
    								winAmount = betAmount * 40
    							} else if (sevenCount >= 3) {
    								//alert('WTF, 3 sevens!')
    								winAmount = betAmount * 300
    							} 

    							isPlaying = false
    						}
    					}

    					currentList.css('margin-top',listHeight).animate( {'margin-top': finalPos}, finalSpeed, 'swing', checkWinner)

    				}
    			}

    			function spinEm() {
    				currentList.css('margin-top',listHeight).animate( {'margin-top': '0px'}, spinSpeed, 'linear', lowerSpeed )
    			}

    			spinEm()

        	});
        
            
        }
        
        base.bindEvents = function() {
            $(base.options.start).bind(base.options.startEvent, function(event) {
                if (!base.isSpinning) {
                    base.spinEm();
                }
            });
        }
        
        
        base.onWin = function() {
            if ( $.isFunction(base.options.win) ) {
                base.options.win();
            }
        }
        
        
        // Run initializer
        base.init();
    };
    
    /* --------------------------------------------------------------------- */
    // DEFAULT OPTIONS
    /* --------------------------------------------------------------------- */
    
    $.jSlots.defaultOptions = {
        number : 3, // number of slots
        winnerNumber : 6, // number upon which to win, zero-based index
        win : $.noop, // function to run on win
        start : '', // selector to start the slideshow on click
        startEvent : 'click' // event to respond to
    };
    
    /* --------------------------------------------------------------------- */
    // JQUERY FN
    /* --------------------------------------------------------------------- */
    
    $.fn.jSlots = function(options){
        if (this.length) {
            return this.each(function(){
                (new $.jSlots(this, options));
            });
        }
    };
    
})(jQuery);











$(document).ready(function () {



$('.slot').each( function(){
	
	var currentList = $(this)
	
	var firstItem = currentList.children('li:first')
	
	firstItem.clone().appendTo( currentList )
	var myList = currentList.children('li')
	var listHeight = -( firstItem.outerHeight() * ( myList.length-1) )
	
	currentList.css('margin-top',listHeight)
		
})


function 
}

var isPlaying = false

$('#playButton').click(function(){
	var checkBet = $('#bet').val()
	var checkMoney = $('#money').val()
	
	if (!isPlaying && checkBet<=checkMoney) {
		playSlots()
		$(this).attr('disabled',true)
	} else {
		//do nothing
	}
})



})