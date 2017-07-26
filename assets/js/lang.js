var lang = window.navigator.userLanguage || window.navigator.language;
var clickCount = 0;
var i18n = domI18n({
	selector: '[data-translate]',
	separator: ' // ',
	languages: ['pl', 'en'],
	defaultLanguage: 'pl'
});
$("span.lang")
	.on("click", function() {
		clickCount++;
		$("span.lang")
			.attr("id", clickCount % 2 === 0 ? "pl" : "en");
		if ($("span.lang")
			.attr("id") == "en") {
			i18n.changeLanguage('en')
		} else {
			i18n.changeLanguage('pl')
		}
	});
$(document)
	.ready(function() {
		if (lang != 'pl') {
			i18n.changeLanguage('en');
			clickCount++;
		}
	});