/*! owncloud-chat 2014-09-25 */
!function($){$.fn.applyContactAvatar=function(addressbookBackend,addressBookId,id,displayname,size){var $div=this,cacheTime=Cache.day(1);$div.height(size),$div.width(size);var cacheId=id,value=Cache.get(cacheId);if(void 0!==value)if(1==value.noAvatar)$div.imageplaceholder(displayname);else{var url=value.base64+"?requesttoken="+oc_requesttoken;$div.show(),$div.html('<img width="'+size+'" height="'+size+'" src="'+url+'">')}else{var url=OC.generateUrl("/avatar/{user}/{size}?requesttoken={requesttoken}",{user:id,size:size*window.devicePixelRatio,requesttoken:oc_requesttoken});$.get(url,function(result){if("object"==typeof result)Cache.set(cacheId,{noAvatar:!0},cacheTime),$div.imageplaceholder(displayname);else{var cacheUrl=OC.generateUrl("/avatar/{user}/{size}",{user:id,size:size*window.devicePixelRatio});Cache.set(cacheId,{noAvatar:!1,base64:cacheUrl},cacheTime),$div.show(),$div.html('<img width="'+size+'" height="'+size+'" src="'+url+'">')}})}}}(jQuery);