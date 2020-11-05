// const users = [
//   {
//     name: 'Смородина Алена Александровна',
//     phone: '0987658923',
//     mail: 'alenasmorodina@gmail.com',
//     skype: 'alenasmorodina',
//     comment: 'Встреча завтра на 11:00.',
//     info: {
//       data: '11.12.2012',
//       age: '25',
//       maritalStatus: 'замужем',
//       job: 'Епам, менеджер',
//       education: 'Высшее, НАУ , Компютерные науки'
//     }
//   },
//   {
//     name: 'Мироненнко-Коновалов Александр Игнатьевич',
//     phone: '0506123123',
//     mail: 'milanovalex@ua.fm',
//     skype: 'Milanovalex',
//     comment: 'Созвониться в пятницу 05.07.2019.',
//     info: {
//       data: '21.05.2018',
//       age: '23',
//       maritalStatus: 'холост',
//       job: 'Фора, кассир',
//       education: 'Высшее, НТУ КПИ, Финансы и кредит'
//     }
//   },
//   {
//     name: 'Зайченко Валентина Александровна',
//     phone: '0966671290',
//     mail: 'zay4enkovalya@mail.ru',
//     skype: 'zay4enkovalya',
//     comment: 'Очень занят в ближайшие 2 недели. 10.05.2019.',
//     info: {
//       data: '15.02.2015',
//       age: '27',
//       maritalStatus: 'замужем',
//       job: 'Кристал, фитнес-тренер',
//       education: 'Высшее, КНТУ, Физиотерапия и реабилитация'
//     }
//   },
// ];
//
// let json = JSON.stringify(users);


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

//
//
// $(document).ready(function() {
//   $("#userdata tbody tr").on("click", function() {
//     let myIndex = $("#userdata tbody tr").index(this);
//     $(this).parents("table").find("tr").each(function() {
//
//         $(this).find("th:eq(" + myIndex + ")").show();
//     });
//   });
// });

//
$(document).on('click', '#userdata tbody td', function(event) {

  let $col = $(this);
  let $row = $col.parents('tr').addClass('selected').siblings().removeClass('selected');
  let $id = $('.selected td:eq(1)');
  let phone = $id.text();
  $.each(users, function(index, users) {
    $.each(users, function(key, val) {
      if (key == "phone" && val == phone) {
        let details = users.info;
        const detailsString = `
                Добавлен: ${details.data}
                Возраст: ${details.age}
                Семейное положение: ${details.maritalStatus}
                Работает: ${details.job}
                Образование: ${details.education}
                `;
        console.log(detailsString);
        documentQuerySelector(‘.details-cell’).text(detailsString)
        $('.my #awesome selector');
      }
    });
  });
});
