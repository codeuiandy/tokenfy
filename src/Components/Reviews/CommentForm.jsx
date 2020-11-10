import React,{Component} from 'react'


class CommentForm extends Component{
    render(){
        return(
            <div class="form">
                <form id="commentForm">
                    <input type="text" placeholder="Enter your message here" className="comment_form"/>
                    <button className="comment_form_button">Send</button>
                </form>
            </div>
        )
    }
}

export default CommentForm