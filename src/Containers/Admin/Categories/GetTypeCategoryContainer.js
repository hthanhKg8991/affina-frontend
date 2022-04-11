import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GetTypeCategoryComponent from "../../../Components/Admin/Categories/GetTypeCategoryComponent";
import { categoriesGetType } from '../../../Reducers/Categories/CategoriesRedux';

const GetTypeCategoryContainer = (props) => {
    const dispatch = useDispatch();
    const params = useParams();
    const { dataType, isLoading, errors } = useSelector((state) => state.categoriesRedux) || [];
    useEffect(() => {
        dispatch(categoriesGetType(params.type))
    }, [dispatch])

    return (
        !isLoading ?
            <GetTypeCategoryComponent data={dataType || []} type={params.type} />
            :
            <div className='center-screen'>
                <Spinner animation="border" variant="light" />
            </div>
    )
}

export default GetTypeCategoryContainer