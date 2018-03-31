import platform from 'platform';

export default {
  computed: {
    url() {
      return `https://${global.config.domain}/`;
    },

    mailToUrl() {
      return `mailto:?to=${encodeURIComponent('campaign@dena.com')}&subject=${encodeURIComponent('【キングダム -英雄の系譜-】Webキャンペーンについて')}`;
    },

    officialUrl() {
      return 'https://kingdom-eiyunokeifu.com/?utm_campaign=faru&utm_medium=referral&utm_source=wcp';
    },

    movieUrl() {
      return 'https://www.youtube.com/watch?v=Bi0dEK0HQVw';
    },

    appDounloadUrl() {
      if (platform.os.family === 'iOS') {
        return 'http://sp.mbga.jp/AFcpnmv50001/_aff_app?app_id=12020716&device=I&force_device_market=1';
      }

      return 'http://sp.mbga.jp/AFcpnmv00001/_aff_app?app_id=12020716&device=A&force_device_market=1';
    },

    facebookShareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(this.url)}`;
    },

    twitterShareUrl() {
      // twitter のみ短縮URL
      return this.getShareTwitterUrl('http://dena.my/2u8c3Cn', '【騰となって、趙軍を倒せ】ファルファル走 Presented by キングダム-英雄の系譜-');
    },

    lineShareUrl() {
      return this.getShareLineUrl(`【騰となって、趙軍を倒せ】ファルファル走 Presented by キングダム-英雄の系譜- ${this.url}?openExternalBrowser=1`);
    },

    lineHomeUrl() {
      return 'https://line.me/ti/p/@vjb6828v';
    },
  },

  methods: {
    getShareTwitterUrl(url, text) {
      return `https://twitter.com/share?url=${encodeURIComponent(url)}&text=${text}&hashtags=キングダム,英雄の系譜,ファルファル走`;
    },

    getShareLineUrl(text) {
      return `http://line.me/R/msg/text/?${text}`;
    },
  },
};
