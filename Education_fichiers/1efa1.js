/*
 Copyright Enideo. All rights reserved
*/
(function(s,C){function P(){}var M=s.document,L=s.setTimeout,w=s.clearTimeout,E=[],G,x,K,n=s.Fd,r=s.Ec,f=s.o;f("a",function(b){x=b("#cb");K=b("#w")});r("P",["b"],function(b){return function(a){function e(a,k){function m(){for(var b=n.wd();n.wd()-b<d.Fc&&(l=a(l),!1!==l););!1===l?(c(),k()):q=L(m,d.Cd)}h?(c(),e(a,k)):(h=!0,b.k("y"),l=d.je);q=L(m,d.Cd/2)}function c(){w(q);h=!1;b.k("x")}var d=$.I({je:0,
Fc:200,Cd:50},a),h,q,l;return{nd:e,Ba:c}}});r("s",function(){function b(a,b){return a<b?-1:a>b?1:0}return{lc:b,rd:function(a,e){return b(a.toLowerCase(),e.toLowerCase())},mc:function(a,b){return b.i-a.i},jc:function(a){for(var b=a.length,c,d;0<--b;)d=n.Mc(b),c=a[b],a[b]=a[d],a[d]=c;return a}}});r("E",["e","q"],function(b,a){b.Wd=function(a){var c=b("ul",{"class":"l"}),d,h;for(h in a.f)d=b("a").b(h),a.Gd&&d.h(h).ja("title",h),a.fc&&a.fc[h].Pa&&
d.Na().c(b("span").b(h).e("font-size",a.fc[h].Pa+"em")),c.c(b("li").c(d));return c};b.ub=function(b){b=$.I({"class":"bg",re:3},b);return a.Ra(b)};return b});r("g",["z"],function(b){function a(a){return function(d){return b($.I({F:1,Oe:function(a){return n.E(a)}},a,d))}}function e(a){for(var b in a)return a[b]}b.f=function(a){var d=a.f,h=b($.I({F:e(d),Cb:function(a){return n.Wb(d,a)}},a));h.f=d;h.Ie=function(a){d[a]&&(delete d[a],h.Da()==a&&h.M(e(d)),h.f=d,h.cf({f:d}))};
return h};b.Pb=function(){return b({F:[255,255,255]})};b.mf=a();b.Ua=a({Cb:function(a){return 0<a}});b.ze=a({Cb:function(a){return 0<=a}});return b});r("k",["d","B","E","p"],function(b,a,e,c){a.Ca=function(){var a,h,q,l;return{ab:function(b){a=e("div",{"class":"T aI"});h=e("a",{"class":"az a bI"});q=e.Wd(b);l=c.Pc(h,q,{ia:a,j:{ma:c.db.vb}});a.c(h);
return a},Bd:{pd:function(a,b){h.b(n.Wb(b.j.f,a))}},yc:{lb:function(a,c){b.t($("a",q),function(){a(c.j.f[$(this).b()],!0);l.T()})}},Be:function(a,b){a.f&&$("a",q).A(function(){var a=$(this),c=a.b();b.f[c]||a.sa().Z()})}}};a.ub={ab:e.ub};return a});r("F",function(){function b(b,d){for(var e=b[0],q=b[0],l=d[0],g=d[0],k,m,p=0,f=0,y=[],f=[],p=0;3>p;p++)b[p]>e&&(e=b[p]),b[p]<q&&(q=b[p]),d[p]>l&&(l=d[p]),d[p]<g&&(g=d[p]);m=e>l?e:l;k=q<g?q:g;for(p=0;3>p;p++)y[p]=2*(b[p]-q)/e-1,f[p]=2*(d[p]-g)/l-
1;p=a(y);f=a(f);f<p&&(f+=2*n.z);return[p,f,k,m]}function a(a){var b=0;a[0]>=a[1]&&a[0]>=a[2]?b=a[2]>=a[1]?b+n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2):b+n.z-n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2):a[1]>=a[0]&&a[1]>=a[2]?(b=2*n.z/3,b=a[0]>=a[2]?b+n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2):b+n.z-n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2)):(b=4*n.z/3,b=a[1]>=a[0]?b+n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2):b+n.z-n.C(n.C(n.z/6)+(1-n.C(n.z/6))*(1-a[2])/2));return b}var e={Gc:1,qb:2};return{oc:e,ne:function(a,
d,h,q,l,g){function k(b){var g,k,t;b!==C&&(l==e.qb?(b=p+(m-p)*(b-q)/(h-q),g=f+(n.ac(b+0)+1)/2*(y-f),k=f+(n.ac(b+4*n.z/3)+1)/2*(y-f),t=f+(n.ac(b+2*n.z/3)+1)/2*(y-f)):(g=d[0]+(a[0]-d[0])*(b-q)/(h-q),k=d[1]+(a[1]-d[1])*(b-q)/(h-q),t=d[2]+(a[2]-d[2])*(b-q)/(h-q)),g=n.n(g),k=n.n(k),t=n.n(t));return isNaN(g)?a:[g,k,t]}var m,p,f,y,v,t;l==e.qb&&(t=b(a,d),m=t[0],p=t[1],f=t[2],y=t[3],p==m&&(l=e.Gc));if(g)for(v=[],t=0;t++<g;)v.push(k((t-1)/(g-1)));t=null;return function(a){return g?(a=n.n(a*(g-1)),a=1<g?q+a*
(h-q)/(g-1):1,v[a*(g-1)]):k(a)}},Ne:function(a){return"#"+(16777216+(a[0]<<16)+(a[1]<<8)+a[2]).toString(16).slice(1)},ie:function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,e){return b+b+c+c+e+e});return(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:null}}});f("m",function(){s.google.load("feeds","1",{nocss:!0,callback:function(){}})});r("R","e b g P s K p".split(" "),
function(b,a,e,c,d,h,q){function l(c){function e(b){function c(a){return a.replace(H," ").replace(l," ").replace(f," ").replace(W,"'").replace(H," ")}var g,h,q="\\[]^$.|?*+()".split(""),l,f,n;b=" "+b+" ";a.k("n");if(v.d()==k.Aa)A=b.split("\n");else{J=new RegExp("["+y.d()+"]","g");n=p.d().replace(/\s/g,"").replace(J,"");g=0;for(h=q.length;g<h;g++)n=n.replace(q[g],"\\"+q[g]);l=new RegExp(" ["+n+"]+","gi");f=new RegExp("["+n+"]+ ","gi");I=c(m.d().toLowerCase()).split(" ").sort(d.lc).sort(d.rd);
A=c(b).split(" ");v.d()!==k.Ha&&(A.sort(d.lc),A.sort(d.rd))}t.nd(O,z)}function O(a){var b,d;d=!0;var c;if(v.d()==k.Aa)return d=A[a].split(B),2==d.length&&(b=h($.P(d[0]),n.E(d[1])),""!==b.b&&g.push(b)),A.length==a+1?!1:a+1;if(a<A.length){b=A[a];if(b.length>=f.d()){for((c=b.toLowerCase())||(d=!1);I[D]<c;)D++;I[D]==c&&(d=!1);for(c=a;c+1<A.length&&b==A[c+1];)c++;b=b.replace(J,String.fromCharCode(160));b=h(b,c-a+1);for(d&&g.push(b);c+1<A.length&&A[c].toLowerCase()==A[c+1].toLowerCase();){for(c=a=c+1;c+
1<A.length&&A[c]==A[c+1];)c++;d&&(b=A[c].replace(J,String.fromCharCode(160)),g[g.length-1].Xb(b,c-a+1))}a=c}return a+1}return!1}function z(){var b,e=g.length;if(0<e){b=g.slice(0).sort(d.mc);b=b[0].i;if(v.d()==k.kb){if(1==b){v.aa(k.Ha);L(n.X(l,c),50);return}v.aa(k.b)}a.k("p",g,{cd:e,pe:b,Xe:v.d()==k.Aa,Ve:v.d()==k.Aa});a.k("u")}}var A,B,J,I,D=0,H=/[ \f\n\r\t\v\u2028\u2029]+/g,W=new RegExp("["+String.fromCharCode(8216)+String.fromCharCode(8217)+
"]","gi");g=[];var r=$.P(c),x=r.match(/[\t,:]\s*[0-9]+\s*$/gim),x=x?x.length:1,w=r.match(/\n/gim),w=w?w.length+1:1E3,E=s.google,C=E?E.feeds:E;r&&(a.k("w"),v.d()==k.kb&&(C&&C.lookupFeed&&0>r.search(/\s/)&&2E3>r.length?v.aa(k.md):x==w&&v.aa(k.Aa)),v.d()==k.md?C.lookupFeed(r,function(d){var g,h;d.error||!d.url?(v.aa(k.kb),e(c.replace(/[,:]/g," "))):(g=new C.Feed(d.url),g.setNumEntries(20),g.load(function(d){var c,k=[],p=b("div");h=(g=d.feed)&&g.entries;if(!d.error&&h&&h.length){d=0;
for(c=h.length;d<c;d++)k.push(h[d].title),k.push(p.Qa(h[d].content).b());G={Ed:g.title,Dd:g.description,ld:r};e(k.join(" "))}else q.Ac("Error retrieving web page"+(d.error?"<br />"+d.error.message:"")),a.k("q")}))}):v.d()==k.Aa?(B=":",(w=r.match(/\t\s*[0-9]+\s*$/gim))&&w.length==x?B="\t":(w=r.match(/,\s*[0-9]+\s*$/gim))&&w.length==x?B=",":(w=r.match(/:\s*[0-9]+\s*$/gim))&&w.length==x&&(B=":"),e(r)):e(c))}var g,k={kb:1,b:2,Ha:3,md:4,Aa:5},m=e({Ab:!0,F:"a also am an and are aren't as at be been but by can can't cannot could couldn't did didn't do does doesn't don't down e.g. for from get gets got had hadn't has hasn't have haven't he he'd he'll he's her him his how however I i.e. I'd I'll I'm I've if in into is isn't it it's its may me might mine must mustn't must've my no not of off on or our ours out shall she she'd she'll she's should shouldn't so such than that that's the their theirs them then there there's these they they'd they'll they're they've this those thus to too up us very was wasn't we we'd we'll we're we've were what when where which who why will with won't would wouldn't you you'd you'll you're you've your yours"}),
p=e({Ab:!0,F:function(){var a,b,d,c,e=[[48,58],[33,48],[58,65],[91,97],[123,126],[161,192],[8208,8232],[8240,8287],[8304,8399],[0,32],[127,161],[8192,8208],[8232,8240],[8287,8303]];p="";a=0;for(b=e.length;a<b;a++)for(d=e[a][0],c=e[a][1];d<c;d++)p+=String.fromCharCode(d);return p=p.replace(/\s/g,"")}()}),f=e.Ua({F:2}),y=e({F:"~_"}),v=e.f({f:k,F:k.kb}),t=c();v.y(function(b){a.k("o",b,k);m.aa(b==k.Ha?"":m.Da());p.aa(b==k.Ha?"":p.Da());f.aa(b==k.Ha?1:f.Da())});return{Pd:function(a){v.M();l(a)},
ff:k,vd:m,ud:p,Yc:f,ve:y}});f(["a","d","p","j","I"],function(b,a,e,c,d){function h(){m=b.P(q.x());!m||0<=g.indexOf(m)?q.x(g[k]):e.qa("Are you sure? This will replace your current text.",0,function(){q.x(g[k]);return!0})}var q=b("#G"),l=b("#aH").Q("a").ob("[href]"),g,k,m,p;a.t(l,function(){k=l.Rc(this);g?h():(p=d("Loading..."),b.de(c.He("/c/7489f.json"),function(a){p.Z();g=a.ex;for(a in g)g[a]=g[a].replace(/\\n/g,"\n");
h()}))})});r("K",["s"],function(b){var a=0;return function(e,c){var d=[],h={i:0,id:a++,g:!1,Xb:function(a,c){h.i+=c;d.push({b:a,i:c});d.sort(b.mc)}};h.Xb(e,c);h.Lc=function(){return d.slice(0)};h.le=function(a){var b,c,e=!1;b=0;for(c=d.length;b<c;b++)if(d[b].b==a){e=!0;break}return!e};return h}});r("v",["b","c","g","D"],function(b,a,e,c){function d(){return{i:!0}}function h(){q.Kb(function(){m.aa(v);p.aa(c.d()[0])})}function q(){a.Xa({g:!0})}
function l(){b.k("i",v);h()}function g(a,b){var d=a.v&&a.v.g&&a.g,c=b.v&&b.v.g&&b.g;return d&&!c?-1:!d&&c?1:b.i-a.i}var k={F:1},m=e.Ua(k),p=e.Ua(k),f=a.Vc(),y,v,q=function(a){function b(){d&&n.m(a,n.ba(arguments))}var d=!0;b.Kb=function(a){d=!1;a();d=!0};return b}(q);m.y(n.X(q));p.y(n.X(q));a.na({g:{ta:function(b,d){if(b.g!=d)return a.pa(l),a.pa(h),d?v++:v--,{g:d}},la:d,Yb:function(a){return a.i||a.g!==C},Va:function(){function b(a){y.push({id:c[a].id,g:!c[a].g})}var c=a.d(d()),
e,k,l=0,n,v;y=[];q.Kb(function(){n=m.zd()?m.d():m.Da();v=p.zd()?p.d():p.Da()});if(c){c.sort(g);e=0;for(k=c.length;e<k;e++)c[e].v&&c[e].v.g?c[e].g&&l++:c[e].i<v?c[e].g&&b(e):l<n?(c[e].g||b(e),l++):c[e].g&&b(e);f.M(y);a.pa(h)}},ya:function(a){if(f.d(a.id)!==C)return y[f.d(a.id)].g}}});b("c",function(a){v=0;q.Kb(function(){m.M(a.Ve?a.cd:100);p.M(1)});q()});b("d",function(){h()});return{bc:m,mb:p,ee:function(){return v}}});f(["b","c"],function(b,
a){function e(){a.pa(c)}function c(){a.Xa({V:!0})}var d;a.na({V:{ya:function(a){if(a.g&&d)return d.indexOf(a.i)+1}}});b("i",e);b("d",function(a){d=a;e()})});f(["c","n"],function(b,a){b.na({b:{Ga:function(b,c){var d,h,q;if(!b.v||!b.v.b)if(h=b.R)if(c.R&&(q=h),c.va&&(d=b.va))q=d=a.Le(h,d);if(q&&q!==b.b)return q},pb:function(a){return a.va},la:function(){return{va:!0,R:!0}}}})});r("n",["g","c"],
function(b,a){function e(a,b){var e;a.R&&(e=c(a.R,b),b=e==a.b?d.hb:b);if(a.va!=b)return e={va:b}}function c(a,b){return b==d.Fb?a.toLowerCase():b==d.Eb?a.toUpperCase():a}var d={hb:1,Fb:2,Eb:3},h=b.f({f:d});a.na({va:{ta:e,ya:function(){return h.d()},Ga:function(a){if(!a.va&&a.R)return h.d()}}});h.y(function(){a.Xa({va:!0})});return{Te:function(a,b){var g,h;g=d.hb;h=[d.Fb,d.Eb];for(var m in h)if(c(a,h[m])===a){g=h[m];break}h=g;g=e(b,h);return h!==d.hb?g:{}},ef:d,Le:c,p:h}});f(["c","n"],
function(b,a){b.na({R:{ta:function(b,c){var d;if(b.b!=c)return b.le(c)&&b.Xb(c,0),b.R&&b.R.toLowerCase()==c.toLowerCase()&&(d=a.Te(c,b)),b.R!=c&&(d=d||{},d.R=c),d},Ga:function(a){if(!a.R)return a.Lc()[0].b}}})});f(["c"],function(b){b.na({i:{}})});r("w",["b","g","c","s"],function(b,a,e,c){function d(){return{b:g.d()==g.f.eb,i:g.d()==g.f.ib}}function h(a,b){return c.lc(a.b.toLowerCase(),b.b.toLowerCase())}function q(a,b){return a.Y-b.Y}
var f={W:1,ib:2,eb:3},g=a.f({f:f,F:f.W}),k=e.Vc(),m;g.y(function(){m=!0;e.Xa({Y:!0})});b("c",function(a){a.Xe||g.M()});e.na({Y:{Va:function(){var a=e.d(d());if(a){a.sort(q);a:{var b=g.d(),n=m;if(b==f.ib)n&&(a=c.jc(a)),a.sort(c.mc);else if(b==f.eb)n&&(a=c.jc(a)),a.sort(h);else if(b==f.W&&n)a=c.jc(a);else{a=void 0;break a}}a&&k.M(a);m=!1}},ya:function(a){return k.d(a.id)},Yb:function(a){return a.b&&g.d()==g.f.eb||a.i&&g.d()==g.f.ib},la:d}});return{p:g}});r("J",["b",
"g","r","c","F"],function(b,a,e,c,d){function h(){var a=0,b=t.d();f=p.kd();f==u.f.W&&(a=v.d());g=d.ne(k.d(),m.d(),p.td(),p.Ad(),b,a)}function q(a){if(a.g)return a=p.Kc(a),g(a)}var f,g,k=a.Pb(),m=a.Pb(),p=e({Ob:!0}),u=p.p;e=p.$c;var y=p.la,v=a.ze({F:5}),t=a.f({f:d.oc,F:d.oc.qb});t.y(e);k.y(e);m.y(e);v.y(e);c.na({Ob:{Ga:function(a,b){if(p.Ic(a,b))return p.Zc()&&h(),q(a)},la:y,Va:h,ya:q}});b("f",function(){t.v(n.Nc(t.f))});return{fb:k,cc:m,
bd:v,S:u,Ib:t}});r("y",["b","g","r","c"],function(b,a,e,c){function d(){q=m.d();f=p.d();u.kd();k=u.Ad();g=u.td()}function h(a){var b;if(a.g)return a=u.Kc(a),a!==C&&(b=n.n(f+(q-f)*(a-k)/(g-k))),isNaN(b)&&(b=q),b}var q,f,g,k,m=a.Ua({F:60}),p=a.Ua({F:15}),u=e({kc:!0}),y=u.p;a=u.$c;e=u.la;y.M(y.f.ka);m.y(a);p.y(a);c.na({kc:{Ga:function(a,b){if(u.Ic(a,b))return u.Zc()&&d(),h(a)},la:e,Va:d,ya:h}});b("o",function(a,b){y.aa(a==b.Ha?y.f.W:y.f.ka)});
return{qe:m,se:p,S:y,d:h}});r("L",["b"],function(b){function a(a,b,d,c){var e={fa:n.n(a),r:n.n(b),ua:n.n(d),wa:n.n(c),uc:function(m,f){e.cb=m;e.Ia=f;d>f&&c>f&&(e.Ia=c);d<f&&(e.Ia=d);b>m&&a>m&&(e.cb=a);b<m&&(e.cb=b);var u=m-e.cb,y=f-e.Ia;e.Xc=n.oe(u*u+y*y)}};return e}var e,c,d;b("g",function(){e=n.E($("#C").b());c=n.E($("#B").b());d=n.E($("#aG").x())});return{Xd:function(b,f,l,g,k,m){var p,u,y=0,y=[],v=[];p=e;u=c;
p=0;for(u=l.length;p<u;p++)y.push({fa:n.n(l[p].fa-b/2-g),r:n.n(l[p].r+b/2+g),ua:n.n(l[p].ua+g),wa:n.n(l[p].wa-g)});l=a(-k/2+d+b/2,k/2-d-b/2,m/2-d-f/2,-m/2+d+f/2);v.push(l);p=0;for(u=y.length;p<u;p++){var t=y[p];g=void 0;k=[];m=t.fa;var s=t.r,F=t.ua,t=t.wa;for(g=0;g<v.length;g++){var r=v[g],z=r.fa,A=r.r,B=r.ua,r=r.wa,J,I,D,H;J=I=D=H=-1;s>z&&(I=0);s>A&&(I=1);m>z&&(J=0);m>A&&(J=1);F>r&&(D=0);F>B&&(D=1);t>r&&(H=0);t>B&&(H=1);if(!I&&-1==J&&!D&&-1==H)k.push(a(z,A,B,F),a(s,A,F,r));else if(!I&&-1==J&&!D&&
!H)k.push(a(z,A,B,F),a(s,A,F,t),a(z,A,t,r));else if(!I&&-1==J&&1==D&&-1==H)k.push(a(s,A,B,r));else if(!I&&-1==J&&1==D&&!H)k.push(a(s,A,B,t),a(z,A,t,r));else if(!I&&!J&&!D&&-1==H)k.push(a(z,A,B,F),a(s,A,F,r),a(z,m,F,r));else if(!(I||J||D||H))k.push(a(z,A,B,F),a(s,A,F,t),a(z,m,F,t),a(z,A,t,r));else if(!I&&!J&&1==D&&-1==H)k.push(a(s,A,B,r),a(z,m,B,r));else if(!I&&!J&&1==D&&!H)k.push(a(s,A,B,t),a(z,m,B,t),a(z,A,t,r));else if(1==I&&-1==J&&!D&&-1==H)k.push(a(z,A,B,F));else if(1==I&&-1==J&&!D&&!H)k.push(a(z,
A,B,F),a(z,A,t,r));else if(1!=I||-1!=J||1!=D||-1!=H)if(1!=I||-1!=J||1!=D||H)if(1!=I||J||D||-1!=H)if(1!=I||J||D||H)if(1!=I||J||1!=D||-1!=H)if(1!=I||J||1!=D||H)continue;else k.push(a(z,m,B,t),a(z,A,t,r));else k.push(a(z,m,B,r));else k.push(a(z,A,B,F),a(z,m,F,t),a(z,A,t,r));else k.push(a(z,A,B,F),a(z,m,F,r));else k.push(a(z,A,t,r));v.splice(g,1);g--}v=v.concat(k)}if(v.length){y=0;v[0].uc(e,c);p=1;for(u=v.length;p<u;p++)v[p].uc(e,c),v[p].Xc<v[y].Xc&&(y=p);v[y].r-v[y].fa==l.r-l.fa?(p=v[y].cb+n.$b()*b-
b/2,p>v[y].r?p=v[y].r:p<v[y].fa&&(p=v[y].fa)):p=v[y].cb;v[y].Ia==c?(u=v[y].Ia+n.$b()*f-f/2,u>v[y].ua?u=v[y].ua:u<v[y].wa&&(u=v[y].wa)):u=v[y].Ia;p=n.n(p);u=n.n(u);return{we:p,xe:u}}}}});r("c",["a","b"],function(b,a){function e(a,b,d){var c={};if(b[a]!=d)return c[a]=d,c}function c(a){var d;t&&(d=a===C?b.I(!0,[],t):b.I(!0,{},t[s.d(a)]));return d}function d(b,d){if(t){var e,g,f={},k;g=n.ba(arguments,2);e=s.d(b);if(g=n.m(d,[t[e]].concat(g))){for(k in g)t[e][k]=g[k],f[k]=g[k];
f=h(e,g,f);e=c(b);a.k("k",f,e);A&&(A=f)}return g}}function h(a,b,d){var c=!1,e,g,f={};for(e in B.Ga)if(g=B.Ga[e](t[a],b))t[a][e]=g,f[e]=g,d[e]=g,c=!0;c&&(d=h(a,f,d));return d}function f(a){var b,d={};for(b in B.Yb)B.Yb[b](a)&&(d[b]=!0);return d}function l(d){for(var c in d){var e=r,h=c;-1==e.indexOf(h)&&e.push(h)}c=b.I({},d);c=g(d,c);a.k("t",c)}function g(a,b){var d,c={},e=!1;for(d in B.pb)B.pb[d](a)&&(c[d]=!0,e=b[d]=!0);e&&(b=g(c,b));return b}function k(a){var b,d=
{},c={};for(b in a)!0===a[b]&&(d[b]=1,c[b]=!0);a=u(c,d,2);d={};for(b=p(a);b;)c={},c[b]=!0,d[b]=!0,d=m(c,d),y(),b=p(a)}function m(a,b){var c,e,g,h,f,k=!1,q={};for(g in a){c=r.indexOf(g);0<=c&&r.splice(c,1);if(B.Va[g])B.Va[g]();if(B.ya[g])for(c=0,e=t.length;c<e;c++)h=t[c],f=B.ya[g](h),f!==C&&d(h.id,B.ta[g],f)}for(g in B.pb)B.pb[g](a,r)&&(q[g]=!0,k=b[g]=!0);k&&(b=m(q,b));return b}function p(a){var b,d,c=0;for(b in a)0<=r.indexOf(b)&&c<a[b]&&(d=b,c=a[b]);return d}function u(a,b,d){var c,e,g,h=!1,f={};
for(c in a)if(B.la[c])for(g in e=B.la[c](a),e)e[g]&&(f[g]=!0,b[g]=d,h=!0);h&&(b=u(f,b,d++));return b}function y(){for(;x.length;)n.m(x.shift())}function v(){function a(){var c,e;d={};c=0;for(e=b.length;c<e;c++)d[b[c].id]=c;b=null}var b,d;return{M:function(a){d=null;b=a},uf:a,d:function(b){d||a();return d[b]}}}var t,s=v(),r=[],x=[],z,A,B={ta:{}};a("p",function(b,d){var c,e;t=b;s.M(t);c=0;for(e=t.length;c<e;c++)h(c,t[c],t[c]);a.k("c",d)});return{d:function(a,
b){k(a);return c(b)},na:function(a){var b,c;for(b in a){for(c in a[b])B[c]=B[c]||{},B[c][b]=a[b][c];B.ta[b]||(B.ta[b]=n.za(e,b))}},qd:function(b){(z=b)||0===z?a.k("a",z):a.k("v")},Bb:function(e){var g,h,m;if(0<=z){h={};for(m in e)h[m]=!0;k(h);g={};A={};for(m in e)B.ta[m]&&(h=d(z,B.ta[m],e[m]))&&b.I(g,h);e=A;A=null;g=={}&&(g=null);g&&d(z,function(a){var b;a={v:a.v||{}};for(b in g)a.v[b]=!0;return a});P(c(z));a.k("e",e,c(z));l(f(e));y();return g}},
Xa:l,Vd:k,pa:function(a){var b=x;-1==b.indexOf(a)&&b.push(a)},Vc:v}});r("D",["b","c"],function(b,a){function e(b){var c=l.indexOf(b);-1==c?(l.push(b),g.push(1),a.pa(d)):g[c]++}function c(b){b=l.indexOf(b);g[b]--;g[b]||(l.splice(b,1),g.splice(b,1),a.pa(d))}function d(){var a=h();b.k("d",a)}function h(){return n.ba(l).sort(f)}function f(a,b){return a-b}var l,g,k;b("c",function(){l=[];g=[]});b("a",function(b){k=a.d({i:!0},
b).i});b("v",function(){k=null});b("k",function(a,b){a.i?(k&&c(k),e(b.i)):a.g?e(b.i):!1===a.g&&c(b.i)});return{d:h}});r("r",["b","g","c"],function(b,a,e){var c={ka:1,V:2,W:3,ad:4},d,h,f;b("d",function(a){f=a.length;d=a[0];h=a[f-1]});return function(l){function g(a){return 1==a?y:2==a?v:p}function k(){p=!0;e.Xa(l)}var m,p=!0,u=a.f({f:c,F:c.W}),y,v,t;for(m in l);u.y(k);b("d",function(){u.d()!=
c.ka&&u.d()!=c.V||e.pa(k)});return{p:u,$c:k,la:function(){return{i:u.d()==c.ka,V:u.d()==c.V}},kd:function(){p=!1;t=u.d();t==c.W?(v=0,y=1):t==c.ka?(v=d,y=h):t==c.V&&(v=1,y=f);return t},td:n.X(g,1),Ad:n.X(g,2),Kc:function(a){var b;t==c.ka?b=a.i:t==c.V?b=a.V:t==c.W&&(b=n.$b());return b},Zc:n.X(g,3),Ic:function(a,b){t=u.d();return b.g||a.g&&(b.i!==C&&t==c.ka||b.V!==C&&t==c.V)}}}});r("M",["b","g","J"],function(b,a,e){function c(a){return a[0]>a[1]?a[0]>a[2]?0:
2:a[1]>a[2]?1:2}function d(a,b){var c=[],d;for(d=0;3>d;d++)c[d]=a+n.n((b-a)*n.Fe());return c}var h=a.Pb();b("f",function(){var a,b,g=d(173,255);a=d(0,86);var f=d(87,172);n.Mc(2)?(h.v(g),e.fb.v(a),a=c(a),b=c(f),g=f):(h.v(a),e.fb.v(f),a=c(f),b=c(g));a==b&&g.push(g.shift());e.cc.v(g)});return{Lb:h,Bc:function(a){return"rgb("+a.join(",")+")"}}});r("A","a e b P c v M L N".split(" "),
function(b,a,e,c,d,h,f,l,g){function k(a,b){return a.g&&!b.g?-1:!a.g&&b.g?1:a.Y-b.Y}var m=c({Fc:100});return function(c){m.Ba();c&&e.k("f");var u,y,v,t=b("#aF"),r,s;r=d.d({b:!0,g:!0,Y:!0,Ob:!0,kc:!0});s=h.ee();r.sort(k);r=r.slice(0,s);e.k("g",s);x.Na();E=[];u=x.da();y=x.U();v=n.Wb(g.p.f,g.p.d());m.nd(function(c){var d,h,k,m,p,D,H,w;if(c<r.length){w=r[c];d=a("a",{title:w.b,"class":"cloudword bw bj"}).O("a",
E.length).b(w.b);x.c(d);h=w.kc;k=.5*h;h*=g.Ma[v].Pa||1;d.e("font-size",h).h(v);m=d.N();p=d.G();if(H=l.Xd(m,p,E,k,u,y))k=H.we,D=H.xe;else return e.k("r",w),d.Z(),c+1;H=w.Ob;h={b:w.b,$e:h,N:m,G:p,vf:k,wf:D,hc:H,$d:v,fa:n.n(k-m/2),r:n.n(k+m/2),ua:n.n(D+p/2),wa:n.n(D-p/2)};h.D=u/2+h.fa;h.ha=y/2-h.ua;d.e("color",f.Bc(H)).e("left",h.D).e("top",h.ha).u("bj");E.push(h);t.b(E.length);b("#aE").b(n.n(100*E.length/s));return c+1}return!1},
function(){s>E.length?t.h("z"):t.u("z");e.k("l")})}});r("N",["a","e","b","g","k"],function(b,a,e,c,d){var h={"sans-serif":{dc:!0},serif:{dc:!0},monospace:{dc:!0},Daniel:{},Essays1743:{},Gentium:{},"Gruenewald-VA":{Pa:1.6},Isabella:{Pa:1.2},Jura:{Pa:1.2},Sniglet:{},Yiggivoo:{}},f={},l,g,k=[],m=a("div",{id:"ck"}),p=!0,u;u=1;for(l in h)f[l]=u++,h[l].dc?
k.push(l):m.c(a("span",{"class":l}).b(l));g=c.f({f:f});d({L:d.Ca,j:{f:f,Gd:!0,fc:h},p:g}).J("#aD");b("#j").c(m);e("f",function(){g.v(n.Nc(g.f))});e("n",function(){p&&(p=!1,m.Q().A(function(){var a=b(this).e("font-size","100px"),c=b.P(a.b()),d=!0,e=a.N(),h=a.G(),f=k.length;for(a.u(c);d&&f--;)a.h(k[f]),e==a.N()&&h==a.G()&&(d=!1),a.u(k[f]);a.h(c).rb("style");d||(g.Ie(c),a.Z())}),e.k("f"))});return{p:g,
Ma:h}});f("a e d b V p S T I i M".split(" "),function(b,a,e,c,d,h,q,l,g,k,m){function p(){var c,e,k=a("input",{type:"text",name:"title"}),r=a("textarea",{name:"description"}),s=a("input",{type:"text",name:"title"}),w=a("label",{"class":"bl"}),z=a("form").c(w.La().c(a("input",{type:"radio",name:"a",value:"Public",checked:"checked"})).c("Public")).c(w.La().c(a("input",{type:"radio",
name:"a",value:"Private"})).c("Private")),A=a("input",{type:"text",name:"email"});u?h.qa(a("p").b("You've already saved this word cloud and we've sent an email to ").c(a("span",{"class":"monospace"}).b(G.Tb)).c(a("br")).c("Press okay only if you want to save it twice."),"Word cloud already saved",function(){u=!1;p();return!0}):(e=a("label",{title:"Give a short name or title for your word cloud","class":"A"}).b("Title").c(k).w(a("label",{title:"Perhaps you would like to describe your word cloud a little",
"class":"A"}).b("Description").c(r)).w(a("label",{title:"You may add a link to a website","class":"A"}).b("Related web page").c(s)).w(a("fieldset",{title:"Public word clouds are available to everyone. Private word clouds are only available to those who have the unique link that you will give them","class":"A"}).c(a("label").b("Sharing")).c(z)).w(a("div",{title:"We need to send you important links.","class":"A N"}).c(a("label").b("Email address")).c(A).c(a("span",
{"class":"aE K"}).b(" WordItOut sends you emails to manage your word clouds without passwords. Your address is never shared with others. ").c(a("a",{href:"/community/questions#faq-privacy",target:"_blank"}).b("Learn more")))),c=h.qa(e,"Save your word cloud",function(){var a=b.P(k.x()),h=b.P(r.x()),p=b("input:checked",z).x(),q=b.P(A.x()),l,w,C=x.N(),K=x.G()/C,L=m.Lb.d(),O=b.P(s.x()),M=[],P=[],Q=[],T=[],U=[],V=[],R=[],S=[];if(q)if(A.ca("an"))if(b(".z",
e).length)g("You've put too many letters here"),b(".z",e).xa(1).B();else{g("Saving...");C=n.n(C);O&&0>O.indexOf("http://")&&0>O.indexOf("https://")&&(O="http://"+O,s.x(O));G||(G={});G.Tb=q;l=0;for(w=E.length;l<w;l++)M.push(E[l].b),P.push(n.n(E[l].$e)),Q.push(n.n(E[l].D)),T.push(n.n(E[l].ha)),U.push(E[l].$d),V.push(n.n(E[l].hc[0])),R.push(n.n(E[l].hc[1])),S.push(n.n(E[l].hc[2]));f("x",function(b){b(["action","newWordCloud","canvasWidth",C,"canvasAspectRatio",K,"canvasRgb[]",
L,"text[]",M,"fontSize[]",P,"positionLeft[]",Q,"positionTop[]",T,"fontFamily[]",U,"red[]",V,"green[]",R,"blue[]",S,"relatedUrl",O,"wordCloudTitle",a,"wordCloudDescription",h,"wordCloudAccess",p,"userEmailAddress",q],{xb:function(){c.T();u=!0;d("Create","Saving","ok")}})})}else g("Please check you've typed your email address correctly"),A.B();else g("You haven't put in an email address"),A.B()},{Ae:{b:"Save",type:"G"}}),G?(G.Ed&&k.x(G.Ed),G.Dd&&r.x(G.Dd),G.ld&&s.x(G.ld),G.Tb?(A.x(G.Tb),
k.B()):A.B()):k.B(),l(k.w(r)),q(A))}var u=!1;e.t("#aC",p);c("m",function(){k.Ce(function(){if(!u)return"Your current word cloud has not been saved and will be lost."})});c("l",function(){u=!1})});f(["a","e","d","b"],function(b,a,e,c){b(".F").A(function(){var d=b(this),h=a("a",{title:"Plus 1","class":"y"}),f=a("a",{title:"Minus 1","class":"w"}),h=h.w(f);
e.t(h,function(){var a=b(this),e=n.E(d.b());a.ca("y")?e+=1:0<e&&(e-=1);d.b(e);c.k(".F",e,d)});d.Ja(h)})});f(["a","d","b","i"],function(b,a,e,c){function d(){c.Qe(K.K().ha)}var h=!0,f=0,l=b("#a a").A(function(c){a.t(this,function(){c!==f&&(b(".bh").h("c").xa(c).u("c"),l.u("m").xa(c).h("m"),f=c,e.k("h",c))})});e("n",
function(){h&&(h=!1,b(".ci").Z(),b("#w,.aC").u("c"),e.k("m"));l.xa(3).xd("click");d()});a.t(".bS>.v",d)});f(["a"],function(b){function a(){var e,c;K.ea(":visible")?(e="Resize the word cloud by simply dragging the sides;Set a different target for the centre of the word cloud;Change the text to display with the word list tab;Customise the words or characters to be removed with the text settings tab;Embed the word clouds once you've saved them;When saved, word clouds will be automatically stretched or shrunk to fit".split(";"),
c=3E4):(e="Use ~ or _ to keep words in a sentence together;Enter a website address to use its feed as the source text;Just type in a sentence and automagically create a word cloud;Make a custom data cloud with a two column table (see examples);Tweak the text later with the word list tab;Customise the words or characters to be removed later with the text settings tab".split(";"),c=1E4);b("#aB").b(n.fe(e));L(a,c)}a()});f("a e d b R I k t".split(" "),
function(b,a,e,c,d,h,f,l){var g=b("#G"),k=b("#az"),m=b("#ay"),p=b("#ax");g.Ja(a("a",{tabindex:0}).B(function(){m.B()}));c("h",function(a){a||b("#G:visible").B()});c(".F",function(a,b){b.ea(p)&&d.Yc.v(a)});d.Yc.y(function(a){p.b(a)});f({L:f.Ra,j:{name:"nbsps"},p:d.ve}).J("#aw");c("o",function(a,b){a==b.Aa?k.u("c"):k.h("c")});c("w",
l.Ze);c("q",l.wb);f({L:f.$a,j:{name:"stopwords"},p:d.vd}).J("#av");e.t("#au",n.X(d.vd.M));f({L:f.$a,j:{name:"stopchars"},p:d.ud}).J("#at");e.t("#as",n.X(d.ud.M));e.t(m.w("#ar"),function(){var a=g.x();b.P(a)?d.Pd(a):(h("Please insert some text"),g.B())})});f(["k","w"],function(b,a){b({L:b.Ca,j:{f:{Count:a.p.f.ib,"Alphabetical order":a.p.f.eb,Randomly:a.p.f.W}},
p:a.p}).J("#aq")});f(["a","b","v"],function(b,a,e){var c=b("#ap"),d=b("#ao");a(".F",function(a,b){b.ea(c)?e.bc.v(a):b.ea(d)&&e.mb.v(a)});a("i",function(a){b("#an").b(a)});a("g",function(a){b("#am").b(a)});e.bc.y(function(a){c.b(a)});e.mb.y(function(a){d.b(a)});a("c",function(a){b("#al").b(a.pe)})});
r("O","a e d b c v Z A".split(" "),function(b,a,e,c,d,h,f,l){function g(){x?m():(w=!0,f(t))}function k(){r&&(r=null,t.Na(),w=!1,c.k("C"))}function m(){var g=0,f,l,q,n,x,w=0;if(s){k();r=[];v=[];f=h.mb.d();l=h.bc.d();q=a("div",{id:"ch"});if(!z||z>f)z=f;f=d.d({Y:!0,i:!0,b:!0,id:!0,g:!0});for(f.sort(function(a,b){var c=a.Y-b.Y;a.i>=z&&b.i<z?c=-1:b.i>=z&&a.i<z?c=1:a.i<z&&
b.i<z&&a.i!=b.i&&(c=b.i-a.i);return c});w<f.length;)if(200==u&&g>=l&&f[w].i<z||w<.9*f.length&&g>=l&&w>=u){u=w;break}else f[w].g&&g++,x=a("a",{"class":p(f[w]).w}).O("I",f[w].id).b(f[w].b),q.c(x),r.push(x),v.push(f[w].id),w++;f.length>w&&(n=a("a",{id:"cg",title:"Show more"}).b(" ... "),q.c(n),e.t(n,function(){u+=200;m()}));t.c(q);c.k("j",b("a",q).ob(n))}}function p(a){var b=[],c=[];a.g!==C&&(a.g?b.push("S"):c.push("S"),a.v&&
a.v.g&&(a.g?b.push("ai"):c.push("ai"),a.g?c.push("al"):b.push("al")));return{w:b.join(" "),Z:c.join(" ")}}e.t("#ak",n.X(l));var u,r,v,t=b("#y"),s=!1,x=!0,w,z;c("h",function(a){2==a?(s=!0,u=200,z=null,r||m()):s=!1});c("c",function(a){z=null;k();b("#aj").b(a.cd)});c("t",function(a){if(s){if(a.Y||a.b)a.Y&&(z=null,u=200),
g();a.g&&d.Vd({g:!0})}});h.mb.y(function(a){a<z&&g()});c("k",function(a,c){var e,h;r&&a.g!==C&&(e=v.indexOf(c.id),0<=e?(e=b(r[e]),h=e.ca("S"),(h=!c.g&&h||c.g&&!h)&&f(e.af("S"))):d.pa(g))});return{Ue:p,Hc:function(a){a=!a;x!=a&&(x=a)&&w&&m()}}});r("Z",["a","b"],function(b,a){function e(a){q=q.w(a);a.h("X");c()}function c(){l&&(w(f),f=L(d,1500))}function d(){q.u("X");q=b()}var f,
q=b(),l=!0;a("j",function(){d()});e.sc=function(a){l=a;c()};return e});r("H","a d b c O Z i".split(" "),function(b,a,e,c,d,f,q){var l=b("#z"),g,k=!1,m=!1;e("j",function(d){a.Ea(d,function(){m||(g&&g.u("ab"),g=b(this).h("ab"),c.qd(b(g).O("I")))})});e("a",function(){var a=g.ma(),c=a.ha+g.U();b(q.be()).Jb();k||(k=!0,d.Hc(!0),f.sc(!1));l.e({left:a.D-
a.D/q.od*l.N(),top:c}).u("c")});e("e",function(a,b){var c;c=d.Ue(b);f(g.h(c.w).u(c.Z));a.b&&g.b(a.b)});a.Zb("#x",function(){m||(k&&(k=!1,d.Hc(!1),l.h("c"),f.sc(!0)),g&&(g.u("ab"),g=null),c.qd(null))});return{Dc:function(a){m=a}}});f(["a","b","c"],function(b,a,e){var c=b("#ai");a("a",function(a){c.b(e.d({i:!0},a).i)});a(".F",function(a,b){b.ea(c)&&e.Bb({i:a})})});
f(["a","e","d","b","c"],function(b,a,e,c,d){function f(b){g.c(e.t(a("a").b(b+" "),l))}function q(a){g.Q().A(function(){var c=b(this);b.P(c.b())==a?c.h("c"):c.u("c")})}function l(){var a=b(this),c=b.P(a.b());d.Bb({R:c});a.Jb()}var g,k;c("a",function(c){var e,l=d.d({b:!0},c);k=l.Lc();g=a("span");c=0;for(e=k.length;c<e;c++)k[c]=k[c].b,f(k[c]);q(l.b);b("#A").Na().c(g)});c("e",function(a){k&&
a.b&&(-1==k.indexOf(a.b)&&(k.push(a.b),f(a.b)),q(a.b))})});f(["a","b","c","H"],function(b,a,e,c){function d(){f.e("width",f.x().length+"em")}var f=b("#t");a("a",function(a){f.x(e.d({b:!0},a).b);d()});f.B(function(){c.Dc(!0)}).Jb(function(){var a=b.P(f.x());c.Dc(!1);a&&e.Bb({R:a})}).H("keypress",d);a("e",function(a){a.b&&(f.x(a.b),d())})});f(["a","d","b","c"],
function(b,a,e,c){function d(a){(f=a.g)?n.b("Remove").ja("title","Remove this from the word cloud"):n.b("Include").ja("title","Include this in the word cloud")}var f,n=b("#ah");e("a",function(a){a=c.d({g:!0},a);d(a)});e("e",function(a){a.g!==C&&d(a)});a.t(n,function(){c.Bb({g:!f})})});f(["k","n"],function(b,a){b({L:b.Ca,j:{f:{"Most common":a.p.f.hb,lowercase:a.p.f.Fb,UPPERCASE:a.p.f.Eb}},p:a.p}).J("#ag")});
f("a d b p G A".split(" "),function(b,a,e,c,d,f){function n(){l?c.qa("You may lose changes you have made to colours and type of font",0,function(){l=!1;n();return!0}):f(!0)}var l=!1;a.t("#af",n);a.t(".cf",function(){b(this).ca("ce")&&(l=!0);f()});e("m",d);e("u",f)});f(["k","y"],function(b,a){b({L:b.Ca,j:{f:{Count:a.S.f.ka,Level:a.S.f.V,
Randomly:a.S.f.W,"No variation":a.S.f.ad}},p:a.S}).J("#ae");b({L:b.ub,j:{name:"maxFont"},p:a.qe}).J("#ad");b({L:b.ub,j:{name:"minFont"},p:a.se}).J("#ac")});f("a e b k F J M p".split(" "),function(b,a,e,c,d,f,n,l){function g(a,c){c=n.Bc(c);return b(a).e("background-color",c)}var k=b("#ab"),m=b(".D"),p,r,s=b("#aa"),v=
b("#Z"),t,w=a("div"),F,C={Count:f.S.f.ka,Level:f.S.f.V,Randomly:f.S.f.W,"No variation":f.S.f.ad},z={Rainbow:f.Ib.f.qb,Direct:f.Ib.f.Gc};f.S.y(function(a){a==f.S.f.W?s.u("c"):s.h("c")});e(".F",function(a,b){b.ea(v)&&f.bd.v(a)});f.bd.y(function(a){v.b(a)});c({L:c.Ca,j:{f:C},p:f.S}).J("#Y");c({L:c.Ca,j:{f:z},p:f.Ib}).J("#X");m.Wa(a("span"));F=l.Me(m,k.u("c"),{ic:function(){var a;t||(t=b.farbtastic(k));if(p=
F.ae())a=p.ja("id"),r="cd"==a?f.fb:"cc"==a?f.cc:n.Lb,t.linkTo(p),t.setColor(d.Ne(r.d()))},ra:function(){p&&(r.v(d.ie(t.color)),t.linkTo(w))},j:{ma:l.db.vb}});f.fb.y(function(a){g(g("#cd",a).Q(),a)});f.cc.y(function(a){g(g("#cc",a).Q(),a)});n.Lb.y(function(a){g(g("#U",a).Q(),a);g(x,a)})});f(["a","e","b","G","i"],function(b,a,e,c,d){function f(){var a=b("#cb"),
c=a.U(),a=a.da();b("#T").b(a);b("#S").b(c);c>=a?(b("#F").b(n.n(a/c*100)/100),b("#D").b(n.n(c/c*100)/100)):(b("#F").b(n.n(a/a*100)/100),b("#D").b(n.n(c/a*100)/100))}function q(){b(".bt:visible").A(function(){var a=b(this),c=a.K().D,d=a.Ta();a.tb(".o.ak").N(d).e("left",c);a.tb(".o.U").G(a.Sa()).e("left",
c+d)})}var l=a("a",{"class":"o",title:"Click to drag and resize"});b(".ak").Ja(l.La().h("ak").b("\u25bc"));b(".U").Md(l.La().h("U").c(a("span").b("\u25b6")));b(".o").te(function(){var a=b(this),e=a.tb(".o"),m=a.tb(".bt"),l=m.Sa()-m.U(),q=n.E(m.K().ha),r,s,t="cb"==m.ja("id");t&&(r=m.U(),s=m.da());b(M).H("mousemove",
function(w){var x=w.pageX;w=w.pageY;if(a.ca("ak")){if(m.G(n.Wc(100,w-q-l-4)),e.G(m.Sa()),e.e("left",m.K().D+m.Ta()),t){var x=c()[1],C=(m.U()-r)*(x-q)/m.U();m.Q().A(function(){b(this).e("top",parseFloat(b(this).e("top").replace("px",""))+C)});r=m.U()}}else if(a.ca("U")){if(t&&x>.95*d.od-20)return!1;m.N(n.Wc(100,x-m.K().D-4));a.e("left",m.K().D+m.Ta()-1);e.N(m.Ta()).e("left",m.K().D);if(t){w=c()[0];var x=n.E(m.K().D),z=(m.da()-s)*(w-x)/m.da();
m.Q().A(function(){b(this).e("left",parseFloat(b(this).e("left").replace("px",""))+z)});s=m.da()}}f();return!1});b(M).H("mouseup",function(){var a;b(M).bb("mousemove");b(M).bb("mouseup");if(t){var d=c(),e=d[1],d=d[0];a=n.E(m.K().D);var g=(m.da()-s)*(d-a)/m.da(),k=(m.U()-r)*(e-q)/m.U();m.Q().A(function(){var a=b(this),c=parseFloat(a.e("left").replace("px",""))+g,d=parseFloat(a.e("top").replace("px",""))+k,a=a.e("left",c).e("top",d).O("a");E[a].D=n.E(c);E[a].ha=n.E(d)});f()}return!1});return!1});q();
e("b",q);f();e("h",function(){q()})});r("G",["a","d","A"],function(b,a,e){function c(){var a=n.E(q.b()),b=n.E(l.b()),c=x.da()/2,e=x.U()/2,f=x.K();a>c?(a=n.E(c),q.b(a)):-1*a>c&&(a=n.E(-1*c),q.b(a));b>e?(b=n.E(e),l.b(b)):-1*b>e&&(b=n.E(-1*e),l.b(b));a=f.D+c+a;b=f.ha+e-b;d.e("left",a-15);d.e("top",b-15);return[a,b]}var d=b("#r"),f=b("#P"),q=b("#C"),l=b("#B"),g=b("body"),k=b("#cb,#r");
a.t("#M",function(){var a=b("#cb a");a.Oc();d.sb();f.u("c");k.h("aG").H("click.setTarget",function(a){c();q.b(n.n(a.pageX-x.K().D-x.da()/2));l.b(-1*n.n(a.pageY-x.K().ha-x.U()/2));e()});g.H("click.setTarget",function(){d.Jc();f.h("c");k.u("aG").bb("click.setTarget");a.sb();g.bb("click.setTarget");c()});return!1});return c});f(["a","e","b"],function(b,a,e){var c=b("#L"),d=b("#K"),
f=!0;e("g",function(){f&&(c.h("c"),d.Na(),f=!1)});e("r",function(b){d.c(a("span",{"class":"bY bl"}).b(b.b));f=!0});e("l",function(){f&&c.u("c")})})})(this);
