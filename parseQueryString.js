/**
 * parseQueryString
 * parse a query string like php
 * 
 * @author a.matsui
 * @license The MIT License :)
 */
(function(){
	
	var parseQueryString = function(queryString){
	
		var params = queryString.split('&');
	
		var $_GET = {};
	
		for(var i=0; i<params.length; i++){
		
			params[i] = params[i].split('=');
			
			var key   = decodeURIComponent(params[i][0]);
			var value = decodeURIComponent(params[i][1]);
			var arrayNameList = [];
			var arrayName;
			
			while( arrayName = key.match(/^(.+?)\[(.*?)\](.*)$/) ){
				arrayNameList.push(arrayName[1]);
				key = String(arrayName[2]) + String(arrayName[3]);
			}
			
			arrayNameList.push(key);
			
			var target = $_GET;
			
			if( arrayNameList.length > 1 ){
				$_GET[arrayNameList[j]]
				for(var j=0; j<arrayNameList.length; j++){
					if( arrayNameList[j+1] != null ){
						if( target[arrayNameList[j]] == null ){
							if( arrayNameList[j+1] === '' ){
								target[arrayNameList[j]] = [];
							}else{
								target[arrayNameList[j]] = {};
							}
						}
						target = target[arrayNameList[j]];
					}else{
						if( arrayNameList[j] === '' ){
							target.push(value);
						}else{
							target[arrayNameList[j]] = value;
						}
					}
				}
			}else{
				$_GET[arrayNameList[0]] = value;
			}
			
		}
		
		return $_GET;
	
	};
	
	window.$_GET = parseQueryString(location.search.substr(1));
	
}).call(this);

