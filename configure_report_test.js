const assert = require('assert');
// - Проверка страницы "Настройка отчета" (при нажатии кнопки "Добавить отчет")
Feature('Report setup');

//- Проверка страницы "Настройка отчета" (при нажатии кнопки "Добавить отчет")
//	-> Проверка наличия элементов
//	-> При выборе устройства из дерева, происходит ли отображение данных в левой таблице
//	-> Проверка выбора каналов по кнопке "Выбрать все каналы" (Доступные каналы) и появления их в таблице
//	-> Проверка кнопки "Переместить выбранные" и появления в правой таблице
//	-> Проверка действия кнопки "Удалить выбранное", в том числе, когда отчеты не выбраны
//	-> Проверка перехода по кнопке "Порядок каналов" на страницу "Порядок каналов"
//	-> Проверка страницы "Порядка каналов" (при нажатии кнопки "Порядок каналов" на странице )
//		-> Проверка наличия элементов
//		-> Проверка поведения элементов на странице "Порядка каналов"
//-> Проверка действия кнопок сортировки в таблицах(Не реализовала)
Feature('При выборе устройства из дерева, происходит ли отображение данных в левой таблице');
Scenario('Выбор элементов в дереве', (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//*[@id='root']/div/div/div[1]/div[2]/div/a/button");
    I.seeElement("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input");
    I.fillField("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input", "testtest");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
});

//-> Проверка выбора каналов по кнопке "Выбрать все каналы" (Доступные каналы) и появления их в таблице
Feature('Проверка выбора каналов по кнопке "Выбрать все каналы" (Доступные каналы) и появления их в таблице');
Scenario('Выбор каналов по кнопке "Выбрать все каналы"', async(I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//*[@id='root']/div/div/div[1]/div[2]/div/a/button");
    I.seeElement("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input");
    I.fillField("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input", "testtest");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
	I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
	const attribut = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attribut, 'background-color: rgb(245, 245, 245);');
});

//-> Проверка кнопки "Переместить выбранные" и появления в правой таблице
Feature('Проверка кнопки "Переместить выбранные" и появления в правой таблице');
Scenario('Перемещение каналов в "Выбранные"', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//*[@id='root']/div/div/div[1]/div[2]/div/a/button");
    I.seeElement("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input");
    I.fillField("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input", "testtest");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
	I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
	const attribut = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
	assert.equal(attribut, 'background-color: rgb(245, 245, 245);');
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");  	
});

//-> Проверка действия кнопки "Удалить выбранное", в том числе, когда отчеты не выбраны
Feature('Проверка кнопки "Удалить выбранное" при нажатии кнопки "Выбрать все каналы"');
Scenario('Проверка кнопки "Удалить выбранное" при нажатии кнопки "Выбрать все каналы"', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//*[@id='root']/div/div/div[1]/div[2]/div/a/button");
    I.seeElement("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input");
    I.fillField("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input", "testtest");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
	I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
    const attribut = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attribut, 'background-color: rgb(245, 245, 245);') 
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
    I.click('//div[@class="col-md-6"]/div/div/button[@class="btn blue mr5"]')
	const attribut2 = await I.grabAttributeFrom('//div[@class="react-bs-table-container"]/div[@class="react-bs-table react-bs-table-bordered"]/div[@class="react-bs-container-body"]/table[@class="table table-bordered table-hover table-condensed"]/tbody/tr[2]', 'style'); 
    I.click('//div[@class="col-md-6"]/div/div/button[@class="btn red"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[1]");	
});

Feature('Проверка кнопки "Удалить выбранное" при нажатии кнопки "Выбрать все каналы"');
Scenario('Проверка кнопки "Удалить выбранное"', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//*[@id='root']/div/div/div[1]/div[2]/div/a/button");
    I.seeElement("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input");
    I.fillField("//*[@id='root']/div/div/div[2]/form/div/div[1]/div[1]/div/input", "testtest");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
	I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
    const attribut = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attribut, 'background-color: rgb(245, 245, 245);') 
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
	const attribut2 = await I.grabAttributeFrom('//div[@class="react-bs-table-container"]/div[@class="react-bs-table react-bs-table-bordered"]/div[@class="react-bs-container-body"]/table[@class="table table-bordered table-hover table-condensed"]/tbody/tr[2]', 'style');
    I.click('//div[@class="col-md-6"]/div/div/button[@class="btn red"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");	
});

Feature('Проверка страницы Порядка каналов (при нажатии кнопки Порядок каналов на странице ): Проверка наличия элементов');
Scenario('Проверка наличия элементов на странице "Порядка каналов"', async (I) => {
    I.amOnPage('/users/user/login');
    I.fillField('#LoginForm_account', 'test');
    I.fillField('#LoginForm_password', 'test');
    I.click('.btn');
    I.seeElement('.sedmax-page-wrap');
    I.amOnPage('/sedmax/web/ui/reports/unfold/index');
    I.seeElement("//div[@class='actions']/div/a");
    I.click("//div[@class='actions']/div/a");
    I.seeElement("//div[@class='form-body']/div[@class='row']/div[@class='col-md-2']/div[@class='form-group']/input[@class='form-control']");
    I.click("//li[@id='obj-12']/a[@id='obj-12_anchor']/i[1]");
    I.seeElement("//div[@class='react-bs-container-body']/table/tbody/tr[2]");
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn blue mr5"]');
    const attribut = await I.grabAttributeFrom('//div[@class="react-bs-container-body"]/table/tbody/tr[2]', 'style');
    assert.equal(attribut, 'background-color: rgb(245, 245, 245);');
    I.click('//div[@class="col-md-4"]/div/div/button[@class="btn green"]');
	I.click('//div[@class="form-body"]/div[@class="options"]/div/input[@type="checkbox"]');
    I.seeElement("//div[@class='react-bs-table-container']/div[@class='react-bs-table react-bs-table-bordered']/div[@class='react-bs-container-body']/table[@class='table table-bordered table-hover table-condensed']/tbody/tr[2]");
    I.click('//div[@class="form-actions fluid"]/div[@class="row"]/div[@class="col-md-6"]/div[@class="col-md-offset-3 col-md-9"]/button[@class="btn blue"]');
    I.seeInCurrentUrl('/sedmax/web/ui/reports/unfold/new');
    I.click('//div[@class="form-body"]/div/div/button[@class="btn blue mr5"]');
	I.click('//div[@class="form-body"]/div/div/button[@class="btn green"]');
	I.click('//div[@class="form-actions fluid"]/div[@class="row"]/div[@class="col-md-6"]/div[@class="col-md-offset-3 col-md-9"]/button[@class="btn blue"]');
	I.click('//div[@class="form-actions fluid"]/div[@class="row"]/div[@class="col-md-6"]/div[@class="col-md-offset-3 col-md-9"]/a/button[@class="btn default"]');
});


