import dedent from "dedent";

const data = {
    quiz: [
        {
            id: 1,
            question: "休日は何をすることが多い？",
            choices: {"外出する":"20","誰かとおしゃべり":"17","スポーツをする":"15","芸術鑑賞":"3","家でまったり":"10"},
            imgLeft: {
                url: "potatos",
                width: 320,
                height: 450,
            },
            imgRight: {
                url: "potatos",
                width: 320,
                height: 450,
            },
            imgMobile: {
                url: "potatos",
                width: 320,
                height: 450,
            },
        },
        {
            id: 2,
            question: "好きな仕事または勉強スタイル",
            choices: {"誰かとチームプレイ":"15","好きな音楽を聴きながら楽しく":"8","リーダーシップを取る":"20","周りの人の粗探し":"14","黙々とマイペース":"8"},
            imgLeft: {
                url: "entotu2",
                width: 126,
                height: 245,
            },
            imgRight: {
                url: "rectangle",
                width: 315,
                height: 450,
            },
            imgMobile: {
                url: "entotu2",
                width: 126,
                height: 245,
            },
        },
        {
            id: 3,
            question: "好きな食べ物の系統",
            choices: {"わんぱく系":"8","スイーツ系":"10","ガッツリ系":"10","刺激系":"5","ゲテモノ系":"20"},
            imgLeft: {
                url: "flags",
                width: 270,
                height: 133,
            },
            imgRight: {
                url: "flags",
                width: 270,
                height: 133,
            },
            imgMobile: {
                url: "flags",
                width: 270,
                height: 133,
            },
        },
        {
            id: 4,
            question: "誰かに指摘されたら？",
            choices: {"心の中ではイライラ":"7","1日落ち込む":"5","負けずに反論":"10","謝って逃げる":"3","驚くがすぐに忘れる":"10"},
            imgLeft: {
                url: "cat",
                width: 216,
                height: 217,
            },
            imgRight: {
                url: "rectangle",
                width: 315,
                height: 450,
            },
            imgMobile: {
                url: "cat",
                width: 216,
                height: 217,
            },
        },
        {
            id: 5,
            question: "この中で一番好きな場所",
            choices: {"海の中":"5","街中":"10","宇宙船":"10","上空":"20","草原":"12"},
            imgLeft: {
                url: "ukiwa",
                width: 225,
                height: 391,
            },
            imgRight: {
                url: "ukiwa",
                width: 225,
                height: 391,
            },
            imgMobile: {
                url: "ukiwaMobile",
                width: 225,
                height: 245,
            },
        },
        {
            id: 6,
            question: "困っている人がいたら？",
            choices: {"すぐに手を差し伸べる":"8","同情して励ます":"7","叱咤激励して見守る":"5","横目で見て笑う":"20","構わず自分のことに集中":"10"},
            imgLeft: {
                url: "rectangle",
                width: 315,
                height: 450,
            },
            imgRight: {
                url: "entotu1",
                width: 270,
                height: 182,
            },
            imgMobile: {
                url: "entotu1",
                width: 270,
                height: 182,
            },
        },
        {
            id: 7,
            question: "間違ったことをする人がいたら？",
            choices: {"何気なく明るく注意":"5","呼び出して注意":"3","厳しく注意する":"7","誰かに言いふらす":"20","見なかったことにする":"5"},
            imgLeft: {
                url: "baketu",
                width: 315,
                height: 450,
            },
            imgRight: {
                url: "rectangle",
                width: 315,
                height: 450,
            },
            imgMobile: {
                url: "baketu",
                width: 315,
                height: 450,
            },
        },
        {
            id: 8,
            question: "この中で好きな音楽",
            choices: {"流行の曲":"20","優雅なクラシック":"25","ムーディーなバラード":"5","激しいロックな曲":"5","マニアックで民族的な曲":"5"},
            imgLeft: {
                url: "pans",
                width: 240,
                height: 130,
            },
            imgRight: {
                url: "pans",
                width: 240,
                height: 130,
            },
            imgMobile: {
                url: "pans",
                width: 240,
                height: 130,
            },
        },
        {
            id: 9,
            question: "この中で好きな紙",
            choices: {"紙飛行機":"7","図版の多い雑誌":"5","最新のニュース記事":"3","カラフルな包み紙":"5","ライスペーパー":"15"},
            imgLeft: {
                url: "rectangle",
                width: 315,
                height: 450,
            },
            imgRight: {
                url: "taru",
                width: 224,
                height: 139,
            },
            imgMobile: {
                url: "taru",
                width: 224,
                height: 139,
            },
        },
        {
            id: 10,
            question: "この中で見て見たいもの",
            choices: {"宇宙の果て":"5","未来の自分":"10","未来の宝くじの一等当選番号":"15","世の中の人々の心の中":"5","開かずの間の中身":"5"},
            imgLeft: {
                url: "light",
                width: 162,
                height: 186,
            },
            imgRight: {
                url: "light",
                width: 162,
                height: 186,
            },
            imgMobile: {
                url: "light",
                width: 162,
                height: 186,
            },
        },
    ],
    result: [
        {
            id: 0,
            img: "mickey",
            name: "ミッキー",
            content: dedent`勇敢で明るく元気。みんなで仲良く過ごすことが好き。
                            正直で誠実なのでみんなから慕われています。
                            たまに悪ふざけをしてしまい、叱られてしまうことがあります。イタズラはほどほどに・・・`
        },
        {
            id: 1,
            img: "minnie",
            name: "ミニー",
            content: dedent`流行に敏感で気品があり、優しさも持ち合わせています。
                            どんな場面でも自分らしくいられるような工夫をし、楽しめる人です。
                            少し自己中心的なところもあるかもしれません。`
        },
        {
            id: 2,
            img: "pete",
            name: "ピート",
            content: dedent`元気で正義感のあるリーダータイプです。
                            行動力もあります。たまにうるさく思われてしまうこともあるかもしれません。
                            目先のことに惑わされすぎないよう気を付けて`
        },
        {
            id: 3,
            img: "parrot",
            name: "オウム",
            content: dedent`少しユニークな性格です。ずる賢さもあるかもしれません。
                            表の顔と裏の顔をうまく使い分けられ、世の中を上手くわたっていける能力があります。
                            もう少し優しさと誠実さが必要かもしれません。`
        },
        {
            id: 4,
            img: "goat",
            name: "山羊",
            content: dedent`我が道をいくマイペースな人。
                            人に対する好き嫌いがあまりなく、ストレスもたまりづらい穏やかな性格です。
                            集中力が高いため専門的スキルが高くなりやすいでしょう。たまには周りにも関心を払って見て`
        },
    ]
}

export default data;