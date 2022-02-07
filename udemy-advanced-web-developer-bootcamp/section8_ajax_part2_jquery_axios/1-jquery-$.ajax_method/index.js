$('#btn').click(() => {
  $.ajax({
    method: 'GET',
    url: 'https://baconipsum.com/api/?type=meat-and-filler',
    dataType: 'json',
  })
    .done(addParagraph)
    .fail(() => {
      alert('failed');
    });
});

const addParagraph = (data) => {
  $('p').text(data[0]);
};
