document.observe('dom:loaded', function() {
  $$('.sponsors').each(function(sponsors) {
    $A(sponsors.childElements()).sortBy(function() {
	  return Math.random();
	}).each(function(sponsor) {
      sponsors.insert(sponsor);
    });
  });
});