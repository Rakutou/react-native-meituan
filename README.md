## React-Native
> 学习RN的简单demo，参考了huanxsd的[MeiTuan](https://github.com/huanxsd/MeiTuan)

### 我的几点感受：
 - 用 RN 来开发 App 体验和性能上是没问题的，但需要解决的问题还不少。
 - <del>比如 `react-native init` 出来的项目，开发中怎么解决刷新的问题，每次改一点UI，刷新一下又得回到首页::>_<::</del>。补充：启用 **Enable Hot Reloading** 就可以热刷新了
 - 如何拆分bundle？将 `main.jsbundle` 分开为 `common.bundle` 和 `business.bundle`，不能像 webpack 一样，想要做个性化的配置很麻烦，看知乎专栏上[携程是如何做React Native优化的](https://zhuanlan.zhihu.com/p/23715716) 这篇文章，自己暂时还无法消化。
 - 还有热更新问题，也看了很多文章，像58，去哪儿，携程都有自己的一套方案。服务器做好diff，然后在客户端合并，具体实现还得仔细推敲啊。
 - RN的页面跳转(demo中使用了[react-navigation](https://github.com/react-navigation/react-navigation))都是在同一个 UIViewController 容器里进行的，也就是说每 push 一个页面都叠加中同一个 UIViewController 中，感觉这很不原生啊......。好像Wix团队的[react-native-navigation](https://github.com/wix/react-native-navigation)解决了这个问题。
