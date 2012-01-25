document.observe('dom:loaded', function() {
  $$('.random').each(function(parent) {
    $A(parent.childElements()).sortBy(function() {
	  return Math.random();
	}).each(function(child) {
      parent.insert(child);
    });
  });
});