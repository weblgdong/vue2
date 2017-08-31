<template>
  <div class="good-list">
    <ul class="good-items">
      <li class="item border-1px">
        <div class="icon">
          <img src="./0193941A7595429FBECE4B6C867C5F13.png"/>
        </div>
        <div class="content">
          <div class="title">
            <div class="icon" :class="classMap[1]"></div>
            <div class="name">佳能6D 高端相机全画幅 专业单反 数码相机单反相机 EOS6D单机</div>
          </div>
          <div class="good-type">手机数码-相机</div>
          <div class="present-price">¥1</div>
          <div class="cost-price">原价:¥5000</div>
        </div>
        <div class="buy">去抢购</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.classMap = ['seckill', 'purchased']
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .good-list
    padding-top: 6px
    .good-items
      .item
        position: relative
        display: flex
        padding-bottom: 16px
        border-1px(rgb(240, 240, 240))
        background: #fff
        & > .icon
          flex: 0 0 140px;
          width: 140px
          padding: 5px
          text-align center
          box-sizing: border-box
          img
            max-width 100%
            max-height 100%
      .content
        flex: 1
        padding: 0 10px
        .title
          padding-top: 16px
          .icon
            float: left
            margin: 3px 5px 0 0;
            font-size: 0
            width: 20.5px;
            height: 11.5px;
            background-size: 20.5px 11.5px
            &.purchased
              bg-image('purchased')
            &.seckill
              bg-image('seckill')
          .name
            font-size: 13px
            line-height: 17px
            color: #252525
        .good-type
          padding: 8px 0 26px
          font-size: 12px
          color: #646464
        .present-price
          font-size: 22px
          color: #f82f44
          font-weight: 500
        .cost-price
          padding-top: 7px
          font-size: 10px
          color: #aaa
          text-decoration: line-through
      .buy
        position: absolute
        right: 16px
        bottom: 16px
        width: 80px
        height: 25px
        font-size: 15px
        line-height: 25px
        color: #f82f44
        font-weight 700
        border: 1px #f82f44 solid
        border-radius: 8px
        text-align: center
</style>
