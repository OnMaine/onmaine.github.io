let users = `[{
  "name": "Смородина Алена Александровна",
  "phone": "0987658923",
  "mail": "alenasmorodina@gmail.com",
  "skype": "alenasmorodina",
  "comment": "Встреча завтра на 11:00.",
  "info": {
    "data": "11.12.2012",
    "age": "25",
    "maritalStatus": "замужем",
    "job": "Епам, менеджер",
    "education": "Высшее, НАУ , Компютерные науки"
  }
}, {
  "name": "Мироненнко-Коновалов Александр Игнатьевич",
  "phone": "0506123123",
  "mail": "milanovalex@ua.fm",
  "skype": "Milanovalex",
  "comment": "Созвониться в пятницу 05.07.2019.",
  "info": {
    "data": "21.05.2018",
    "age": "23",
    "maritalStatus": "холост",
    "job": "Фора, кассир",
    "education": "Высшее, НТУ КПИ, Финансы и кредит"
  }
}, {
  "name": "Зайченко Валентина Александровна",
  "phone": "0966671290",
  "mail": "zay4enkovalya@mail.ru",
  "skype": "zay4enkovalya",
  "comment": "Очень занят в ближайшие 2 недели. 10.05.2019.",
  "info": {
    "data": "15.02.2015",
    "age": "27",
    "maritalStatus": "замужем",
    "job": "Кристал, фитнес-тренер",
    "education": "Высшее, КНТУ, Физиотерапия и реабилитация"
  }
}]`;

users = $.parseJSON(users);

// create a table from the array
function createTable(users) {
  let tBody = document.getElementById('userdata').tBodies[0];
  users.forEach((item, i) => {
    let row = tBody.insertRow();
    for (key in item) {
      if (typeof(item[key]) !== 'object') {
        let cell = row.insertCell();
        cell.textContent = item[key];
      };
    }
  });
};
createTable(users);

$(document).on('click', '#userdata td', function(event) {
  let $col = $(this);
  $col.parents('tr').addClass('selected').siblings().removeClass('selected');
  let $id = $('.selected td:eq(1)');
  $('.selected td:first-of-type').addClass('arrow');
  let phone = $id.text();
  $.each(users, function(index, user) {
    if (user.phone === phone) {
      let details = user.info;
      $.each(details, function(key, value) {
        $("#" + key).text(value);
      });
      $('th').not('.fullname').hide();
      $('#userdata td').not('td:first-of-type').hide();
      $('.details-cell').addClass('active');
      $('#userdata').outerWidth('501px');
    }
    // add nameBox on click
    $.each(user, function(key, value) {
      $("#" + key).text(value);
      let nameCard = $('#name-wrap');
      $('.selected td:eq(0)').append(nameCard);
      $('#name-wrap').show();
    });
  });
});

// function for close the details
$(document).on('click', '.btn-close', function(event) {
  $('.details-cell').removeClass('active');
  $('#userdata td').not('td:first-of-type').show();
  $('th').not('.fullname').show();
  $('tr').removeClass('selected');
  $('#userdata').outerWidth('100%');
  $('#name-wrap').hide();
});
