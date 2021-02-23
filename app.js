<script>
    $('input').on('focusin', function(){
        if (this).parent().find('label').addClass('active');
    });
    $('input').on('focusout', function(){
        if (!this.value){
            $(this).parent().find('label').removeClass('active');
        }

    }); 
</script>//archivo para funcionalidad de la app 