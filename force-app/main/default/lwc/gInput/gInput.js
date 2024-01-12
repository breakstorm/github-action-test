import { LightningElement } from 'lwc';
import { loadScript, loadStyle } from "lightning/platformResourceLoader";

import coy from "@salesforce/resourceUrl/coy"
const HTML = `
<template>
    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field with an initial value.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" value="ACME Inc."></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field with placeholder text.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..."></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is required.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." required></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is disabled.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." disabled></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that is read-only.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" value="Stark Industries" readonly></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that requires a minimum of 6 characters.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." minlength="6"></lightning-input>
        </div>
    </div>

    <div class="slds-m-top_medium slds-m-bottom_x-large">
        <h2 class="slds-text-heading_medium slds-m-bottom_medium">
            A text input field that cannot have more than 10 characters.
        </h2>

        <!-- Default/basic -->
        <div class="slds-p-around_medium lgc-bg">
            <lightning-input type="text" label="Enter some text" placeholder="type here..." maxlength="10"></lightning-input>
        </div>
    </div>
</template>
`
const JS = `
<article class="preview">
    <p>A text input field.</p>
    <lightning-input label="Enter some text"></lightning-input>
</article>
`
export default class GInput extends LightningElement {
    renderedCallback () {
        try {
            console.log('renderedCallback', coy);
            
            Promise.all([loadScript(this, coy + "/coy.js"), loadStyle(this, coy + "/coy.css")])
            .then((values) => {
                Prism.plugins.toolbar.registerButton("hello-world", {
                    text: 'Hello World!', // required
                    onClick: function (env) { // optional
                        alert('This code snippet is written in ' + env.language + '.');
                    }
                })

                let pri1 = Prism.highlight(JS, Prism.languages.javascript, 'javascript')
                console.log("🚀 ~ GInput ~ .then ~ pri1:", pri1)
                let dom = this.template.querySelector('.js-manual')
                if (dom) { dom.innerHTML = pri1 }
            })
        } catch (err) {
        }
    }
}