class Form {
    constructor(){
        this.button = createButton('Save');
        this.button.style('width','80px');
        this.button.style('height','50px');
        this.button.style('font-size','20px');
        this.button.style('background-color','grey');

        this.button2 = createButton('Clear');
        this.button2.style('width','80px');
        this.button2.style('height','50px');
        this.button2.style('font-size','20px');
        this.button2.style('background-color','white');
    }

    display(){
        this.button.position(1100,650);
        this.button2.position(1300,650);
    }

}