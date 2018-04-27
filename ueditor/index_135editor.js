/**  
 * 通过ueditor将base64图片提交到服务器,依赖jquery
 * var base64str = "data:image/png;base64,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";
 * sumitImageFile(base64str).then(function (data) {
 *     console.log(data);
 * });
 */
function sumitImageFile(base64Codes) {

    var convertBase64UrlToBlob = function (urlData) {
        var arr = urlData.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bytes = window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte  

        //处理异常,将ascii码小于0的转换为大于0  
        var ab = new ArrayBuffer(bytes.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < bytes.length; i++) {
            ia[i] = bytes.charCodeAt(i);
        }

        return new Blob([ab], { type: mime });
    };

    vargetFileExt = function (urlData) {
        var arr = urlData.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        return mime.replace("image/", "");
    };

    var deferred = $.Deferred();

    var form = document.forms[0];

    //var formData = new FormData(form);   //这里连带form里的其他参数也一起提交了,如果不需要提交其他参数可以直接FormData无参数的构造函数  
    var formData = new FormData();

    var fileExt = getFileExt(base64Codes);

    //convertBase64UrlToBlob函数是将base64编码转换为Blob  
    formData.append("upfile", convertBase64UrlToBlob(base64Codes), "file_" + Date.parse(new Date()) + "." + fileExt);  //append函数的第一个参数是后台获取数据的参数名,和html标签的input的name属性功能相同  

    //ajax 提交form  
    $.ajax({
        url: 'http://localhost:8989/ueditor/asp/controller.asp?action=uploadimage',
        type: "POST",
        data: formData,
        //dataType: "text",
        processData: false,         // 告诉jQuery不要去处理发送的数据  
        contentType: false,        // 告诉jQuery不要去设置Content-Type请求头  

        success: function (data) {
            //console.log(data);
            if (data) {
                data = JSON.parse(data);
                if (data.state == "SUCCESS") {
                    deferred.resolve("/ueditor/asp/" + data.url);
                }
                else {
                    deferred.reject("error");
                }
            }

            else {
                deferred.reject("error");
            }

            //window.location.href = "${ctx}" + data;
        },
        xhr: function () {            //在jquery函数中直接使用ajax的XMLHttpRequest对象  
            var xhr = new XMLHttpRequest();

            xhr.upload.addEventListener("progress", function (evt) {
                if (evt.lengthComputable) {
                    var percentComplete = Math.round(evt.loaded * 100 / evt.total);
                    console.log("正在提交." + percentComplete.toString() + '%');        //在控制台打印上传进度  
                }
            }, false);

            return xhr;
        }

    });

    return deferred.promise();
}
