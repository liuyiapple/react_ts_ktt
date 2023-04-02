// 更优雅的加载组件
import { lazy, Suspense } from 'react'

export default function LazyLoad(url: string) {
  const Module = lazy(() => {
    return new Promise((resolve, reject) => {
      import('../views' + url)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          resolve(import('../views' + 'ErrorPage'))
          console.log(err)
        })
    })
  })
  return (
    <Suspense fallback={<h2>加载中</h2>}>
      <Module />
    </Suspense>
  )
}
