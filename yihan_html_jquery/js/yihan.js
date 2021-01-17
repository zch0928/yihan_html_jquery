var yihan = this;

function initHandlerUser(ele) {}
function initHandlerThis(initElement) {
	var elementList = [];
	$(initElement).each(function(eleIndex, eleItem) {
		$("*[yihan-type=" + eleItem + "]").each(function(index, item) {
			switch (eleItem) {
				case "loading":
					var $item = $(
						"<div class='loading_fade-in'><div class='loading_container'><div class='one common'></div><div class='two common'></div><div class='three common'></div><div class='four common'></div><div class='five common'></div><div class='six common'></div><div class='seven common'></div><div class='eight common'></div></div><p class='loading_text'>Loading...</p><div class='loading_bar'><div class='loading_progress'></div></div></div>"
					);
					$(item).after($item);
					elementList.push($item);
					break;
			}
		});
	});
	return elementList;
}
function init(initElement, initHandlerUser) {
	initHandlerUser(initHandlerThis(initElement));
}

/**
 * loading加载框方法
 */
function showLoading(element){
	if(!element)
		throw "空对象";
	element.show();
	element.find(".loading_text").text("loading......");
}
function closeLoading(element){
	if(!element)
		throw "空对象";
	element.hide();
	element.find(".loading_text").text("loading......");
}
function changeLoadingText(element,text){
	if(!element)
		throw "空对象";
	element.find(".loading_text").text(text);
}