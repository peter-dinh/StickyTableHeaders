$('#exampleModal').on('shown.bs.modal', function(){
    // adding filler rows
    for(var i = 0; i < 3; i++){
        $('tbody tr').clone().appendTo('table');
    }
    var filter_position_top = $('div.filter').position().top;
    $('.modal-body').on('scroll', function(){
        if($('.modal-body').scrollTop() > filter_position_top){
            $('div.filter').css({'background': 'white', 'position': 'sticky', 'top': '0', 'width': '100%', 'z-index': 10})
        }
    })
    var filter_height = $('div.filter')[0].offsetHeight;
    var $table = $("html:not(.legacy) table");
    $table.stickyTableHeaders({ 
        scrollableArea: $(".modal-body")[0], 
        'fixedOffset': filter_height,
        iModal: {leftOffset: $('.modal-body').offset().left - 1}}); 
})

// $(window).resize(function(){
//     if($('#exampleModal').modal(show)){
//         var filter_position_top = $('div.filter').position().top;
//         $('.modal-body').on('scroll', function(){
//             if($('.modal-body').scrollTop() > filter_position_top){
//                 $('div.filter').css({'background': 'white', 'position': 'sticky', 'top': '0', 'width': '100%', 'z-index': 10})
//             }
//         })
//         var filter_height = $('div.filter')[0].offsetHeight;
//         var $table = $("html:not(.legacy) table");
//         $table.stickyTableHeaders({ 
//             scrollableArea: $(".modal-body")[0], 
//             'fixedOffset': filter_height,
//             iModal: {leftOffset: $('.modal-body').offset().left - 1}
//         }); 
//     }
// })

