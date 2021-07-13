<template>
  <header class="home-header">
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
        class="search"
        v-model="value"
        placeholder="请输入要搜索的商品"
        background="#4fc08d00"
        shape="round"
      />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'homeheader',
})
</script>

<style lang="less" scoped>
@import '../common/style/mixin';
.home-header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(194, 194, 194, 0.486);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  .boxSizing();
  font-size: 15px;
  z-index: 1000;
  .deliver-bar {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .address {
      flex: none;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      .icon {
        flex: none;
      }
      .text {
        flex: none;
        display: flex;
        flex-flow: column;
        .city {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
        }
        .post-code {
          font-size: 12px;
          font-weight: 600;
          color: #666;
          line-height: 12px;
        }
      }
    }
    .deliver-date {
      flex: auto;
      display: flex;
      line-height: 20px;
      margin: 5px 5px;
      padding: 5px 0px;
      justify-content: space-between;
      color: #232326;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      .clock {
        flex: none;
        margin: 0 8px;
      }
    }
    .cart {
      flex: none;
    }
  }
  .search-bar {
    width: 100%;
    .search {
      padding: 5px 12px;
    }
  }
}
</style>
