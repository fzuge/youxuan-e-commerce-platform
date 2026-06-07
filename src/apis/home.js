import httpInstance from '@/utils/http'

export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner',
  })
}

export function getNewAPI() {
  return httpInstance({
    url: '/home/new',
  })
}

export function getHotAPI() {
  return httpInstance({
    url: '/home/hot',
  })
}

export function getProductAPI() {
  return httpInstance({
    url: '/home/goods',
  })
}
