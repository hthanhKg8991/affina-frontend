import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetAllCategoryComponent from "../../../Components/Admin/Categories/GetAllCategoryComponent";
import { categoriesGetAll } from '../../../Reducers/Categories/CategoriesRedux';

function GetAllCategoryContainer() {
    const dispatch = useDispatch();
    const { data, isLoading, errors } = useSelector((state) => state.categoriesRedux) || [];
    useEffect(() => {
        dispatch(categoriesGetAll())
    }, [dispatch])

    return (
        <div>
            <GetAllCategoryComponent data={data.data || []} />
        </div>
    )
}

export default GetAllCategoryContainer