const hosts = 'http://192.168.132.43/api/item/'         //node test server
// const hosts = 'http://192.168.132.44:8081/goods/'    //mock server

export default {
  list: `${hosts}goodsCoupon/couponList`,
  detail: `${hosts}goodsCoupon/couponDetail`,
  orderList: `${hosts}user/order/myorder`,
  convertList: `${hosts}goods/exchangeList`,
  pointList: `${hosts}goods/pointList`,
}