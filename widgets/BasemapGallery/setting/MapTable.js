// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/setting/MapTable.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"maps-section" data-dojo-attach-point\x3d"allMapsSection"\x3e\r\n\t\t\x3cdiv class\x3d"maps-table-div" data-dojo-attach-point\x3d"allMapsTableDiv"\x3e\r\n\t\t\t\x3cdiv class\x3d"maps-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"allMapsTable"\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"search-none-tip-section hidden" data-dojo-attach-point\x3d"searchNoneTipSection"\x3e\r\n\t\t\t\x3cdiv class\x3d"no-basemaptip"\x3e${nls.noBasemaps}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"search-none-tip"\x3e${nls.noBasemapAvailable}\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"allMapsShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./MapTable.html dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/html dojo/Deferred dojo/promise/all dojo/query dojo/on esri/request jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/dijit/LoadingIndicator ../BasemapItem ../utils".split(" "),function(r,t,u,v,w,x,b,f,c,k,l,C,y,D,E,z,A,F,m,n){return r([t,u,v,x],{templateString:w,baseClass:"basemap-table",query:null,portalUrl:null,nls:null,
type:"",multiple:!1,map:null,spatialReference:null,basemaps:[],postMixInProperties:function(){this.nls=b.mixin(this.nls,window.jimuNls.itemSelector)},postCreate:function(){this.inherited(arguments);this.basemaps=[];this.portalUrl&&(this.portalUrl=A.getStandardPortalUrl(this.portalUrl));this.search()},search:function(a){a&&(this.query=b.clone(a),this.clear());this.portalUrl&&this.query&&(a=z.getPortal(this.portalUrl),this.allMapsShelter.show(),c.addClass(this.searchNoneTipSection,"hidden"),a.queryItems(this.query).then(b.hitch(this,
function(d){this._createMapItems(d).then(b.hitch(this,function(){this.allMapsShelter.hide();this._filterMapCallback()}))}),b.hitch(this,function(d){console.error(d);this.domNode&&(this.allMapsShelter.hide(),this._filterMapCallback())})))},_filterMapCallback:function(){0<this.basemaps.length?(c.removeClass(this.allMapsTableDiv,"hidden"),c.addClass(this.searchNoneTipSection,"hidden")):(c.addClass(this.allMapsTableDiv,"hidden"),c.removeClass(this.searchNoneTipSection,"hidden"))},clear:function(){this.basemaps=
[];c.empty(this.allMapsTable)},_createMapItems:function(a){var d=[],p=[],g=new k;a=f.filter(a.results,b.hitch(this,function(e){return e.type.toLowerCase()===this.type.toLowerCase()}));if(0===a.length)return g.resolve(),g;f.forEach(a,function(e){d.push(n.getBasemapInfo(e.portalUrl,e.id))});l(d).then(b.hitch(this,function(e){f.forEach(e,b.hitch(this,function(h){var q=new k;n.isBasemapCompatibleWithMap(h.spatialReference,h.layers,this.map).then(b.hitch(this,function(B){B&&this._createMapItem(h);q.resolve()}));
p.push(q)}));l(p).then(function(){g.resolve()})}));return g},_createMapItem:function(a){a=new m({appConfig:this.appConfig,basemap:a,folderUrl:this.folderUrl,spatialReference:this.spatialReference,nls:this.nls,mode:m.MODE_SELECT});this.basemaps.push(a);0===this.basemaps.length%4&&c.addClass(a.domNode,"no-margin");c.place(a.domNode,this.allMapsTable);this.own(y(a,"selected",b.hitch(this,function(d){this.emit("selectionChange")})))},getSelectedMapItems:function(){return f.filter(this.basemaps,function(a){return a.isSelected()})}})});