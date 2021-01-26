var yihan = this;

function initHandlerUser(ele) {}
function initHandlerThis(initElement) {
	var elementList = [];
	$(initElement).each(function(eleIndex, eleItem) {
		$("*[yihan-type=" + eleItem + "]").each(function(index, item) {
			switch (eleItem) {
				case "loading":
					var style = $(item).attr("yihan-loading-style");
					if(style == undefined || style == null || style.trim() == ""){
						style = "one";
					}
					var $item = null;
					switch(style){
						case "one":
							$item = $(
								"<div class='loading_fade-in'><div class='loading_container'><div class='one common'></div><div class='two common'></div><div class='three common'></div><div class='four common'></div><div class='five common'></div><div class='six common'></div><div class='seven common'></div><div class='eight common'></div></div><p class='loading_text'>Loading...</p><div class='loading_bar'><div class='loading_progress'></div></div></div>"
							);
							break;
						case "two":
							$item = $(
								"<div class='loading_two_body'><div class='loading_two'><div class='loading_text_two'>Loading...</div><div class='loading_two_horizontal'><div class='loading_two_circlesup'><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div></div><div class='loading_two_circlesdwn'><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div></div></div><div class='loading_two_vertical'><div class='loading_two_circlesup'><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div></div><div class='loading_two_circlesdwn'><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div><div class='loading_two_circle'></div></div></div></div></div>"
							);
							break;
						case "three":
							$item = $(
								"<div class='loading_three_body'><div class='l_main'><div class='l_square'><span></span><span></span><span></span></div><div class='l_square'><span></span><span></span><span></span></div><div class='l_square'><span></span><span></span><span></span></div><div class='l_square'><span></span><span></span><span></span></div></div></div>"
							);
							break;
						case "four":
							
							break;
						case "five":
							
							break;
						default:
							$item = $(
								"<div class='loading_fade-in'><div class='loading_container'><div class='one common'></div><div class='two common'></div><div class='three common'></div><div class='four common'></div><div class='five common'></div><div class='six common'></div><div class='seven common'></div><div class='eight common'></div></div><p class='loading_text'>Loading...</p><div class='loading_bar'><div class='loading_progress'></div></div></div>"
							);
							break;
					}
					if($item != null){
						$(item).after($item);
						elementList.push($item);
					}
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