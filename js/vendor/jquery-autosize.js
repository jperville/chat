/*! owncloud-chat 2014-10-07 */
!function($){var mirrored,defaults={className:"autosizejs",id:"autosizejs",append:"\n",callback:!1,resizeDelay:10,placeholder:!0},copy='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',typographyStyles=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent","whiteSpace"],mirror=$(copy).data("autosize",!0)[0];mirror.style.lineHeight="99px","99px"===$(mirror).css("lineHeight")&&typographyStyles.push("lineHeight"),mirror.style.lineHeight="",$.fn.autosize=function(options){return this.length?(options=$.extend({},defaults,options||{}),mirror.parentNode!==document.body&&$(document.body).append(mirror),this.each(function(){function setWidth(){var width,style=window.getComputedStyle?window.getComputedStyle(ta,null):!1;style?(width=ta.getBoundingClientRect().width,(0===width||"number"!=typeof width)&&(width=parseInt(style.width,10)),$.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(i,val){width-=parseInt(style[val],10)})):width=$ta.width(),mirror.style.width=Math.max(width,0)+"px"}function initMirror(){var styles={};if(mirrored=ta,mirror.className=options.className,mirror.id=options.id,maxHeight=parseInt($ta.css("maxHeight"),10),$.each(typographyStyles,function(i,val){styles[val]=$ta.css(val)}),$(mirror).css(styles).attr("wrap",$ta.attr("wrap")),setWidth(),window.chrome){var width=ta.style.width;ta.style.width="0px";{ta.offsetWidth}ta.style.width=width}}function adjust(){var height,original;mirrored!==ta?initMirror():setWidth(),mirror.value=!ta.value&&options.placeholder?($ta.attr("placeholder")||"")+options.append:ta.value+options.append,mirror.style.overflowY=ta.style.overflowY,original=parseInt(ta.style.height,10),mirror.scrollTop=0,mirror.scrollTop=9e4,height=mirror.scrollTop,maxHeight&&height>maxHeight?(ta.style.overflowY="scroll",height=maxHeight):(ta.style.overflowY="hidden",minHeight>height&&(height=minHeight)),height+=boxOffset,original!==height&&(ta.style.height=height+"px",callback&&options.callback.call(ta,ta),$ta.trigger("autosize.resized"))}function resize(){clearTimeout(timeout),timeout=setTimeout(function(){var newWidth=$ta.width();newWidth!==width&&(width=newWidth,adjust())},parseInt(options.resizeDelay,10))}var maxHeight,minHeight,timeout,ta=this,$ta=$(ta),boxOffset=0,callback=$.isFunction(options.callback),originalStyles={height:ta.style.height,overflow:ta.style.overflow,overflowY:ta.style.overflowY,wordWrap:ta.style.wordWrap,resize:ta.style.resize},width=$ta.width(),taResize=$ta.css("resize");$ta.data("autosize")||($ta.data("autosize",!0),("border-box"===$ta.css("box-sizing")||"border-box"===$ta.css("-moz-box-sizing")||"border-box"===$ta.css("-webkit-box-sizing"))&&(boxOffset=$ta.outerHeight()-$ta.height()),minHeight=Math.max(parseInt($ta.css("minHeight"),10)-boxOffset||0,$ta.height()),$ta.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word"}),"vertical"===taResize?$ta.css("resize","none"):"both"===taResize&&$ta.css("resize","horizontal"),"onpropertychange"in ta?"oninput"in ta?$ta.on("input.autosize keyup.autosize",adjust):$ta.on("propertychange.autosize",function(){"value"===event.propertyName&&adjust()}):$ta.on("input.autosize",adjust),options.resizeDelay!==!1&&$(window).on("resize.autosize",resize),$ta.on("autosize.resize",adjust),$ta.on("autosize.resizeIncludeStyle",function(){mirrored=null,adjust()}),$ta.on("autosize.destroy",function(){mirrored=null,clearTimeout(timeout),$(window).off("resize",resize),$ta.off("autosize").off(".autosize").css(originalStyles).removeData("autosize")}),adjust())})):this}}(jQuery||$);