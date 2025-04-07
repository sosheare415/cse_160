// DrawRectangle.js
var ctx;
var canvas;
var scale;

function main() {
    // Retrieve <canvas> element
        canvas = document.getElementById('example');
        if(!canvas) {
            console.log('Failed to retrieve the <canvas> element');
            return;
        }

    // Get the rendering context for 2DCG
    ctx = canvas.getContext('2d');
    scale = 20;

    // Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //drawVector(v1);
    //let v1 = new Vector3([2.25,2.25,0]);
    //drawVector(ctx, v1, 'red');


}

function drawVector(v, color){
    var x = v.elements[0] * scale;
    var y = v.elements[1] * scale;
    var z = v.elements[2] * scale;

    
    ctx.strokeStyle = color;
    ctx.beginPath();
    var startX = canvas.width/2;
    var startY = canvas.height/2;
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + x, startY - y);
    ctx.stroke();
    
    /*
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(220, 180);
    ctx.stroke();
    */
}

function angleBetween(v1, v2){
    var v1Mag = v1.magnitude();
    var v2Mag = v2.magnitude();

    var totalMag = v1Mag * v2Mag;

    var dotProduct = Vector3.dot(v1, v2);

    var angle = Math.acos(dotProduct / totalMag);

    angle = angle * (180 / Math.PI);

    return angle;

}

function areaTriangle(v1, v2){
    var crossProd = Vector3.cross(v1, v2);
    var crossProdMagn = crossProd.magnitude();

    var area = 0;

    area  = 0.5 * crossProdMagn;

    return area;

}

function handleDrawEvent(){


    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1 = new Vector3([x,y]);
    let v2 = new Vector3([x2,y2]);

    drawVector(v1,'red');
    drawVector(v2,'blue');

}

function handleDrawOperationEvent(){

    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;

    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;

    var scal = document.getElementById("Scal").value;
    var operationSelection = document.getElementById("operationSelection").value;

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1 = new Vector3([x,y,0]);
    let v2 = new Vector3([x2,y2,0]);
    let v3 = new Vector3([0,0,0]);
    let v4 = new Vector3([0,0,0]);


    drawVector(v1,'red');
    drawVector(v2,'blue');

    switch(operationSelection){


        case 'Add':
            v3 = v1.add(v2);
            console.log(v3);
            drawVector(v3, 'green');
            break;
        case 'Sub':
            v3 = v1.sub(v2);
            console.log(v3);
            drawVector(v3, 'green');
            break;
        case 'Div':
            v3 = v1.div(scal);
            v4 = v2.div(scal);
            console.log(v3);
            console.log(v4);
            drawVector(v3, 'green');
            drawVector(v4, 'green');
            break;
        case 'Mul':
            v3 = v1.mul(scal);
            v4 = v2.mul(scal);
            console.log(v3);
            console.log(v4);
            drawVector(v3, 'green');
            drawVector(v4, 'green');
            break;
        case 'Mag':
            var mag1 = v1.magnitude();
            var mag2 = v2.magnitude();
            console.log("Magnitude of v1: " + mag1);
            console.log("Magnitude of v2: " + mag2);
            break;
        case 'Norm':
            v3 = v1.normalize();
            v4 = v2.normalize();
            console.log("Normalized vector of v1: " + v3);
            console.log("Normalized vector of v2: " + v4);
            drawVector(v3, 'green');
            drawVector(v4, 'green');
            break;
        case 'Angle':
            var angle = angleBetween(v1,v2);
            console.log("Angle of vector of v1 and v2: " + angle);
            break;
        case 'Area':
            var area = areaTriangle(v1,v2);
            console.log("Area of the triangle of v1 and v2: " + area);
            break;
            
    }

}
