function testPaths(w, h, data1, data2) {
	["union", "difference", "intersection", "exclusion"].forEach(function(type) {
		var h2 = document.body.appendChild(document.createElement("h2"));
		h2.innerText = `Shape ${type}`;

		var div = document.body.appendChild(document.createElement("div"));
		div.id = type;

		var paper = Raphael(type, 2 * w, h);

		var path1 = paper.path(data1);
		path1.attr({fill: "#afa", stroke: "#0a0"});

		var path2 = paper.path(data2);
		path2.attr({fill: "#faa", opacity: 0.5, stroke: "#a00"});

		paper.getPathInters(path1, path2).forEach(function(p) {
			paper.circle(p[0], p[1], 5).attr({stroke: '#000'});
		});

		var booleanStr = paper[type](path1, path2);
		var booleanPath = paper.path(booleanStr);
		booleanPath.attr({fill: "#aaf", stroke: "#00a"});
		booleanPath.transform(`t${w},0`);
	});
}
