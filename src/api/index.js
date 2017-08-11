import AV from 'leancloud-storage'

const appId = 'f57RMBf1sY9Q03OynzUInN4z-gzGzoHsz'
const appKey = 'msHsOacvkXTEzfKLOLxNUNRe'

AV.init({
  appId: appId,
  appKey: appKey
})

export default {SDK: AV}
