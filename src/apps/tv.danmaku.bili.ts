import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      desc: '开屏广告,切回APP开屏广告',
      rules: '[id="tv.danmaku.bili:id/count_down"][text^="跳过"]',
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12705270',
    },
    {
      key: 0,
      name: '评论区顶部公告横幅',
      rules:
        'LinearLayout[id=`tv.danmaku.bili:id/ad_tint_frame`] > ImageView[id="tv.danmaku.bili:id/close"]',
      excludeActivityIds: [
        'com.bilibili.bililive.room.ui.roomv3.LiveRoomActivityV3',
        'tv.danmaku.bili.MainActivityV2',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12775156',
    },
    {
      key: 1,
      name: '青少年模式弹窗',
      rules: 'TextView[text*=`青少年模式`] + TextView[text=`我知道了`]',
    },
    {
      key: 2,
      name: '动态推荐广告卡片',
      desc: '点击卡片右上角[广告]按钮-点击不感兴趣',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: [
        {
          key: 1,
          matches: '[id=`tv.danmaku.bili:id/ad_goods_mark_big`]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700222',
        },
        {
          preKeys: 1,
          matches: '[id^="tv.danmaku.bili:id/reason"][text="不感兴趣"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12700243',
        },
      ],
    },
    {
      key: 3,
      name: '点击关闭广告后出现的弹窗',
      rules: [
        {
          activityIds: 'com.bilibili.lib.ui.menu',
          matches:
            'TextView[text=`广告质量差`||text=`推广质量差`][id^=`tv.danmaku.bili:id/reason`]',
        },
      ],
    },
    {
      key: 4,
      name: '视频底部广告',
      desc: '点击[视频底部,评论区顶部]的广告卡片右侧菜单按钮,选择屏蔽广告原因',
      activityIds: [
        'com.bilibili.video.videodetail.VideoDetailsActivity',
        'com.bilibili.ship.theseus.all.UnitedBizDetailsActivity',
        'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
        'tv.danmaku.bili.MainActivityV2',
      ],
      rules: [
        {
          key: 0,
          name: '点击广告卡片右侧菜单图标',
          matches:
            'FrameLayout[id="tv.danmaku.bili:id/ad_tint_frame"] >n [id^="tv.danmaku.bili:id/more"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642260', // n = 2
            'https://gkd-kit.gitee.io/import/12705266', // n = 3
            'https://gkd-kit.songe.li/import/12776568', // id="tv.danmaku.bili:id/more_layout"
            'https://gkd-kit.gitee.io/import/12707070', // 由于 activityId 切换延迟导致规则仍然运行, 使用 FrameLayout 避免误触
          ],
        },
        {
          preKeys: 0,
          key: 1,
          name: '点击屏蔽广告',
          matches:
            '[id="tv.danmaku.bili:id/menu_text"][text="屏蔽广告"] < [id="tv.danmaku.bili:id/title"] + [id="tv.danmaku.bili:id/dislike_reasons"] >2 [id="tv.danmaku.bili:id/reason1_layout"]',
          snapshotUrls: [
            'https://gkd-kit.gitee.io/import/12642261', // 屏蔽广告菜单弹窗
            'https://gkd-kit.gitee.io/import/12706768', // 首页点击[视频卡片右下角菜单图标]后出现的普通菜单弹窗, 限制标题 [text="屏蔽广告"] 避免误触此弹窗
          ],
        },
      ],
    },
    {
      key: 5,
      name: '推荐页-可跳过广告',
      activityIds: 'tv.danmaku.bili.MainActivityV2',
      rules: ['[id=`tv.danmaku.bili:id/click_skip`]'],
    },
    {
      key: 6,
      name: '更新弹窗',
      activityIds: 'com.bilibili.app.preferences.BiliPreferencesActivity',
      rules: [
        '[id="tv.danmaku.bili:id/update_btn_confirm"] + [id="tv.danmaku.bili:id/update_btn_cancel"]',
      ],
      snapshotUrls: 'https://gkd-kit.gitee.io/import/12649689',
    },
  ],
});
