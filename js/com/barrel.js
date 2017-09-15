define(['jquery'], function ($) {

    function Barrel($ct) {
        this.$ct = $ct
        this.ctWidth = $ct.width()
        this.basicHeight = 200
        console.log(this.ctWidth)
        this.ajaxImages()
    }

    Barrel.prototype = {
        ajaxImages: function () {
            var _this = this
            $.get(`https://pixabay.com/api/?key=6282825-2a9cefbe1dbed27ba005a2747&q=风景&image_type=photo&per_page=20&page=${Math.floor(Math.random()*10)}`)
                .done(function (data) {
                    _this.render(data)
                })
        },
        render: function (data) {
            console.log(data)
            let imgArray = []
            let rowTotalWidth = 0
            data.hits.forEach(imgInfo => {
                imgInfo.rate = imgInfo.webformatWidth / imgInfo.webformatHeight
                let imgWidthBasic = imgInfo.rate * this.basicHeight
                if ((rowTotalWidth + imgWidthBasic) < this.ctWidth) {
                    rowTotalWidth += imgWidthBasic
                    imgArray.push(imgInfo)
                } else {
                    let newRowHeight = (this.ctWidth) / rowTotalWidth * this.basicHeight
                    this.layout(newRowHeight, imgArray)
                    imgArray = [imgInfo]
                    rowTotalWidth = imgWidthBasic
                }
            })

        },
        layout: function (newHeight, imgArray) {
            let $imgCt = $('<div></div>')
            imgArray.forEach((imgInfo) => {
                let $img = $('<img>')
                $img.attr('src', imgInfo.webformatURL)
                $img.height(newHeight + 'px')
                $imgCt.append($img)
            })
            this.$ct.append($imgCt)
            console.log(this.ctWidth)
        }
    }



    return Barrel
})
