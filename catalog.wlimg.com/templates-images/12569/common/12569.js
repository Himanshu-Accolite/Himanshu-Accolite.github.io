(function($){
	$(document).ready(function(){ // document ready starts
	
		var $applychildrenscrollerplugin = $('[data-plugin~="childrenscroller"]'); //childrenscroller start
		for(i=0, j=$applychildrenscrollerplugin.length; i<j; i++){
			$($applychildrenscrollerplugin[i]).childrenscroller();
		}//childrenscroller end
		
		fddcw();
		
		
		
		
		if( $('.formatView').length ) {
			var $formatView = $('.formatView'),
				$a = $formatView.children('a');
				$classifieds = $('#classifieds'),
				$bxslider = $classifieds.find('.bxslider'),
				$li = $bxslider.children('li'),
				liHeight = 0;

			if( !$a.length ) return;

			if( $li.length ) {
				$li.each(function(){
					liHeight = Math.max($(this).height(), liHeight)
				})
			}

			$formatView.children('a').each(function(){
				$(this).click(function(){
					if ( $(this).hasClass('on') ) return;

					else {
						$(this).addClass('on').siblings('a').removeClass('on');

						if( $classifieds.length ) {
							$classifieds.toggleClass('classified3Images classified_detailview');

							if( $classifieds.hasClass('classified_detailview') ) {
								$li.css({height : 'auto'})
							}

							else {
								$li.css({height : liHeight})
							}
						}
					}
				})
			})
		}
		
		
		
		
		$('#projectMoreLinksA').mouseover(function(){//Project JS Starts
			//if($('#projectLinks').css('display')=='none'){
				$('#projectMoreLinksDiv').slideDown('slow',function(){})	
			//}
		})
		$('#projectMoreLinksA, #projectMoreLinksDiv').mouseleave(function(){
			t=setTimeout(hideObj, 1000)
		})
		function hideObj(){
			$('#projectMoreLinksDiv').slideUp('slow')
		}
		$('#projectMoreLinksA, #projectMoreLinksDiv').mouseover(function(){
			clearTimeout(t)
		})
		
		function openMenus(src,destination){
			$(src).mouseover(function(){
				$(destination).slideDown('slow',function(){})
			})
		}//Project JS Ends
		
	
	}); // document ready ends
	
	
	
	
	
	jQuery(window).load(function(e) {
		var bxslider = $('[class *= "bxslider"]');
			
		if(bxslider.length){
			bxslider.each(function(){
				
				$(this).children('li').css({height : 'auto'});
				$(this).children('li').EqualHeight();
			})
		}
	});
		
		
	jQuery(window).resize(function(){
		var bxslider = $('[class *= "bxslider"]');
		
		if(bxslider.length){
			bxslider.each(function(){
				$(this).children('li').css({height : 'auto'});
				$(this).children('li').EqualHeight();
			})
		}
		
		fddcw();
	})
	
	
	jQuery(window).load(function(e) {
		var idv_eqheight = $('[class *= "idv_eqheight"]');
			
		if(idv_eqheight.length){
			idv_eqheight.each(function(){
				
				 $(this).find('li>div').css({height : 'auto'});
				 $(this).find('li>div').EqualHeight();
			})
		}
	});
		
		
	jQuery(window).resize(function(){
		var idv_eqheight = $('[class *= "idv_eqheight"]');
		
		if(idv_eqheight.length){
			idv_eqheight.each(function(){
				$(this).children('li>div').css({height : 'auto'});
				$(this).children('li>div').EqualHeight();
			})
		}
		
		fddcw();
	})
	
	
	$.fn.childrenscroller=function(){ /* childrenscroller plugin starts */
		if(!this.length) return;
		var $this = $(this);
		var defaults = {
			delay				:	1000,
			pause				:	1000,
			speed				:	500
		};
		
		var options = $.extend({}, defaults, $(this).data('childrenscroller-settings'))
		
		var interval_id			=	null,
			pause				=	false
			height				=	$(this).height(),
			tags				=	$(this).children();
		
		return this.each(function(){
			var start = function (){
				var child_height = $this.children().eq(0).outerHeight(true);

				if ($this.height() - $this.scrollTop() >= child_height){
					interval_id = setInterval(scroll, options.pause);
				}
			};

			
			var scroll = function (){
				if (pause) {return;}
				clearInterval(interval_id);
				var child_height = $this.children().eq(0).outerHeight(true);
				
				$this.animate({scrollTop:child_height}, options.speed, function(){
					$this.append($this.children().eq(0))
					$this.scrollTop(0);
					setTimeout(start, options.pause);
				})
			};
			
			$this.on("mouseover", function (){pause = true;});
			$this.on("mouseout", function (){pause = false;});
			setTimeout(start, options.delay);
		})
	/* childrenscroller plugin ends */ };	
	
	
	
	 $.fn.EqualHeight = function(){
		var _this = $(this)
		var max = 0;
		this.each(function(){
			max = Math.max( max, $(this).height());
		});
		
		_this.css('height',max)
	} 
	
	
	
})(jQuery);

jQuery(window).load(function(){
var DH = jQuery(document).innerHeight();
var HH = jQuery('header').height();
var MH = jQuery('#middle').height();
var FH = jQuery('footer').outerHeight();
var WH = jQuery(window).height();
var MF = DH - (HH+ MH)-FH;
var TH = HH+MH+FH;
var TMF = WH - TH;
//console.log(DH +'DH, '+ HH  +'HH, '+ MH  +'MH, '+ FH +'FH, '+MF+'MF, '+WH+'WH, '+TH+'TH')
if(TH <= WH){
jQuery('footer').css('margin-top', TMF)
}
});


function fddcw(){
	var s = jQuery('.dynamic-data-container');
	s.css('width', 'auto');
	
	if(s && s.length){
		s.children().hide();
		var w = s.css('width');
		s.children().show();
		s.css({'width':w,'overflow-x':'auto'})
	}
}


function imgDisplay(img,n) {
	document.getElementById('imgZoomThumb').src=img;
	document.getElementById('imgZoom').href=img;
	as=document.getElementById('imgCounter').getElementsByTagName('a');
	for (i=0; i<as.length; i++) {
		if(i==n) {
			as[i].className='on';
		}
		else as[i].className='';
	}
}

//  gallery  js

;( function( $, window, undefined ) {	
	'use strict';
	$.HoverDir = function( options, element ) {		
		this.$el = $( element );
		this._init( options );
	};
	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};
	$.HoverDir.prototype = {
		_init : function( options ) {			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			//this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();
		},
		_loadEvents : function() {
			var self = this;			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {				
				var $el = $( this ),
					$hoverElem = $el.find( '.gallery-overlay' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );				
				if( event.type === 'mouseenter' ) {					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );
					self.tmhover = setTimeout( function() {						
						$hoverElem.show( 0, function() {							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );
						} );			
					
					}, self.options.hoverDelay );				
				}
				else {				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );					
				}					
			} );
		},	
		_getDir : function( $el, coordinates ) {
		
			var w = $el.width(),
				h = $el.height(),			
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),		
				
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;			
			return direction;			
		},
		_getStyle : function( direction ) {			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};			
			return { from : fromStyle, to : toStyle };					
		},	
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );
		},
	};
	
	var logError = function( message ) {
		if ( window.console ) {
			window.console.error( message );		
		}
	};	
	$.fn.hoverdir = function( options ) {
		var instance = $.data( this, 'hoverdir' );		
		if ( typeof options === 'string' ) {			
			var args = Array.prototype.slice.call( arguments, 1 );			
			this.each(function() {			
				if ( !instance ) {
					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;				
				}				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
					logError( "no such method '" + options + "' for hoverdir instance" );
					return;				
				}				
				instance[ options ].apply( instance, args );			
			});
		} 
		else {		
			this.each(function() {				
				if ( instance ) {
					instance._init();				
				}
				else {
					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );				
				}
			});		
		}		
		return instance;		
	};	
} )( jQuery, window );