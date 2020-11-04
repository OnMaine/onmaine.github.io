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


users = JSON.parse(users);

function createTable(users) {
  let tBody = document.getElementById('userdata').tBodies[0];
  users.forEach((item) => {
    var row = tBody.insertRow();
    for (key in item) {
      if (typeof(item[key]) !== "object") {
        var cell = row.insertCell();
        cell.innerHTML = item[key];
      } else {
        var info = item.info;
        var text = row.insertCell();
        for (key in info) {
          let infoDate = info[key];
          text.innerHTML = infoDate;
        }
      };
    }
  });
};
createTable(users);

//
// $(document).ready(function(){
//    $("#userdata").click(function(event){
//      $('tr td:last-of-type, tr th:last-of-type').show();
//      $('tr td:last-of-type, tr th:last-of-type').hide();
//    });
//  });



 $(document).ready(function() {
   $("#userdata tbody tr").on("click", function() {
     var myIndex = $("#userdata tbody tr").index(this);
     $(this).parents("table").find("tr").each(function() {
       $('tr th:last-of-type').show();
       // $(this).find("th:eq(" + myIndex + ")").show();
       // $('tr td:last-of-type').find("td:eq(" + myIndex + ")").show();
       $('tr td:last-of-type').show();
     });
   });
 });
