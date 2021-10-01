
let tmrId: null| number = null;

$(document).on('mousemove', (eventData) => {
    let x = eventData.pageX
    let y = eventData.pageY;

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

