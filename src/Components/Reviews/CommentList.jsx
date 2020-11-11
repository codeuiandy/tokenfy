import React,{ Component } from 'react'
import avatar from '../Assets/user.png'
class CommentList extends Component{
    render(){
        return(
            <div>
                <div className="header-comments-sec">
                    <h2>Jumia 30% Cashback</h2>
                </div>
                <div className="">
                    <div className="review">
                        <div className="client_review">
                            <img src={avatar} className="userAvatar" />
                            <div class="comment">
                                <p className="">
                                    A top quality product. I got exactly what I ordered for.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="review">
                        <div className="user_comment">
                        <img src={avatar} className="userAvatar" />
                            <div class="comment">
                                <p className="">
                                Thank you for your review, we wish to continue to provide you<br/> with the best available service.
                                </p>
                            </div>
                        </div>

                        
                    </div>


                            <div className="review">
                                <div className="client_review">
                                    <img src={avatar} className="userAvatar" />
                                    <div class="comment">
                                        <p className="">
                                            A top quality product. I got exactly what I ordered for.
                                        </p>
                                    </div>
                                </div>
                    </div>


                    <div className="review">
                                <div className="client_review">
                                    <img src={avatar} className="userAvatar" />
                                    <div class="comment">
                                        <p className="">
                                            A top quality product. I got exactly what I ordered for.
                                        </p>
                                    </div>
                                </div>
                    </div>



                    <div className="review">
                                <div className="client_review">
                                    <img src={avatar} className="userAvatar" />
                                    <div class="comment">
                                        <p className="">
                                            A top quality product. I got exactly what I ordered for.
                                        </p>
                                    </div>
                                </div>
                    </div>



<div className="review">
                        <div className="user_comment">
                        <img src={avatar} className="userAvatar" />
                            <div class="comment">
                                <p className="">
                                Thank you for your review, we wish to continue to provide you<br/> with the best available service.
                                </p>
                            </div>
                        </div>

                        
                    </div>



                </div>
            </div>
        )
    }
}

export default CommentList