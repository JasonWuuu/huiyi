$(function () {
    // var ue = UE.getEditor('editor');
    // ue.addListener('contentChange',function(editor){
    //     var content = ue.getContent();
    //     var target = "<div>" + content +"</div>";
    //     var tables = $(target).find("table");

    //     tables.each(function(){
    //         alert($(this));
    //     });

    //     if(tables.length > 0){
    //         domtoimage.toPng(tables[0])
    //         .then(function (dataUrl) {
    //             //上传至服务器
    //             //页面上将该table改为png
    //             var img = new Image();
    //             img.src = dataUrl;

    //             var newContent = $(target).append($(img));
    //             ue.setContent(newContent);
    //         })
    //         .catch(function (error) {
    //             console.error('oops, something went wrong!', error);
    //         });
    //     }
        
    // });

    

    function extractImageAndSendToServer(htmlContent){
        var makeRoot = "<div id='local_wrapper'>" + htmlContent + "</div>";
        var ueditorContent = $(makeRoot);
        // table to image
        ueditorContent.find("table").each(function(){
            var node = $(this).appendTo("body");
            domtoimage.toPng(node[0])
                .then(function (dataUrl) {
                    //上传至服务器
                    alert(dataUrl);
                    //页面上将该table改为png
                    var imgConverted = $("<img></img>").attr("src", dataUrl);
                    $(this).append(imgConverted)

                })
                .then(function(){
                    node.remove();
                })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
            
        });

        var result= "";  // sperator by ‘#’
        ueditorContent.find("img").each(function(){

            // filter urls
            var url = $(this).attr("src");
            if(url.indexOf("135") >= 0){
                imageSender(url);
            }
        });
    }

    // 上传图片小工具
    function imageSender(imageId){
        alert("send :" + imageId);
    }
    // 获取图片工具
    function imageFetcher(imageId){
        alert("fetch :" + imageId);
    }
    
});