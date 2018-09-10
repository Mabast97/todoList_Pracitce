let i = 0;

$('input').keypress(function(e) {
    if(e.keyCode == 13){
        $('#undone').append(
            $('<div>').attr('data-id', ++i).html($('input').val()).addClass('hi').append('<input type="checkbox" style="float: right;"/>')
            .on('click', 'input[type=checkbox]', (e) => {

                const a = $(e.target).closest('div[data-id]');

                $('#done').append(a.clone());
                a.remove();
            }).append('<i class="fas fa-star" style="float: right;"></i>').on('click', (e) => {
                $('i').toggleClass('fav');
            })
        ); 
        $('input').val('');
        e.preventDefault();
    } 
});

$('#done').on('click', 'input[type=checkbox]', (e) => {
    const b = $(e.target).closest('div[data-id]');

    $('#undone').append(b.clone());
    b.remove();
});