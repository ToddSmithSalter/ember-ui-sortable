"use strict";define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,l=t.default.Application.extend({modulePrefix:r.default.modulePrefix,podModulePrefix:r.default.podModulePrefix,Resolver:n.default}),(0,a.default)(l,r.default.modulePrefix),e.default=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n.default.APP.name,r=n.default.APP.version;e.default=t.default.extend({version:r,name:a})}),define("dummy/components/ui-draggable",["exports","ember-ui-sortable/components/ui-draggable"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ui-sortable",["exports","ember-ui-sortable/components/ui-sortable"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/index",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({draggableList:t.default.A(["🔥 Fire!","🇨🇦 Canada!","👻 Ooooohhh!!!","💩 Aww crap!","👊 Fist bump","💋 Smooch"]),draggableItem:"♥️ Be still by beating heart",connectedListOne:t.default.A(["🐲 Plant","🌵 Cactus","🍀 Four-leaf clover","🍃 Leaves","🌳 Coniferous","🌴 Palm tree"]),connectedListTwo:t.default.A(["🍏 Green apple","🍎 Red apple","🍐 Pear","🍊 Orange","🍋 Lemon","🍌 Banana"]),actions:{draggableMoved:function(e,t,n){console.log("Content Moved! Item: "+e+", oldIndex: "+t+', "newIndex: '+n);var a=this.get("draggableList");a.removeAt(t),a.insertAt(n,e),console.log("Updated content array: "+a)},addToDraggableList:function(e,t){console.log("Element added to content! Item: "+e.text().trim()+" newIndex: "+t),this.get("draggableList").insertAt(t,e.text().trim()),this.set("draggableItem",null)},contentMovedToOne:function(e,t,n){console.log("Content Moved! Item: "+e+", oldIndex: "+t+', "newIndex: '+n);var a=this.get("connectedListOne"),r=this.get("connectedListTwo");a.removeObject(e),r.removeObject(e),a.insertAt(n,e),console.log("Updated content arrays: "+a+" & "+r)},contentMovedToTwo:function(e,t,n){console.log("Content Moved! Item: "+e+", oldIndex: "+t+', "newIndex: '+n);var a=this.get("connectedListOne"),r=this.get("connectedListTwo");a.removeObject(e),r.removeObject(e),r.insertAt(n,e),console.log("Updated content arrays: "+a+" & "+r)}}})}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var a,r=n.default.exportApplicationGlobal;a="string"==typeof r?r:t.default.String.classify(n.default.modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e.default={name:"export-application-global",initialize:a}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});a.map(function(){}),e.default=a}),define("dummy/routes/index",["exports","ember"],function(e,t){e.default=t.default.Route.extend({})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("h2");e.setAttribute(a,"id","title");var r=e.createTextNode("UI Sortable Demo");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("p"),r=e.createElement("a");e.setAttribute(r,"href","https://github.com/12StarsMedia/ember-ui-sortable");var l=e.createTextNode("View source on Github");e.appendChild(r,l),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),5,5),a},statements:[["content","outlet",["loc",[null,[4,2],[4,12]]]]],locals:[],templates:[]}}())}),define("dummy/templates/index",["exports"],function(e){e.default=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:4,column:4},end:{line:12,column:4}},moduleName:"dummy/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("li");e.setAttribute(n,"class","list-group-item");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","item",["loc",[null,[11,34],[11,42]]]]],locals:["item"],templates:[]}}(),t=function(){var e=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:18,column:8},end:{line:27,column:8}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["content","draggableItem",["loc",[null,[26,10],[26,27]]]]],locals:[],templates:[]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:16,column:4},end:{line:29,column:4}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("ul");e.setAttribute(n,"class","list-group");var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("      ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a},statements:[["block","ui-draggable",[],["connectToSortable",".draggable-target","revert","invalid","helper","clone","appendTo","body","tagName","li","classNames","list-group-item"],0,null,["loc",[null,[18,8],[27,25]]]]],locals:[],templates:[e]}}(),n=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:33,column:4},end:{line:41,column:4}},moduleName:"dummy/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("li");e.setAttribute(n,"class","list-group-item");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","item",["loc",[null,[40,36],[40,44]]]]],locals:["item"],templates:[]}}(),a=function(){return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:43,column:4},end:{line:51,column:4}},moduleName:"dummy/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("li");e.setAttribute(n,"class","list-group-item");var a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","item",["loc",[null,[50,36],[50,44]]]]],locals:["item"],templates:[]}}();return{meta:{revision:"Ember@1.13.13",loc:{source:null,start:{line:1,column:0},end:{line:53,column:6}},moduleName:"dummy/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","row");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","col-sm-6");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h3"),l=e.createTextNode("Sortable list with additional draggable");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("hr");e.appendChild(a,r);var r=e.createTextNode("\n\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","col-sm-6");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("h3"),l=e.createTextNode("Connected sortable lists");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[1]),l=e.childAt(a,[3]),o=new Array(4);return o[0]=e.createMorphAt(r,3,3),o[1]=e.createMorphAt(r,7,7),o[2]=e.createMorphAt(l,3,3),o[3]=e.createMorphAt(l,5,5),o},statements:[["block","ui-sortable",[],["content",["subexpr","@mut",[["get","draggableList",["loc",[null,[5,14],[5,27]]]]],[],[]],"moved",["subexpr","action",["draggableMoved"],[],["loc",[null,[6,12],[6,37]]]],"inserted",["subexpr","action",["addToDraggableList"],[],["loc",[null,[7,15],[7,44]]]],"class","list-group draggable-target"],0,null,["loc",[null,[4,4],[12,20]]]],["block","if",[["get","draggableItem",["loc",[null,[16,10],[16,23]]]]],[],1,null,["loc",[null,[16,4],[29,11]]]],["block","ui-sortable",[],["connectWith",".connected-list-group-bottom","content",["subexpr","@mut",[["get","connectedListOne",["loc",[null,[35,14],[35,30]]]]],[],[]],"moved",["subexpr","action",["contentMovedToOne"],[],["loc",[null,[36,12],[36,40]]]],"class","list-group connected-list-group-top"],2,null,["loc",[null,[33,4],[41,20]]]],["block","ui-sortable",[],["connectWith",".connected-list-group-top","content",["subexpr","@mut",[["get","connectedListTwo",["loc",[null,[45,14],[45,30]]]]],[],[]],"moved",["subexpr","action",["contentMovedToTwo"],[],["loc",[null,[46,12],[46,40]]]],"class","list-group connected-list-group-bottom"],3,null,["loc",[null,[43,4],[51,20]]]]],locals:[],templates:[e,t,n,a]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),r=JSON.parse(unescape(a)),l={default:r};return Object.defineProperty(l,"__esModule",{value:!0}),l}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-ui-sortable",version:"0.3.2+a229bfff"});