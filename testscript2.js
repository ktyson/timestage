var pieces = {};

pieces["person"]={
"height":2,
"width":1,
"color":"blue",
"iLeft":0,
"iTop":0,
"iDistToCam":10,
"zLevel":200,
"img":"knight.gif"};
pieces["duck"]={
"height":0.2,
"width":0.2,
"color":"red",
"iLeft":30,
"iTop":20,
"iDistToCam":10,
"zLevel":400,
"img":"tree.gif"};


var script = [
{"mSec":1000,"dCamLeft":0,
"pieces":[{"name":"person",
"dLeft":["+",10],
"dTop":["+",0],
"dCamDist":10,
"dTime":10000,
"desc":"move person stage left"}
]},
{"mSec":10000,"dCamLeft":0,
"pieces":[{"name":"duck",
"dLeft":["+",0],
"dTop":["+",0],
"dCamDist":1,
"dTime":5000,
"desc":"move duck 7 m downstage"}
]},
{"mSec":15000,"dCamLeft":0,
"pieces":[{"name":"person",
"dLeft":["+",0],
"dTop":["+",0],
"dCamDist":15,
"dTime":5000,
"desc":"move person 5 meters upstage"}
]},
{"mSec":20000,"dCamLeft":0,
"pieces":[{"name":"person",
"dLeft":["-",5],
"dTop":["+",0],
"dCamDist":5,
"dTime":5000,
"desc":"move person 10 meters downstage and 5 right"}
]}


];