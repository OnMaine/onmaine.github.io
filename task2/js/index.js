let users = `[{
  "phone": "0987658923",
  "info": {
    "data": "11.12.2012",
    "age": "25",
    "maritalStatus": "замужем",
    "job": "Епам, менеджер",
    "education": "Высшее, НАУ , Компютерные науки"
  }
}, {
  "phone": "0506123123",
  "info": {
    "data": "21.05.2018",
    "age": "23",
    "maritalStatus": "холост",
    "job": "Фора, кассир",
    "education": "Высшее, НТУ КПИ, Финансы и кредит"
  }
}, {
  "phone": "0966671290",
  "info": {
    "data": "15.02.2015",
    "age": "27",
    "maritalStatus": "замужем",
    "job": "Кристал, фитнес-тренер",
    "education": "Высшее, КНТУ, Физиотерапия и реабилитация"
  }
}]`;

users = $.parseJSON(users);

$(document).on('click', '#userdata tbody td', function(event) {
  let $col = $(this);
  let $row = $col.parents('tr').addClass('selected').siblings().removeClass('selected');
  let $id = $('.selected td:eq(1)');
  let phone = $id.text();
  $.each(users, function(index, users) {
    $.each(users, function(key, val) {
      if (key == "phone" && val == phone) {
        let details = users.info;
        const detailsString = `Добавлен: ${details.data}
                Возраст: ${details.age}
                Семейное положение: ${details.maritalStatus}
                Работает: ${details.job}
                Образование: ${details.education}
                `;
        $('.details-box').text(detailsString);
        $('tr th:not(:first), tr td:not(tr td:first-of-type)').hide();
        $('.name-item, .details-cell').addClass('active');
        $('table').css({
          'width': '501px'
        });
      }
    });
  });
});

$(document).on('click', '.btn-close', function(event) {
  $('.name-item, .details-cell').removeClass('active');
  $('tr th:not(:first), tr td:not(tr td:first-of-type)').show();
  $('tr').removeClass('selected');
  $('table').css({
    'width': '100%'
  });
});
