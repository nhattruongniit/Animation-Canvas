const env = process.env.NODE_ENV || 'production';
const config = {
    title: "サウストメモリーバトルキャンペーン | ONE PIECE サウザンドストーム",
    description: "【サウスト2周年特別企画】みんなで冒険2000万回を達成して、超豪華ゲーム内アイテムをゲットしよう！",
    url: "https://onepiece-ts.bn-ent.net/campaign/memory-battle/",
    devUrl: "https://stg-onepiece-ts.bn-ent.net/campaign/memory-battle/",
    domain: "onepiece-ts.bn-ent.net",
    env: env,
    debuggable: env === 'development',
    gameUrl: 'mobage-jp-12023350://?_ad_code=ADDNOC01600003',
    mailto: 'support@onepiece-ts.jp',
    mailSubject: '【ONE PIECE サウザンドストーム】サウストメモリーバトルキャンペーン!! について',
    bannerLink: 'https://onepiece-ts.bn-ent.net/campaign/2nd-anniv/',
    scoreJsonURL: env === 'development' ? 'https://d25exsrtyjyatb.cloudfront.net/campaign/memory-battle/score.json' : 'https://dd8l61noxsvyf.cloudfront.net/campaign/memory-battle/score.json'
};

module.exports = {
    config: config,
    meta: {
        title: config.title,
        description: config.description,
        touchIconPath: config.debuggable ? config.devUrl : config.url,
        share: {
            og: {
                title: config.title,
                description: config.description,
                type: "website",
                site_name: config.title,
                locale: "ja_JP",
                url: config.url,
                image: config.url + "og_image.png"
            },
            twitter: {
                title: config.title,
                description: config.description,
                site: "@onepiecets_info",
                card: "summary_large_image",
                domain: config.domain,
                img_src: config.url + "og_image.png"
            }
        }
    },
    share: {
        facebook: ["https://www.facebook.com/sharer/sharer.php?u=", encodeURIComponent(config.url)].join(''),
        twitter: [
            "https://twitter.com/intent/tweet?text=",
            encodeURIComponent('ONE PIECE サウザンドストーム】みんなで冒険2000万回を達成して、超豪華ゲーム内アイテムをゲットしよう！ #サウスト'),
            '&url=',
            encodeURIComponent('https://opts.jp/2DVnEFG')
        ].join(''),
        line: [
            "http://line.me/R/msg/text/?",
            encodeURIComponent('【ONE PIECE サウザンドストーム】みんなで冒険2000万回を達成して、超豪華ゲーム内アイテムをゲットしよう！' + "\n"),
            encodeURIComponent('https://opts.jp/2pImRTz?openExternalBrowser=1')
        ].join('')
    }
};

