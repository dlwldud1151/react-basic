import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;


function Detail(props){

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(상품){
      return 상품.id == id
    });

    let history = useHistory();
    let [alert,alert변경] = useState(true);
    let [inputData,inputData변경] = useState('');

    useEffect(() => {
      let 타이머 = setTimeout(() => {alert변경(false)}, 2000);
      return ()=>{clearTimeout(타이머)}
    },[alert]);

    return(
      <div className="container">
        <박스>
          <제목 className = "red">Detail</제목>
        </박스>

        {inputData}
        <input onChange={(e)=>{inputData변경(e.target.value)}} />

        {
          alert === true
          ? (<div className = "my-alert-yellow">
              <p>재고가 얼마 남지 않았습니다</p>
            </div>)
          :null
        }

        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            <button className="btn btn-danger" onClick = {() => {
                history.push('/');
            }}>뒤로가기</button> 
          </div>
        </div>     
      </div> 
    )
}

export default Detail;