// const elm = document.createElement('div');
// elm.className = 'moveable';

class Moveable{

    private elm: JQuery;

    constructor(private dy: number = -5, private dx: number = 10){
        this.elm = $('<div class="moveable"></div>');

        $("body").append(this.elm);

        this.elm.offset({
            top: Math.random() * $(window).height()!,
            left: Math.random() * $(window).width()!
        });
    }

    move(): void{       

        let top = this.elm.offset()!.top;
        let left  =  this.elm.offset()!.left;

        this.elm.offset({
            top: top + this.dy,
            left: left + this.dx
        });

        top = this.elm.offset()!.top;
        left  =  this.elm.offset()!.left;

        if ((top <= 0) || ((top + this.elm.height()!) >= $(window).height()!)) {
            this.dy = -this.dy;
        }

        if ((left +  this.elm.width()! >= $(window).width()!) || (left <= 0)){
            this.dx = -this.dx;
        }

    }

}

const mo = new Moveable();

setInterval(()=> mo.move(), 10);