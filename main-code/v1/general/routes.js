var ROOT_QUERYSTRING_PARAMS = {
    //
};

QueryStringRouter.setDefaultRootParams(ROOT_QUERYSTRING_PARAMS);

$(document).on('click', '[action-go-to-home-page]', function(event) {
	QueryStringRouter.setFreshParams(ROOT_QUERYSTRING_PARAMS);
});


