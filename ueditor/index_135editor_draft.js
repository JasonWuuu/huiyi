$(function () {
    $('a[href="#editor-draft"]').on('click', function () {
        var draftListUrl = './article_draft_list.asp';
        if (!$.trim($("#personalDraft").html())) {
            $.get(draftListUrl, function (data) {
                if (data) {
                    var target = wrapItemsFromBackend(data);
                    $("#personalDraft").html(target.html());
                }
            });
        }
    });


    function wrapItemsFromBackend(data) {
        var refineData = "<div>" + data + "</div>";
                
        var target = $("<div></div>");
        $(refineData).find(".personalTempContainer").each(function(){
            var divContainer = $("<div class='ParpersonalTempContainer'></div>").append($(this));
            target.append(divContainer);
        });
        return target;
    }

    $("#personalDraft").on("mouseenter", ".ParpersonalTempContainer", showDeleteIcon);
    $("#personalDraft").on("mouseleave", ".ParpersonalTempContainer", hideDeleteIcon);
    $("#personalDraft").on("click", ".glyphicon.glyphicon-trash.del", delTemplate);

    //当鼠标进入个人模板或者同事模板的时候，显示删除按钮
    function showDeleteIcon(){
        var divContainer = $("<div class='subPersonalTempContainer' align='right'></div>");
        var icon_del = $("<span class='glyphicon glyphicon-trash del' aria-hidden='true'></span>").attr("id", $(this).find(".personalTempContainer").attr("data-id"));
        divContainer.append(icon_del);

        $(this).append(divContainer);
    }

    function hideDeleteIcon(){
        $(this).find(".subPersonalTempContainer").remove();
    }

    function delTemplate(event){
        var id = $(this).attr("id");
        var url = '/template_delete.asp?id='+id;
        $.get(url).then(function (data) {
            alert("delete succ");
        });

        event.stopPropagation();//阻止冒泡
    }
});