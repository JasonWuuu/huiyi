$(function () {
    //????????
    
    //????????
    $("#save-as-template").on('click', function () {
        var html = UE.getEditor('editor').getContent();
        var url = './article_template_add.asp';
        $.post(url, { content: html }, function (data) {
            if (data) {
                var listUrl = '/article_template_list.asp?ismine=true';
                $.get(listUrl).then(function (d) {
                    $("#personalTemplates").html(d);
                });
                alert('保存模板成功');
            }
        });
    });

    



   

    
   



});