import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const useStore = useUserStore()
    const isLogin = computed(() => useStore.userInfo.token)
    const cartList = ref([])

    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        const res = await insertCartAPI({ skuId, count })
        await findNewCartListAPI()
        cartList.value = res.result
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    const delCart = (skuId) => {
      console.log('传入的 skuId:', skuId, '类型:', typeof skuId)
      console.log('购物车内容:', JSON.stringify(cartList.value))
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      console.log('findIndex 结果:', idx)
      cartList.value.splice(idx, 1)
    }

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }

    const isAll = computed(() => cartList.value.every((item) => item.selected))

    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))

    const selectedCount = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count, 0),
    )
    const selectedPrice = computed(() =>
      cartList.value.filter((item) => item.selected).reduce((a, c) => a + c.count * c.price, 0),
    )
    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
    }
  },
  {
    persist: true,
  },
)
