ReactiveLocalStorage.onParamChange('color__4', function(value) {
  if (value !== 'null') {
    $('[js-colors-row-num="2"]').removeClass('is-hidden');
  } else {
    $('[js-colors-row-num="2"]').addClass('is-hidden');
  }
});

ReactiveLocalStorage.onParamChange('color__8', function(value) {
  if (value !== 'null') {
    $('[js-colors-row-num="3"]').removeClass('is-hidden');
  } else {
    $('[js-colors-row-num="3"]').addClass('is-hidden');
  }
});