import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, findNewCartListAPI, delCartAPI } from '@/apis/cart'
export const useCartStore = defineStore(
  'cart',
  () => {
    const useStore = useUserStore()
    const isLogin = computed(() => useStore.userInfo.token)
    const cartList = ref([])

    const updataNewList = async () => {
      const res = await findNewCartListAPI()
      cartList.value = res.result
    }

    const addCart = async (goods) => {
      const { skuId, count } = goods
      if (isLogin.value) {
        await insertCartAPI({ skuId, count })
        updataNewList()
      } else {
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }
      }
    }

    const delCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId])
        updataNewList()
      } else {
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }

    const clearCart = () => {
      cartList.value = []
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
      clearCart,
      updataNewList,
    }
  },
  {
    persist: true,
  },
)
