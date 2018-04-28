var imageIndex=0;
    function startCrop() {
        var uploadedImageType = 'image/jpeg';
        var option = { "maxWidth": 4096, "maxHeight": 4096 };
        if (uploadedImageType === 'image/jpeg') {
            if (!option) {
                option = {};
            }

            option.fillColor = '#fff';
        }
        var $image = $('#image');
        var result = $image.cropper('getCroppedCanvas', option, null);
        if (result) {
            var croppedImageUrl = result.toDataURL(uploadedImageType);
            console.log('croppedImageUrl', croppedImageUrl);
            var targetImage = $("[targetImage]").attr("targetImage");
            var replaceTarget = "[dummyLoc=" + targetImage + "]";
            // 如果dummyLoc是empty的话，就是用户上传的文件
            // alert(targetImage);
            if($.trim(targetImage) == ""){
                addImage(croppedImageUrl, imageIndex++);
            }else{
                $(replaceTarget).attr('src', croppedImageUrl);
            }
           
        }
    }

    function moveImageToCroppingArea() {
        imgurl = $(this).attr('src');
        dummyLoc = $(this).attr('dummyLoc');
        var $image = $('#image');
        $image.cropper('destroy').attr('src', imgurl).cropper({});

        $("[targetImage]").attr("targetImage", dummyLoc);
    }


    function addssDummLoc(){
        $("[targetImage]").attr("targetImage", "");// empty dummLoc 
        console.log("user upload the file, need add its Dummloc");
    }


    $(".fa.fa-upload").on("click", addssDummLoc);
    $("#croppingImages").on("click", "img", moveImageToCroppingArea);
    $("#croppingImages").on("click", "button", removeImage);

    function addImage(src, index){
        // <div class="imageContainer">
    //                         <div><img class="img-responsive center-block" src="1.jpg" dummyLoc='1' /></div>
    //                         <div><button class="btn btn-primary">删除</button></div>
    // 
        var dummLoc = "user_" + index;
        var userUpImg = $("<img class='img-responsive center-block' ></img>").attr("src", src).attr("dummyLoc", dummLoc);
        var imageDiv= $("<div></div>").append(userUpImg);
        var delBtn = $("<div><button class='btn btn-primary'>删除</button></div>");
        var imageContainer = $("<div class='imageContainer'></div>");
        imageContainer.append(imageDiv).append(delBtn);
        console.log(userUpImg);
        $("#croppingImages").append(imageContainer);
    }

    function removeImage(){
        $(this).parent().parent().remove();
    }