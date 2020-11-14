import React from 'react'
import Like from '../Assets/like.png'
import NoLike from '../Assets/noLike.png'
import  './index.css'
export default function Review(props) {
	return (
		<div className="table-responsive">
			<table className="tbTable">
				<thead className="tbHead">
					<tr>
						<th>Coupon</th>
					<th>Reviewer</th>
					<th>Review</th>
					<th>Date</th>
					<th>Status</th>
					</tr>
					
				</thead>
				<tbody>
					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>


					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>



					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>



					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>


					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>


					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>

					<tr  onClick={()=>props.viewReview('/reviews')}>
						<td>
						<div className="review-header">Jumia</div>
						 30% Cashback
						</td>
					<td> <div className="review-header">Emmanuel Abu</div> Emmanuel Abu Lagos, Nigeria</td>
					<td> <div className="review-header-star">
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={Like} alt=""/>
						<img src={NoLike} alt=""/>
					</div> 
					<div className="review-header">Recommended</div> A top Quality product. I got exactly what i ordered for.</td>
					<td>21/10/20   11:33 PM</td>
					<td > <button className="pending_active-tb-btn"> Pending</button> </td>
					</tr>


					

					
					
				</tbody>
			</table>
		</div>
	)
}
