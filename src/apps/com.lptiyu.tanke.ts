import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.lptiyu.tanke',
  name: 'lptiyu',
  groups: [
    {
      key: 1,
      name: '首页- ad弹窗',
      activityIds: ['com.lptiyu.tanke.activities.main.MainActivity'],
      rules: [
        {
          matches: '[id="com.lptiyu.tanke:id/iv_close"]',
          snapshotUrls: 'https://gkd-kit.gitee.io/import/12802075',
        },
      ],
    },
  ],
});
