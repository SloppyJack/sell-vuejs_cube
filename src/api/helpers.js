/**
 * @Author create by bin
 * @Description
 * @Date 2020-5-19 18:41
 * @Version 1.0
 */
import axios from 'axios'

const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {
    })
  }
}
