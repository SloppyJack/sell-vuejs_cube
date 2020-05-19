/**
 * @Author create by bin
 * @Description
 * @Date 2020-5-19 18:48
 * @Version 1.0
 */
import { get } from './helpers'

const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export {
  getSeller,
  getGoods
}
