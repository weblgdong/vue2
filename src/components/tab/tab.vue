<template>
  <div class="tabs">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/seckill" >
        <span class="tab-link">一元秒杀</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/purchased" >
        <span class="tab-link" >一元换购</span>
      </router-link>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tab
    display: flex
    width: 100%
    height: 30px;
    border-bottom: 1px #ddd solid
    .tab-item
      flex: 1
      text-align: center
      line-height: 30px
      .tab-link
        display: block
        font-size: 14px
        color: #858585
        background: #fafafa
      &:first-child
        border-right: 1px #ccc solid
      &.router-link-active
        .tab-link
          color: #212121
</style>
