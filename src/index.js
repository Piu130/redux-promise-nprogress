import NProgress from 'nprogress'

export default function () {
  return store => next => action => {
    if(action.type) {
      if(action.type.endsWith('PENDING')) {
        NProgress.start()
      } else if (action.type.endsWith('FULFILLED') || action.type.endsWith('REJECTED')) {
        NProgress.done()
      }
    }
    return next(action)
  }
}
