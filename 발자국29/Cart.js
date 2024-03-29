import React from 'react';
import {Table, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return(
        <div>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {   
                        props.state.map((a,i)=> {
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={()=>{props.dispatch({type : '수량증가'})}}>+</button>
                                <button onClick={()=>{props.dispatch({type : '수량감소'})}}>-</button></td>
                            </tr>        
                            )
                        })
                    }   
                </tbody>
            </Table>
            {   
                props.alert === true
                ?
                <Alert variant="info">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={()=>{props.dispatch({type:'창닫기'})}}>닫기</button>
                </Alert>
                : null
            }

        </div>
    )
}

function 함수명(state){
    return{
        state : state.reducer,
        alert : state.reducer2
    }
}

export default connect(함수명)(Cart);