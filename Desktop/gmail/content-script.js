!function(){
    function checkfwd () {
    $(document).ready(function(){
    $('input[name*=subjectbox]').each(function(i, val){$(val).val($(val).val().replace('Fwd:',''))})
    $('div[class*=gmail_signature]').each(function(i, val){$(this).remove();})
    /* $('.editable div').each(function(i, val){
    console.log($(val).html());
        var arr=($(val).html().split("<br>"));
        console.log(arr);
        arr.forEach(function(x,v){
            if(x.includes("Forwarded message")||x.includes("Original message"))
            {for(j=v;j<v+6;j++){console.log(arr[j]);$(val).html($(val).html().replace(arr[j],''));}}
           
         })
        for(k=0;k<8;k++){if($(val).html().split("<br>")[0]==''){$(val).html($(val).html().replace('<br>',''));}}}) */
            
        
    $('.editable div').each(function(i, val){
            $form = $(val);
            var html = $form.html();    
         if(html.split("<br>")[0].includes("Forwarded message")){
             var zero = html.split("<br>")[0];
            var one = html.split("<br>")[1];
            var two = html.split("<br>")[2];
            var three = html.split("<br>")[3];
            var four = html.split("<br>")[4];
            var five = html.split("<br>")[5];
            var six = html.split("<br>")[6];
            
            html=html.replace(zero,'');html=html.replace(one,'');html=html.replace(two,'');html=html.replace(three,'');html=html.replace(four,'');html=html.replace(five,'');html=html.replace(six,''); 
        for(k=0;k<8;k++){   if(html.split("<br>")[0]==''){html=html.replace('<br>','');}}
            $(val).html(html);
            } 
        //  console.log(html);
        }) 

});    
    }

    function loop () {
        setInterval(function (){
            checkfwd();
        }, 2000);
    }

    loop()

}();
