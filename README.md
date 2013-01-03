raphael.boolean.js - perform boolean operations with Raphaël
------------------------------------------------------------

This plugin provides boolean operations for the javascript vector library Raphaël (https://github.com/DmitryBaranovskiy/raphael).

You can use single elements (not sets) to perform

* union [A + B | A OR B]
* difference [A - B | A NOT B]
* intersection [A * B | A AND B]
* exclusion [A ^ B = (A + B) - (A * B) | A XOR B]

Additionally it provides a toPath method which converts a shape (rectangle, circle, ellipse) into a path. This function is also used internally by the plugin to make boolean operations possible on those elements.

Usage / Example
---------------

In your application load the plugin after the Raphaël library.

``` html
<script type="text/javascript" src="raphael-min.js"></script>
<script type="text/javascript" src="raphael.boolean.js"></script>
```

Create a Raphaël canvas (e.g. on <div id="canvas"></div>) and at least two elements.

``` js
var paper = Raphael("canvas", 250, 250);

var path = paper.path("M 43,53 183,85 C 194,113 179,136 167,161 122,159 98,195 70,188 z");
path.attr({fill: "#a00", stroke: "none"});

var ellipse = paper.ellipse(170, 160, 40, 35);
ellipse.attr({fill: "#0a0", stroke: "none"});
```

Now you can perform one of the operations which delivers a string for the resulting path. Every of the four methods has two parameters for the Raphaël elements to process.

``` js
newPathStr = paper.union(path, ellipse);

//draw a new path element using that string
newPath = paper.path(newPathStr);
newPath.attr({fill: "#666"});

// as they aren't needed anymore remove the other elements
path.remove();
ellipse.remove();
```

Enjoy clipping!

Note: 
Currently the plugin is not able to handle self intersecting (sub-)paths properly. This is concerning fills in SVG due to default non-zero fill rule.
