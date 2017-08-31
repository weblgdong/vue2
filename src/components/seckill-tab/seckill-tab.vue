<template>
  <div class="seckill-tab">
    <router-link tag="div" class="tab-item" to="/seckill/:id/good-list">
      <span class="tab-link">
        <span class="time">10:00</span>
        <span class="state">即将开始</span>
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/purchased">
      <span class="tab-link">
         <span class="time">14:00</span>
         <span class="state">即将开始</span>
      </span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/purchased">
      <span class="tab-link">
         <span class="time">22:00</span>
         <span class="state">即将开始</span>
      </span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .seckill-tab
    margin-top: 6px
    height: 52px
    background: #fff
    .tab-item
      float left
      width: 33.3%
      height: 52px
      text-align center
      color: #aaa
      .tab-link
        .time
          padding-top: 7px
          padding-bottom: 6px
          display block
          font-size: 20px
          font-family: Arial
          font-weight 600
        .state
          display block
          font-size: 13px
      &.router-link-active
        color:#f82f44
</style>
