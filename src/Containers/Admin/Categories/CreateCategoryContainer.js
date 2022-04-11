import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CreateCategoryComponent from "../../../Components/Admin/Categories/CreateCategoryComponent";
import { categoriesGetDetail } from '../../../Reducers/Categories/CategoriesRedux';


function CreateCategoryContainer() {
    const dispatch = useDispatch();
    const params = useParams();
    const { data, dataDetail, isLoading, errors } = useSelector((state) => state.categoriesRedux) || [];
    console.log('dataDetail::', dataDetail);
    useEffect(() => {
        dispatch(categoriesGetDetail(params.id))
    }, [dispatch])

    return <div>
        <CreateCategoryComponent data={data.data} dataDetail={dataDetail} />
    </div>
}

export default CreateCategoryContainer