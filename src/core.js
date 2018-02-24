/*
* core modules
* @namespace sun
* @version <%=conf.pkg.version %>
* @requires  d3.js
* @example
*/

//invoke d3.js
import * as d3 = require('d3');
//set up main  sun object




//the major global object under the sun namespace

sun.defaultOptions = {
   version: '<%= conf.pkg.version %>',
   themes:dark,
   id: 'chart',
   renderer: 'svg',
   standalone:true,
   responsive:true,
   width:400,
   height:250,
   aspectRatio:0.618034,
   color:'#1f77b4',
   colorScheme: d3.schemeCategory10,
   stroke: 'none',
   strokeWidth:1,
   fontSize:14,
   lineHeight:20,
   title: {
       show: false,
       x: '50%',
       y: '1.6em',
       height:'2em',
       wrapText:true,
       wrapWidth:'90%',
       lineHeight:'2em',
       stroke:'none',
       fill: 'currentColor',
       fontSize: '1.4em',
       fontWeight: 'bold',
       textAnthor: 'middle',
       text: ''
   },
   tooltip: {
       show : true,
       autoplay: false,
       carousel: {
           delay:2000,
           interval:2000
       },
       html: function (d, i) {
           return 'Datum' + i;
       },
       style: {
           display: 'none',
           boxSizing: 'border-box',
           position: 'absolute',
           pointerEvents: 'none',
           padding: '0.2em 0.6em',
           backgroundColor: '#fff',
           border: '1px solid #999',
           borderRadius: '0.2em',
           color: '#333',
           fontSize: '85%',
           opacity: 0.8 
       }
   },
   legend: {
       autoplay: false,
       carousel: {
           delay:2000,
           interval: 2000
       },
       type: 'checkbox',
       display: 'block',
       maxWidth: '6.8em',
       columns: 5,
       symbol: {
           shape: 'rect',
           width: '0.8em',
           height:'0.8em'
       },
       dx:'0.4em',
       transform: 'scale(0.85)',
       lineHeight: '1.6em',
       textColor : 'currentColor',
       disableTextColor: '#ccc',
       key: function(d, i) {
           return i;
       }
   },
   axisX: {
       show: true,
       orient: 'bottom',
       ticks: {
           number:8,
           sizeInner:6,
           sizeOuter:0,
           padding:4
       },
       domain: {
           show:true,
           stroke: 'currentColor',
           strokeWidth: 1
       },
       fontSize: '0.85em',
       stroke: 'currentColor',
       fill: 'urrentColor'
   },
   axisY: {
     show:true,
     orient: 'bottom',
     ticks: {
         number:8,
         sizeInner:6,
         sizeOuter:0,
         padding:4
     },
     domain:{
         show:true,
         stroke: 'currentColor',
         strokeWidth:1
     },
     fontSize: '0.85em',
     stroke: 'currentColor',
     fill: 'currentColor'
   },
   gridX: {
       show:false,
       stroke: '#ccc',
       strokeDash: [6,4]
   },
   gridY: {
       show:false,
       stroke: '#ccc',
       strokeDash: [6,4]
   },
   labelX: {
       show:false,
       text: 'X',
       dy: '2.8em',
       fill:'currentColor',
       textAnchor: 'end'
   }
};

d3.createChart = function (chart){
    if(d3.type(chart) === 'object') {
        var plot = d3[chart.type];
        
    }
}