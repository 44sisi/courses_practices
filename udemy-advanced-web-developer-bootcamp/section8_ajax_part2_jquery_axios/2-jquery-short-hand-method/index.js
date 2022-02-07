$('#getBtn').click(() => {
  $.get('https://api.github.com/users/colt')
    .done((data) => {
      console.log(data);
    })
    .fail(() => {
      console.log('failed');
    });
});

$('#postBtn').click(() => {
  const data = { name: 'charlie', type: 'dog' };
  $.post('www.catsarecoolandsoaredogs.com', data)
    .done((data) => {
      console.log(data);
    })
    .fail(() => {
      console.log('error');
    });
});

$('#getJSONBtn').click(() => {
  $.getJSON('https://api.github.com/users/colt')
    .done((data) => {
      console.log(data);
    })
    .fail(() => {
      console.log('error');
    });
});
