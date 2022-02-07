$('#btn').click(() => {
  const url = 'https://aws.random.cat/meow';
  $.getJSON(url)
    .done((data) => {
      $('#photo').attr('src', data.file);
    })
    .fail((error) => {
      console.log(error);
    });
});
