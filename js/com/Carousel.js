define(function (require) {
        var $ = require('jquery')
        let Carousel = (function () {
            function _Carousel(ct) {
                this.$ct = ct
                this.init()
                this.addBullet()
                this.$bulletLiList = ct.find('.bullet>li')
                this.carouselSwitch()
            }

            _Carousel.prototype = {
                init: function () {

                    this.$bullet = this.$ct.find('.bullet')
                    this.$imgCt = this.$ct.find('.img-ct')
                    this.imgCount = this.$ct.find('.img-ct>li').length
                    this.imgWidth = this.$ct.find('.img-ct>li img').width()
                    console.log(this.imgWidth)
                    this.isFinish = true
                    this.curPageIndex = 1
                },
                carouselSwitch: function () {
                    this.substitution()
                    this.playPre()
                    this.playNext()
                    this.bulletClick()
                },
                playPre: function () {
                    this.$ct.find('.btn-pre').click(() => {
                        if (!this.isFinish) return
                        this.isFinish = false
                        this.curPageIndex--
                        console.log(this.curPageIndex)
                        this.$ct.find('.img-ct').animate({'left': `${-this.imgWidth * this.curPageIndex}px`}, () => {
                            if (this.curPageIndex === 0) {
                                this.curPageIndex = this.imgCount
                                this.$ct.find('.img-ct').css({'left': `${-this.imgWidth * this.imgCount}px`})
                            }
                            this.isFinish = true
                            this.setBullet()
                        })
                    })
                },

                playNext: function () {
                    this.$ct.find('.btn-next').click(() => {
                        if (!this.isFinish) return;
                        this.isFinish = false
                        this.curPageIndex++
                        this.$ct.find('.img-ct').animate({'left': `${-this.imgWidth * this.curPageIndex}px`}, () => {
                            if (this.curPageIndex === this.imgCount + 1) {
                                this.curPageIndex = 1
                                this.$ct.children('.img-ct').css('left', `${-this.imgWidth }px`)
                            }
                            this.isFinish = true;
                            this.setBullet()
                        })
                    })
                },
                addBullet: function () {
                    this.$imgCt.width(this.imgWidth * (this.imgCount + 2))
                    for (let j = 1; j < this.imgCount; j++) {
                        let $li = $('<li></li>')
                        this.$bullet.append($li)
                    }
                },
                setBullet: function () {
                    this.$bulletLiList.removeClass('active')
                        .eq(this.curPageIndex - 1).addClass('active')
                },
                bulletClick: function () {
                    this.$ct.find('.bullet').click((e) => {
                        this.curPageIndex = this.$bulletLiList.index(e.target) + 1
                        console.log(this.curPageIndex)
                        if (this.curPageIndex === 0) return
                        this.$ct.find('.img-ct').css({'left': `${-this.imgWidth * (this.curPageIndex)}px`})
                        this.setBullet()
                    })
                },
                substitution: function () {
                    let $imgCt = this.$ct.find('.img-ct')
                    let firstClone = this.$ct.find('.img-ct>li').first().clone()
                    let lastClone = this.$ct.find('.img-ct>li').last().clone()
                    firstClone.appendTo($imgCt)
                    lastClone.prependTo($imgCt)
                    this.$ct.find('.img-ct').css({'left': `${-this.imgWidth}px`})
                }
            }
            return {
                init: function ($ct) {
                    $ct.each(function (index, node) {
                        new _Carousel($(node))
                    })
                }
            }

        })()
        return Carousel
    }
)
// Carousel.init($('.carousel'))

//    new Carousel($('.carousel').eq(0))
//    new Carousel($('.carousel').eq(1))
