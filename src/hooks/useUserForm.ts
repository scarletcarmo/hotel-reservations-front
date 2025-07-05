import { useEffect, useState } from 'react'
import { UserResponse } from '../models/userModel';
import { post } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

export function useUserForm<T>(initialForm: T) {
    const [formData, setFormData] = useState(initialForm);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('formState actualizado:', formData);
    }, [formData]);

    //devuelve el value del input
    const onChange = ({ target }) => {
        const { name, value } = target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    //envia los valores del formulario
    const onSubmit = async (e: any) => {
        //evita que el formulario se envíe y que la página se recargue
        e.preventDefault();
        try {
            const response: UserResponse = await post(formData);

            if (response.status === "success") {
                navigate("/users/list");
                return true;
            } else {
                console.error("Error:", response.message);
                return false;
            }
        } catch (error) {
            console.error("Error al crear el usuario:", error);
        }
    };

    const onResetForm = () => {
        setFormData(initialForm);
    }

    return {
        formData,
        onSubmit,
        onChange,
        onResetForm,
    };
}

export default useUserForm
