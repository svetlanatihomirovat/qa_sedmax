//Авторизация в системе ('#LoginForm_account': 'test', '#LoginForm_password': 'test')
Feature('Авторизация в системе');
//Успешно
Scenario('Успешная авторизация', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.sedmax-page-wrap');
});
//Ошибки при авторизации
Scenario('Ошибка авторизации', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'test');
   I.fillField('#LoginForm_password', 'admin');
   I.click('.btn');
   I.seeElement('.error');
});
Scenario('Error login2', (I) => {
   I.amOnPage('/users/user/login');
   I.fillField('#LoginForm_account', 'admin');
   I.fillField('#LoginForm_password', 'test');
   I.click('.btn');
   I.seeElement('.error');
});

