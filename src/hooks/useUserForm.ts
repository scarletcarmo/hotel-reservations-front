import { useEffect, useState } from 'react'
import { UserResponse } from '../models/userModel';
import { post } from '../api/userApi';

export function useUserForm <T>  (initialForm: T) {
    const [formData, setFormData] = useState(initialForm);

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
        console.log("onChange", formData);
    }
    //envia los valores del formulario
    const onSubmit = async (e: any) => {
        //evita que el formulario se envíe y que la página se recargue
        e.preventDefault();
        console.log(formData);
        try {
            const response: UserResponse = await post(formData);
            console.log("Usuario creado con éxito:", response);

            if (response.status === "success") {
                console.log(response.message);
                console.log("Datos del usuario:", response.data);
            } else {
                console.error("Error:", response.message);
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
