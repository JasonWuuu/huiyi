function convertTableToImage(html) {
    var deferred = $.Deferred();
    var list = [];
    var container$ = $("<div></div>").append(html);

    container$.find("table").each(function (index, entity) {
        var flag$ = $('<span class="htmlToImageFlag"></span>');
        flag$.insertBefore(entity);
        var p = domToimage(entity).then(function (img) {
            $(img).insertAfter(flag$);
            flag$.remove();
        });
        list.push(p);
    });

    return Promise.all(list).then(function () {
        return container$.html();
    });
}

function domToimage(table) {
    var deferred = $.Deferred();
    var parent1$ = $("<div></div>");
    var node$ = $('<div></div>').append(table);
    node$.appendTo('body');
    var node = node$[0];
    domtoimage.toPng(node)
        .then(function (dataUrl) {
            return sumitImageFile(dataUrl);
        }).then(function (src) {
            console.log(src);
            var img = new Image();
            img.src = src;
            var parent2$ = $("<div></div>");
            parent2$.append(img);
            parent1$.append(parent2$);
        })
        .then(function () {
            node$.remove();
            deferred.resolve(parent1$.html());
        })
        .catch(function (error) {
            node$.remove();
            console.error('转换图片出错，可能遇到跨域问题!', error);
            deferred.reject(error);
        });
    return deferred.promise();
}