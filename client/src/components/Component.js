import React from "react";
import website_lang from "../lang";

const PC_WIDTH = 1024;

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_mobile: false,
            all_text: website_lang.get("en")
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.setLang = this.setLang.bind(this);
    }

    setLang(lang_to_set) {
        switch (lang_to_set) {
            case "en": 
                this.setState({ all_text: website_lang.get("en") });
                break;
            default: 
                console.log(`${lang_to_set} is not supported`);
                break;
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        if (window.innerWidth < PC_WIDTH)
            this.setState({
                is_mobile: true
            });
        else
            this.setState({
                is_mobile: false
            });
    }
}