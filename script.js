

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const descElement = document.getElementById("desc");

function round(v, r) {
    return Math.round(v / r) * r;
}

let selected = 0;
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineWidth = 2;

    rectangles.forEach((rect, index) => {
    	if (selected == index) {
		    ctx.strokeStyle = "rgba(0, 255, 0, 1.0)"; 
		    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    	} else {
		    ctx.strokeStyle = "rgba(255, 255, 255, 1.0)"; 
		    ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
    	}
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
        ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
    });
}

render();

descElement.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
    	rectangles[selected].description = descElement.value;
    	selected += 1;
    	render();
    }
});


