import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

import coy from "@salesforce/resourceUrl/coy"
// import prism from "@salesforce/resourceUrl/prism"
// import prismjs from "@salesforce/resourceUrl/prism"
// import prismcss from "@salesforce/resourceUrl/prism/prism.css"
const js1 = `<pre><code class="language-js">
let foo = bar();
</code></pre>`
const css1 = `<pre><code class="language-css">
p { background-color: #f0f; }
</code></pre>`
export default class ExampleIcon extends LightningElement {
    connectedCallback () {
    }
    
    renderedCallback () {
        try {
            console.log('connectedCallback ::: ExampleIcon', coy)
    
            // Promise.all([loadScript(this, prism + "/prism.js"), loadStyle(this, prism + "/prism.css")])
            Promise.all([loadScript(this, coy + "/coy.js"), loadStyle(this, coy + "/coy.css")])
            .then((values) => {
                console.log('load all ', Prism)
                // Prism.highlightAll();
                Prism.plugins.toolbar.registerButton("hello-world", {
                    text: "Hello world"
                    ,onClick: function () {
                        alert("hello world")
                    }
                })
                
                let code = `var foo =z1000;`;
                let tokens = Prism.tokenize(code, Prism.languages.javascript);
                let pri1 = Prism.highlight(js1, Prism.languages.javascript, 'javascript');
                console.log("🚀 ~ file: exampleIcon.js:29 ~ ExampleIcon ~ .then ~ pri1:", pri1)
                let jsManual = this.template.querySelector(".js-manual")
                console.log("🚀 ~ file: exampleIcon.js:31 ~ ExampleIcon ~ .then ~ jsManual:", jsManual)
                if (jsManual) { 
                    jsManual.innerHTML = pri1 
                    
                }
                let pri2 = Prism.highlight(css1, Prism.languages.css, 'css');
                console.log("🚀 ~ file: exampleIcon.js:31 ~ ExampleIcon ~ .then ~ pri2:", pri2)
                tokens.forEach(token => {
                    if (token instanceof Prism.Token && token.type === 'number') {
                        console.log(`Found numeric literal: ${token.content}`);
                    }
                });
            })
        } catch (err) {
            console.log(' error name', err)
        }

    }
}