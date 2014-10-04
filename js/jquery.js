 $("input[type=checkbox]").click(function() {
   $(this).parent().css('text-decoration", this.checked ? "line-through" : "");
});
