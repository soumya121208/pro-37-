var database;

var drawing = [];
var currentPath = [];
var isDrawing=false;

function setup(){
  canvas = createCanvas(1400,650);
  database = firebase.database();

  canvas.mousePressed(startPath);
  canvas.mouseReleased(endPath);

  form=new Form();
  form.display();

}

function startPath() {
  isDrawing=true;
  currentPath = [];
  drawing.push(currentPath);
}

function endPath(){
  isDrawing=false;
}

function draw() {
  background("black");
  
  if(isDrawing) {
    var point = {
     x: mouseX,
     y: mouseY 
    }

    currentPath.push(point);
  }

  stroke(255);
  strokeWeight(4);
  noFill();

  for (var i = 0; i < drawing.length; i++ ) {
    var path = drawing[i];
    beginShape();
    for (var j = 0; j < path.length; j++) {
    vertex(path[j].x, path[j].y );
  }
   endShape();
  }

  form.button.mousePressed(()=>{
    saveDrawing();
  });

  form.button2.mousePressed(()=>{
    clearDrawing();
  });

}

  function saveDrawing(){
    var ref = database.ref('drawing');

    var data = {
       name:"agastya",
       drawing:drawing 
      } 
      var result = ref.push(data,dataSent);

      console.log(status);

      function dataSent(status){
        console.log(status);
      }
   }

   function clearDrawing(){
      drawing=[];
      var ref = database.ref('drawing');
      ref.remove();
   }