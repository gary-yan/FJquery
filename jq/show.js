$(function(){
//wait for loading DOM
	var $category = $('ul li:gt(5):not(:last)');
//获得索引值大于5的品牌集集合对象（除了最后一条）
	$category.hide();
	var $toggleBtn = $('div.showmore > a');
	$toggleBtn.click(function(){
		$category.show();
		$(this).find('span')
					.text("精简显示品牌");
		$('ul li').filter(":contains('佳能'),:contains('尼康'),:contains('奥林巴斯')")
		.addClass("promoted");
		return false;
	})
})