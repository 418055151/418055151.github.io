/**
 * Created by mac on 2018/3/2.
 */
require.config({
    baseUrl:'../../public/',
    paths:{
        'css':'css.min',
        'jquery':'jquery-2.1.4.min',
        'layer':'layer-v1.9.3/layer/layer',
        'Handlebars':'handlebars',
        'text':'text',
        'tipsBox':'tipsBox',
        'public':'public',
        'index':'lib/comments/index',
        'showComments':'lib/comments/showComments',
        'Askquestions':'lib/comments/Askquestions',
        'personal-center':'lib/comments/personal-center',
        'maindemo':'lib/comments/maindemo',
        'sinaFaceAndEffec':'lib/comments/sinaFaceAndEffec',
    },
    /*依赖设置*/
    shim:{

        'jquery':['css!../public/font/font-awesome.min.css'],
        'layer':{
            'deps':[
                'jquery',
                'css!../public/layer-v1.9.3/layer/skin/layer.css',
            ]
        },
        'tipsBox':{
            deps: ['jquery','css!../css/tipsBox.css'],
            exports: '$'
        },
        'maindemo':['jquery'],
        'sinaFaceAndEffec':[
            'jquery',
            'maindemo'
        ],
        'comments':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'index',
            'css!../css/index/common-header.css',
            'css!../css/courseTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/comments/comments.css'
        ],
        'showComments':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            'sinaFaceAndEffec',
            '../public/lib/coursequeries',
            'css!../css/courseTemplate.css',
            'css!../css/index/common-header.css',
            'css!../css/index/template-footer.css',
            'css!../css/comments/showComments.css'
        ],
        'Askquestions':[
            'jquery',
            'text',
            'public',
            'Handlebars',
            '../public/lib/coursequeries',
            'css!../css/index/common-header.css',
            'css!../css/courseTemplate.css',
            'css!../css/index/template-footer.css',
            'css!../css/comments/Askquestions.css'
        ],
        'personal-center':[
            'jquery',
            'text',
            'Handlebars',
            'public',
            '../public/lib/coursequeries',
            'css!../css/index/common-header.css',
            'css!../css/comments/PersonalCenter.css',
            'css!../css/index/template-footer.css',
        ]
    }
});
