$(function () {

    //����Ϊ�ݸ�
    $("#save-as-draft").on('click', function () {
        var html = UE.getEditor('editor').getContent();
        var url = './article_draft_add.asp';
        $.post(url, { content: html }, function (data) {
            if (data) {
                var draftListUrl = './article_draft_list.asp';
                $.get(draftListUrl, function (data) {
                    if (data) {
                        $("#editor-draft").html(data);
                    }
                });
                alert('����Ϊ�ݸ�ɹ���');
            }
        });
    });
    //����Ϊģ��
    $("#save-as-template").on('click', function () {
        var html = UE.getEditor('editor').getContent();
        var url = './article_template_add.asp';
        $.post(url, { content: html }, function (data) {
            if (data) {
                var listUrl = '/article_template_list.asp?ismine=true';
                $.get(listUrl).then(function (d) {
                    $("#personalTemplates").html(d);
                });
                alert('����Ϊģ��ɹ���');
            }
        });
    });
});
