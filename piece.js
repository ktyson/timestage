function Piece(init) {
	this.init = init;
	this.curr = {};
}
Piece.prototype = {
	makeInitial: function() {
//console.log("OBJECT",this.init);      
		this.curr.cam = distanceFromCamera;

		this.curr.width = this.init.wMeters * (1 / this.curr.cam) * pixelsPerMeter;
		this.curr.height = this.init.hMeters * (1 / this.curr.cam) * pixelsPerMeter;
		
		var left = this.init.xMeters * (1 / this.curr.cam) * pixelsPerMeter;
		var top = this.init.yMeters * (1 / this.curr.cam) * pixelsPerMeter;		
		var addLeft = parseInt($("#stage").width()/2 - (this.curr.width/2));	
		var addTop = parseInt($("#stage").height()/2 - (this.curr.height/2));
		
		this.curr.left = left + addLeft;
		this.curr.top = top + addTop;
		
		this.curr.img = this.init.img;
	    $("#stage").html();
		var c = [];
			var name = this.init.name;
			c.push("<div class='box' id='box_"+ name +"'>");
			c.push("</div>");
			$("#stage").append(c.join(''));
			var myCss ={
				"top": this.curr.top +"px",
				"left": this.curr.left +"px",
				"width": this.curr.width +"px",
				"height": this.curr.height +"px",
				"background-color":"green",
				"z-index":100,
				"position":"absolute",
				"background-image":"url('images/" + this.curr.img + "')",
				"background-size":"100%"
			};		
			$("#box_"+ name).css(myCss);
	},
	move: function(script) {
		
		var myBox = $("#box_"+this.init.name);
		var oldCam = this.curr.cam;		
		this.curr.cam = eval(this.curr.cam + script.cam);
		
		var myWidth = this.init.wMeters * (1 / this.curr.cam) * pixelsPerMeter;
		var myHeight = this.init.hMeters * (1 / this.curr.cam) * pixelsPerMeter;
//console.log(myWidth,myHeight);	
//console.log(oldCam,this.curr.cam);	

        var topSign = (script.top >= 0 ? "+=" : "-=");
        var leftSign = (script.left >= 0 ? "+=" : "-=");
        
		var myTop = topSign + Math.abs(script.top) * (1 / this.curr.cam)  * pixelsPerMeter;
		var myLeft = leftSign + Math.abs(script.left) * (1 / this.curr.cam)   * pixelsPerMeter;		
		
		var myAnim = {
			"top": myTop,
			"left": myLeft,
			"height": myHeight + 'px',
			"width": myWidth + 'px'
		};
//console.log(myAnim);
		$(myBox).animate(myAnim, 2000);

	
	}
	

}