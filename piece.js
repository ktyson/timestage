var pieces={};
var pieceMakers = [
{"xMeters":0, 
"yMeters":0, 
"wMeters":0.73,
"hMeters":2,
"name":"test",
"img":"knight.gif"},
{"xMeters":-4, 
"yMeters":0, 
"wMeters":4,
"hMeters":1,
"name":"test1",
"img":"tree.gif"}
];



var scripts=[];
scripts=[
{"name":"test",
"desc":"Move first block",
"start":1000,
"left":["+",3],
"top":["-",2],
"cam":["+",30]},
{"name":"test1",
"desc":"...and another",
"start":2000,
"left":["-",3],
"top":["-",2],
"cam":["-",40]},
{"name":"test",
"desc":"Move first block again",
"start":2500,
"left":["+",1],
"top":["+",3],
"cam":["+",30]}
];



function Piece(init) {
	this.init = init;
	this.curr = {};
}
Piece.prototype = {
	makeInitial: function() {
	
		this.curr.cam = distanceFromCamera;

		this.curr.width = this.init.wMeters * (1 / this.curr.cam) * pixelsPerMeter;
		this.curr.height = this.init.hMeters * (1 / this.curr.cam) * pixelsPerMeter;
		
		var left = this.init.xMeters * (1 / this.curr.cam) * pixelsPerMeter;
		var top = this.init.yMeters * (1 / this.curr.cam) * pixelsPerMeter;		
		var addLeft = parseInt($(window).width()/2 - (this.curr.width/2));	
		var addTop = parseInt($(window).height()/2 - (this.curr.height/2));
		
		this.curr.left = left + addLeft;
		this.curr.top = top + addTop;
		
		this.curr.img = this.init.img;
	
		var c = [];
			var name = this.init.name;
			c.push("<div class='box' id='box_"+ name +"'>");
			c.push("</div>");
			$("body").append(c.join(''));
			var myCss ={
				"top": this.curr.top +"px",
				"left": this.curr.left +"px",
				"width": this.curr.width +"px",
				"height": this.curr.height +"px",
				"background-color":"green",
				"z-index":100,
				"position":"absolute",
				"background-image":"url('" + this.curr.img + "')",
				"background-size":"100%"
			};		
			$("#box_"+ name).css(myCss);
	},
	move: function(script) {
		
		var myBox = $("#box_"+this.init.name);
		var oldCam = this.curr.cam;		
		this.curr.cam = eval(this.curr.cam + script.cam[0] + script.cam[1]);
		
		var myWidth = this.init.wMeters * (1 / this.curr.cam) * pixelsPerMeter;
		var myHeight = this.init.hMeters * (1 / this.curr.cam) * pixelsPerMeter;
console.log(myWidth,myHeight);	
console.log(oldCam,this.curr.cam);	

		var myTop = script.top[0] + "=" + script.top[1] * (1 / this.curr.cam)  * pixelsPerMeter;
		var myLeft = script.left[0] + "=" + script.left[1] * (1 / this.curr.cam)   * pixelsPerMeter;		
		
		var myAnim = {
			"top": myTop,
			"left": myLeft,
			"height": myHeight + 'px',
			"width": myWidth + 'px'
		};
		console.log(myAnim);
		$(myBox).animate(myAnim, 2000);
				
	
	
	}
	

}