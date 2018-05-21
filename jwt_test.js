//Авторизация в системе ('#LoginForm_account': 'test', '#LoginForm_password': 'test')
Feature('Проверка получения jwt');
//Успешно
Scenario('Получение jwt зарегестрированным пользователем', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.sedmax-page-wrap');
   I.seeCookie('jwt');
});

Scenario('Получение jwt не зарегестрированным пользователем', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test1');
   I.click('.btn');
   I.seeElement('.error');
   I.dontSeeCookie('jwt');
});

