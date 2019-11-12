/*if (!elementSupportsAttribute('textarea', 'placeholder')) {
	// Если браузер не поддерживает атрибут, то выполняется код jQuery
	$("#example-three")
		.data("originalText", $("#example-three").text())
		.css("color", "#999")
		.focus(function() {
		var $el = $(this);
		if (this.value == $el.data("originalText")) {
			this.value = "";
		}
	})
	.blur(function() {
		if (this.value == "") {
			this.value = $(this).data("originalText");
		}
	});
} else {
	// Если же браузер поддерживает HTML5, то просто используем эту возможность
	$("#example-three")
		.attr("placeholder", $("#example-three").text())
		.text("");
}

*/

