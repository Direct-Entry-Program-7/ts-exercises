// const elm = document.createElement('div');
// elm.className = 'moveable';

import { x as mouseX, y as mouseY } from './mouse-listener.js';

class Moveable {

    private elm: JQuery;

    constructor(private dy: number = 0, private dx: number = 0) {
        this.elm = $('<div class="moveable"></div>');
        this.dy = 4 + ((Math.random() * 15) * Math.sin((Math.random() * 361) * Math.PI / 180)); // +-[4 - 15]
        this.dx = 4 + ((Math.random() * 15) * Math.sin((Math.random() * 361) * Math.PI / 180)); // +-[4 - 15]

        // 180deg = PIrad
        // 1deg = PIrad / 180

        this.elm.css('background-color', `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`);
        this.elm.css('border-radius', `${Math.floor(Math.random() * 101)}%`); // 100.2, 100.8 => 100
        this.elm.css('transform', `rotate(${Math.random() * 361}deg) scale(${Math.random()})`)
        $("body").append(this.elm);

        this.elm.offset({
            top: Math.random() * ($(window).height()! - this.elm.height()!),
            left: Math.random() * ($(window).width()! - this.elm.width()!)
        });
    }

    move(): void {

        let top = this.elm.offset()!.top;
        let left = this.elm.offset()!.left;

        if (mouseX !== -1 && mouseY !== -1) {

            let elmX = left + this.elm.width()! / 2;
            let elmY = top + this.elm.height()! / 2;

            // hypot = Math.sqrt((elmX - mouseX) * (elmX - mouseX) + (elmY - mouseY) * (elmY - mouseY))
            let hypot = Math.hypot(elmX - mouseX, elmY - mouseY);
            let radius = $("#circle").width()! / 2;

            if (hypot <=  radius){
                this.dx = -this.dx;
                this.dy = -this.dy;
            }

        }

        this.elm.offset({
            top: top + this.dy,
            left: left + this.dx
        });

        top = this.elm.offset()!.top;
        left = this.elm.offset()!.left;

        if ((top <= 0) || ((top + this.elm.height()!) >= $(window).height()!)) {
            this.dy = -this.dy;
        }

        if ((left + this.elm.width()! >= $(window).width()!) || (left <= 0)) {
            this.dx = -this.dx;
        }

    }

}

const moveables: Moveable[] = [];

for (let i = 0; i < 50; i++) {
    moveables.push(new Moveable());
}


setInterval(() => moveables.forEach(mo => mo.move()), 50);

// setInterval(()=> {

//     moveables.forEach(mo => {
//         mo.move();
//     })

// }, 10);
