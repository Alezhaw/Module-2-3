import React from "react";
import { Form } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import {setCopyUniqueBrandState} from '../store/dataSlice';

function FilterSwitches ({product}) {
  const copyUniqueBrand =  useSelector((state) => state.data.copyUniqueBrand);
  const dispatch = useDispatch();
  return <>
    <Form>
    <Form.Check 
      type="switch"
      defaultChecked="true"
      id="custom-switch"
      label={`${product}`}
      onChange={e => {
          if(e.target.checked) {dispatch(setCopyUniqueBrandState([...copyUniqueBrand, product])) 
        }
          else {dispatch(setCopyUniqueBrandState(copyUniqueBrand.filter(brand => brand != product))) 
            }
      }}
    />
  </Form>
  </>
}

export default FilterSwitches;