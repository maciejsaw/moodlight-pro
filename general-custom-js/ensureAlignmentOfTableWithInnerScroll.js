BEMDataGrid = (function() {

	var originalHeaderPadding;	

	function ensureAlignemntOfFixedHeader(jQueryObjectWithDataGrids) {

		// .each is needed because there might be more than one such table on the page
		jQueryObjectWithDataGrids.each(function(index) { 
			var $thisContent = $(this).find('.bem-datagrid__content');
			var $thisHeader = $(this).find('.bem-datagrid__header-row');

			var contentWidth = $thisContent.width();
			var contentScrollWidth = $thisContent.prop('scrollWidth');
			var widthDelta = contentWidth - contentScrollWidth;

			if (typeof originalHeaderPadding == 'undefined') {
				originalHeaderPadding = parseInt($thisHeader.css('padding-right').replace("px", ""));
			}

			if (widthDelta > 0 && widthDelta < 40) { //double-checking if the widthDelta number makes sense, it should never be more than 40
				var newPaddingForHeader = originalHeaderPadding + widthDelta;
				$thisHeader.css('padding-right', newPaddingForHeader+'px');
			} else if (widthDelta === 0) {
				$thisHeader.css('padding-right', originalHeaderPadding+'px');
			}
		});

	}

	return {
		ensureAlignemntOfFixedHeader: ensureAlignemntOfFixedHeader
	}
})();

//EXAMPLE usage:
//each time you modify the content of the table, you should ensure that headers are aligned
BEMDataGrid.ensureAlignemntOfFixedHeader($('.bem-datagrid--shared-links'));
