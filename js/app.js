var app = new Vue({
    el: "#app",
    data: {
        lang: "English",
        modal: "selectlang",
        modalShow: false,
        content: {
            rus: {
                description: "Холм звездопадов - визуальная новелла о парне по имени Садзихара Кенко, который живет самой обыденной жизнью офисного работника известной ИТ компании и мечтает о лучшей жизни.",
                language: "Русский",
                demo_warning: "Демо-версия содержит две главы. Весь контент находится на стадии альфа тестированиия, так что всё может быть изменено.",
                langsel_title: "Выберите язык",
                demo_download: "Скачать демо",
                release_date: "Выходит в 2020",
                done: "Готово",
                designer_link: "Дизайнер и разработчик",
                support_link: "Поддержать",
                logo_name: "ru_logo"
            },
            eng: {
                description: "Place where the stars fall is a visual novel about man named Sadzihara Kenko, who lives his regular life as an office worker in famous IT company and dreams about better life.",
                language: "English",
                demo_warning: "Demo version contains two chapters. All content is in alpha testification, so anything can be changed.",
                langsel_title: "Select language",
                demo_download: "Download Demo",
                release_date: "Release in 2020",
                done: "Done",
                designer_link: "Designer and developer",
                support_link: "Support me",
                logo_name: "en_logo"
            }
        }
    },
    methods:{
        tr: function(){
            let lang = this.lang;
            switch (lang) {
                case "English":
                    return this.content.eng;
                case "Русский":
                    return this.content.rus;
            }
        },
        detectLang: function(){
            var detectedLang = navigator.language || navigator.userLanguage || navigator.languages[0];
            if(detectedLang == "ru"){
                this.lang = "Русский"
            } else {
                this.lang = "English"
            }
        }
    },
    beforeMount: function(){
        this.detectLang()
    }
})