console.log('Sample JavaScript #7 HW #19');

function replaceCSSComments(str) {
  return str.replace(/\/\/*.*?\ *\/\s?/g, '');
 };

 console.log(replaceCSSComments('код без /*комментарий*/ комментов'));
 console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов'));
 console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов'));


/*
 * #1
 *
 * replaceCSSComments() {...}
 * Найдите и удалите все комментарии CSS.
 * Функция получает строку, возвращает преобразованную строку, конечные пробелы должны быть удалены.
 */

// console.log(replaceCSSComments('код без /*комментарий*/ комментов')); // код без комментов
// console.log(replaceCSSComments('код бе/*коммент1*/з ком/* коммент2 */ментов')); // код без комментов
// console.log(replaceCSSComments('код /*к1*/ без /* к2 */ коммент/*к3*/ов')); // код без комментов
function replaceHTMLComments(str) {
  return str.replace(/\<\!\-\-*.*?\-\-\>\s*/g, '').trim();
};

console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->'));
console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов'));
console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов'));
/*
 * #2
 *
 * replaceHTMLComments() {...}
 * Найдите и удалите все комментарии HTML.
 * Функция получает строку, возвращает преобразованную строку.
 */

// console.log(replaceHTMLComments('<!--коммент1--> код без комментов <!--коммент2-->')); // код без комментов
// console.log(replaceHTMLComments('<!--к1--> код <!-- к2 --><!-- к3 --> без <!-- к4 --> комментов')); // код без комментов
// console.log(replaceHTMLComments('код <!--к1--> без <!-- к2 --> комментов')); // код без комментов
function validateFileType(str) {
  return(/^.+\.jpg|\.jpeg|\.png$/).test(str);
};
console.log(validateFileType('image.png'));
console.log(validateFileType('image.png'));
console.log(validateFileType('image.html'));
console.log(validateFileType('image.file.jpg'));
console.log(validateFileType('image.png.file'));
console.log(validateFileType('image.png.jpeg'));
console.log(validateFileType('image.pngjpeg'));




/*
 * #3
 *
 * validateFileType() {...}
 * С помощью test определите, что переданная строка заканчивается расширениями: jpg, jpeg, png.
 * Функция получает строку – имя файла, возвращает true или false.
 */

// console.log(validateFileType('image.png')); // true
// console.log(validateFileType('image.html')); // false
// console.log(validateFileType('image.file.jpg')); // true
// console.log(validateFileType('image.png.file')); // false
// console.log(validateFileType('image.png.jpeg')); // true
// console.log(validateFileType('image.pngjpeg')); // false
function checkYear(str) {
return (/^(19\d\d|20\d\d|2100)$/).test(str)
};

console.log(checkYear(1900)); 
console.log(checkYear(2001)); 
console.log(checkYear(2100)); 
console.log(checkYear(1899)); 
console.log(checkYear(20)); 
console.log(checkYear(200)); 
console.log(checkYear(20000)); 
console.log(checkYear('20000')); 
console.log(checkYear(19)); 
console.log(checkYear('19')); 
console.log(checkYear(2101));
/*
 * #4
 *
 * checkYear() {...}
 * Определите, что год находится в интервале от 1900 до 2100 с помощью одного только (единственного) регулярного выражения.
 * Функция получает строку – год, возвращает true или false.
 */

// console.log(checkYear(1900)); // true
// console.log(checkYear(2001)); // true
// console.log(checkYear(2100)); // true
// console.log(checkYear(1899)); // false
// console.log(checkYear(20)); // false
// console.log(checkYear(200)); // false
// console.log(checkYear(20000)); // false
// console.log(checkYear('20000')); // false
// console.log(checkYear(19)); // false
// console.log(checkYear('19')); // false
// console.log(checkYear(2101)); // false
function checkEmail(str) {
  return(/^[a-z\-\.]+[a-z]+@[a-z\.]+\.[a-z]{2,3}$/).test(str)
};
console.log(checkEmail('mail@gmail.com'));
console.log(checkEmail('mail.name@mail.ua'));
console.log(checkEmail('mail-name@mail.ua'));
console.log(checkEmail('mail-name@mail.com.ua'));
console.log(checkEmail('mail@gmail'));
console.log(checkEmail('mail@gmail-com'))
console.log(checkEmail(' mail-name@mail.com.ua'));
console.log(checkEmail('mail-name@mail.com.ua '));

/*
 * #5
 *
 * checkEmail() {...}
 * С помощью метода test определите, что переданная строка является имейлом. Примеры имейлов для тестирования: mymail@mail.ru, my.mail@mail.ua, my-mail@yahoo.com, mail@gmail.com
 * Функция получает строку – имейл, возвращает true или false.
 */

// console.log(checkEmail('mail@gmail.com')); // true
// console.log(checkEmail('mail.name@mail.ua')); // true
// console.log(checkEmail('mail-name@mail.ua')); // true
// console.log(checkEmail('mail-name@mail.com.ua')); // true
// console.log(checkEmail('mail@gmail')); // false
// console.log(checkEmail('mail@gmail-com')); // false
// console.log(checkEmail(' mail-name@mail.com.ua')); // false
// console.log(checkEmail('mail-name@mail.com.ua ')); // false
function checkDomainUrl(str) {
  return(/^(http:|https:)\/\/(?!:\/\/)([a-z0-9-_]+\.)*[a-z0-9][a-z0-9-_]+\.[a-z]{2,5}?$/).test(str);
};
 
console.log(checkDomainUrl('http://external.asd1230-123.asd_internal.asd.gm-_ail.com'));
console.log(checkDomainUrl('http://domain.com'));
console.log(checkDomainUrl('https://example.domain.com'));
console.log(checkDomainUrl('https://example.domain-hyphen.com'));
console.log(checkDomainUrl('http://example.domain-hyphen.com'));
console.log(checkDomainUrl('http://www.domain.com'));
console.log(checkDomainUrl('http://www.domain.info'));
console.log(checkDomainUrl('http://www'));
console.log(checkDomainUrl('https://domain'));
console.log(checkDomainUrl(' https://domain'));
console.log(checkDomainUrl('https://domain.com '));
console.log(checkDomainUrl('example.museum'));
console.log(checkDomainUrl('example.domain-hyphen.com'));
console.log(checkDomainUrl('www.domain.com'));
console.log(checkDomainUrl('www.example.domain-hyphen.com'));

/*
 * #6
 *
 * checkDomainUrl() {...}
 * С помощью test определите, что переданная строка является доменом.
 *     Протокол может быть как http, так и https.
 *     Примеры доменов:
 *     http://site.ua, https://my-site.com, https://site.com.ua, https://subdomain.site.com.ua
 *         Функция получает строку – доменное имя, возвращает true или false.
 */

// console.log(checkDomainUrl('http://external.asd1230-123.asd_internal.asd.gm-_ail.com')); // true
// console.log(checkDomainUrl('http://domain.com')); // true
// console.log(checkDomainUrl('https://example.domain.com')); // true
// console.log(checkDomainUrl('https://example.domain-hyphen.com')); // true
// console.log(checkDomainUrl('http://example.domain-hyphen.com')); // true
// console.log(checkDomainUrl('http://www.domain.com')); // true
// console.log(checkDomainUrl('http://www.domain.info')); // true
// console.log(checkDomainUrl('http://www')); // false
// console.log(checkDomainUrl('https://domain')); // false
// console.log(checkDomainUrl(' https://domain')); // false
// console.log(checkDomainUrl('https://domain.com ')); // false
// console.log(checkDomainUrl('example.museum')); // false
// console.log(checkDomainUrl('example.domain-hyphen.com')); // false
// console.log(checkDomainUrl('www.domain.com')); // false
// console.log(checkDomainUrl('www.example.domain-hyphen.com')); // false

/*
 * #7
 *
 * createLinksFromDomains() {...}
 * С помощью replace замените в строке домены вида http://site.ua, https://site.com на <a href="http://site.ua" target="_blank">site.ua</a>.
 * Протокол может быть как http, так и https.
 * Функция получает произвольную строку текста с доменами (один и более), возвращает результат преобразования.
 * В данном задании требуется использовать метод match().
 */

//  <a href="http://site.ua">site.ua</a> text1 <a href="https://site.com">site.com</a> text2 <a href="https://site.com.ua">site.com.ua</a> text3 <a href="https://subdomain.my-site.com.ua">subdomain.my-site.com.ua</a> text4
// console.log(createLinksFromDomains('http://site.ua text1 https://site.com text2 https://site.com.ua text3 https://subdomain.my-site.com.ua text4'));
// site.ua text1 <a href="https://site.com">site.com</a> text2 <a href="https://site.com.ua">site.com.ua</a> text3 subdomain.my-site.com.ua text4
// console.log(createLinksFromDomains('site.ua text1 https://site.com text2 https://site.com.ua text3 subdomain.my-site.com.ua text4'));
function createLinksFromDomains(str) {
  let reg = new RegExp('(http:|https:)\\/\\/(?!:\\/\\/)([a-zA-Z0-9-_]+\\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\\.[a-zA-Z]{2,5}', 'gi');

  str.match(reg).forEach((el) => str = str.replace(el, `<a href="${el}" target="_blank">${el.replace(/^(http:|https:)\/\//gi, '')}</a>`));
  
  return str
};
 
console.log(createLinksFromDomains('http://site.ua text1 https://site.com text2 https://site.com.ua text3 https://subdomain.my-site.com.ua text4'));
console.log(createLinksFromDomains('site.ua text1 https://site.com text2 https://site.com.ua text3 subdomain.my-site.com.ua text4'));