import React from "react";
import { ListGroup } from "react-bootstrap";
import FilterSwitches from "./FilterSwitches";
import { useSelector,useDispatch } from "react-redux";
import {setPriceMinState, setPriceMaxState } from '../store/dataSlice';

function FilterShop () {
  const priceMin =  useSelector((state) => state.data.priceMin);
  const priceMax =  useSelector((state) => state.data.priceMax);
  const uniqueBrand =  useSelector((state) => state.data.uniqueBrand);
  const dispatch = useDispatch();
    return <div fixed="top">
   <ListGroup>
        <h2>Фильтр</h2>
        <ListGroup.Item><b>Производители</b></ListGroup.Item>
       {uniqueBrand.map(product => <ListGroup.Item key={product}>{<FilterSwitches product={product}/>}</ListGroup.Item>)}
       <ListGroup.Item><b>Цена</b></ListGroup.Item>
        
  <div className="bg-light border"><input type="number" defaultValue={priceMin} onKeyUp={e => dispatch(setPriceMinState(e.currentTarget.value))}/></div>
  <div className="bg-light border"> <input type="number" defaultValue={priceMax} onKeyUp={e => dispatch(setPriceMaxState(e.currentTarget.value))}/></div>
    </ListGroup>
    </div>
}

export default FilterShop;