// let users = `[{
//   "phone": "0987658923",
//   "info": {
//     "data": "11.12.2012",
//     "age": "25",
//     "maritalStatus": "замужем",
//     "job": "Епам, менеджер",
//     "education": "Высшее, НАУ , Компютерные науки"
//   }
// }, {
//   "phone": "0506123123",
//   "info": {
//     "data": "21.05.2018",
//     "age": "23",
//     "maritalStatus": "холост",
//     "job": "Фора, кассир",
//     "education": "Высшее, НТУ КПИ, Финансы и кредит"
//   }
// }, {
//   "phone": "0966671290",
//   "info": {
//     "data": "15.02.2015",
//     "age": "27",
//     "maritalStatus": "замужем",
//     "job": "Кристал, фитнес-тренер",
//     "education": "Высшее, КНТУ, Физиотерапия и реабилитация"
//   }
// }]`;


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

function createTable(users) {
  let tBody = document.getElementById('userdata').tBodies[0];
  users.forEach((item) => {
    var row = tBody.insertRow();
    for (key in item) {
      if (typeof(item[key]) !== "object") {
        var cell = row.insertCell();
        cell.innerHTML = item[key];
      };
    }
  });
};
createTable(users);



$(document).on('click', '#userdata tbody td', function(event) {
  let $col = $(this);
  $col.parents('tr').addClass('selected').siblings().removeClass('selected');
  let $id = $('.selected td:eq(1)');
  let phone = $id.text();
  $.each(users, function(index, user) {
    if (user.phone === phone) {
      let details = user.info;
      const detailsString = `Добавлен: ${details.data}
                Возраст: ${details.age}
                Семейное положение: ${details.maritalStatus}
                Работает: ${details.job}
                Образование: ${details.education}
                `;
      $('.details-box').text(detailsString);
      $('th').not('.fullname').hide();
      $('td').not('td:first-of-type').hide();
      $('.name-item, .details-cell').addClass('active');
      $('table').outerWidth('501px');
    }
  });
  // add nameBox on click
  $('table tr').each(function(row) {
    $(this).find('td:first-of-type').each(function(cell) {
      $(this).addClass('name');
      let nameCell = $(this);
      let name = nameCell.text();
      $.each(users, function(index, user) {
        if (user.name === name) {
          const nameString = `${user.mail} ${user.phone}
                              `;
          let nameInfo = $("<div></div>").text(nameString);
          $(nameInfo).addClass('name-info');
          $(nameCell).append(nameInfo);
        }
      });
    });
  });
});

$(document).on('click', '.btn-close', function(event) {
  $('.details-cell').removeClass('active');
  $('table tr').each(function(row) {
    $(this).find('td:first-of-type').each(function(cell) {
      let nameCell = $(this);
      $('.name-info').remove();
    });
  });
  $('td').not('td:first-of-type').show();
  $('th').not('.fullname').show();
  $('tr').removeClass('selected');
  $('table').outerWidth('100%');
});
