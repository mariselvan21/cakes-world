import { Component } from "react";

class Description extends Component
{
    constructor(){
        super();
        this.state={
            quote:"Be yourself"
        }
        this.quotes=['Be Yourself','Accept Yourself','Trust yourself','you can','consistency=success']
    }


    componentDidMount(){
        setInterval(() =>{
            this.setState({
                quote:this.quotes[Math.floor(Math.random()*this.quotes.length)]
            })

        },1000)
    }

    componentWillUnmount(){
        console.log("unmounted");
    }

    render(){
        return(
            <div className="description-box">
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default Description;