$(document).ready(function() {
  $('input[type="submit"]').on('click', function(event){
    event.preventDefault();
    var new_pic = $('#photo_image_url').val();
    var new_title = $('#photo_title').val();
    var new_user_name = $('#photo_user_name').val();
    $.ajax('/photos',
    {type: 'post',
      data:{
        photo: {
          image_url: new_pic,
          title: new_title,
          user_name: new_user_name,
        }
      }
    }).done(function(data){
      $('#photo_image_url').val('');
      $('#photo_title').val('');
      $('#photo_user_name').val('');
      var new_photo = '<div data-id="' + data.id + '"><h3>' + data.title + '</h3><img height="150" src=' + data.image_url + '"><p>By ' + data.user_name + '</p></div>';
      $('body').append(new_photo);
    }).fail(function(data){

    });
  });

  $('h3').on('click', 'span', function(){
    var id = $(this).parent().parent().data('id');
    var url = '/photos/' + id;
    $.ajax(url, {type: 'delete'}).done(function(response) {
      var div = $('div[data-id="' + response.id + '"]');
      div.remove();
    }).fail(function(data) {
    });
  });
});
