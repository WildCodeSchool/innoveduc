(function(m){m.fn.farbtastic=function(h){m.farbtastic(this,h);return this};m.farbtastic=function(h,x){h=m(h).get(0);return h.farbtastic||(h.farbtastic=new m._farbtastic(h,x))};m._farbtastic=function(h,x){var l=this;m(h).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');var y=m(".farbtastic",h);l.wheel=m(".wheel",h).get(0);l.radius=84;l.square=100;l.width=194;navigator.appVersion.match(/MSIE [0-6]\./)&&
m("*",y).each(function(){if("none"!=this.currentStyle.backgroundImage){var l=this.currentStyle.backgroundImage,l=this.currentStyle.backgroundImage.substring(5,l.length-2);m(this).css({backgroundImage:"none",filter:"progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='"+l+"')"})}});l.linkTo=function(h){"object"==typeof l.callback&&m(l.callback).unbind("keyup",l.updateValue);l.color=null;if("function"==typeof h)l.callback=h;else if("object"==typeof h||"string"==typeof h)l.callback=
m(h),l.callback.bind("keyup",l.updateValue),l.callback.get(0).value&&l.setColor(l.callback.get(0).value);return this};l.updateValue=function(h){this.value&&this.value!=l.color&&l.setColor(this.value)};l.setColor=function(h){var m=l.unpack(h);l.color!=h&&m&&(l.color=h,l.rgb=m,l.hsl=l.RGBToHSL(l.rgb),l.updateDisplay());return this};l.setHSL=function(h){l.hsl=h;l.rgb=l.HSLToRGB(h);l.color=l.pack(l.rgb);l.updateDisplay();return this};l.widgetCoords=function(h){var G=m(l.wheel).offset();return{x:h.pageX-
G.left-l.width/2,y:h.pageY-G.top-l.width/2}};l.mousedown=function(h){document.dragging||(m(document).bind("mousemove",l.mousemove).bind("mouseup",l.mouseup),document.dragging=!0);var G=l.widgetCoords(h);l.circleDrag=2*Math.max(Math.abs(G.x),Math.abs(G.y))>l.square;l.mousemove(h);return!1};l.mousemove=function(h){var m=l.widgetCoords(h);l.circleDrag?(h=Math.atan2(m.x,-m.y)/6.28,0>h&&(h+=1),l.setHSL([h,l.hsl[1],l.hsl[2]])):(h=Math.max(0,Math.min(1,-(m.x/l.square)+.5)),m=Math.max(0,Math.min(1,-(m.y/
l.square)+.5)),l.setHSL([l.hsl[0],h,m]));return!1};l.mouseup=function(){m(document).unbind("mousemove",l.mousemove);m(document).unbind("mouseup",l.mouseup);document.dragging=!1};l.updateDisplay=function(){var h=6.28*l.hsl[0];m(".h-marker",y).css({left:Math.round(Math.sin(h)*l.radius+l.width/2)+"px",top:Math.round(-Math.cos(h)*l.radius+l.width/2)+"px"});m(".sl-marker",y).css({left:Math.round(l.square*(.5-l.hsl[1])+l.width/2)+"px",top:Math.round(l.square*(.5-l.hsl[2])+l.width/2)+"px"});m(".color",y).css("backgroundColor",
l.pack(l.HSLToRGB([l.hsl[0],1,.5])));"object"==typeof l.callback?(m(l.callback).css({backgroundColor:l.color,color:.5<l.hsl[2]?"#000":"#fff"}),m(l.callback).each(function(){this.value&&this.value!=l.color&&(this.value=l.color)})):"function"==typeof l.callback&&l.callback.call(l,l.color)};l.pack=function(h){var l=Math.round(255*h[0]),m=Math.round(255*h[1]);h=Math.round(255*h[2]);return"#"+(16>l?"0":"")+l.toString(16)+(16>m?"0":"")+m.toString(16)+(16>h?"0":"")+h.toString(16)};l.unpack=function(h){if(7==
h.length)return[parseInt("0x"+h.substring(1,3))/255,parseInt("0x"+h.substring(3,5))/255,parseInt("0x"+h.substring(5,7))/255];if(4==h.length)return[parseInt("0x"+h.substring(1,2))/15,parseInt("0x"+h.substring(2,3))/15,parseInt("0x"+h.substring(3,4))/15]};l.HSLToRGB=function(h){var l,m=h[0];l=h[1];h=h[2];l=.5>=h?h*(l+1):h+l-h*l;h=2*h-l;return[this.hueToRGB(h,l,m+.33333),this.hueToRGB(h,l,m),this.hueToRGB(h,l,m-.33333)]};l.hueToRGB=function(h,l,m){m=0>m?m+1:1<m?m-1:m;return 1>6*m?h+(l-h)*m*6:1>2*m?l:
2>3*m?h+(l-h)*(.66666-m)*6:h};l.RGBToHSL=function(h){var l,m,y,P,M=h[0],Q=h[1],x=h[2];l=Math.min(M,Math.min(Q,x));h=Math.max(M,Math.max(Q,x));m=h-l;P=(l+h)/2;y=0;0<P&&1>P&&(y=m/(.5>P?2*P:2-2*P));l=0;0<m&&(h==M&&h!=Q&&(l+=(Q-x)/m),h==Q&&h!=x&&(l+=2+(x-M)/m),h==x&&h!=M&&(l+=4+(M-Q)/m),l/=6);return[l,y,P]};m("*",y).mousedown(l.mousedown);l.setColor("#000000");x&&l.linkTo(x)}})(jQuery);
