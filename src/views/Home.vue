<template>
  <div>
    <header class="home-header wrap">
      <div class="deliver-bar">
        <div class="address">
          <div class="icon"><van-icon name="location" size="1.5rem" /></div>
          <div class="text">
            <div class="city">Folsom</div>
            <div class="post-code">95630</div>
          </div>
        </div>
        <div class="deliver-date">
          <div></div>
          <div>送货日 周四 7/1</div>
          <div class="clock"><van-icon name="clock" size="1rem" /></div>
        </div>
        <div class="cart"><van-icon name="shopping-cart" size="1.5rem" /></div>
      </div>
      <div class="search-bar">
        <van-search
          v-model="value"
          placeholder="请输入要搜索的商品"
          background="#4fc08d00"
          shape="round"
        />
      </div>
    </header>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'home',
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.home-header {
  position: fixed;
  background: rgba(194, 194, 194, 0.486);
  left: 0;
  top: 0;
  .wh(100%, 116px);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  .boxSizing();
  font-size: 15px;
  z-index: 10000;
  .deliver-bar {
    flex-basis: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .address {
      flex-basis: 10%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .icon {
        flex-basis: auto;
      }
      .text {
        flex-basis: auto;
        display: flex;
        flex-flow: column;
        .city {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
          flex-basis: 100%;
        }
        .post-code {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
          flex-basis: 100%;
        }
      }
    }
    .deliver-date {
      flex-basis: 60%;
      display: flex;
      .wh(74%, 20px);
      line-height: 20px;
      margin: 10px 0;
      padding: 5px 0;
      justify-content: space-around;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .clock {
        text-align: center;
      }
    }
    .cart {
      text-align: center;
      flex-basis: 10%;
    }
  }
  .search-bar {
    flex-basis: 100%;
  }
}
</style>
