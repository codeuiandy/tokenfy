import React,{Component} from 'react'


class CommentForm extends Component{
    render(){
        return(
            <div class="form comhd">
                <form id="commentForm">
                    <div className="input-comment-text">
                        <input  type="text" placeholder="Enter your message here" />
                        <button className="comment_form_button">Send</button>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}

export default CommentForm