// ОТЧЕТЫ ПО УЧЕТУ ЭНЕРГОРЕСУРСОВ, кнопка удалить выбранное
Feature('Кнопка удалить выбранное');
Scenario('Тест кнопки удалить', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//button[@class='btn red-corp']");
    I.seeElement("//div[@class='modal-dialog ']/div");
});

//Проверка отображения наименования созданных отчетов
Feature('Проверка отображения наименования созданных отчетов');
Scenario('Проверка наименования', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('.react-bs-table-container');
});

Scenario('Тест кнопки копировать', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//button[@class='btn orange']");
    I.seeElement("//div[@class='modal-dialog ']/div");
});

Feature('Клик по отчетам');
Scenario('Тест формы', (I) =>{
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement('//table[@class="table table-striped table-bordered table-hover"]/tbody/tr[1]/td[3]/div/a');
    I.click('//table[@class="table table-striped table-bordered table-hover"]/tbody/tr[1]/td[3]/div/a');
    I.fillField('//div[@class="modal-dialog"]');
    I.seeElement('//div[@class="modal-dialog "]/div[@class="modal-content"]/div[@class="modal-footer"]/button[@class="btn blue"]');
});
