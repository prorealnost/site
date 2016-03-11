jQuery.validator.addMethod("phone", function(value, element) {
  var v = value.replace(/[^\+0-9]/g, '');
  var isvalid = this.optional(element) || /^\+?\d{10,14}$/.test(v);
  return isvalid;
}, "Пожалуйста, введите полный номер телефона в международном формате, например +7 921 123 4567");

$(function() {
  $('form').each(function(){   
    var myrules = new Array();
    
    // each input with rules
    $(this).find('input[rules],select[rules],textarea[rules]').each(function(){
      myrules[$(this).attr('name')] = $(this).attr('rules');

      // revalidate on change
      $(this).change(function(){
        $(this).valid();
      });
    });
    
    /* Валидация */
    $(this).validate({
      rules: myrules,
    });
  });
});