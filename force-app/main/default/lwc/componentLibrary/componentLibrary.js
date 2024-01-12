import { LightningElement } from 'lwc';
import gInput from "c/gInput";
import gCheckbox from "c/gCheckbox";
import gRadiobox from "c/gRadiobox";
import gSelect from "c/gSelect";

export default class ComponentLibrary extends LightningElement {
    componentConstructor;
    text = `
    let foo = bar();
    `
    tabs = [
        {label: 'input', 
        selected: false,
        component: "c?com"}
    ]
    
    connectedCallback () {
        console.log("🚀 ~ file: componentLibrary.js:5 ~ ComponentLibrary ~ connectedCallback ~ connectedCallback:")
    }
    
    activeReset(event) {
        // console.log('activeReset', event)
        console.log('activeReset')
        this.template.querySelectorAll('.nav__list--item').forEach(v => {
            v.classList.remove('active')
        })
    }

    clickInput (event) {
        // this.activeReset.bind(this)
        this.activeReset()
        this.componentConstructor = gInput;
        // event.currentTarget
        console.log(event.currentTarget.parentElement)
        event.currentTarget.parentElement.classList.add('active')
    }
    clickSelect (event) {
        this.activeReset()
        event.currentTarget.parentElement.classList.add('active')
        this.componentConstructor = gSelect;
    }
    clickCheck (event) {
        this.activeReset()
        event.currentTarget.parentElement.classList.add('active')
        this.componentConstructor = gCheckbox;
    }
    clickRadio (event) {
        this.activeReset()
        event.currentTarget.parentElement.classList.add('active')
        this.componentConstructor = gRadiobox;
    }

    dy1 () {
        console.log("🚀 ~ file: componentLibrary.js:9 ~ ComponentLibrary ~ dy1 ~ dy1")
        import("c/dy1")
        .then(({ default: ctor }) => {
            console.log(ctor)
            this.componentConstructor = ctor} )
        .catch((err) => console.error(err) )
    }
    
    dy2 () {
        console.log("🚀 ~ file: componentLibrary.js:16 ~ ComponentLibrary ~ dy2 ~ dy2:")
        import("c/dy2")
        .then(({ default: ctor }) => {
            console.log(ctor);
            
            this.componentConstructor = ctor} )
        .catch((err) => console.error(err) )
    }
}