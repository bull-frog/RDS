var canvas;

function main() {

	canvas = document.getElementById("canvas");

	/**
	 * 実際には、XYとも-10~10の範囲
	 */

	if (canvas.getContext) {
		
		const xmax = 10;
		const xmin = -10;
		const dx = (xmax - xmin) / 6;

		const ymax = 10;
		const ymin = -10;

		const zmax = 1;
		const zmin = -1;
		const z0 = dx / (zmax - zmin) / 4;

		var context = canvas.getContext("2d");

		context.fillStyle = 'white';
		context.fillRect(0, 150, 2000, 2000);

		context.fillStyle = 'black';
		context.fillRect(0, 0, 2000, 150);

		for (var i = 1; i <= 3000; i++) {
			
			var y0 = Math.random() * (ymax - ymin) + ymin;

			var zz = fnz(xmin + dx / 2, y0);
			if (zz > zmax) {
				zz = zmax;
			} else if (zz < zmin) {
				zz = zmin;
			}

			var xx = xmin + dx + z0*zz;
			x0 = (xx - xmin) * Math.random() + xmin;

			do {

				context.fillRect(1000 + x0*100, 1150 + y0*100, 10, 10);
				
				zz = fnz(x0 + dx/2, y0);
				if (zz > zmax) {
					zz = zmax;
				} else if (zz < zmin) {
					zz = zmin;
				}

				x0 = x0 + dx + z0*zz;

			} while (x0 < xmax);

		}

		context.fillStyle = 'white';
		context.arc(2.5*dx*100, 75, 20, 0, 7);
		context.arc(3.5*dx*100, 75, 20, 0, 7);
		context.fill();

	}

}

function fnz(x, y) {

	let z;
	
	// z =  (5 - Math.sqrt(x*x + y*y)) / 5;

	/*z = (function(x, y) {
		if (x*x + y*y > 25 && x*x + y*y < 64) {
			return -y/8;
		} else {
			return 0;
		}
	})(x, y);*/

	z = (function() {
		if (x*x + y*y <= 25) {
			return Math.sqrt(25 - x*x - y*y) * 2 / 5 - 1;
		} else {
			return -1;
		}
	})(x, y);

	return z;

}
