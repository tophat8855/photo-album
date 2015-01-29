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
      var new_photo = '<h3>' + data.title + '</h3><img height="150" src=' + data.image_url + '">By ' + data.user_name;
      $('body').append(new_photo);
    });
  });
});
