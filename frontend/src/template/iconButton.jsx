import React from 'react'
import If from '../helper/If'
export default function iconButton(props) {
    return(
        <If test={!props.hide}>          
            <button className={'btn btn-'+ props.type} onClick={props.onClick}>
                    <i className={'fa fa-'+ props.icon}></i>
            </button>  
        </If>
    )
}
