var app = new Vue({
    el: "#app",
    data: {
        projects: [
            {
                data: [
                    {
                        name: "后台系统",
                        url: "https://www.dreamlai.com/jnshu/js/task7",
                        describe: "angularjs完整项目"
                    },
                    {
                        name: "电商网站",
                        url: "https://www.dreamlai.com/demo/mi",
                        describe: "单页"
                    },
                    {
                        name: "修真院",
                        url: "https://www.dreamlai.com/jnshu/css/task8-9",
                        describe: "完整项目"
                    },
                    {
                        name: "电商网站2",
                        url: "https://www.dreamlai.com/demo/jd",
                        describe: "单页"
                    },
                    {
                        name: "维基百科",
                        url: "https://www.dreamlai.com/demo/wikipedia",
                        describe: "jQuery完整项目"
                    },
                    {
                        name: "新世界",
                        url: "https://www.dreamlai.com/demo/newworld",
                        describe: "单页"
                    },
                    {
                        name: "后台数据",
                        url: "https://www.dreamlai.com/demo/backstage",
                        describe: "单页"
                    }
                ],
                name: "Desktop"
            },
            {
                data: [
                    {
                        name: "桌游精灵",
                        url: "https://www.dreamlai.com/jnshu/js/task2/home.html",
                        describe: "完整项目"
                    },
                    {
                        name: "九宫格",
                        url: "https://www.dreamlai.com/jnshu/js/task1",
                        describe: "单页"
                    },
                    {
                        name: "护工个人主页",
                        url: "https://www.dreamlai.com/jnshu/css/task12",
                        describe: "单页"
                    },
                    {
                        name: "护工列表页",
                        url: "https://www.dreamlai.com/jnshu/css/task6",
                        describe: "单页"
                    },
                    {
                        name: "登录页",
                        url: "https://www.dreamlai.com/jnshu/css/task4",
                        describe: "单页"
                    }
                ],
                name: "Mobile"
            },
        ],
        tabIndex: 0,
        navIndex: "无",
        barWidth: 0,
        isShow: true,
        ifrHeight: 0,
        ifrUrl: "https://www.dreamlai.com"
    },
    methods: {
        tabSwitch: function(index){
            this.tabIndex = index;
            this.navIndex = "无";
        },
        change: function(index, url) {
            if(this.navIndex == index){
                return;
            }
            this.navIndex = index;
            this.ifrUrl = url;
            this.ifrHeight = 0;
            this.isShow = true;
            this.barWidth = 15;
        },
        load: function(){
            var _this = this;
            _this.barWidth = 100;
            setTimeout(function(){
                _this.ifrHeight = 100;
                _this.isShow = false;
            }, 400)
        }
    },
})