
let tmrId: null| number = null;

export let x = -1;
export let y = -1;

$(document).on('mousemove', (eventData) => {
    x = eventData.pageX
    y = eventData.pageY;

    // if (tmrId == null){
    //     $("#circle").show();
    // }else{
    //     clearTimeout(tmrId);
    // }

    !tmrId && $("#circle").show();
    tmrId && clearTimeout(tmrId);

    tmrId = setTimeout(()=> {
        $("#circle").hide();
        tmrId = null;
    }, 2000);

    $("#circle").offset({
        left: (x - $("#circle").width()! / 2),
        top: (y - $("#circle").height()! / 2)
    })
});

$(document).on('mouseenter', ()=> {
    $("#circle").show();
});


$(document).on('mouseleave', ()=> {
    $("#circle").hide();
});

