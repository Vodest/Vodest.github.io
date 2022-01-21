const app = Vue.createApp({})

app.component('main-content', {
    data() {
        return {
            text: ''
        }
    },
    template: `
    <br>
    <br>
    <br>
    <div class="super-content-container">
        <div class="content-container bordered">
            <iframe width="549" height="360" src="https://www.youtube.com/embed/Z4XGr63UFDo" title="Youtube Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
        </div>
        <!--
        <br>
        <div>
            <div class="content-container bordered">
                <img src="">
            </div>
        </div>
        -->
    </div>
    `,
    methods: {
    }
})

app.component('main-footer', {
    data(){
        return{
            temp: null
        }
    },
    template:
    `
	<footer>
        <p>&copy; Copyright 2018-2022 – Enes A. "Vodest" Windgassen, All rights reserved.
            <br>
            Sigil-Designs courtesy to itch.io user watabou and their 
            <i>
                <a href="https://watabou.itch.io/sigil-generator">
                    Sigil-Generator.
                </a>
            </i>
        </p>
    </footer>
    `,
    methods:{

    }
})

app.component('main-header', {
    data(){
        return{
            temp: null
        }
    },
    template:
    `
    <header id="main-header">
            <h2 id="main-h1">
                <a href="./index.html">
                    <img id="site-icon" src="./source/img/icon.png">
                    Siegel
                </a>
            </h2>
            <span id="header-span">
                <h3>
                    <a href="./projects.html">
                        Projects
                    </a>
                </h3>
            </span>
    </header>
    `,
    methods:{

    }
})

app.component('description-text', {
    data(){
        return{
            text: 'Webpage under Development, I thank you for your patience.'
        }
    },
    template: 
    `
    <div class="content-container large-font">
        <i>
            <b>
               {{ text }}
            </b>
        </i>
        <div>
            <img id="sigil_01" src="./source/img/sigil_01.png">
        </div>
    </div>
    `,
    methods:{

    }
})

app.mount('#app')

